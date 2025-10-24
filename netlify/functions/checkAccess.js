// netlify/functions/checkAccess.js
// Verifica si la IP del visitante está permitida (soporte para IPv4 CIDR).
// EDITA allowedList con las IPs o CIDRs de tu oficina.
 
const allowedList = [
  "187.218.62.217", 
  "187.162.219.242", 
  "187.162.103.147", 
];
 
function ipToInt(ip) {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
}
 
function cidrMatch(ip, cidr) {
  // cidr: "198.51.100.0/24"
  if (!cidr.includes('/')) return ip === cidr;
  const [net, prefix] = cidr.split('/');
  const ipInt = ipToInt(ip);
  const netInt = ipToInt(net);
  const mask = prefix === '0' ? 0 : (~0 << (32 - Number(prefix))) >>> 0;
  return (ipInt & mask) === (netInt & mask);
}
 
function extractClientIP(headers) {
  // x-forwarded-for puede contener lista: "client, proxy1, proxy2"
  const xff = headers['x-forwarded-for'] || headers['X-Forwarded-For'] || headers['x-nf-client-connection-ip'] || headers['client-ip'] || headers['cf-connecting-ip'];
  if (!xff) return null;
  const first = xff.split(',')[0].trim();
  // Si es IPv6 con IPv4 mapeada, intentar extraer IPv4
  if (first.includes(':') && first.includes('.')) {
    const m = first.match(/(\d+\.\d+\.\d+\.\d+)/);
    if (m) return m[1];
  }
  // devolver tal cual
  return first;
}
 
exports.handler = async (event) => {
  try {
    const headers = event.headers || {};
    const clientIP = extractClientIP(headers);
 
    if (!clientIP) {
      // no se pudo detectar IP; por seguridad, negar
      return {
        statusCode: 403,
        headers: { "Content-Type": "text/html; charset=utf-8" },
        body: `<h1>Acceso restringido</h1><p>No se pudo verificar su ubicación.</p>`
      };
    }
 
    // Solo soportamos IPv4 en esta función (si necesitas IPv6, te doy otra versión)
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