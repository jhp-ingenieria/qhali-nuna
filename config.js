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
  ],

  // Sesiones en línea por Google Meet (pantalla "Mi sesión en línea" de la app).
  // Una sala fija por psicólogo. El paciente escribe su nombre, avisa por WhatsApp
  // que está listo y entra a la sala; el psicólogo lo admite en Meet.
  //   nombre:   como lo verá el paciente, por ejemplo "Ps. Ana Quispe"
  //   detalle:  una línea corta, por ejemplo "Niños, adolescentes y familia"
  //   meet:     el enlace fijo de su sala, por ejemplo "https://meet.google.com/abc-defg-hij"
  //   whatsapp: número al que llega el aviso "ya estoy listo" (con 51 delante)
  // Mientras "meet" esté vacío, ese psicólogo aparece como "sala aún no disponible".
  psicologos: [
    { nombre: "Psicólogo 1", detalle: "Sesiones en línea", meet: "", whatsapp: "51935572175" },
    { nombre: "Psicólogo 2", detalle: "Sesiones en línea", meet: "", whatsapp: "51931914570" }
  ]
};
