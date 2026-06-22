# Google Sheets webhook

Para enviar los formularios de DYDWEB a Google Sheets:

1. Crea una hoja de Google Sheets.
2. Abre `Extensiones > Apps Script`.
3. Pega este script.
4. Cambia `SHEET_NAME` si tu pestaña tiene otro nombre.
5. Publica con `Implementar > Nueva implementacion > Aplicacion web`.
6. Permite acceso a "Cualquier usuario con el enlace".
7. Copia la URL y configúrala como `GOOGLE_SHEETS_WEBHOOK_URL`.

```js
const SHEET_NAME = "Leads";

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || "{}");
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

  sheet.appendRow([
    new Date(),
    payload.type || "",
    payload.name || "",
    payload.company || "",
    payload.email || "",
    payload.whatsapp || payload.contact || "",
    payload.service || payload.topic || "",
    payload.budget || "",
    payload.date || "",
    payload.time || "",
    payload.message || "",
    payload.page || "",
    payload.source || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Columnas sugeridas:

`Fecha`, `Tipo`, `Nombre`, `Empresa`, `Correo`, `WhatsApp/Contacto`, `Servicio`, `Presupuesto`, `Fecha reunión`, `Hora reunión`, `Mensaje`, `Página`, `Origen`.
