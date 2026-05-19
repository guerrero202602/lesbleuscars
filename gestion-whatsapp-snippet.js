// ============================================================
// Les Bleus Cars — Integración WhatsApp en Sistema de Gestión
// Agregar este código en gestion_lesbleus_upload.html
// ============================================================

const WA_WEBHOOK = "https://us-central1-lesbleuscars-94e0c.cloudfunctions.net/whatsappWebhook";

/**
 * Llama al webhook de WhatsApp cuando se recibe una nueva consulta.
 * @param {Object} consulta - Datos de la consulta
 */
async function notificarWhatsApp(consulta) {
  try {
    const res = await fetch(WA_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombreCliente: consulta.nombre || "Cliente",
        telefono:      consulta.telefono,
        nombreAuto:    consulta.auto || consulta.nombreAuto,
        precio:        consulta.precio || null,
        mensaje:       consulta.mensaje || null,
      }),
    });
    const data = await res.json();
    if (data.ok) {
      console.log("✅ WhatsApp enviado correctamente");
      mostrarToast("📲 WhatsApp enviado al cliente y encargado");
    } else {
      console.warn("⚠️ WhatsApp respondió con error:", data);
    }
  } catch (err) {
    console.error("❌ Error enviando WhatsApp:", err);
  }
}

/**
 * Muestra una notificación toast en pantalla.
 */
function mostrarToast(mensaje, tipo = "success") {
  const toast = document.createElement("div");
  toast.style.cssText = `
    position:fixed; bottom:24px; right:24px; z-index:9999;
    background:${tipo === "success" ? "#25D366" : "#e53e3e"};
    color:#fff; padding:12px 20px; border-radius:8px;
    font-family:sans-serif; font-size:14px; box-shadow:0 4px 12px rgba(0,0,0,0.2);
    transition: opacity 0.5s;
  `;
  toast.textContent = mensaje;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = "0"; setTimeout(() => toast.remove(), 500); }, 3500);
}

// ============================================================
// EJEMPLO DE USO — Enganchá esto donde guardás la consulta
// ============================================================
//
// document.getElementById("btn-guardar-consulta").addEventListener("click", async () => {
//   const consulta = {
//     nombre:    document.getElementById("inp-nombre").value,
//     telefono:  document.getElementById("inp-telefono").value,
//     auto:      document.getElementById("inp-auto").value,
//     precio:    document.getElementById("inp-precio").value,
//     mensaje:   document.getElementById("inp-mensaje").value,
//   };
//   await guardarConsultaEnFirebase(consulta); // tu función existente
//   await notificarWhatsApp(consulta);          // ← agregar esta línea
// });
