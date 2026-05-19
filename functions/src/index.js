// ============================================================
// Les Bleus Cars — Firebase Functions
// ============================================================

const functions = require("firebase-functions");
const { procesarConsulta, enviarMensaje } = require("./whatsapp");
const { procesarMensajeEntrante } = require("./agent");

const NUMERO_ENCARGADO = "541123221233";

// ------------------------------------------------------------
// 1. WEBHOOK ENTRANTE — UltraMsg envía acá los mensajes del cliente
//    Configurar en UltraMsg > Instancia > Webhook URL
// ------------------------------------------------------------
exports.mensajeEntrante = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") return res.status(204).send("");

  try {
    const body = req.body;

    // UltraMsg manda el mensaje así:
    const telefono = body.data?.from?.replace("@c.us", "") || body.from;
    const nombre   = body.data?.notifyName || body.pushName || "Cliente";
    const tipo     = body.data?.type || body.type;
    const mensaje  = body.data?.body || body.body || "";

    // Ignorar mensajes propios o del encargado
    if (!telefono || telefono === NUMERO_ENCARGADO.replace("+", "")) {
      return res.status(200).json({ ok: true, skip: true });
    }

    // Ignorar mensajes de estado/sistema
    if (tipo === "status" || tipo === "revoked") {
      return res.status(200).json({ ok: true, skip: true });
    }

    console.log(`[mensajeEntrante] De: ${telefono} | Tipo: ${tipo} | Msg: ${mensaje}`);

    // Procesar con el agente IA
    const respuesta = await procesarMensajeEntrante({ telefono, nombre, mensaje });

    return res.status(200).json({ ok: true, respuesta });

  } catch (err) {
    console.error("[mensajeEntrante] Error:", err);
    return res.status(500).json({ error: err.message });
  }
});

// ------------------------------------------------------------
// 2. WEBHOOK SALIENTE — El sistema de gestión dispara mensajes
// ------------------------------------------------------------
exports.whatsappWebhook = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "https://lesbleuscars.com");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "POST") return res.status(405).send("Método no permitido");

  try {
    const { nombreCliente, telefono, nombreAuto, precio, mensaje } = req.body;

    if (!telefono || !nombreAuto) {
      return res.status(400).json({ error: "Faltan campos: telefono, nombreAuto" });
    }

    const resultados = await procesarConsulta({
      nombreCliente: nombreCliente || "Cliente",
      telefono, nombreAuto, precio, mensaje,
    });

    return res.status(200).json({ ok: true, resultados });

  } catch (err) {
    console.error("[whatsappWebhook] Error:", err);
    return res.status(500).json({ error: err.message });
  }
});

// ------------------------------------------------------------
// 3. MENSAJE MANUAL — Envío directo desde el sistema de gestión
// ------------------------------------------------------------
exports.enviarMensajeManual = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "https://lesbleuscars.com");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).send("");

  const { telefono, mensaje } = req.body;
  if (!telefono || !mensaje) {
    return res.status(400).json({ error: "Faltan campos: telefono, mensaje" });
  }

  try {
    const resultado = await enviarMensaje(telefono, mensaje);
    return res.status(200).json({ ok: true, resultado });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
