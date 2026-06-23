"use client";

import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Clock,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  Menu,
  MessageCircle,
  MessageSquareText,
  MonitorCog,
  Play,
  Rocket,
  Search,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  UsersRound,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const menu = [
  ["Inicio", "inicio"],
  ["Servicios", "servicios"],
  ["Casos", "casos"],
  ["Contacto", "contacto"],
] as const;

const moreMenu = [
  ["Proceso", "proceso"],
  ["Soluciones", "soluciones"],
  ["Noticias", "noticias"],
] as const;

const stats = [
  ["42+", "soluciones entregadas"],
  ["7", "sectores atendidos"],
  ["98%", "satisfacción proyectada"],
  ["24/7", "operación digital"],
];

const services = [
  {
    icon: Code2,
    title: "Desarrollo de software",
    items: ["Sistemas empresariales", "ERP y CRM", "Portales corporativos", "APIs REST"],
  },
  {
    icon: Globe2,
    title: "Desarrollo web",
    items: ["Sitios corporativos", "Landing pages", "E-commerce", "Plataformas a medida"],
  },
  {
    icon: Bot,
    title: "Inteligencia artificial",
    items: ["Chatbots", "Automatización", "Agentes IA", "Procesamiento de datos"],
  },
  {
    icon: Search,
    title: "SEO",
    items: ["SEO técnico", "SEO local", "Contenido optimizado", "Estrategias de ranking"],
  },
  {
    icon: Layers3,
    title: "Diseño gráfico",
    items: ["Branding", "Identidad corporativa", "Redes sociales", "Piezas publicitarias"],
  },
  {
    icon: Play,
    title: "Producción audiovisual",
    items: ["Videos corporativos", "Motion graphics", "Edición profesional", "Contenido social"],
  },
];

const sectors = [
  ["Educación", "Aulas virtuales, admisiones, analítica académica y portales estudiantiles."],
  ["Salud", "Agendamiento, historias digitales, bots de atención y tableros operativos."],
  ["Comercio", "E-commerce, inventarios, CRM, fidelización y automatización de ventas."],
  ["Industria", "Trazabilidad, mantenimiento, dashboards de producción e integraciones IoT."],
  ["Eventos", "Registro, ticketing, acreditación, streaming y reportes de asistencia."],
  ["Gobierno", "Trámites digitales, transparencia, datos abiertos y atención ciudadana."],
  ["Fundaciones", "Donaciones, campañas, impacto medible y gestión de beneficiarios."],
];

const cases = [
  {
    client: "Retail Nova",
    problem: "Ventas desconectadas entre tienda física, catálogo y WhatsApp.",
    solution: "CRM comercial con automatizaciones, tienda web y analítica de embudo.",
    tech: "Next.js, Node.js, PostgreSQL, IA conversaciónal",
    result: "+38% más oportunidades calificadas en 90 días",
  },
  {
    client: "EducaLab",
    problem: "Procesos manuales para matrículas, pagos y seguimiento académico.",
    solution: "Portal estudiantil, dashboard administrativo y flujos de notificación.",
    tech: "React, API REST, automatización, SEO técnico",
    result: "72 horas mensuales liberadas para el equipo operativo",
  },
  {
    client: "Fundación Horizonte",
    problem: "Campañas sociales sin trazabilidad ni visibilidad de avances.",
    solution: "Micrositio de donaciones, metas, historias y reportes públicos.",
    tech: "Next.js, pagos, métricas, Open Graph",
    result: "Mayor confianza para donantes y aliados estratégicos",
  },
];

const lab = [
  "Productos SaaS para operación empresarial",
  "Herramientas IA para atención y ventas",
  "Aplicaciones móviles con datos en tiempo real",
  "Prototipos de automatización avanzada",
  "Investigación en analítica, SEO e interfaces",
  "Experimentos con agentes digitales verticales",
];

const news = [
  ["IA", "Cómo los agentes inteligentes están cambiando el servicio al cliente"],
  ["SEO", "Arquitectura técnica para posicionar plataformas empresariales"],
  ["Innovación", "De sitio web a sistema operativo comercial para empresas"],
];

const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "PostgreSQL", "Cloudflare", "Docker"];

const hologramNodes = [
  {
    id: "ia",
    icon: Bot,
    label: "Inteligencia Artificial",
    title: "Inteligencia Artificial",
    description: "Automatizamos procesos empresariales utilizando agentes inteligentes y herramientas de IA generativa.",
    benefits: ["Automatización", "Agentes IA", "Integraciones", "Procesamiento de datos"],
    position: "left-1/2 top-[10%] -translate-x-1/2",
    dot: { x: 50, y: 15 },
  },
  {
    id: "web",
    icon: Globe2,
    label: "Desarrollo Web",
    title: "Desarrollo Web",
    description: "Construimos plataformas rápidas, seguras y escalables para convertir visitantes en oportunidades comerciales.",
    benefits: ["Sitios corporativos", "Landing pages", "E-commerce", "Portales a medida"],
    position: "left-[31%] top-[34%]",
    dot: { x: 36, y: 39 },
  },
  {
    id: "strategy",
    icon: Rocket,
    label: "Estrategia Digital",
    title: "Estrategia Digital",
    description: "Diseñamos rutas de crecimiento con tecnología, automatización y posicionamiento para acelerar resultados.",
    benefits: ["Roadmap digital", "Prioridades", "Escalabilidad", "Crecimiento"],
    position: "left-[23%] top-[22%]",
    dot: { x: 30, y: 28 },
  },
  {
    id: "seo",
    icon: TrendingUp,
    label: "SEO Inteligente",
    title: "SEO Inteligente",
    description: "Optimizamos arquitectura, contenido y rendimiento para que tu marca gane visibilidad orgánica.",
    benefits: ["SEO técnico", "SEO local", "Contenido estratégico", "Medición continua"],
    position: "right-[31%] top-[34%]",
    dot: { x: 64, y: 39 },
  },
  {
    id: "ux",
    icon: Sparkles,
    label: "UX Premium",
    title: "Experiencia UX Premium",
    description: "Creamos interfaces limpias, futuristas y fáciles de usar para que cada visita se convierta en confianza.",
    benefits: ["Diseño premium", "Claridad", "Confianza", "Interacción"],
    position: "right-[23%] top-[22%]",
    dot: { x: 70, y: 28 },
  },
  {
    id: "data",
    icon: BarChart3,
    label: "Análisis de Datos",
    title: "Análisis de Datos",
    description: "Convertimos datos dispersos en indicadores claros, tableros ejecutivos y decisiones accionables.",
    benefits: ["Dashboards", "KPIs", "Business Intelligence", "Reportes"],
    position: "left-1/2 bottom-[21%] -translate-x-1/2",
    dot: { x: 50, y: 73 },
  },
  {
    id: "conversion",
    icon: CircleDollarSign,
    label: "Conversión Comercial",
    title: "Conversión Comercial",
    description: "Optimizamos formularios, mensajes y llamados a la acción para transformar tráfico en oportunidades reales.",
    benefits: ["Leads", "Embudos", "CTA", "Seguimiento"],
    position: "left-[23%] bottom-[29%]",
    dot: { x: 30, y: 65 },
  },
  {
    id: "crm",
    icon: MonitorCog,
    label: "Automatización CRM",
    title: "Automatización CRM",
    description: "Conectamos ventas, seguimiento y atención en flujos inteligentes que ahorran tiempo y mejoran respuesta.",
    benefits: ["Embudo comercial", "Lead scoring", "WhatsApp", "Reportes automáticos"],
    position: "right-[31%] bottom-[38%]",
    dot: { x: 64, y: 58 },
  },
  {
    id: "cloud",
    icon: Layers3,
    label: "Integraciones Cloud",
    title: "Integraciones Cloud",
    description: "Conectamos herramientas, APIs y servicios en la nube para que tu operación digital trabaje como un sistema.",
    benefits: ["APIs", "Cloudflare", "Google", "Automatización"],
    position: "right-[23%] bottom-[29%]",
    dot: { x: 70, y: 65 },
  },
  {
    id: "software",
    icon: Code2,
    label: "Software a Medida",
    title: "Software a Medida",
    description: "Diseñamos sistemas empresariales personalizados para operar, integrar datos y escalar procesos críticos.",
    benefits: ["ERP", "CRM", "APIs", "Dashboards"],
    position: "left-[31%] bottom-[38%]",
    dot: { x: 36, y: 58 },
  },
];

const proof = ["Software", "IA", "SEO", "Automatización", "Branding", "Audiovisual", "Cloudflare", "PostgreSQL"];

const systemStatus = [
  ["IA Operativa", "98%", Bot],
  ["Servidores", "100%", Server],
  ["Seguridad", "99%", ShieldCheck],
  ["Automatizaciones", "96%", MonitorCog],
  ["Rendimiento", "97%", Gauge],
];

const activityFeed = [
  ["Nuevo proyecto iniciado", "Bogotá, Colombia"],
  ["Automatización ejecutada", "Madrid, España"],
  ["Informe SEO generado", "Ciudad de México, MX"],
  ["Sistema actualizado", "Cloudflare Edge"],
];

const whatsappNumber = "573508629779";

const chatbotTopics = [
  "Desarrollo web",
  "Inteligencia artificial",
  "Automatización",
  "SEO",
  "Software a medida",
  "Branding",
];

type Language = "es" | "en";

async function submitLeadToSheets(payload: Record<string, unknown>) {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = (await response.json()) as { ok?: boolean; stored?: boolean };
    return Boolean(response.ok && result.ok && result.stored !== false);
  } catch {
    // WhatsApp and Google Calendar remain available even if Sheets is not configured.
    return false;
  }
}

