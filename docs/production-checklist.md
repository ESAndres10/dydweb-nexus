# Production checklist

Antes de publicar DYDWEB:

1. Configurar variables de entorno:
   - `NEXT_PUBLIC_SITE_URL`: dominio público final, por ejemplo `https://dydweb.com`.
   - `GOOGLE_SHEETS_WEBHOOK_URL`: URL publicada desde Google Apps Script.

2. Validar build:
   - `npm.cmd run typecheck`
   - `npm.cmd run build`

3. Revisar rutas principales:
   - `/`
   - `/nosotros`
   - `/servicios`
   - `/preguntas`
   - `/robots.txt`
   - `/sitemap.xml`

4. Probar formularios:
   - Formulario principal de contacto.
   - Chatbot de WhatsApp.
   - Formulario de agenda con Google Calendar.

5. Confirmar en Google Sheets:
   - Que la hoja tenga la pestaña `Leads`.
   - Que se agregue una fila al enviar el formulario.
   - Que las columnas correspondan con la guía de `docs/google-sheets-webhook.md`.

6. Revisar SEO básico:
   - Título y descripción.
   - Open Graph.
   - Sitemap.
   - Robots.
