// ============================================================
// INSTRUCCIONES:
// 1. Abrí tu Google Sheet: https://docs.google.com/spreadsheets/d/1mbyLyrBXBZMZ6T4oVOzyocM0pt5soWv03zZBudzvjHM/edit
// 2. Asegurate de que la primera fila tenga estos encabezados (en la hoja "Invitados" o la primera hoja):
//    A1: Timestamp | B1: Nombre | C1: Asiste | D1: Personas | E1: Restricciones | F1: Canción
// 3. Andá a Extensiones -> Apps Script
// 4. Borrá todo el contenido y pegá este código
// 5. Guardá (Ctrl+S)
// 6. Click en "Implementar" -> "Nueva implementación"
//    - Tipo: "Aplicación web"
//    - Ejecutar como: "Yo"
//    - Acceso: "Cualquier persona"
// 7. Autorizá cuando te lo pida
// 8. Copiá la URL que termina en /exec
// 9. Pegala en constants.ts en GOOGLE_SCRIPT_URL
// ============================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Soporta tanto form data (URLSearchParams) como JSON
    var data;
    if (e.parameter && e.parameter.name) {
      data = e.parameter;
    } else {
      data = JSON.parse(e.postData.contents);
      data.isAttending = data.isAttending ? "Sí" : "No";
      data.guestsCount = data.guestsCount || 1;
    }

    sheet.appendRow([
      new Date(),                                    // Timestamp
      data.name || "",                               // Nombre
      data.isAttending || "",                        // Asiste
      data.guestsCount || 1,                         // Personas
      data.dietaryRestrictions || "",                 // Restricciones
      data.songSuggestion || ""                      // Canción
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: "Guardado correctamente" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("El script está funcionando correctamente.")
    .setMimeType(ContentService.MimeType.TEXT);
}
