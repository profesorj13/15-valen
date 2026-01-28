// Setting the date to Feb 28, 2026
const eventDateObj = new Date(2026, 1, 28, 21, 0, 0); // Month is 0-indexed (1 is February)

// --- INSTRUCCIONES PARA GOOGLE SHEETS ---
// 1. Ve a tu Google Sheet -> Extensiones -> Apps Script
// 2. Pega el código que te di en el chat.
// 3. Dale a "Implementar" -> "Nueva implementación" -> Tipo: "Aplicación web".
// 4. Acceso: "Cualquier persona".
// 5. Copia la URL que te da (termina en /exec) y pégala aquí abajo entre las comillas.
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyTzhrlcuVfurN5jOA-4eQ5jalebJfjr7u7dIUHD5FfxdlyjHCc7tdfg-S7R_q92jwu/exec"; 

export const EVENT_DETAILS = {
  name: "Valentina",
  date: eventDateObj,
  location: "Infinity Eventos",
  address: "Acceso por Google Maps",
  mapLink: "https://www.google.com/maps/place/Infinity+Eventos/data=!4m2!3m1!1s0x0:0x53e161444ef651f0?sa=X&ved=1t:2428&hl=es-AR&ictx=111",
  dressCode: "Elegante",
  dressCodeDescription: "Se agradece respetar el código de vestimenta.",
};

// --- IMAGENES DE LA GALERIA ---
// Las fotos están en public/images/
export const GALLERY_IMAGES = [
  "/images/WhatsApp Image 2026-01-28 2.jpeg",
  "/images/WhatsApp Image 2026-01-28 3.jpeg",
  "/images/WhatsApp Image 2026-01-28 4.jpeg",
  "/images/WhatsApp Image 2026-01-28 5.jpeg",
  "/images/WhatsApp Image 2026-01-28 at 15.52.12.jpeg",
];

export const TIMELINE_EVENTS = [];