// netlify/functions/checkAccess.js
// Verifica si la IP del visitante está permitida (soporte para IPv4 CIDR).
// EDITA allowedList con las IPs o CIDRs de tu oficina.
 
const allowedList = [
  "10.10.1.1", "10.10.1.2", "10.10.1.3", "10.10.1.4", "10.10.1.5", "10.10.1.6", "10.10.1.7", "10.10.1.8", "10.10.1.9",
  "10.10.1.10", "10.10.1.11", "10.10.1.12", "10.10.1.13", "10.10.1.14", "10.10.1.15", "10.10.1.16", "10.10.1.17","10.10.1.18",
  "10.10.1.19", "10.10.1.20", "10.10.1.21", "10.10.1.22", "10.10.1.23", "10.10.1.24", "10.10.1.25", "10.10.1.26", "10.10.1.27",
  "10.10.1.28", "10.10.1.29", "10.10.1.30", "10.10.1.31", "10.10.1.32", "187.218.62.217", "10.10.1.34", "10.10.1.35", "10.10.1.36",
  "10.10.1.37", "10.10.1.38", "187.218.62.217", "10.10.1.41", "10.10.1.42", "10.10.1.43", "10.10.1.44", "10.10.1.45",
  "10.10.1.46", "10.10.1.47", "10.10.1.48", "10.10.1.49", "10.10.1.50", "10.10.1.51", "10.10.1.52", "10.10.1.53", "10.10.1.54",
  "10.10.1.55", "10.10.1.56", "10.10.1.57", "10.10.1.58", "10.10.1.59", "10.10.1.60", "10.10.1.61", "10.10.1.62", "10.10.1.63",
  "10.10.1.64", "10.10.1.65", "10.10.1.66", "10.10.1.67", "10.10.1.68", "10.10.1.69", "10.10.1.70", "10.10.1.71", "10.10.1.72",
  "10.10.1.73", "10.10.1.74", "10.10.1.75", "10.10.1.76", "10.10.1.77", "10.10.1.78", "10.10.1.79", "10.10.1.80",
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