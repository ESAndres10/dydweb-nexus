# Conexion de formularios a Google Sheets

La pagina ya envia los formularios a `/api/leads`. Esa ruta reenvia los datos a Google Sheets usando una URL de Google Apps Script.

Formularios conectados:

- Chatbot de asesoria inmediata.
- Formulario de agenda con Google Calendar.
- Formulario principal de contacto.

## 1. Crear la hoja

1. Entra a Google Sheets.
2. Crea una hoja nueva, por ejemplo `Leads DYDWEB`.
3. Renombra la primera pestana como `Leads`.

## 2. Crear el Apps Script

1. En la hoja, abre `Extensiones > Apps Script`.
2. Borra el contenido inicial.
3. Pega este script.
4. Cambia `WEBHOOK_SECRET` por una clave privada creada por ti.
5. Guarda el proyecto.

```js
const SHEET_NAME = "Leads";
const WEBHOOK_SECRET = "cambia-esta-clave-privada";

const HEADERS = [
  "Fecha de recepcion",
  "Tipo",
  "Nombre",
  "Empresa",
  "Correo",
  "WhatsApp",
  "Contacto",
  "Servicio",
  "Tema",
  "Presupuesto",
  "Fecha reunion",
  "Hora reunion",
  "Mensaje",
  "Pagina",
  "Fecha creada",
  "Origen"
];

function doPost(e) {
  const providedSecret = e.parameter.secret || "";

  if (WEBHOOK_SECRET && providedSecret !== WEBHOOK_SECRET) {
    return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  }

  const body = JSON.parse((e.postData && e.postData.contents) || "{}");
  const lead = body.lead || body;
  const sheet = getOrCreateSheet();

  ensureHeaders(sheet);

  sheet.appendRow([
    lead.receivedAt || new Date().toISOString(),
    lead.type || "",
    lead.name || "",
    lead.company || "",
    lead.email || "",
    lead.whatsapp || "",
    lead.contact || "",
    lead.service || "",
    lead.topic || "",
    lead.budget || "",
    lead.date || "",
    lead.time || "",
    lead.message || "",
    lead.page || "",
    lead.createdAt || "",
    lead.source || "dydweb"
  ]);

  return jsonResponse({ ok: true });
}

function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeaders(sheet) {
  const currentHeaders = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasHeaders = currentHeaders.some(Boolean);

  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Publicar como aplicacion web

1. Haz clic en `Implementar > Nueva implementacion`.
2. Tipo: `Aplicacion web`.
3. Ejecutar como: `Yo`.
4. Quien tiene acceso: `Cualquier usuario`.
5. Autoriza los permisos.
6. Copia la URL de la aplicacion web.

La URL debe parecerse a:

```txt
https://script.google.com/macros/s/AKfycb.../exec
```

## 4. Configurar DigitalOcean

En DigitalOcean App Platform agrega estas variables:

```txt
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
GOOGLE_SHEETS_WEBHOOK_SECRET=cambia-esta-clave-privada
```

Despues guarda los cambios y espera el redeploy automatico.

## 5. Probar

1. Abre `https://dydweb.co/`.
2. Envia una prueba desde el formulario de contacto.
3. Revisa que aparezca una fila nueva en la pestana `Leads`.
4. Repite con el chatbot y el formulario de agenda.
