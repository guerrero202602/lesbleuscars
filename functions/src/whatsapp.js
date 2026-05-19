// ============================================================
// Les Bleus Cars — WhatsApp Integration via UltraMsg
// ============================================================

const ULTRAMSG_INSTANCE = "instance176466";
const ULTRAMSG_TOKEN    = "xqpga8d7p3g9topk";
const ULTRAMSG_URL      = `https://api.ultramsg.com/${ULTRAMSG_INSTANCE}`;

const NUMERO_ENCARGADO  = "541123221233"; // WhatsApp Les Bleus Cars

// Horario de atención (Argentina, UTC-3)
const HORARIO = { inicio: 9, fin: 20 }; // 9:00 a 20:00

// ------------------------------------------------------------
// Función base para enviar mensajes
// ------------------------------------------------------------
async function enviarMensaje(to, body) {
  const res = await fetch(`${ULTRAMSG_URL}/messages/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: ULTRAMSG_TOKEN, to, body }),
  });
  const data = await res.json();
  console.log(`[WA] → ${to}: ${data.sent ? "OK" : "ERROR"}`, data);
  return data;
}

// ------------------------------------------------------------
// 1. Confirmación automática al CLIENTE cuando consulta un auto
// ------------------------------------------------------------
async function confirmarConsultaCliente({ nombreCliente, telefono, nombreAuto, precio }) {
  const msg =
    `🚗 *¡Hola ${nombreCliente}!*\n\n` +
    `Gracias por tu consulta sobre el *${nombreAuto}*${precio ? ` ($${precio})` : ""}.\n\n` +
    `✅ Recibimos tu mensaje y en breve un asesor de *Les Bleus Cars* se va a comunicar con vos.\n\n` +
    `⏰ Atendemos de lunes a sábado de 9:00 a 20:00 hs.\n\n` +
    `_Les Bleus Cars — lesbleuscars.com_`;

  return enviarMensaje(telefono, msg);
}

// ------------------------------------------------------------
// 2. Alerta al ENCARGADO cuando llega una consulta nueva
// ------------------------------------------------------------
async function alertarEncargado({ nombreCliente, telefono, nombreAuto, precio, mensaje }) {
  const msg =
    `🔔 *Nueva consulta recibida*\n\n` +
    `👤 *Cliente:* ${nombreCliente}\n` +
    `📱 *Tel:* ${telefono}\n` +
    `🚗 *Auto:* ${nombreAuto}${precio ? ` — $${precio}` : ""}\n` +
    (mensaje ? `💬 *Mensaje:* ${mensaje}\n` : "") +
    `\n_Ingresá al sistema: lesbleuscars.com/gestion_lesbleus_upload.html_`;

  return enviarMensaje(NUMERO_ENCARGADO, msg);
}

// ------------------------------------------------------------
// 3. Respuesta automática FUERA DE HORARIO
// ------------------------------------------------------------
async function respuestaFueraDeHorario({ nombreCliente, telefono, nombreAuto }) {
  const horaActual = new Date().toLocaleString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
    hour: "numeric", minute: "2-digit", hour12: false
  });

  const msg =
    `🌙 *¡Hola ${nombreCliente}!*\n\n` +
    `Gracias por escribirnos sobre el *${nombreAuto}*.\n\n` +
    `En este momento estamos fuera del horario de atención (9:00 a 20:00 hs).\n\n` +
    `⏰ Mañana a primera hora un asesor te va a contactar.\n\n` +
    `Mientras tanto podés ver todos nuestros autos en:\n` +
    `👉 lesbleuscars.com\n\n` +
    `_Les Bleus Cars — Tu auto de confianza_`;

  return enviarMensaje(telefono, msg);
}

// ------------------------------------------------------------
// Función principal — se llama desde el sistema de gestión
// ------------------------------------------------------------
async function procesarConsulta({ nombreCliente, telefono, nombreAuto, precio, mensaje }) {
  // Validar número (agregar código de país si no lo tiene)
  if (!telefono.startsWith("549") && !telefono.startsWith("541")) {
    telefono = "549" + telefono.replace(/\D/g, "").slice(-10);
  }

  const horaArg = new Date().toLocaleString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
    hour: "numeric", hour12: false
  });
  const dentroDeHorario = parseInt(horaArg) >= HORARIO.inicio && parseInt(horaArg) < HORARIO.fin;

  const resultados = await Promise.allSettled([
    // Siempre alertar al encargado
    alertarEncargado({ nombreCliente, telefono, nombreAuto, precio, mensaje }),

    // Al cliente: confirmación o mensaje fuera de horario
    dentroDeHorario
      ? confirmarConsultaCliente({ nombreCliente, telefono, nombreAuto, precio })
      : respuestaFueraDeHorario({ nombreCliente, telefono, nombreAuto }),
  ]);

  return resultados.map(r => r.status === "fulfilled" ? r.value : r.reason);
}

module.exports = {
  procesarConsulta,
  confirmarConsultaCliente,
  alertarEncargado,
  respuestaFueraDeHorario,
  enviarMensaje,
};
