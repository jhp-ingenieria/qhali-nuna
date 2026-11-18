/* =========================================================
   DATOS DEL CENTRO: cambia aquí precios, promociones y números.
   La página los lee de este archivo; no hace falta tocar nada más.
   ========================================================= */
window.QN = {
  // Números de WhatsApp (con el 51 del Perú delante)
  whatsapp: {
    espinar: { numero: "51935572175", visible: "935 572 175" },
    sicuani: { numero: "51931914570", visible: "931 914 570" }
  },

  // Precios. Hoy la primera sesión es gratis y las demás se definen en la consulta según el plan.
  // Si algún día quieres mostrar un precio, escríbelo en soles, por ejemplo "S/ 80".
  precios: {
    individual: "",
    pareja: "",
    ninos: "",
    evaluacion: ""
  },

  // Promociones. Cada una aparece en la barra de arriba, en la tarjeta de promoción
  // y en la app. Pon "activa: false" para ocultarla.
  // IMPORTANTE: escribe solo promociones reales que el centro vaya a cumplir.
  promociones: [
    {
      activa: true,
      titulo: "Primera sesión",
      etiqueta: "Gratis",
      texto: "Conoce a tu psicólogo sin costo, en Espinar, en Sicuani o en línea"
    }
  ]
};