const siteCopy = {
  es: {
    languageLabel: "Idioma",
    quote: "Cotizar",
    openMenu: "Abrir menú",
    pageLinks: { about: "Quiénes Somos", packages: "Paquetes", questions: "Preguntas", more: "Más" },
    menu: ["Inicio", "Servicios", "Casos", "Contacto"],
    moreMenu: ["Proceso", "Soluciones", "Noticias"],
    heroBadge: "Tecnología, inversión e impacto social",
    heroBefore: "Transformamos ideas en",
    heroHighlight: "soluciones digitales",
    heroAfter: "que impulsan el crecimiento empresarial.",
    heroText: "Desarrollo de software, inteligencia artificial, diseño web, SEO, automatización y marketing digital en un solo lugar.",
    primaryCta: "Solicitar cotización",
    secondaryCta: "Ver proyectos",
    stats: ["soluciones entregadas", "sectores atendidos", "satisfacción proyectada", "operación digital"],
    proof: ["Software", "IA", "SEO", "Automatización", "Branding", "Audiovisual", "Cloudflare", "PostgreSQL"],
    sections: {
      services: {
        eyebrow: "Servicios",
        title: "Capacidades digitales integradas para vender, operar y escalar",
        text: "DYDWEB combina ingeniería, estrategia, contenido y automatización para crear activos digitales que no se quedan en una vitrina.",
      },
      process: {
        eyebrow: "Método Nexus",
        title: "Un proceso claro para pasar de idea a plataforma escalable",
        text: "Guiamos cada proyecto con diagnóstico, diseño, desarrollo y optimización continua para que el resultado sea útil, medible y fácil de evolucionar.",
      },
      quote: {
        eyebrow: "Cotización rápida",
        title: "Calcula una ruta inicial antes de hablar con el equipo",
        text: "Elige el tipo de proyecto, prioridad y alcance. Prepararemos un mensaje listo para WhatsApp con el contexto comercial.",
      },
      solutions: {
        eyebrow: "Soluciones empresariales",
        title: "Casos de uso por sector",
        text: "Arquitecturas pensadas para realidades distintas: instituciones, comercios, fundaciones, industria y organizaciones públicas.",
      },
      trust: {
        eyebrow: "Confianza operativa",
        title: "Construimos con estandares de seguridad, velocidad y seguimiento comercial",
        text: "Cada entrega se piensa para crecer: infraestructura estable, datos medibles, soporte claro y experiencia lista para convertir visitantes en oportunidades.",
      },
      cases: {
        eyebrow: "Casos de exito",
        title: "Proyectos disenados alrededor de resultados medibles",
        text: "Cada caso presenta el problema, la solución, la tecnología útilizada y el impacto obtenido.",
      },
      news: {
        eyebrow: "Centro de noticias",
        title: "Contenido tecnologico preparado para SEO",
        text: "Categorías, etiquetas, comentarios y distribución social para sostener autoridad tecnológica y captación orgánica.",
      },
      admin: {
        eyebrow: "Portal y administracion",
        title: "Base funcional para cliente privado y dashboard administrativo",
        text: "La experiencia pública muestra como escalar hacia roles, clientes, proyectos, noticias, donaciones, inversiónistas y configuración general.",
      },
      audience: {
        eyebrow: "Para quien es",
        title: "Rutas claras según la etapa de tu empresa",
        text: "No todos llegan con la misma necesidad. Organizamos la experiencia para que cada visitante encuentre rápidamente el siguiente paso correcto.",
      },
      faq: {
        eyebrow: "Preguntas frecuentes",
        title: "Respuestas rápidas antes de iniciar una conversación",
        text: "Aclaramos alcance, tiempos, costos e integraciones para que el contacto por WhatsApp llegue con mejor contexto.",
      },
    },
    services,
    processSteps: [
      ["Diagnóstico", "Entendemos objetivos, público, procesos, presupuesto y oportunidades de automatización."],
      ["Arquitectura", "Definimos experiencia, tecnología, integraciones, contenidos y plan de crecimiento."],
      ["Construcción", "Desarrollamos la plataforma con entregas visibles, pruebas y ajustes iterativos."],
      ["Lanzamiento", "Activamos SEO, analítica, seguridad, velocidad y seguimiento comercial."],
    ],
    quoteWizard: {
      goalLabel: "Que necesitas construir",
      urgencyLabel: "Prioridad",
      scopeLabel: "Alcance",
      resultTitle: "Ruta sugerida",
      resultIntro: "Rango estimado inicial",
      resultNote: "El valor final depende de integraciones, contenido, automatizaciones y entregables.",
      button: "Enviar ruta por WhatsApp",
      goals: [
        ["Sitio web premium", "$900 - $1.800 USD", "Presencia corporativa, SEO base, formularios y experiencia visual premium."],
        ["Automatización o IA", "$1.500 - $4.000 USD", "Chatbot, flujos comerciales, integraciones y captura inteligente de leads."],
        ["Software a medida", "$3.000 - $9.000 USD", "Portal, dashboard, usuarios, base de datos, roles e integraciones."],
      ],
      urgencies: ["Flexible", "30 días", "Alta prioridad"],
      scopes: ["Esencial", "Profesional", "Avanzado"],
      leadIntro: "Hola D&D WEB Nexus, quiero avanzar con esta ruta de cotización.",
    },
    sectors,
    cases,
    trustCards: [
      ["Seguridad desde la base", "Buenas prácticas para formularios, roles, protección de datos y control de accesos."],
      ["Velocidad y SEO técnico", "Estructura optimizada para carga rápida, indexacion, Open Graph y analítica."],
      ["Soporte y evolución", "Acompañamiento para iterar, medir resultados y escalar funcionalidades por etapas."],
      ["Integraciones comerciales", "WhatsApp, CRM, automatizaciones, dashboards y flujos pensados para seguimiento real."],
    ],
    caseMetrics: [
      ["+38%", "oportunidades"],
      ["72h", "ahorradas/mes"],
      ["+ confianza", "donantes"],
    ],
    lab,
    news,
    labEyebrow: "Innovation Lab",
    labTitle: "Un laboratorio para construir productos propios, SaaS y herramientas IA",
    labText: "Esta área muestra capacidad de innovación, valida prototipos y abre conversación con inversiónistas y socios estrategicos.",
    impactEyebrow: "DYDWEB Impact",
    impactTitle: "Tecnología para proyectos sociales con avances transparentes",
    impactText: "Educación, tecnología, salud, comunidades vulnerables y emprendimiento con metas económicas, seguimiento de avances y resultados públicados.",
    impactProjects: ["Aulas digitales comunitarias", "Salud conectada", "Emprendimiento joven", "IA para fundaciones"],
    donationTitle: "Donación rápida",
    donationText: "Formulario preparado para conectar con pasarela de pagos.",
    donationOther: "Otro valor",
    donationButton: "Apoyar proyecto",
    investorsEyebrow: "Portal de inversiónistas",
    investorsTitle: "Un espacio para startups, proyectos y socios estrategicos",
    investorsText: "Registro de inversiónistas, presentación de startups, busqueda de alianzas, pitch decks y videos de presentación.",
    investorCards: ["Inversión requerida", "Socios estrategicos", "Pitch deck", "Proyección de crecimiento"],
    investorFields: ["Nombre", "Empresa", "Correo", "Descripción del proyecto", "Inversión requerida", "Pitch Deck", "Video de presentación"],
    investorButton: "Registrar interés",
    searchPlaceholder: "Buscar noticias, IA, SEO o desarrollo web",
    searchButton: "Buscar",
    newsCardText: "Artículo optimizado con Schema Markup, Open Graph, etiquetas y lectura rápida.",
    caseLabels: { problem: "Problema", solution: "Solución", tech: "Tecnologías" },
    adminCards: [
      ["Portal de clientes", "Proyectos, avance, entregables, facturas, soporte e historial de servicios."],
      ["Dashboard administrativo", "Usuarios, clientes, noticias, casos, donaciones, formularios y servicios."],
      ["Seguridad preparada", "JWT, CSRF, XSS, rate limiting, ReCaptcha y roles por perfil."],
    ],
    audienceCards: [
      ["Empresas que necesitan presencia premium", "Sitio web, SEO base, formularios, marca visual y conversión desde el primer lanzamiento."],
      ["Equipos que quieren automatizar ventas", "WhatsApp, CRM, flujos de seguimiento, captura de leads y dashboards comerciales."],
      ["Organizaciones con procesos complejos", "Software a medida, roles, bases de datos, integraciones y portales privados."],
    ],
    faqItems: [
      ["Cuánto tarda un proyecto?", "Una web premium puede iniciar entre 2 y 5 semanas. Software o automatizaciones avanzadas dependen del alcance y las integraciones."],
      ["Puedo empezar pequeño y crecer después?", "Sí. La arquitectura se plantea por etapas para lanzar rápido, medir resultados y sumar funcionalidades sin rehacer todo."],
      ["El chatbot envia datos a WhatsApp?", "Sí. El visitante completa su consulta y el sistema prepara un mensaje directo a tu WhatsApp con servicio, presupuesto y contexto."],
      ["Incluye SEO y medición?", "La base contempla estructura técnica, velocidad, Open Graph, etiquetas y preparación para analítica según el plan del proyecto."],
    ],
    contactEyebrow: "Contacto",
    contactTitle: "Hablemos de la próxima solución digital de tu empresa",
    contactText: "El formulario inteligente captura servicio de interés, presupuesto y contexto comercial para priorizar oportunidades.",
    faqCtaTitle: "Resuelve tus dudas antes de iniciar",
    faqCtaText: "Movimos las preguntas frecuentes y rutas por tipo de cliente a una sección dedicada para mantener esta página más ligera.",
    faqCtaButton: "Ver preguntas frecuentes",
    servicesCtaTitle: "Quieres comparar servicios y paquetes?",
    servicesCtaText: "Revisa alcances, rutas sugeridas y entregables antes de elegir el siguiente paso.",
    servicesCtaButton: "Ver servicios y paquetes",
    contactFields: ["Nombre", "Empresa", "Correo", "WhatsApp"],
    serviceInterest: "Servicio de interés",
    serviceOptions: ["Desarrollo de software", "Inteligencia artificial", "SEO", "Diseño y audiovisual"],
    budgetPlaceholder: "Presupuesto estimado",
    messagePlaceholder: "Mensaje",
    contactButton: "Quiero transformar mi negocio",
    contactSuccess: "Gracias. Recibimos tu información y la enviaremos al equipo comercial.",
    contactError: "No pudimos registrar la información todavía. Revisa la configuración de Google Sheets o contáctanos por WhatsApp.",
    scheduleShort: "Agendar",
    scheduleEyebrow: "Agenda una reunión",
    scheduleTitle: "Conversemos 20 minutos sobre tu proyecto",
    scheduleText: "Elige servicio, fecha y hora. Abriremos Google Calendar con la reunión prellenada para que puedas guardarla.",
    scheduleFields: ["Nombre", "Empresa", "Correo o WhatsApp"],
    scheduleService: "Servicio a tratar",
    scheduleDay: "Fecha",
    scheduleTime: "Hora",
    scheduleButton: "Agendar en Google Calendar",
    scheduleIntro: "Reunion con D&D WEB Nexus",
    footerA: "DYDWEB. Plataforma tecnológica empresarial.",
    footerB: "SEO, Open Graph, Schema Markup, velocidad y escalabilidad desde la base.",
    footerTagline: "Tecnología que impulsa negocios.",
    footerQuickLinks: "Enlaces rápidos",
    footerServices: "Servicios",
    footerContact: "Contacto",
    footerAdvisor: "Hablar con asesor",
    chatbot: {
      floating: "Asesoría inmediata",
      title: "Cuentanos que necesitas",
      text: "Enviamos tu consulta directo a WhatsApp para responderte rápido.",
      close: "Cerrar chatbot",
      topics: chatbotTopics,
      name: "Nombre",
      contact: "Correo o WhatsApp",
      company: "Empresa o proyecto",
      budget: "Presupuesto estimado",
      message: "Cuentanos tu idea, necesidad o pregunta",
      success: "Consulta preparada. Si WhatsApp no se abrio, revisa permisos de ventanas emergentes.",
      submit: "Enviar consulta",
      leadIntro: "Hola D&D WEB Nexus, quiero recibir información.",
      leadService: "Servicio de interés",
      leadBudget: "Presupuesto estimado",
      leadOrigin: "Origen",
      notProvided: "No indicado",
      fallbackMessage: "Quiero conocer opciones para mi proyecto.",
      quickActions: [
        ["Cotizar página web", "Desarrollo web", "Quiero cotizar una página web premium para mi empresa."],
        ["Automatizar procesos", "Automatización", "Quiero automatizar procesos y conectar mis consultas con WhatsApp o CRM."],
        ["Implementar IA", "Inteligencia artificial", "Quiero explorar una solución con inteligencia artificial para mi negocio."],
      ],
    },
  },
  en: {
    languageLabel: "Language",
    quote: "Get a quote",
    openMenu: "Open menu",
    pageLinks: { about: "About Us", packages: "Packages", questions: "FAQ", more: "More" },
    menu: ["Home", "Services", "Cases", "Contact"],
    moreMenu: ["Process", "Solutions", "News"],
    heroBadge: "Technology, investment and social impact",
    heroBefore: "We transform ideas into",
    heroHighlight: "digital solutions",
    heroAfter: "that accelerate business growth.",
    heroText: "Software development, artificial intelligence, web design, SEO, automation and digital marketing in one place.",
    primaryCta: "Request a quote",
    secondaryCta: "View projects",
    stats: ["solutions delivered", "sectors served", "projected satisfaction", "digital operation"],
    proof: ["Software", "AI", "SEO", "Automation", "Branding", "Audiovisual", "Cloudflare", "PostgreSQL"],
    sections: {
      services: {
        eyebrow: "Services",
        title: "Integrated digital capabilities to sell, operate and scale",
        text: "DYDWEB combines engineering, strategy, content and automation to create digital assets that go far beyond a showcase.",
      },
      process: {
        eyebrow: "Nexus method",
        title: "A clear process to move from idea to scalable platform",
        text: "We guide every project through diagnosis, design, development and continuous optimization so the result is useful, measurable and easy to evolve.",
      },
      quote: {
        eyebrow: "Quick quote",
        title: "Estimate an initial route before speaking with the team",
        text: "Choose project type, priority and scope. We prepare a WhatsApp-ready message with the business context.",
      },
      solutions: {
        eyebrow: "Business solutions",
        title: "Use cases by sector",
        text: "Architectures designed for different realities: institutions, commerce, foundations, industry and public organizations.",
      },
      trust: {
        eyebrow: "Operational trust",
        title: "We build with security, speed and commercial tracking standards",
        text: "Every delivery is designed to grow: stable infrastructure, measurable data, clear support and an experience ready to turn visitors into opportunities.",
      },
      cases: {
        eyebrow: "Success cases",
        title: "Projects designed around measurable outcomes",
        text: "Each case presents the problem, solution, technology used and business impact.",
      },
      news: {
        eyebrow: "News hub",
        title: "Technology content prepared for SEO",
        text: "Categories, tags, comments and social distribution to support authority and organic acquisition.",
      },
      admin: {
        eyebrow: "Portal and administration",
        title: "Functional foundation for private clients and admin dashboard",
        text: "The public experience shows how to scale toward roles, clients, projects, news, donations, investors and general configuration.",
      },
      audience: {
        eyebrow: "Who it is for",
        title: "Clear routes based on your company's stage",
        text: "Not every visitor arrives with the same need. We organize the experience so each one quickly finds the right next step.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Quick answers before starting a conversation",
        text: "We clarify scope, timelines, costs and integrations so the WhatsApp conversation starts with better context.",
      },
    },
    services: [
      { icon: Code2, title: "Software development", items: ["Business systems", "ERP and CRM", "Corporate portals", "REST APIs"] },
      { icon: Globe2, title: "Web development", items: ["Corporate websites", "Landing pages", "E-commerce", "Custom portals"] },
      { icon: Bot, title: "Artificial intelligence", items: ["Chatbots", "Automation", "AI agents", "Data processing"] },
      { icon: Search, title: "SEO", items: ["Technical SEO", "Local SEO", "Optimized content", "Ranking strategies"] },
      { icon: Layers3, title: "Graphic design", items: ["Branding", "Corporate identity", "Social media", "Advertising assets"] },
      { icon: Play, title: "Audiovisual production", items: ["Corporate videos", "Motion graphics", "Professional editing", "Social content"] },
    ],
    processSteps: [
      ["Diagnosis", "We understand goals, audience, processes, budget and automation opportunities."],
      ["Architecture", "We define experience, technology, integrations, content and growth plan."],
      ["Build", "We develop the platform with visible deliveries, testing and iterative adjustments."],
      ["Launch", "We activate SEO, analytics, security, speed and commercial tracking."],
    ],
    quoteWizard: {
      goalLabel: "What do you need to build",
      urgencyLabel: "Priority",
      scopeLabel: "Scope",
      resultTitle: "Suggested route",
      resultIntro: "Initial estimated range",
      resultNote: "Final value depends on integrations, content, automations and deliverables.",
      button: "Send route on WhatsApp",
      goals: [
        ["Premium website", "$900 - $1,800 USD", "Corporate presence, base SEO, forms and premium visual experience."],
        ["Automation or AI", "$1,500 - $4,000 USD", "Chatbot, commercial flows, integrations and intelligent lead capture."],
        ["Custom software", "$3,000 - $9,000 USD", "Portal, dashboard, users, database, roles and integrations."],
      ],
      urgencies: ["Flexible", "30 days", "High priority"],
      scopes: ["Essential", "Professional", "Advanced"],
      leadIntro: "Hello D&D WEB Nexus, I want to move forward with this quote route.",
    },
    sectors: [
      ["Education", "Virtual classrooms, admissions, academic analytics and student portals."],
      ["Healthcare", "Scheduling, digital records, care bots and operational dashboards."],
      ["Commerce", "E-commerce, inventory, CRM, loyalty and sales automation."],
      ["Industry", "Traceability, maintenance, production dashboards and IoT integrations."],
      ["Events", "Registration, ticketing, accreditation, streaming and attendance reports."],
      ["Government", "Digital procedures, transparency, open data and citizen support."],
      ["Foundations", "Donations, campaigns, measurable impact and beneficiary management."],
    ],
    cases: [
      {
        client: "Retail Nova",
        problem: "Sales disconnected across physical store, catalog and WhatsApp.",
        solution: "Commercial CRM with automation, web store and funnel analytics.",
        tech: "Next.js, Node.js, PostgreSQL, conversational AI",
        result: "+38% more qualified opportunities in 90 days",
      },
      {
        client: "EducaLab",
        problem: "Manual processes for enrollment, payments and academic tracking.",
        solution: "Student portal, admin dashboard and notification workflows.",
        tech: "React, REST API, automation, technical SEO",
        result: "72 monthly hours freed for the operations team",
      },
      {
        client: "Horizonte Foundation",
        problem: "Social campaigns without traceability or visible progress.",
        solution: "Donation microsite with goals, stories and public reports.",
        tech: "Next.js, payments, metrics, Open Graph",
        result: "Greater trust for donors and strategic allies",
      },
    ],
    trustCards: [
      ["Security from the foundation", "Best practices for forms, roles, data protection and access control."],
      ["Speed and technical SEO", "Optimized structure for fast loading, indexing, Open Graph and analytics."],
      ["Support and evolution", "Guidance to iterate, measure results and scale functionality in stages."],
      ["Commercial integrations", "WhatsApp, CRM, automations, dashboards and flows designed for real follow-up."],
    ],
    caseMetrics: [
      ["+38%", "opportunities"],
      ["72h", "saved/month"],
      ["+ trust", "donors"],
    ],
    lab: [
      "SaaS products for business operations",
      "AI tools for support and sales",
      "Mobile apps with real-time data",
      "Advanced automation prototypes",
      "Research in analytics, SEO and interfaces",
      "Experiments with vertical digital agents",
    ],
    news: [
      ["AI", "How intelligent agents are changing customer service"],
      ["SEO", "Technical architecture to position enterprise platforms"],
      ["Innovation", "From website to commercial operating system for companies"],
    ],
    labEyebrow: "Innovation Lab",
    labTitle: "A lab for building proprietary products, SaaS and AI tools",
    labText: "This área demonstrates innovation capacity, validates prototypes and opens conversations with investors and strategic partners.",
    impactEyebrow: "DYDWEB Impact",
    impactTitle: "Technology for social projects with transparent progress",
    impactText: "Education, technology, health, vulnerable communities and entrepreneurship with economic goals, progress tracking and published results.",
    impactProjects: ["Community digital classrooms", "Connected health", "Youth entrepreneurship", "AI for foundations"],
    donationTitle: "Quick donation",
    donationText: "Form ready to connect with a payment gateway.",
    donationOther: "Custom amount",
    donationButton: "Support project",
    investorsEyebrow: "Investor portal",
    investorsTitle: "A space for startups, projects and strategic partners",
    investorsText: "Investor registration, startup presentation, alliance discovery, pitch decks and presentation videos.",
    investorCards: ["Required investment", "Strategic partners", "Pitch deck", "Growth projection"],
    investorFields: ["Name", "Company", "Email", "Project description", "Required investment", "Pitch Deck", "Presentation video"],
    investorButton: "Register interest",
    searchPlaceholder: "Search news, AI, SEO or web development",
    searchButton: "Search",
    newsCardText: "Article optimized with Schema Markup, Open Graph, tags and fast reading.",
    caseLabels: { problem: "Problem", solution: "Solution", tech: "Technologies" },
    adminCards: [
      ["Client portal", "Projects, progress, deliverables, invoices, support and service history."],
      ["Admin dashboard", "Users, clients, news, cases, donations, forms and services."],
      ["Security ready", "JWT, CSRF, XSS, rate limiting, ReCaptcha and role-based profiles."],
    ],
    audienceCards: [
      ["Companies needing a premium presence", "Website, base SEO, forms, visual brand and conversion from the first launch."],
      ["Teams wanting to automate sales", "WhatsApp, CRM, follow-up flows, lead capture and commercial dashboards."],
      ["Organizations with complex processes", "Custom software, roles, databases, integrations and private portals."],
    ],
    faqItems: [
      ["How long does a project take?", "A premium website can start between 2 and 5 weeks. Software or advanced automations depend on scope and integrations."],
      ["Can I start small and grow later?", "Yes. The architecture is planned in stages to launch fast, measure results and add functionality without rebuilding everything."],
      ["Does the chatbot send data to WhatsApp?", "Yes. The visitor completes the request and the system prepares a direct WhatsApp message with service, budget and context."],
      ["Does it include SEO and measurement?", "The foundation includes technical structure, speed, Open Graph, tags and analytics preparation depending on the project plan."],
    ],
    contactEyebrow: "Contact",
    contactTitle: "Let us talk about your company's next digital solution",
    contactText: "The smart form captures service interest, budget and business context to prioritize opportunities.",
    faqCtaTitle: "Clear your questions before starting",
    faqCtaText: "We moved FAQs and visitor routes into a dedicated section to keep this page lighter.",
    faqCtaButton: "View FAQ",
    servicesCtaTitle: "Want to compare services and packages?",
    servicesCtaText: "Review scopes, suggested routes and deliverables before choosing the next step.",
    servicesCtaButton: "View services and packages",
    contactFields: ["Name", "Company", "Email", "WhatsApp"],
    serviceInterest: "Service of interest",
    serviceOptions: ["Software development", "Artificial intelligence", "SEO", "Design and audiovisual"],
    budgetPlaceholder: "Estimated budget",
    messagePlaceholder: "Message",
    contactButton: "Transform my business",
    contactSuccess: "Thank you. We received your information and will send it to the commercial team.",
    contactError: "We could not register the information yet. Check the Google Sheets configuration or contact us on WhatsApp.",
    scheduleShort: "Schedule",
    scheduleEyebrow: "Schedule a meeting",
    scheduleTitle: "Let us talk for 20 minutes about your project",
    scheduleText: "Choose service, date and time. We will open Google Calendar with the meeting prefilled so you can save it.",
    scheduleFields: ["Name", "Company", "Email or WhatsApp"],
    scheduleService: "Service to discuss",
    scheduleDay: "Date",
    scheduleTime: "Time",
    scheduleButton: "Schedule in Google Calendar",
    scheduleIntro: "Meeting with D&D WEB Nexus",
    footerA: "DYDWEB. Enterprise technology platform.",
    footerB: "SEO, Open Graph, Schema Markup, speed and scalability from the foundation.",
    footerTagline: "Technology that drives business.",
    footerQuickLinks: "Quick links",
    footerServices: "Services",
    footerContact: "Contact",
    footerAdvisor: "Talk to an advisor",
    chatbot: {
      floating: "Immediate advisory",
      title: "Tell us what you need",
      text: "We send your request directly to WhatsApp so we can respond quickly.",
      close: "Close chatbot",
      topics: ["Web development", "Artificial intelligence", "Automation", "SEO", "Custom software", "Branding"],
      name: "Name",
      contact: "Email or WhatsApp",
      company: "Company or project",
      budget: "Estimated budget",
      message: "Tell us your idea, need or question",
      success: "Request prepared. If WhatsApp did not open, check pop-up permissions.",
      submit: "Send request",
      leadIntro: "Hello D&D WEB Nexus, I would like to receive information.",
      leadService: "Service of interest",
      leadBudget: "Estimated budget",
      leadOrigin: "Source",
      notProvided: "Not provided",
      fallbackMessage: "I would like to explore options for my project.",
      quickActions: [
        ["Quote a website", "Web development", "I want to quote a premium website for my company."],
        ["Automate processes", "Automation", "I want to automate processes and connect inquiries with WhatsApp or CRM."],
        ["Implement AI", "Artificial intelligence", "I want to explore an artificial intelligence solution for my business."],
      ],
    },
  },
};

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold shadow-lg shadow-dyd-blue/20 transition ${
        variant === "primary"
          ? "bg-gradient-to-r from-dyd-blue to-dyd-cyan text-white shadow-glow hover:brightness-110"
          : "border border-dyd-blue/20 bg-dyd-silver/5 text-white hover:border-dyd-cyan/50 hover:bg-dyd-silver/10"
      }`}
    >
      {children}
    </a>
  );
}

function WhatsAppChatbot({ language }: { language: Language }) {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("Desarrollo web");
  const [messageDraft, setMessageDraft] = useState("");
  const [sent, setSent] = useState(false);
  const chat = siteCopy[language].chatbot;

  useEffect(() => {
    setTopic(chat.topics[0]);
  }, [chat.topics]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const selectedTopic = String(formData.get("topic") || topic).trim();

    const leadMessage = [
      chat.leadIntro,
      "",
      `${chat.name}: ${name || chat.notProvided}`,
      `${chat.contact}: ${contact || chat.notProvided}`,
      `${chat.company}: ${company || chat.notProvided}`,
      `${chat.leadService}: ${selectedTopic || chat.notProvided}`,
      `${chat.leadBudget}: ${budget || chat.notProvided}`,
      "",
      `${chat.message}: ${message || chat.fallbackMessage}`,
      "",
      `${chat.leadOrigin}: ${typeof window !== "undefined" ? window.location.href : "DYDWEB website"}`,
    ].join("\n");

    try {
      const lead = {
        type: "chatbot",
        name,
        contact,
        company,
        budget,
        topic: selectedTopic,
        message,
        page: typeof window !== "undefined" ? window.location.href : "DYDWEB website",
        createdAt: new Date().toISOString(),
      };
      await submitLeadToSheets(lead);
      const current = JSON.parse(window.localStorage.getItem("dydweb-chat-leads") || "[]") as unknown[];
      window.localStorage.setItem("dydweb-chat-leads", JSON.stringify([lead, ...current].slice(0, 25)));
    } catch {
      // WhatsApp is the primary delivery channel.
    }

    setSent(true);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(leadMessage)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3">
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="w-[min(410px,calc(100vw-2rem))] overflow-hidden rounded-lg border border-dyd-cyan/25 bg-dyd-ink/95 shadow-[0_26px_90px_rgba(0,0,0,0.45),0_0_45px_rgba(22,199,243,0.14)] backdrop-blur-2xl"
        >
          <div className="border-b border-dyd-silver/10 bg-gradient-to-r from-dyd-blue/20 via-dyd-cyan/12 to-transparent p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-dyd-cyan">Nexus Assistant</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{chat.title}</h3>
                <p className="mt-1 text-sm leading-5 text-dyd-text">{chat.text}</p>
              </div>
              <button
                type="button"
                aria-label={chat.close}
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-dyd-silver/15 text-dyd-text transition hover:border-dyd-cyan/50 hover:text-white"
              >
                <X size={17} />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-3 p-4">
            <div className="grid gap-2 sm:grid-cols-3">
              {chat.quickActions.map(([label, quickTopic, quickMessage]) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    setTopic(quickTopic);
                    setMessageDraft(quickMessage);
                  }}
                  className="rounded-md border border-dyd-cyan/20 bg-dyd-cyan/[0.07] px-3 py-2 text-left text-xs font-semibold leading-4 text-dyd-silver transition hover:border-dyd-cyan hover:bg-dyd-cyan/15 hover:text-white"
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {chat.topics.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTopic(item)}
                  className={`rounded-md border px-3 py-2 text-xs font-semibold transition ${
                    topic === item
                      ? "border-dyd-cyan bg-dyd-cyan/15 text-white"
                      : "border-dyd-silver/15 bg-dyd-silver/[0.04] text-dyd-text hover:border-dyd-cyan/50 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <input type="hidden" name="topic" value={topic} />

            <div className="grid gap-3 sm:grid-cols-2">
              <input
                name="name"
                required
                className="h-11 rounded-md border border-dyd-silver/15 bg-dyd-black/70 px-3 text-sm text-white outline-none placeholder:text-dyd-text focus:border-dyd-cyan"
                placeholder={chat.name}
              />
              <input
                name="contact"
                required
                className="h-11 rounded-md border border-dyd-silver/15 bg-dyd-black/70 px-3 text-sm text-white outline-none placeholder:text-dyd-text focus:border-dyd-cyan"
                placeholder={chat.contact}
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <input
                name="company"
                className="h-11 rounded-md border border-dyd-silver/15 bg-dyd-black/70 px-3 text-sm text-white outline-none placeholder:text-dyd-text focus:border-dyd-cyan"
                placeholder={chat.company}
              />
              <input
                name="budget"
                className="h-11 rounded-md border border-dyd-silver/15 bg-dyd-black/70 px-3 text-sm text-white outline-none placeholder:text-dyd-text focus:border-dyd-cyan"
                placeholder={chat.budget}
              />
            </div>

            <textarea
              name="message"
              required
              value={messageDraft}
              onChange={(event) => setMessageDraft(event.target.value)}
              className="min-h-28 rounded-md border border-dyd-silver/15 bg-dyd-black/70 px-3 py-3 text-sm text-white outline-none placeholder:text-dyd-text focus:border-dyd-cyan"
              placeholder={chat.message}
            />

            {sent ? (
              <p className="rounded-md border border-dyd-cyan/25 bg-dyd-cyan/10 px-3 py-2 text-xs font-medium text-dyd-silver">
                {chat.success}
              </p>
            ) : null}

            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
              {chat.submit} <Send size={17} />
            </button>
          </form>
        </motion.div>
      ) : null}

      <button
        type="button"
        aria-label="Abrir chatbot de WhatsApp"
        onClick={() => setOpen((value) => !value)}
        className="group inline-flex h-14 items-center gap-3 rounded-full border border-dyd-cyan/35 bg-dyd-ink/92 px-5 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(0,0,0,0.35),0_0_28px_rgba(22,199,243,0.22)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-dyd-cyan hover:shadow-glow"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-r from-dyd-blue to-dyd-cyan text-white">
          <MessageCircle size={19} />
        </span>
        <span className="hidden sm:inline">{chat.floating}</span>
      </button>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-dyd-text md:text-lg">{text}</p>
    </div>
  );
}

