// ============================================================
// Les Bleus Cars — Agente IA WhatsApp
// Atiende clientes, cierra ventas y confirma pagos
// ============================================================

const { enviarMensaje } = require("./whatsapp");

const ANTHROPIC_API = "https://api.anthropic.com/v1/messages";
const NUMERO_ENCARGADO = "541123221233";

// ------------------------------------------------------------
// PROMPT DEL AGENTE — personalidad y conocimiento del negocio
// ------------------------------------------------------------
const SYSTEM_PROMPT = `Sos el agente de ventas de LES BLEUS CARS, una tienda de repuestos automotrices multimarcas ubicada en Argentina. Tu nombre es "Leo" y hablás en español rioplatense (vos, che, dale, etc.).

=== SOBRE EL NEGOCIO ===
- Tienda: lesbleuscars.com
- WhatsApp: +54 11 2322-1233
- Horario: Lunes a Sábado de 9:00 a 20:00 hs

=== PRODUCTOS QUE VENDEMOS ===
Repuestos multimarcas (Peugeot, Renault, Volkswagen, Ford, Chevrolet, Toyota, etc.):
- Ópticas y luces (faros delanteros, luces traseras)
- Espejos retrovisores (manuales y eléctricos)
- Frenos (discos, pastillas)
- Amortiguadores y suspensión (brazos de control, terminales, bujes, bieletas)
- Rodamientos y cubos de rueda
- Bujías (NGK Iridium, Bosch)
- Filtros (aceite, aire, combustible)
- Correas (accesorios y distribución)
- Fluidos (DOT4 y otros)
- Manijas (exteriores e interiores)
- Levantacristales / reguladores de ventanilla
- Cauchos/neumáticos: Bridgestone, Pirelli, Michelin, Dunlop, Goodyear, Fate, Continental, Yokohama, Uniroyal, Goodrich
- Baterías: Moura, Bosch, Heliar, ACDelco, DieHard, Elite, Willard, Millard

=== MÉTODOS DE PAGO ===
1. 🏦 Transferencia Brubank → alias: **lesbleuscars** (+5% de descuento)
2. 📱 QR Brubank → alias: **lesbleuscars**
3. 🏛️ Transferencia otro banco → CBU: **1430000172504840794001** | Titular: LESBLEUS S.A.

=== FLUJO DE VENTA ===
ESTADO 1 - CONSULTA: El cliente pregunta por un repuesto. Preguntá marca y modelo del auto si no lo dice.
ESTADO 2 - COTIZACIÓN: Informá el precio con todos los detalles. Destacá el 5% de descuento con Brubank.
ESTADO 3 - CIERRE: Cuando el cliente dice que quiere comprar, enviá los datos de pago completos.
ESTADO 4 - CONFIRMACIÓN: Pedí que te manden el comprobante de transferencia. Cuando lo recibas, confirmá el pedido y avisá al encargado.

=== REGLAS IMPORTANTES ===
- Siempre preguntá marca, modelo y año del auto para dar el repuesto correcto
- Si no tenés el producto, decí que lo consultás y avisás en menos de 1 hora
- Nunca prometás precios que no conocés — mejor decí "lo consulto y te confirmo"
- Si el cliente se pone difícil o pedí descuentos grandes, decí que lo consultás con el encargado
- Mensajes cortos y claros — máximo 3 párrafos por respuesta
- Usá emojis con moderación (1-2 por mensaje)
- Si el cliente manda un comprobante de pago, respondé con PAGO_CONFIRMADO: seguido del número de teléfono del cliente

=== FORMATO ESPECIAL ===
Cuando necesites escalar al encargado humano, escribí exactamente: ESCALAR_HUMANO
Cuando confirmes un pago recibido, escribí: PAGO_CONFIRMADO: [telefono_cliente]`;

// ------------------------------------------------------------
// Gestión de conversaciones en memoria (en prod usar Firestore)
// ------------------------------------------------------------
const conversaciones = new Map(); // telefono → [mensajes]

function obtenerHistorial(telefono) {
  if (!conversaciones.has(telefono)) {
    conversaciones.set(telefono, []);
  }
  return conversaciones.get(telefono);
}

function agregarMensaje(telefono, role, content) {
  const historial = obtenerHistorial(telefono);
  historial.push({ role, content });
  // Mantener solo los últimos 20 mensajes para no exceder el contexto
  if (historial.length > 20) historial.splice(0, historial.length - 20);
}

// ------------------------------------------------------------
// Llamada a Claude API
// ------------------------------------------------------------
async function consultarClaude(historial) {
  const res = await fetch(ANTHROPIC_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: historial,
    }),
  });

  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.content[0].text;
}

// ------------------------------------------------------------
// Procesar mensaje entrante del cliente
// ------------------------------------------------------------
async function procesarMensajeEntrante({ telefono, nombre, mensaje }) {
  console.log(`[AGENTE] Mensaje de ${telefono} (${nombre}): ${mensaje}`);

  // Guardar mensaje del cliente
  agregarMensaje(telefono, "user", mensaje);

  // Obtener historial completo
  const historial = obtenerHistorial(telefono);

  // Consultar al agente IA
  const respuestaIA = await consultarClaude(historial);

  // Guardar respuesta del agente
  agregarMensaje(telefono, "assistant", respuestaIA);

  // Detectar acciones especiales
  if (respuestaIA.includes("ESCALAR_HUMANO")) {
    const msgLimpio = respuestaIA.replace("ESCALAR_HUMANO", "").trim();
    await enviarMensaje(telefono, msgLimpio);
    await enviarMensaje(
      NUMERO_ENCARGADO,
      `🚨 *Intervención requerida*\n\n` +
      `👤 Cliente: ${nombre}\n` +
      `📱 Tel: ${telefono}\n\n` +
      `💬 Último mensaje: "${mensaje}"\n\n` +
      `_El agente necesita tu ayuda para cerrar esta venta._`
    );
    return msgLimpio;
  }

  if (respuestaIA.includes("PAGO_CONFIRMADO:")) {
    const tel = respuestaIA.match(/PAGO_CONFIRMADO:\s*(\S+)/)?.[1] || telefono;
    const msgLimpio = respuestaIA.replace(/PAGO_CONFIRMADO:\s*\S+/, "").trim();
    await enviarMensaje(telefono, msgLimpio || "✅ ¡Pago confirmado! Tu pedido está en proceso.");
    await enviarMensaje(
      NUMERO_ENCARGADO,
      `💰 *PAGO CONFIRMADO*\n\n` +
      `👤 Cliente: ${nombre}\n` +
      `📱 Tel: ${tel}\n\n` +
      `✅ El cliente confirmó el pago. Verificar comprobante y preparar envío.`
    );
    return msgLimpio;
  }

  // Respuesta normal — enviar al cliente
  await enviarMensaje(telefono, respuestaIA);
  return respuestaIA;
}

module.exports = { procesarMensajeEntrante };
