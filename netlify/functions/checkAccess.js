const allowedList = [
  "187.218.62.217", 
  "189.162.219.242", 
  "189.162.103.147", 
  "189.201.8.28", 
  "189.201.50.160", 
  "201.117.248.177",
  "187.130.177.33",  

];
 
function ipToInt(ip) {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
}
 
function cidrMatch(ip, cidr) {
  if (!cidr.includes('/')) return ip === cidr;
  const [net, prefix] = cidr.split('/');
  const ipInt = ipToInt(ip);
  const netInt = ipToInt(net);
  const mask = prefix === '0' ? 0 : (~0 << (32 - Number(prefix))) >>> 0;
  return (ipInt & mask) === (netInt & mask);
}
 
function extractClientIP(headers) {
  const xff = headers['x-forwarded-for'] || headers['X-Forwarded-For'] || headers['x-nf-client-connection-ip'] || headers['client-ip'] || headers['cf-connecting-ip'];
  if (!xff) return null;
  const first = xff.split(',')[0].trim();
  if (first.includes(':') && first.includes('.')) {
    const m = first.match(/(\d+\.\d+\.\d+\.\d+)/);
    if (m) return m[1];
  }
  return first;
}
 
exports.handler = async (event) => {
  try {
    const headers = event.headers || {};
    const clientIP = extractClientIP(headers);
 
    if (!clientIP) {
      return {
        statusCode: 403,
        headers: { "Content-Type": "text/html; charset=utf-8" },
        body: `<h1>Acceso restringido</h1><p>No se pudo verificar su ubicación.</p>`
      };
    }
     if (!/^\d+\.\d+\.\d+\.\d+$/.test(clientIP)) {
      return {
        statusCode: 403,
        headers: { "Content-Type": "text/html; charset=utf-8" },
        body: `<h1>Acceso restringido</h1><p>IP no soportada: ${clientIP}</p>`
      };
    }
 
    const allowed = allowedList.some(entry => cidrMatch(clientIP, entry));
 
    if (allowed) {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ allowed: true, ip: clientIP })
      };
    } else {
      return {
        statusCode: 403,
        headers: { "Content-Type": "text/html; charset=utf-8" },
        body: `<h1>Acceso restringido</h1><p>Su IP ${clientIP} no está autorizada.</p>`
      };
    }
  } catch (err) {
    console.error("checkAccess error:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "text/plain" },
      body: "Error interno"
    };
  }
};