function QuickQuote({
  copy,
  language,
}: {
  copy: (typeof siteCopy)[Language];
  language: Language;
}) {
  const quote = copy.quoteWizard;
  const [goalIndex, setGoalIndex] = useState(0);
  const [urgencyIndex, setUrgencyIndex] = useState(1);
  const [scopeIndex, setScopeIndex] = useState(1);
  const selectedGoal = quote.goals[goalIndex];
  const selectedUrgency = quote.urgencies[urgencyIndex];
  const selectedScope = quote.scopes[scopeIndex];

  const sendQuote = () => {
    const message = [
      quote.leadIntro,
      "",
      `${quote.goalLabel}: ${selectedGoal[0]}`,
      `${quote.urgencyLabel}: ${selectedUrgency}`,
      `${quote.scopeLabel}: ${selectedScope}`,
      `${quote.resultIntro}: ${selectedGoal[1]}`,
      "",
      selectedGoal[2],
      "",
      `${siteCopy[language].chatbot.leadOrigin}: ${typeof window !== "undefined" ? window.location.href : "DYDWEB website"}`,
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="proceso" className="border-y border-dyd-silver/15 bg-dyd-panel/70 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={copy.sections.process.eyebrow}
          title={copy.sections.process.title}
          text={copy.sections.process.text}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.processSteps.map(([title, text], index) => (
              <article key={title} className="premium-card relative overflow-hidden rounded-lg p-6">
                <div className="absolute right-4 top-4 text-5xl font-bold text-dyd-silver/[0.05]">0{index + 1}</div>
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-md border border-dyd-cyan/25 bg-dyd-cyan/10 text-dyd-cyan">
                  {index === 0 ? <Search size={24} /> : null}
                  {index === 1 ? <Layers3 size={24} /> : null}
                  {index === 2 ? <Code2 size={24} /> : null}
                  {index === 3 ? <Rocket size={24} /> : null}
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-dyd-text">{text}</p>
              </article>
            ))}
          </div>

          <div className="premium-card rounded-lg p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">{copy.sections.quote.eyebrow}</p>
            <h3 className="text-2xl font-semibold leading-tight text-white">{copy.sections.quote.title}</h3>
            <p className="mt-3 text-sm leading-6 text-dyd-text">{copy.sections.quote.text}</p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-dyd-text">{quote.goalLabel}</p>
                <div className="grid gap-2">
                  {quote.goals.map(([label], index) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setGoalIndex(index)}
                      className={`rounded-md border px-4 py-3 text-left text-sm font-semibold transition ${
                        goalIndex === index ? "border-dyd-cyan bg-dyd-cyan/15 text-white" : "border-dyd-silver/15 bg-dyd-silver/[0.04] text-dyd-text hover:border-dyd-cyan/45 hover:text-white"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-dyd-text">{quote.urgencyLabel}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {quote.urgencies.map((item, index) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setUrgencyIndex(index)}
                        className={`h-10 rounded-md border text-xs font-semibold transition ${
                          urgencyIndex === index ? "border-dyd-cyan bg-dyd-cyan/15 text-white" : "border-dyd-silver/15 bg-dyd-silver/[0.04] text-dyd-text"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-dyd-text">{quote.scopeLabel}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {quote.scopes.map((item, index) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setScopeIndex(index)}
                        className={`h-10 rounded-md border text-xs font-semibold transition ${
                          scopeIndex === index ? "border-dyd-cyan bg-dyd-cyan/15 text-white" : "border-dyd-silver/15 bg-dyd-silver/[0.04] text-dyd-text"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-dyd-cyan/25 bg-dyd-cyan/10 p-4">
                <div className="flex items-center gap-3">
                  <CircleDollarSign className="text-dyd-cyan" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dyd-cyan">{quote.resultTitle}</p>
                    <p className="mt-1 text-xl font-semibold text-white">{selectedGoal[1]}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-dyd-silver">{selectedGoal[2]}</p>
                <p className="mt-2 text-xs leading-5 text-dyd-text">{quote.resultNote}</p>
              </div>

              <button
                type="button"
                onClick={sendQuote}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                {quote.button} <Send size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScheduleMeeting({
  copy,
}: {
  copy: (typeof siteCopy)[Language];
}) {
  const [service, setService] = useState(copy.serviceOptions[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00");

  useEffect(() => {
    setService(copy.serviceOptions[0]);
  }, [copy]);

  const formatCalendarDate = (value: Date) => value.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const start = new Date(`${date}T${time}:00`);
    const end = new Date(start.getTime() + 30 * 60 * 1000);

    const details = [
      `${copy.scheduleService}: ${service}`,
      `${copy.scheduleFields[0]}: ${name || copy.chatbot.notProvided}`,
      `${copy.scheduleFields[1]}: ${company || copy.chatbot.notProvided}`,
      `${copy.scheduleFields[2]}: ${contact || copy.chatbot.notProvided}`,
      "",
      typeof window !== "undefined" ? window.location.href : "DYDWEB website",
    ].join("\n");

    await submitLeadToSheets({
      type: "schedule",
      name,
      company,
      contact,
      service,
      date,
      time,
      message: details,
      page: typeof window !== "undefined" ? window.location.href : "DYDWEB website",
    });

    const calendarUrl = new URL("https://calendar.google.com/calendar/render");
    calendarUrl.searchParams.set("action", "TEMPLATE");
    calendarUrl.searchParams.set("text", copy.scheduleIntro);
    calendarUrl.searchParams.set("details", details);
    calendarUrl.searchParams.set("location", "Google Meet / Online");
    calendarUrl.searchParams.set("dates", `${formatCalendarDate(start)}/${formatCalendarDate(end)}`);

    window.open(calendarUrl.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="agendar" className="border-y border-dyd-silver/15 bg-dyd-panel/70 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">{copy.scheduleEyebrow}</p>
          <h2 className="text-3xl font-semibold md:text-5xl">{copy.scheduleTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-dyd-text">{copy.scheduleText}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[CalendarDays, MessageCircle, Clock].map((Icon, index) => (
              <div key={index} className="premium-card rounded-lg p-4">
                <Icon className="mb-3 text-dyd-cyan" />
                <p className="text-sm font-semibold text-white">{[copy.scheduleDay, copy.scheduleService, copy.scheduleTime][index]}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="premium-card grid gap-3 rounded-lg p-6">
          <div className="grid gap-3 md:grid-cols-3">
            <input name="name" required className="h-12 rounded-md border border-dyd-silver/15 bg-dyd-ink/55 px-4 text-white outline-none placeholder:text-dyd-text focus:border-dyd-cyan" placeholder={copy.scheduleFields[0]} />
            <input name="company" className="h-12 rounded-md border border-dyd-silver/15 bg-dyd-ink/55 px-4 text-white outline-none placeholder:text-dyd-text focus:border-dyd-cyan" placeholder={copy.scheduleFields[1]} />
            <input name="contact" required className="h-12 rounded-md border border-dyd-silver/15 bg-dyd-ink/55 px-4 text-white outline-none placeholder:text-dyd-text focus:border-dyd-cyan" placeholder={copy.scheduleFields[2]} />
          </div>
          <select value={service} onChange={(event) => setService(event.target.value)} className="h-12 rounded-md border border-dyd-silver/15 bg-dyd-ink/55 px-4 text-white outline-none focus:border-dyd-cyan">
            {copy.serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <div className="grid gap-3 md:grid-cols-2">
            <input type="date" required value={date} onChange={(event) => setDate(event.target.value)} className="h-12 rounded-md border border-dyd-silver/15 bg-dyd-ink/55 px-4 text-white outline-none focus:border-dyd-cyan" aria-label={copy.scheduleDay} />
            <input type="time" required value={time} onChange={(event) => setTime(event.target.value)} className="h-12 rounded-md border border-dyd-silver/15 bg-dyd-ink/55 px-4 text-white outline-none focus:border-dyd-cyan" aria-label={copy.scheduleTime} />
          </div>
          <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan font-semibold text-white shadow-glow">
            {copy.scheduleButton} <CalendarDays size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

function HeroVisual({ language }: { language: Language }) {
  const [activeNode, setActiveNode] = useState(0);
  const [activation, setActivation] = useState(false);
  const [activityIndex, setActivityIndex] = useState(0);
  const nodeText =
    language === "en"
      ? [
          {
            label: "Artificial Intelligence",
            title: "Artificial Intelligence",
            description: "We automate business processes with intelligent agents and generative AI tools.",
            benefits: ["Automation", "AI agents", "Integrations", "Data processing"],
          },
          {
            label: "Web Development",
            title: "Web Development",
            description: "We build fast, secure and scalable platforms that turn visitors into business opportunities.",
            benefits: ["Corporate sites", "Landing pages", "E-commerce", "Custom portals"],
          },
          {
            label: "Digital Strategy",
            title: "Digital Strategy",
            description: "We design growth roadmaps with technology, automation and positioning to accelerate results.",
            benefits: ["Digital roadmap", "Priorities", "Scalability", "Growth"],
          },
          {
            label: "Smart SEO",
            title: "Smart SEO",
            description: "We optimize architecture, content and performance so your brand gains organic visibility.",
            benefits: ["Technical SEO", "Local SEO", "Strategic content", "Continuous measurement"],
          },
          {
            label: "Premium UX",
            title: "Premium UX Experience",
            description: "We create clean, futuristic and easy-to-use interfaces so every visit becomes trust.",
            benefits: ["Premium design", "Clarity", "Trust", "Interaction"],
          },
          {
            label: "Data Analytics",
            title: "Data Analytics",
            description: "We turn scattered data into clear indicators, executive dashboards and actionable decisions.",
            benefits: ["Dashboards", "KPIs", "Business Intelligence", "Reports"],
          },
          {
            label: "Commercial Conversion",
            title: "Commercial Conversion",
            description: "We optimize forms, messages and calls to action to turn traffic into real opportunities.",
            benefits: ["Leads", "Funnels", "CTA", "Follow-up"],
          },
          {
            label: "CRM Automation",
            title: "CRM Automation",
            description: "We connect sales, follow-up and support into intelligent flows that save time and improve response.",
            benefits: ["Sales funnel", "Lead scoring", "WhatsApp", "Automated reports"],
          },
          {
            label: "Cloud Integrations",
            title: "Cloud Integrations",
            description: "We connect tools, APIs and cloud services so your digital operation works as one system.",
            benefits: ["APIs", "Cloudflare", "Google", "Automation"],
          },
          {
            label: "Custom Software",
            title: "Custom Software",
            description: "We design custom business systems to operate, integrate data and scale critical processes.",
            benefits: ["ERP", "CRM", "APIs", "Dashboards"],
          },
        ]
      : hologramNodes.map(({ label, title, description, benefits }) => ({ label, title, description, benefits }));
  const visualNodes = hologramNodes.map((node, index) => ({ ...node, ...nodeText[index] }));
  const visualStatus =
    language === "en"
      ? [
          ["AI operational", "98%", Bot],
          ["Servers", "100%", Server],
          ["Security", "99%", ShieldCheck],
          ["Automations", "96%", MonitorCog],
          ["Performance", "97%", Gauge],
        ]
      : systemStatus;
  const visualActivity =
    language === "en"
      ? [
          ["New project started", "Bogota, Colombia"],
          ["Automation executed", "Madrid, Spain"],
          ["SEO report generated", "Mexico City, MX"],
          ["System updated", "Cloudflare Edge"],
        ]
      : activityFeed;
  const visualText =
    language === "en"
      ? {
          portal: "Nexus Portal",
          core: "AI",
          more: "Explore services",
          system: "System status",
          online: "Online",
          activity: "Real-time activity",
          active: "Nexus AI active 24/7",
          activeText: "Monitoring, optimizing and scaling your growth.",
        }
      : {
          portal: "Portal Nexus",
          core: "IA",
          more: "Conocer más",
          system: "Estado del sistema",
          online: "En linea",
          activity: "Actividad en tiempo real",
          active: "Nexus IA activa 24/7",
          activeText: "Monitoreando, optimizando y escalando tu crecimiento.",
  };
  const active = visualNodes[activeNode];
  const ActiveIcon = active.icon;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivation(true);
      setActiveNode((current) => (current + 1) % hologramNodes.length);
      window.setTimeout(() => setActivation(false), 2600);
    }, 10000);
    const activityTimer = window.setInterval(() => {
      setActivityIndex((current) => (current + 1) % activityFeed.length);
    }, 3200);

    return () => {
      window.clearInterval(timer);
      window.clearInterval(activityTimer);
    };
  }, []);

  const selectNode = (index: number) => {
    setActiveNode(index);
    setActivation(true);
    window.setTimeout(() => setActivation(false), 1800);
  };

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="relative"
      >
        <div className="hero-mesh absolute -inset-8 opacity-90 blur-2xl" />
        <div
          data-portal-version="mobile-v2"
          className={`ai-hologram nexus-stage relative h-[calc(100vh-4rem)] min-h-[680px] w-full overflow-hidden border-y border-dyd-cyan/15 bg-dyd-ink/70 shadow-[inset_0_1px_0_rgba(18,199,232,0.16),inset_0_-1px_0_rgba(18,199,232,0.12)] backdrop-blur-xl ${
            activation ? "is-activating" : ""
          }`}
        >
          <div className="absolute left-4 top-4 z-20 rounded-md border border-dyd-cyan/25 bg-dyd-ink/75 px-3 py-2 text-xs uppercase tracking-[0.2em] text-dyd-cyan">
            {visualText.portal}
          </div>

          <div className="absolute right-4 top-4 z-20 rounded-md border border-dyd-silver/15 bg-dyd-silver/5 px-3 py-2 text-xs text-dyd-text">
            D&D WEB Ops
          </div>

        <svg className="holo-lines pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="holo-line" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#0B4DFF" stopOpacity="0.22" />
              <stop offset="55%" stopColor="#12C7E8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#D8E2EE" stopOpacity="0.34" />
            </linearGradient>
          </defs>
          {hologramNodes.map((node, index) => (
            <line
              key={node.id}
              x1="43"
              y1="43"
              x2={node.dot.x}
              y2={node.dot.y}
              className={`holo-connection ${index === activeNode ? "is-active" : ""}`}
              stroke="url(#holo-line)"
              strokeWidth={index === activeNode ? "0.42" : "0.22"}
            />
          ))}
        </svg>

        <div className="holo-particles absolute inset-0 z-0">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="holo-particle"
              style={{
                ["--i" as string]: index,
                ["--mx" as string]: "0px",
                ["--my" as string]: "0px",
              }}
            />
          ))}
        </div>

        <div className="holo-core-wrap absolute left-1/2 top-[42%] z-10 -translate-x-1/2 -translate-y-1/2 2xl:left-[47%]">
          <div className="holo-orbit orbit-one" />
          <div className="holo-orbit orbit-two" />
          <div className="holo-orbit orbit-three" />
          <div className="holo-core">
            <div className="holo-core-inner">
              <Bot size={54} />
              <strong>NEXUS</strong>
              <span>{visualText.core}</span>
            </div>
          </div>
          <div className="holo-wave" />
        </div>

        <div className="nexus-portal absolute left-1/2 top-[68%] z-10 -translate-x-1/2 2xl:left-[47%]">
          <div className="portal-beam" />
          <div className="portal-ring ring-a" />
          <div className="portal-ring ring-b" />
          <div className="portal-ring ring-c" />
        </div>

        {visualNodes.map((node, index) => {
          const NodeIcon = node.icon;

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => selectNode(index)}
              className={`holo-node desktop-holo-node absolute z-40 ${node.position} ${index === activeNode ? "is-selected" : "is-dimmed"}`}
            >
              <NodeIcon size={22} aria-hidden="true" />
              <span>{node.label}</span>
            </button>
          );
        })}

        <div className="mobile-holo-nodes z-30 hidden">
          {visualNodes.slice(0, 8).map((node, index) => {
            const NodeIcon = node.icon;

            return (
              <button
                key={node.id}
                type="button"
                onClick={() => selectNode(index)}
                className={`holo-node ${index === activeNode ? "is-selected" : "is-dimmed"}`}
              >
                <NodeIcon size={18} aria-hidden="true" />
                <span>{node.label}</span>
              </button>
            );
          })}
        </div>

        <div className="nexus-detail-card absolute bottom-4 left-4 z-30 w-[min(390px,calc(100%-2rem))]">
          <div className="rounded-lg border border-dyd-cyan/20 bg-dyd-ink/80 p-4 shadow-2xl backdrop-blur-xl">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-dyd-cyan">
              <ActiveIcon size={20} />
              {active.title}
            </div>
            <p className="text-sm leading-6 text-dyd-text">{active.description}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {active.benefits.map((benefit) => (
                <span key={benefit} className="flex items-center gap-2 rounded-md border border-dyd-silver/15 bg-dyd-silver/[0.05] px-2 py-1.5 text-xs text-white">
                  <CheckCircle2 size={14} className="shrink-0 text-dyd-cyan" />
                  {benefit}
                </span>
              ))}
            </div>
            <a href="#servicios" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-4 text-sm font-semibold">
              {visualText.more}
            </a>
          </div>
        </div>

        <aside className="nexus-side-panel absolute right-4 top-[76px] z-30 hidden w-[245px] rounded-lg border border-dyd-cyan/20 bg-dyd-ink/80 p-4 shadow-2xl backdrop-blur-xl 2xl:block">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dyd-cyan">{visualText.system}</p>
            <span className="rounded-full bg-dyd-silver/15 px-2 py-1 text-[10px] font-semibold text-dyd-silver">{visualText.online}</span>
          </div>
          <div className="space-y-3">
            {visualStatus.map(([label, value, Icon]) => (
              <div key={label as string}>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 text-dyd-text">
                    <Icon size={14} className="text-dyd-cyan" />
                    {label as string}
                  </span>
                  <span className="font-semibold text-white">{value as string}</span>
                </div>
                <div className="h-1.5 rounded-full bg-dyd-silver/10">
                  <div className="status-bar h-1.5 rounded-full bg-gradient-to-r from-dyd-blue to-dyd-cyan" style={{ width: value as string }} />
                </div>
              </div>
            ))}
          </div>
        </aside>

        <aside className="nexus-activity absolute bottom-4 right-4 z-30 hidden w-[245px] rounded-lg border border-dyd-cyan/20 bg-dyd-ink/80 p-4 shadow-2xl backdrop-blur-xl 2xl:block">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-dyd-cyan">{visualText.activity}</p>
          <div className="space-y-2">
            {visualActivity.map(([event, location], index) => (
              <div key={event} className={`rounded-md border border-dyd-silver/15 bg-dyd-silver/[0.05] p-2.5 ${index === activityIndex ? "activity-active" : ""}`}>
                <p className="text-xs font-semibold text-white">{event}</p>
                <p className="mt-1 text-[11px] text-dyd-text">{location}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-md border border-dyd-cyan/20 bg-dyd-cyan/10 p-3">
            <p className="text-xs font-semibold text-white">{visualText.active}</p>
            <p className="mt-1 text-[11px] leading-4 text-dyd-text">{visualText.activeText}</p>
            <div className="activity-graph mt-2 h-7" />
          </div>
        </aside>
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("es");
  const [contactSent, setContactSent] = useState(false);
  const [contactError, setContactError] = useState(false);
  const copy = siteCopy[language];
  const updateLanguage = (item: Language) => {
    setLanguage(item);
    window.localStorage.setItem("dydweb-language", item);
  };

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("dydweb-language");
    if (savedLanguage === "es" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setContactSent(false);
    setContactError(false);

    const stored = await submitLeadToSheets({
      type: "contact",
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      whatsapp: String(formData.get("whatsapp") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      budget: String(formData.get("budget") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      page: typeof window !== "undefined" ? window.location.href : "DYDWEB website",
    });

    if (stored) {
      setContactSent(true);
      event.currentTarget.reset();
    } else {
      setContactError(true);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-dyd-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-dyd-silver/15 bg-dyd-ink/82 shadow-[0_14px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center">
            <span className="relative block h-12 w-40 overflow-hidden rounded-md border border-dyd-cyan/20 bg-dyd-black/70">
              <Image
                src="/logo-dydweb-nexus-header-wide.png"
                alt="DYDWEB"
                fill
                priority
                sizes="160px"
                className="object-contain p-1"
              />
            </span>
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            {menu.map(([, id], index) => (
              <a key={id} href={`#${id}`} className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:bg-dyd-silver/10 hover:text-white">
                {copy.menu[index]}
              </a>
            ))}
            <a href="/nosotros" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:bg-dyd-silver/10 hover:text-white">
              {copy.pageLinks.about}
            </a>
            <a href="/servicios" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:bg-dyd-silver/10 hover:text-white">
              {copy.pageLinks.packages}
            </a>
            <a href="/preguntas" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:bg-dyd-silver/10 hover:text-white">
              {copy.pageLinks.questions}
            </a>
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:bg-dyd-silver/10 hover:text-white"
              >
                {copy.pageLinks.more} <ChevronDown size={15} />
              </button>
              <div className="invisible absolute right-0 top-full z-50 w-56 translate-y-2 rounded-lg border border-dyd-silver/15 bg-dyd-ink/95 p-2 opacity-0 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {moreMenu.map(([, id], index) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:bg-dyd-cyan/10 hover:text-white"
                  >
                    {copy.moreMenu[index]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden items-center rounded-md border border-dyd-silver/15 bg-dyd-silver/5 p-1 lg:flex" aria-label={copy.languageLabel}>
            {(["es", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => updateLanguage(item)}
                className={`h-8 rounded px-2.5 text-xs font-semibold transition ${
                  language === item ? "bg-dyd-cyan text-dyd-ink" : "text-dyd-text hover:text-white"
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#contacto" className="hidden rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 lg:inline-flex">
            {copy.quote}
          </a>
          <a href="#agendar" className="hidden rounded-md border border-dyd-cyan/35 px-4 py-2 text-sm font-semibold text-dyd-silver transition hover:bg-dyd-cyan hover:text-dyd-ink xl:inline-flex">
            {copy.scheduleShort}
          </a>
          <button
            aria-label={copy.openMenu}
            className="grid h-10 w-10 place-items-center rounded-md border border-dyd-silver/20 text-dyd-silver lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {open ? (
          <div className="border-t border-dyd-silver/15 bg-dyd-ink/95 px-4 py-4 lg:hidden">
            <div className="mb-3 flex rounded-md border border-dyd-silver/15 bg-dyd-silver/5 p-1">
              {(["es", "en"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => updateLanguage(item)}
                  className={`h-9 flex-1 rounded text-xs font-semibold transition ${
                    language === item ? "bg-dyd-cyan text-dyd-ink" : "text-dyd-text"
                  }`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
            {menu.map(([, id], index) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-sm text-dyd-text hover:bg-dyd-silver/10 hover:text-white">
                {copy.menu[index]}
              </a>
            ))}
            <a href="/nosotros" onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-sm text-dyd-text hover:bg-dyd-silver/10 hover:text-white">
              {copy.pageLinks.about}
            </a>
            <a href="/servicios" onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-sm text-dyd-text hover:bg-dyd-silver/10 hover:text-white">
              {copy.pageLinks.packages}
            </a>
            <a href="/preguntas" onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-sm text-dyd-text hover:bg-dyd-silver/10 hover:text-white">
              {copy.pageLinks.questions}
            </a>
            <a href="#agendar" onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-sm text-dyd-text hover:bg-dyd-silver/10 hover:text-white">
              {copy.scheduleShort}
            </a>
            <div className="mt-2 border-t border-dyd-silver/10 pt-2">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-dyd-cyan">{copy.pageLinks.more}</p>
              {moreMenu.map(([, id], index) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2.5 text-sm text-dyd-text hover:bg-dyd-silver/10 hover:text-white">
                  {copy.moreMenu[index]}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <section id="inicio" className="relative pt-16">
        <div className="grid-surface absolute inset-0 h-[58rem]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-none flex-col gap-12 px-3 pb-16 pt-0 sm:px-5 lg:px-8">
          <HeroVisual language={language} />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-dyd-cyan/35 bg-dyd-cyan/10 px-3 py-2 text-sm text-dyd-cyan">
              <Sparkles size={16} />
              {copy.heroBadge}
            </div>
            <h1 className="text-balance mx-auto max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
              {copy.heroBefore}{" "}
              <span className="bg-gradient-to-r from-dyd-blue via-dyd-cyan to-dyd-royal bg-clip-text text-transparent">
                {copy.heroHighlight}
              </span>{" "}
              {copy.heroAfter}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-dyd-text md:text-lg">{copy.heroText}</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="#contacto">
                {copy.primaryCta} <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink href="#casos" variant="secondary">
                {copy.secondaryCta} <ChevronRight size={18} />
              </ButtonLink>
            </div>
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map(([value], index) => (
                <div key={copy.stats[index]} className="premium-card rounded-lg p-3">
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="mt-1 text-sm text-dyd-text">{copy.stats[index]}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="glass flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-lg px-5 py-4 text-sm text-dyd-text">
            {copy.proof.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-dyd-cyan" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={copy.sections.services.eyebrow}
            title={copy.sections.services.title}
            text={copy.sections.services.text}
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {copy.services.map(({ icon: Icon, title, items }) => (
              <article key={title} className="premium-card group rounded-lg p-6 transition hover:-translate-y-1 hover:border-dyd-cyan/50">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-md border border-dyd-cyan/25 bg-dyd-cyan/10 text-dyd-cyan transition group-hover:bg-dyd-cyan group-hover:text-dyd-ink">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-dyd-text">
                      <CheckCircle2 size={16} className="shrink-0 text-dyd-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 rounded-lg border border-dyd-cyan/20 bg-dyd-panel/70 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">{copy.servicesCtaTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-dyd-text">{copy.servicesCtaText}</p>
            </div>
            <a href="/servicios" className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md border border-dyd-cyan/35 px-5 text-sm font-semibold text-dyd-silver transition hover:bg-dyd-cyan hover:text-dyd-ink">
              {copy.servicesCtaButton} <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <QuickQuote copy={copy} language={language} />

      <section id="soluciones" className="border-y border-dyd-silver/15 bg-dyd-panel/70 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={copy.sections.solutions.eyebrow}
            title={copy.sections.solutions.title}
            text={copy.sections.solutions.text}
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {copy.sectors.map(([sector, useCase]) => (
              <div key={sector} className="premium-card rounded-lg p-5">
                <BriefcaseBusiness className="mb-4 text-dyd-blue" />
                <h3 className="font-semibold">{sector}</h3>
                <p className="mt-3 text-sm leading-6 text-dyd-text">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={copy.sections.trust.eyebrow}
            title={copy.sections.trust.title}
            text={copy.sections.trust.text}
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {copy.trustCards.map(([title, text], index) => {
              const TrustIcon = [ShieldCheck, Gauge, UsersRound, MessageCircle][index];
              return (
                <article key={title} className="premium-card group rounded-lg p-5 transition hover:-translate-y-1 hover:border-dyd-cyan/50">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-md border border-dyd-cyan/25 bg-dyd-cyan/10 text-dyd-cyan transition group-hover:bg-dyd-cyan group-hover:text-dyd-ink">
                      <TrustIcon size={22} />
                    </div>
                    <span className="text-xs font-semibold text-dyd-silver/45">NEXUS 0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-dyd-text">{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="casos" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={copy.sections.cases.eyebrow}
            title={copy.sections.cases.title}
            text={copy.sections.cases.text}
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {copy.cases.map((item, index) => (
              <article key={item.client} className="premium-card overflow-hidden rounded-lg p-0">
                <div className="border-b border-dyd-silver/10 bg-gradient-to-br from-dyd-blue/18 via-dyd-cyan/10 to-transparent p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{item.client}</h3>
                    <Star className="text-dyd-blue" size={20} />
                  </div>
                  <div className="rounded-lg border border-dyd-silver/15 bg-dyd-black/55 p-3">
                    <div className="mb-3 flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-dyd-cyan" />
                      <span className="h-2 w-2 rounded-full bg-dyd-blue" />
                      <span className="h-2 w-2 rounded-full bg-dyd-silver/45" />
                    </div>
                    <div className="grid gap-2">
                      <div className="h-2 rounded-full bg-dyd-silver/15" />
                      <div className="grid grid-cols-[1fr_0.5fr] gap-2">
                        <div className="h-16 rounded-md border border-dyd-cyan/20 bg-dyd-cyan/10" />
                        <div className="grid gap-2">
                          <div className="h-7 rounded-md bg-dyd-blue/25" />
                          <div className="h-7 rounded-md bg-dyd-silver/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-5 rounded-md border border-dyd-cyan/25 bg-dyd-cyan/10 p-4">
                    <p className="text-3xl font-semibold text-white">{copy.caseMetrics[index][0]}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-dyd-cyan">{copy.caseMetrics[index][1]}</p>
                  </div>
                  <p className="text-sm leading-6 text-dyd-text"><strong className="text-white">{copy.caseLabels.problem}:</strong> {item.problem}</p>
                  <p className="mt-3 text-sm leading-6 text-dyd-text"><strong className="text-white">{copy.caseLabels.solution}:</strong> {item.solution}</p>
                  <p className="mt-3 text-sm leading-6 text-dyd-text"><strong className="text-white">{copy.caseLabels.tech}:</strong> {item.tech}</p>
                  <div className="mt-5 rounded-md border border-dyd-silver/15 bg-dyd-silver/[0.04] p-4 text-sm font-semibold text-dyd-silver">{item.result}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="noticias" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={copy.sections.news.eyebrow}
            title={copy.sections.news.title}
            text={copy.sections.news.text}
          />
          <div className="mb-6 flex flex-col gap-3 md:flex-row">
            <label className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dyd-text" size={18} />
              <input
                className="h-12 w-full rounded-md border border-dyd-silver/15 bg-dyd-ink/55 pl-12 pr-4 text-white outline-none placeholder:text-dyd-text focus:border-dyd-cyan"
                placeholder={copy.searchPlaceholder}
              />
            </label>
            <button className="h-12 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-5 text-sm font-semibold text-white">
              {copy.searchButton}
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.news.map(([category, title]) => (
              <article key={title} className="premium-card rounded-lg p-6">
                <span className="rounded-md bg-dyd-cyan/10 px-3 py-1 text-xs font-semibold text-dyd-cyan">{category}</span>
                <h3 className="mt-5 text-xl font-semibold leading-7">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-dyd-text">{copy.newsCardText}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-dyd-silver/15 bg-dyd-panel/70 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={copy.sections.admin.eyebrow}
            title={copy.sections.admin.title}
            text={copy.sections.admin.text}
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              [LockKeyhole, copy.adminCards[0][0], copy.adminCards[0][1]],
              [BarChart3, copy.adminCards[1][0], copy.adminCards[1][1]],
              [ShieldCheck, copy.adminCards[2][0], copy.adminCards[2][1]],
            ].map(([Icon, title, text]) => (
              <div key={title as string} className="premium-card rounded-lg p-6">
                <Icon className="mb-4 text-dyd-cyan" />
                <h3 className="text-xl font-semibold">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-dyd-text">{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-lg border border-dyd-cyan/20 bg-dyd-panel/70 p-6 shadow-glow md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">{copy.sections.faq.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{copy.faqCtaTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-dyd-text">{copy.faqCtaText}</p>
          </div>
          <a href="/preguntas" className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110">
            {copy.faqCtaButton} <ChevronRight size={18} />
          </a>
        </div>
      </section>

      <ScheduleMeeting copy={copy} />

      <section id="contacto" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">{copy.contactEyebrow}</p>
            <h2 className="text-3xl font-semibold md:text-5xl">{copy.contactTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-dyd-text">{copy.contactText}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-md border border-dyd-silver/15 bg-dyd-silver/5 px-3 py-2 text-sm font-medium text-dyd-text">{tech}</span>
              ))}
            </div>
          </div>
          <form onSubmit={handleContactSubmit} className="premium-card grid gap-3 rounded-lg p-6">
            <div className="grid gap-3 md:grid-cols-2">
              {copy.contactFields.map((field, index) => (
                <input
                  key={field}
                  name={["name", "company", "email", "whatsapp"][index]}
                  required={index === 0 || index === 2}
                  className="h-12 rounded-md border border-dyd-silver/15 bg-dyd-ink/55 px-4 text-white outline-none placeholder:text-dyd-text focus:border-dyd-cyan"
                  placeholder={field}
                />
              ))}
            </div>
            <select name="service" required className="h-12 rounded-md border border-dyd-silver/15 bg-dyd-ink/55 px-4 text-white outline-none placeholder:text-dyd-text focus:border-dyd-cyan">
              <option value="">{copy.serviceInterest}</option>
              {copy.serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <input name="budget" className="h-12 rounded-md border border-dyd-silver/15 bg-dyd-ink/55 px-4 text-white outline-none placeholder:text-dyd-text focus:border-dyd-cyan" placeholder={copy.budgetPlaceholder} />
            <textarea name="message" required className="min-h-32 rounded-md border border-dyd-silver/15 bg-dyd-ink/55 px-4 py-3 text-white outline-none placeholder:text-dyd-text focus:border-dyd-cyan" placeholder={copy.messagePlaceholder} />
            {contactSent ? (
              <p className="rounded-md border border-dyd-cyan/25 bg-dyd-cyan/10 px-3 py-2 text-sm font-medium text-dyd-silver">
                {copy.contactSuccess}
              </p>
            ) : null}
            {contactError ? (
              <p className="rounded-md border border-red-400/35 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-100">
                {copy.contactError}
              </p>
            ) : null}
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan font-semibold text-white">
              {copy.contactButton} <MessageSquareText size={18} />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-dyd-silver/15 bg-dyd-ink/78 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <span className="relative block h-12 w-40 overflow-hidden rounded-md border border-dyd-cyan/20 bg-dyd-black/70">
              <Image src="/logo-dydweb-nexus-header-wide.png" alt="DYDWEB" fill sizes="160px" className="object-contain p-1" />
            </span>
            <p className="mt-4 text-sm leading-6 text-dyd-text">{copy.footerTagline}</p>
            <p className="mt-3 text-xs leading-5 text-dyd-text">{copy.footerB}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-dyd-cyan">{copy.footerQuickLinks}</h3>
            <div className="mt-4 grid gap-2 text-sm text-dyd-text">
              <a href="#inicio" className="hover:text-white">{copy.menu[0]}</a>
              <a href="/nosotros" className="hover:text-white">{copy.pageLinks.about}</a>
              <a href="/servicios" className="hover:text-white">{copy.pageLinks.packages}</a>
              <a href="/preguntas" className="hover:text-white">{copy.pageLinks.questions}</a>
              <a href="#agendar" className="hover:text-white">{copy.scheduleShort}</a>
              <a href="#contacto" className="hover:text-white">{copy.menu[3]}</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-dyd-cyan">{copy.footerServices}</h3>
            <div className="mt-4 grid gap-2 text-sm text-dyd-text">
              {copy.services.slice(0, 4).map((service) => (
                <a key={service.title} href="#servicios" className="hover:text-white">{service.title}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-dyd-cyan">{copy.footerContact}</h3>
            <p className="mt-4 text-sm text-dyd-text">WhatsApp +57 350 862 9779</p>
            <p className="mt-2 text-sm text-dyd-text">Colombia</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(copy.chatbot.leadIntro)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-4 text-sm font-semibold text-white shadow-glow"
            >
              {copy.footerAdvisor} <MessageCircle size={17} />
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-dyd-silver/10 pt-5 text-xs text-dyd-text md:flex-row md:items-center md:justify-between">
          <p>{copy.footerA}</p>
          <p>DYDWEB Nexus</p>
        </div>
      </footer>

      <WhatsAppChatbot language={language} />
    </main>
  );
}

