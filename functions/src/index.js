// ============================================================
// Les Bleus Cars — Firebase Function: Webhook WhatsApp
// ============================================================
// Deploy: firebase deploy --only functions
// Endpoint: https://us-central1-lesbleuscars-94e0c.cloudfunctions.net/whatsappWebhook

const functions = require("firebase-functions");
const { procesarConsulta, enviarMensaje } = require("./whatsapp");

const NUMERO_ENCARGADO = "541123221233";

// ------------------------------------------------------------
// Webhook principal — recibe consultas del sistema de gestión
// ------------------------------------------------------------
exports.whatsappWebhook = functions.https.onRequest(async (req, res) => {
  // CORS para que funcione desde lesbleuscars.com
  res.set("Access-Control-Allow-Origin", "https://lesbleuscars.com");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "POST") return res.status(405).send("Método no permitido");

  try {
    const { nombreCliente, telefono, nombreAuto, precio, mensaje } = req.body;

    if (!telefono || !nombreAuto) {
      return res.status(400).json({ error: "Faltan campos requeridos: telefono, nombreAuto" });
    }

    const resultados = await procesarConsulta({
      nombreCliente: nombreCliente || "Cliente",
      telefono,
      nombreAuto,
      precio,
      mensaje,
    });

    return res.status(200).json({ ok: true, resultados });

  } catch (err) {
    console.error("[whatsappWebhook] Error:", err);
    return res.status(500).json({ error: err.message });
  }
});

// ------------------------------------------------------------
// Endpoint para enviar mensaje manual desde el sistema
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
