"use client";

import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  CirclePlay,
  ChevronRight,
  CircleDollarSign,
  Code2,
  Factory,
  Gauge,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Landmark,
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
  ShoppingBag,
  Star,
  Stethoscope,
  Ticket,
  TrendingUp,
  UsersRound,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  ["Desarrollo Web", "Desarrollo web empresarial: la guía definitiva para hacer crecer tu empresa en 2026", "/noticias/desarrollo-web-empresarial"],
  ["Inteligencia artificial", "Chatbots para atender consultas y dar seguimiento por WhatsApp", "/chatbots-whatsapp-empresas"],
  ["SEO", "SEO técnico para que tus clientes encuentren tu negocio", "/seo-tecnico-para-negocios"],
];

const sectorIcons = [GraduationCap, Stethoscope, ShoppingBag, Factory, Ticket, Landmark, HeartHandshake];
const caseImages = [
  "/dydweb-proyecto-comercio.webp",
  "/dydweb-proyecto-educacion.webp",
  "/dydweb-proyecto-fundacion.webp",
];

const hologramNodes = [
  {
    id: "web",
    icon: Globe2,
    label: "Desarrollo Web",
    title: "Desarrollo Web",
    description: "Construimos plataformas rápidas, seguras y escalables para convertir visitantes en oportunidades comerciales.",
    benefits: ["Sitios corporativos", "Landing pages", "E-commerce", "Portales a medida"],
    position: "left-[30%] top-[30%]",
    dot: { x: 34, y: 38 },
  },
  {
    id: "software",
    icon: Code2,
    label: "Desarrollo de Software",
    title: "Desarrollo de Software",
    description: "Diseñamos sistemas empresariales personalizados para operar, integrar datos y escalar procesos críticos.",
    benefits: ["ERP", "CRM", "APIs", "Dashboards"],
    position: "left-[30%] bottom-[35%]",
    dot: { x: 36, y: 61 },
  },
  {
    id: "ia",
    icon: Bot,
    label: "IA & Agentes",
    title: "IA & Agentes",
    description: "Automatizamos procesos empresariales utilizando agentes inteligentes y herramientas de IA generativa.",
    benefits: ["Automatización", "Agentes IA", "Integraciones", "Procesamiento de datos"],
    position: "left-1/2 top-[10%] -translate-x-1/2",
    dot: { x: 50, y: 18 },
  },
  {
    id: "automation",
    icon: MonitorCog,
    label: "Automatización",
    title: "Automatización",
    description: "Conectamos ventas, seguimiento y atención en flujos inteligentes que ahorran tiempo y mejoran respuesta.",
    benefits: ["Embudo comercial", "Lead scoring", "WhatsApp", "Reportes automáticos"],
    position: "right-[30%] bottom-[35%]",
    dot: { x: 64, y: 61 },
  },
  {
    id: "security",
    icon: ShieldCheck,
    label: "Ciberseguridad",
    title: "Ciberseguridad",
    description: "Protegemos plataformas digitales con buenas prácticas, rendimiento estable y arquitectura preparada para crecer.",
    benefits: ["Protección", "Buenas prácticas", "Confianza", "Continuidad"],
    position: "right-[24%] top-[26%]",
    dot: { x: 67, y: 35 },
  },
  {
    id: "cloud",
    icon: Layers3,
    label: "Cloud",
    title: "Cloud",
    description: "Conectamos herramientas, APIs y servicios en la nube para que tu operación digital trabaje como un sistema.",
    benefits: ["APIs", "Cloudflare", "Google", "Automatización"],
    position: "right-[24%] bottom-[27%]",
    dot: { x: 67, y: 67 },
  },
  {
    id: "data",
    icon: BarChart3,
    label: "Data & Analytics",
    title: "Data & Analytics",
    description: "Convertimos datos dispersos en indicadores claros, tableros ejecutivos y decisiones accionables.",
    benefits: ["Dashboards", "KPIs", "Business Intelligence", "Reportes"],
    position: "left-1/2 bottom-[21%] -translate-x-1/2",
    dot: { x: 50, y: 72 },
  },
  {
    id: "marketing",
    icon: TrendingUp,
    label: "Marketing Digital",
    title: "Marketing Digital",
    description: "Optimizamos visibilidad, contenidos y conversión para transformar tráfico en oportunidades comerciales.",
    benefits: ["SEO", "Contenido", "Conversión", "Medición"],
    position: "left-[24%] top-[26%]",
    dot: { x: 33, y: 35 },
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

type VantaEffect = {
  destroy: () => void;
};

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

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
    quote: "Cotizar proyecto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    pageLinks: { about: "Quiénes Somos", packages: "Paquetes", questions: "Preguntas" },
    menu: ["Inicio", "Servicios", "Proyectos", "Contacto"],
    solutionsLink: "Soluciones",
    resourcesLink: "Recursos",
    companyLink: "Empresa",
    heroBadge: "Desarrollo · Web · Software · IA",
    heroBefore: "Consigue más clientes con",
    heroHighlight: "sitios web, software e IA",
    heroAfter: "que trabajan por ti",
    heroText: "Creamos soluciones digitales a la medida para simplificar tus procesos, impulsar tus ventas y hacer crecer tu empresa.",
    primaryCta: "Solicitar asesoría",
    secondaryCta: "Ver proyectos",
    heroImageAlt: "Portátil y móvil con una vista de ejemplo de un panel de ventas",
    stats: ["soluciones entregadas", "sectores atendidos", "satisfacción proyectada", "operación digital"],
    proof: ["Software", "IA", "SEO", "Automatización", "Branding", "Audiovisual", "Cloudflare", "PostgreSQL"],
    sections: {
      services: {
        eyebrow: "Nuestras soluciones",
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
        title: "Seguridad, velocidad y seguimiento comercial",
        text: "Cuidamos la operación de tu plataforma desde el lanzamiento y te ayudamos a mejorarla a medida que crece tu negocio.",
      },
      cases: {
        eyebrow: "Proyectos",
        title: "Proyectos diseñados alrededor de resultados medibles",
        text: "Cada caso presenta el problema, la solución, la tecnología útilizada y el impacto obtenido.",
      },
      news: {
        eyebrow: "Centro de noticias",
        title: "Recursos para tomar mejores decisiones digitales",
        text: "Guías sobre desarrollo web, atención al cliente y posicionamiento para que elijas el siguiente paso con más claridad.",
      },
      admin: {
        eyebrow: "Portal y administración",
        title: "Toda tu operación en un solo lugar",
        text: "Reúne proyectos, clientes y reportes en un portal con acceso privado para tu equipo.",
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
      goalLabel: "¿Qué necesitas construir?",
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
    exploreNews: "Explorar noticias",
    caseDetails: "Ver detalles",
    caseImageCaption: "Vista ilustrativa",
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
    contactText: "Cuéntanos qué necesitas y en qué etapa está tu proyecto. Te ayudaremos a definir un primer paso.",
    faqCtaTitle: "Resuelve tus dudas antes de iniciar",
    faqCtaText: "Consulta respuestas sobre tiempos, costos e integraciones antes de iniciar tu proyecto.",
    faqCtaButton: "Ver preguntas frecuentes",
    servicesCtaTitle: "¿Quieres comparar servicios y paquetes?",
    servicesCtaText: "Revisa alcances, rutas sugeridas y entregables antes de elegir el siguiente paso.",
    servicesCtaButton: "Ver servicios y paquetes",
    contactFields: ["Nombre", "Empresa", "Correo", "WhatsApp"],
    serviceInterest: "Servicio de interés",
    serviceOptions: ["Desarrollo de software", "Inteligencia artificial", "SEO", "Diseño y audiovisual"],
    budgetPlaceholder: "Presupuesto estimado",
    messagePlaceholder: "Mensaje",
    contactButton: "Quiero transformar mi negocio",
    contactSuccess: "Gracias. Recibimos tu información y la enviaremos al equipo comercial.",
    contactError: "No pudimos enviar tu mensaje. Inténtalo de nuevo o contáctanos por WhatsApp.",
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
    quote: "Get a project quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    pageLinks: { about: "About Us", packages: "Packages", questions: "FAQ" },
    menu: ["Home", "Services", "Projects", "Contact"],
    solutionsLink: "Solutions",
    resourcesLink: "Resources",
    companyLink: "Company",
    heroBadge: "Development · Web · Software · AI",
    heroBefore: "Get more customers with",
    heroHighlight: "websites, software and AI",
    heroAfter: "that work for you",
    heroText: "We build digital solutions around your business to simplify your work, boost sales and help you grow.",
    primaryCta: "Talk to an advisor",
    secondaryCta: "View projects",
    heroImageAlt: "Laptop and phone showing a sample sales dashboard",
    stats: ["solutions delivered", "sectors served", "projected satisfaction", "digital operation"],
    proof: ["Software", "AI", "SEO", "Automation", "Branding", "Audiovisual", "Cloudflare", "PostgreSQL"],
    sections: {
      services: {
        eyebrow: "Our solutions",
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
        title: "Security, speed and sales tracking",
        text: "We take care of your platform from launch and help you improve it as your business grows.",
      },
      cases: {
        eyebrow: "Success cases",
        title: "Projects designed around measurable outcomes",
        text: "Each case presents the problem, solution, technology used and business impact.",
      },
      news: {
        eyebrow: "News hub",
        title: "Resources for better digital decisions",
        text: "Guides to web development, customer service and search visibility to help you plan your next step.",
      },
      admin: {
        eyebrow: "Portal and administration",
        title: "Manage your work in one place",
        text: "Bring projects, customers and reports together in a private portal for your team.",
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
      ["Web Development", "Enterprise web development: the guide to growing your company in 2026", "/noticias/desarrollo-web-empresarial"],
      ["Artificial intelligence", "Chatbots for customer support and follow-up on WhatsApp", "/chatbots-whatsapp-empresas"],
      ["SEO", "Technical SEO to help customers find your business", "/seo-tecnico-para-negocios"],
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
    exploreNews: "Explore articles",
    caseDetails: "View details",
    caseImageCaption: "Illustrative preview",
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
    contactText: "Tell us what you need and where you are in the process. We'll help you figure out the first step.",
    faqCtaTitle: "Clear your questions before starting",
    faqCtaText: "Find answers about timelines, costs and integrations before you start your project.",
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
    contactError: "We couldn't send your message. Please try again or contact us on WhatsApp.",
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
          className="home-surface max-h-[calc(100dvh-6rem)] w-[min(25rem,calc(100vw-2.5rem))] overflow-y-auto shadow-[0_12px_40px_rgba(28,70,122,0.18)]"
        >
          <div className="border-b border-[#e3edf8] bg-[#f3f8ff] p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-extrabold">{chat.title}</h3>
                <p className="home-muted mt-1 text-sm leading-5">{chat.text}</p>
              </div>
              <button
                type="button"
                aria-label={chat.close}
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-[#d9e7f6] bg-white text-[#215083] hover:bg-[#e7f2ff]"
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
                  className="home-choice px-2 text-left text-xs"
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
                  aria-pressed={topic === item}
                  onClick={() => setTopic(item)}
                  className="home-choice px-2 text-xs"
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
                className="home-field"
                placeholder={chat.name}
                aria-label={chat.name}
              />
              <input
                name="contact"
                required
                className="home-field"
                placeholder={chat.contact}
                aria-label={chat.contact}
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <input
                name="company"
                className="home-field"
                placeholder={chat.company}
                aria-label={chat.company}
              />
              <input
                name="budget"
                className="home-field"
                placeholder={chat.budget}
                aria-label={chat.budget}
              />
            </div>

            <textarea
              name="message"
              required
              value={messageDraft}
              onChange={(event) => setMessageDraft(event.target.value)}
              className="home-field"
              rows={3}
              placeholder={chat.message}
              aria-label={chat.message}
            />

            {sent ? (
              <p role="status" className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-900">
                {chat.success}
              </p>
            ) : null}

            <button
              type="submit"
              className="home-primary-button inline-flex min-h-12 gap-2 rounded-lg px-3 text-sm"
            >
              {chat.submit} <Send size={17} />
            </button>
          </form>
        </motion.div>
      ) : null}

      <button
        type="button"
        aria-label={open ? chat.close : chat.floating}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-12 items-center gap-2 rounded-full border border-[#c7dff8] bg-white px-1.5 text-sm font-bold text-[#0f345b] shadow-[0_6px_24px_rgba(23,81,141,0.15)] transition hover:border-[#0873e9] sm:pr-4"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0668d5] text-white">
          <MessageCircle size={19} aria-hidden="true" />
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
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className="home-kicker mb-2">{eyebrow}</p>
      <h2 className="home-heading text-balance text-[1.875rem] md:text-[2.5rem]">{title}</h2>
      <p className="home-muted mx-auto mt-3 max-w-2xl text-pretty leading-relaxed">{text}</p>
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
    <section id="proceso" className="home-section home-tint border-y border-[#e8f0f8]">
      <div className="home-container">
        <SectionHeading
          eyebrow={copy.sections.process.eyebrow}
          title={copy.sections.process.title}
          text={copy.sections.process.text}
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.processSteps.map(([title, text], index) => (
              <article key={title} className="home-surface p-5 sm:p-6">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-md bg-[#edf5ff] text-[#076bd8]" aria-hidden="true">
                  {index === 0 ? <Search size={24} /> : null}
                  {index === 1 ? <Layers3 size={24} /> : null}
                  {index === 2 ? <Code2 size={24} /> : null}
                  {index === 3 ? <Rocket size={24} /> : null}
                </div>
                <h3 className="text-lg font-extrabold">{title}</h3>
                <p className="home-muted mt-2 text-sm leading-relaxed">{text}</p>
              </article>
            ))}
          </div>

          <div id="cotizar" className="home-surface scroll-mt-20 p-5 sm:p-6">
            <h3 className="home-heading text-2xl">{copy.sections.quote.eyebrow}</h3>
            <p className="home-muted mt-2 text-sm leading-relaxed">{copy.sections.quote.text}</p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="mb-2 text-sm font-bold">{quote.goalLabel}</p>
                <div className="grid grid-cols-3 gap-2" role="group" aria-label={quote.goalLabel}>
                  {quote.goals.map(([label], index) => (
                    <button
                      key={label}
                      type="button"
                      aria-pressed={goalIndex === index}
                      onClick={() => setGoalIndex(index)}
                      className="home-choice text-xs"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-bold">{quote.urgencyLabel}</p>
                  <div className="grid grid-cols-3 gap-2" role="group" aria-label={quote.urgencyLabel}>
                    {quote.urgencies.map((item, index) => (
                      <button
                        key={item}
                        type="button"
                        aria-pressed={urgencyIndex === index}
                        onClick={() => setUrgencyIndex(index)}
                        className="home-choice text-xs"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-sm font-bold">{quote.scopeLabel}</p>
                  <div className="grid grid-cols-3 gap-2" role="group" aria-label={quote.scopeLabel}>
                    {quote.scopes.map((item, index) => (
                      <button
                        key={item}
                        type="button"
                        aria-pressed={scopeIndex === index}
                        onClick={() => setScopeIndex(index)}
                        className="home-choice text-xs"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-md border border-[#dcecff] bg-[#f2f8ff] p-4" aria-live="polite">
                <div className="flex items-center gap-3">
                  <CircleDollarSign className="shrink-0 text-[#0873e9]" aria-hidden="true" />
                  <div>
                    <p className="home-kicker">{quote.resultTitle}</p>
                    <p className="mt-1 text-xl font-extrabold">{selectedGoal[1]}</p>
                  </div>
                </div>
                <p className="home-muted mt-2 text-sm leading-relaxed">{selectedGoal[2]}</p>
                <p className="home-muted mt-1 text-xs leading-relaxed">{quote.resultNote}</p>
              </div>

              <button
                type="button"
                onClick={sendQuote}
                className="home-primary-button inline-flex min-h-12 w-full gap-2 rounded-lg px-3 text-sm"
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
    const end = new Date(start.getTime() + 20 * 60 * 1000);

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
    <section id="agendar" className="home-section home-tint border-b border-[#e8f0f8]">
      <div className="home-container grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div>
          <p className="home-kicker mb-2">{copy.scheduleEyebrow}</p>
          <h2 className="home-heading text-balance text-3xl md:text-[2.5rem]">{copy.scheduleTitle}</h2>
          <p className="home-muted mt-3 max-w-lg leading-relaxed">{copy.scheduleText}</p>
        </div>

        <form onSubmit={handleSubmit} className="home-surface grid min-w-0 gap-3 p-4 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <input name="name" required autoComplete="name" className="home-field" placeholder={copy.scheduleFields[0]} aria-label={copy.scheduleFields[0]} />
            <input name="company" autoComplete="organization" className="home-field" placeholder={copy.scheduleFields[1]} aria-label={copy.scheduleFields[1]} />
          </div>
          <input name="contact" required className="home-field" placeholder={copy.scheduleFields[2]} aria-label={copy.scheduleFields[2]} />
          <select value={service} onChange={(event) => setService(event.target.value)} className="home-field" aria-label={copy.scheduleService}>
            {copy.serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <div className="grid grid-cols-2 gap-3">
            <label className="grid min-w-0 gap-1 text-sm font-bold">
              {copy.scheduleDay}
              <input type="date" required value={date} onChange={(event) => setDate(event.target.value)} className="home-field font-normal" />
            </label>
            <label className="grid min-w-0 gap-1 text-sm font-bold">
              {copy.scheduleTime}
              <input type="time" required value={time} onChange={(event) => setTime(event.target.value)} className="home-field font-normal" />
            </label>
          </div>
          <button className="home-primary-button inline-flex min-h-12 gap-2 rounded-lg px-3 text-sm">
            {copy.scheduleButton} <CalendarDays size={18} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}

function HeroVisual({ language }: { language: Language }) {
  const [activeSolution, setActiveSolution] = useState(0);
  const [activityIndex, setActivityIndex] = useState(0);

  const content =
    language === "en"
      ? {
          eyebrow: "DYDWEB NEXUS · DIGITAL GROWTH SYSTEM",
          title: "We build the digital engine your business needs to sell, automate and scale.",
          description:
            "A premium technology partner for companies that need more than a website: strategy, software, AI, SEO, automation and data working as one system.",
          primary: "Start my project",
          secondary: "View services",
          command: "Nexus Command Center",
          commandText: "From idea to measurable digital operation.",
          active: "Active opportunity",
          live: "Live",
          system: "System status",
          activity: "Execution flow",
          metrics: [
            ["+250", "Successful projects", Rocket],
            ["+98%", "Client satisfaction", UsersRound],
            ["+12K", "Active automations", Bot],
            ["24/7", "AI monitoring", BarChart3],
            ["+5 years", "Building growth", Star],
          ],
          stages: ["Diagnosis", "Architecture", "Launch", "Automation", "Measurement"],
          trust: ["Fast launch", "Secure stack", "SEO foundation", "Data-driven growth"],
        }
      : {
          eyebrow: "DYDWEB NEXUS · SISTEMA DE CRECIMIENTO DIGITAL",
          title: "Construimos el motor digital que tu negocio necesita para vender, automatizar y escalar.",
          description:
            "Un socio tecnológico premium para empresas que necesitan más que una página web: estrategia, software, IA, SEO, automatización y datos trabajando como un solo sistema.",
          primary: "Empezar mi proyecto",
          secondary: "Ver servicios",
          command: "Centro de Operaciones Nexus",
          commandText: "De la idea a una operación digital medible.",
          active: "Oportunidad activa",
          live: "En vivo",
          system: "Estado del sistema",
          activity: "Flujo de ejecución",
          metrics: [
            ["+250", "Proyectos exitosos", Rocket],
            ["+98%", "Satisfacción clientes", UsersRound],
            ["+12K", "Automatizaciones activas", Bot],
            ["24/7", "IA monitoreando", BarChart3],
            ["+5 años", "Construyendo crecimiento", Star],
          ],
          stages: ["Diagnóstico", "Arquitectura", "Lanzamiento", "Automatización", "Medición"],
          trust: ["Lanzamiento rápido", "Stack seguro", "Base SEO", "Crecimiento medible"],
        };

  const solutions =
    language === "en"
      ? [
          {
            icon: Globe2,
            title: "High-converting websites",
            text: "Premium digital presence designed to build trust and capture qualified leads.",
            tags: ["Corporate web", "Landing pages", "SEO"],
          },
          {
            icon: Code2,
            title: "Custom software",
            text: "Internal platforms, portals and business systems built around your operation.",
            tags: ["Dashboards", "APIs", "CRM"],
          },
          {
            icon: Bot,
            title: "AI and automation",
            text: "Agents, workflows and intelligent follow-up that reduce manual work.",
            tags: ["Agents", "WhatsApp", "Workflows"],
          },
          {
            icon: TrendingUp,
            title: "Growth and analytics",
            text: "SEO, conversion and metrics so every decision has evidence behind it.",
            tags: ["SEO", "KPIs", "Reports"],
          },
        ]
      : [
          {
            icon: Globe2,
            title: "Webs que convierten",
            text: "Presencia digital premium diseñada para generar confianza y captar prospectos calificados.",
            tags: ["Web corporativa", "Landing pages", "SEO"],
          },
          {
            icon: Code2,
            title: "Software a medida",
            text: "Plataformas internas, portales y sistemas empresariales construidos alrededor de tu operación.",
            tags: ["Dashboards", "APIs", "CRM"],
          },
          {
            icon: Bot,
            title: "IA y automatización",
            text: "Agentes, flujos y seguimiento inteligente para reducir trabajo manual y responder más rápido.",
            tags: ["Agentes", "WhatsApp", "Flujos"],
          },
          {
            icon: TrendingUp,
            title: "Crecimiento y analítica",
            text: "SEO, conversión y métricas para que cada decisión tenga evidencia detrás.",
            tags: ["SEO", "KPIs", "Reportes"],
          },
        ];

  const status =
    language === "en"
      ? [
          ["Strategy", "98%", Rocket],
          ["Development", "100%", Code2],
          ["Automation", "96%", MonitorCog],
          ["Performance", "97%", Gauge],
        ]
      : [
          ["Estrategia", "98%", Rocket],
          ["Desarrollo", "100%", Code2],
          ["Automatización", "96%", MonitorCog],
          ["Rendimiento", "97%", Gauge],
        ];

  const activity =
    language === "en"
      ? [
          ["Digital roadmap defined", "Growth path"],
          ["Lead capture optimized", "Commercial system"],
          ["Automation deployed", "Operations"],
          ["Metrics report generated", "Decision making"],
        ]
      : [
          ["Ruta digital definida", "Crecimiento"],
          ["Captación optimizada", "Sistema comercial"],
          ["Automatización desplegada", "Operación"],
          ["Reporte de métricas generado", "Decisiones"],
        ];

  useEffect(() => {
    const solutionTimer = window.setInterval(() => {
      setActiveSolution((current) => (current + 1) % solutions.length);
    }, 4200);
    const activityTimer = window.setInterval(() => {
      setActivityIndex((current) => (current + 1) % activity.length);
    }, 3000);

    return () => {
      window.clearInterval(solutionTimer);
      window.clearInterval(activityTimer);
    };
  }, [activity.length, solutions.length]);

  const active = solutions[activeSolution];
  const ActiveIcon = active.icon;

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative">
        <div className="hero-mesh absolute -inset-8 opacity-80 blur-2xl" />
        <div className="growth-command relative overflow-hidden border-y border-dyd-cyan/15 bg-dyd-ink/80 px-4 py-10 shadow-[inset_0_1px_0_rgba(18,199,232,0.14),inset_0_-1px_0_rgba(18,199,232,0.12)] sm:px-6 lg:px-8">
          <div className="growth-command-bg" aria-hidden="true" />
          <div className="relative z-10 mx-auto grid min-h-[720px] max-w-7xl items-center gap-8 py-6 lg:grid-cols-[0.92fr_1.08fr]">
            <section className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-dyd-cyan/30 bg-dyd-cyan/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-dyd-cyan">
                <span className="h-2 w-2 rounded-full bg-dyd-cyan shadow-[0_0_14px_rgba(18,199,232,0.9)]" />
                {content.eyebrow}
              </div>

              <h1 className="text-balance text-4xl font-black leading-[1.02] text-white md:text-6xl xl:text-7xl">
                {content.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-dyd-text">
                {content.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contacto" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-5 text-sm font-bold text-white shadow-glow transition hover:brightness-110">
                  {content.primary} <ArrowRight size={18} />
                </a>
                <a href="#servicios" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-dyd-cyan/30 bg-dyd-silver/[0.04] px-5 text-sm font-bold text-dyd-silver transition hover:bg-dyd-cyan hover:text-dyd-ink">
                  {content.secondary} <ChevronRight size={18} />
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {content.trust.map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-md border border-dyd-silver/15 bg-dyd-silver/[0.05] px-3 py-2 text-sm font-semibold text-white">
                    <CheckCircle2 size={16} className="text-dyd-cyan" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="growth-console relative">
              <div className="growth-console-shell">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-dyd-cyan">{content.command}</p>
                    <p className="mt-2 text-sm text-dyd-text">{content.commandText}</p>
                  </div>
                  <span className="rounded-full bg-dyd-cyan/10 px-3 py-1 text-xs font-bold text-dyd-cyan">{content.live}</span>
                </div>

                <div className="growth-map">
                  <div className="growth-core">
                    <span>NEXUS</span>
                    <strong>CORE</strong>
                  </div>
                  {content.stages.map((stage, index) => (
                    <button
                      key={stage}
                      type="button"
                      onClick={() => setActiveSolution(index % solutions.length)}
                      className={`growth-stage stage-${index + 1} ${index % solutions.length === activeSolution ? "is-active" : ""}`}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {stage}
                    </button>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-lg border border-dyd-cyan/20 bg-dyd-black/35 p-4">
                    <div className="mb-3 flex items-center gap-2 text-dyd-cyan">
                      <ActiveIcon size={22} />
                      <p className="text-sm font-black">{active.title}</p>
                    </div>
                    <p className="text-sm leading-6 text-dyd-text">{active.text}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {active.tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-dyd-silver/15 bg-dyd-silver/[0.06] px-2.5 py-1.5 text-xs font-semibold text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-dyd-silver/15 bg-dyd-silver/[0.04] p-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-dyd-cyan">{content.system}</p>
                    <div className="space-y-3">
                      {status.map(([label, value, Icon]) => (
                        <div key={label as string}>
                          <div className="mb-1.5 flex items-center justify-between text-xs">
                            <span className="flex items-center gap-2 text-dyd-text">
                              <Icon size={14} className="text-dyd-cyan" />
                              {label as string}
                            </span>
                            <span className="font-bold text-white">{value as string}</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-dyd-silver/10">
                            <div className="status-bar h-1.5 rounded-full bg-gradient-to-r from-dyd-blue to-dyd-cyan" style={{ width: value as string }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl gap-4 pb-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="grid gap-3 md:grid-cols-4">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <button
                    key={solution.title}
                    type="button"
                    onClick={() => setActiveSolution(index)}
                    className={`solution-command-card ${index === activeSolution ? "is-active" : ""}`}
                  >
                    <Icon size={22} />
                    <span>{solution.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-lg border border-dyd-cyan/20 bg-dyd-ink/72 p-4 shadow-2xl backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dyd-cyan">{content.activity}</p>
                <span className="text-[10px] font-semibold text-dyd-text">{content.active}</span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {activity.map(([event, area], index) => (
                  <div key={event} className={`rounded-md border border-dyd-silver/15 bg-dyd-silver/[0.05] p-3 ${index === activityIndex ? "activity-active" : ""}`}>
                    <p className="text-xs font-bold text-white">{event}</p>
                    <p className="mt-1 text-[11px] text-dyd-text">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl gap-3 rounded-lg border border-dyd-cyan/20 bg-dyd-black/35 p-4 shadow-2xl backdrop-blur-xl md:grid-cols-5">
            {content.metrics.map(([value, label, Icon]) => (
              <div key={label as string} className="flex items-center gap-3 border-dyd-silver/10 md:border-r md:last:border-r-0">
                <Icon size={26} className="text-dyd-cyan" />
                <div>
                  <p className="text-xl font-black text-dyd-cyan">{value as string}</p>
                  <p className="text-xs text-dyd-text">{label as string}</p>
                </div>
              </div>
            ))}
          </div>
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
  const [vantaFallback, setVantaFallback] = useState(false);
  const heroVantaRef = useRef<HTMLDivElement | null>(null);
  const copy = siteCopy[language];
  const heroMetricIcons = [Globe2, Gauge, ShieldCheck, Rocket];
  const homeLinks = [
    { label: copy.menu[0], href: "#inicio" },
    { label: copy.menu[1], href: "#servicios" },
    { label: copy.solutionsLink, href: "#soluciones" },
    { label: copy.menu[2], href: "#casos" },
    { label: copy.resourcesLink, href: "/noticias" },
    { label: copy.companyLink, href: "/nosotros" },
  ];
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

  useEffect(() => {
    let vantaEffect: VantaEffect | null = null;
    let cancelled = false;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !heroVantaRef.current) {
      return undefined;
    }

    if (!supportsWebGL()) {
      setVantaFallback(true);
      return undefined;
    }

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    async function initVanta() {
      try {
        const [birdsModule, threeModule] = await Promise.all([
          import("vanta/dist/vanta.birds.min"),
          import("three"),
        ]);

        if (cancelled || !heroVantaRef.current) {
          return;
        }

        const BIRDS = (
          birdsModule as {
            default?: (options: Record<string, unknown>) => VantaEffect;
          }
        ).default;

        if (!BIRDS) {
          setVantaFallback(true);
          return;
        }

        const THREE = (threeModule as { default?: unknown }).default ?? threeModule;

        vantaEffect = BIRDS({
          el: heroVantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          backgroundAlpha: 0,
          backgroundColor: 0xeaf6ff,
          color1: 0x2684ff,
          color2: 0x6d6cff,
          colorMode: "variance",
          birdSize: isMobile ? 0.55 : 0.86,
          wingSpan: isMobile ? 16 : 24,
          speedLimit: isMobile ? 1.05 : 1.9,
          separation: isMobile ? 46 : 32,
          alignment: isMobile ? 34 : 28,
          cohesion: isMobile ? 24 : 30,
          quantity: isMobile ? 1.8 : 4.2,
        });
        setVantaFallback(false);
      } catch {
        vantaEffect = null;
        setVantaFallback(true);
      }
    }

    void initVanta();

    return () => {
      cancelled = true;
      vantaEffect?.destroy();
    };
  }, []);

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

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
      form.reset();
    } else {
      setContactError(true);
    }
  };

  return (
    <main className="home-page min-h-screen overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e2edf8] bg-[#fafcff]/95 text-[#15263d] backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
          <a href="#inicio" className="flex items-center">
            <span className="relative block h-10 w-36">
              <Image
                src="/logo-dydweb-nexus-header-wide.png"
                alt="DYDWEB Nexus"
                fill
                priority
                sizes="144px"
                className="object-contain object-left"
              />
            </span>
          </a>
          <div className="hidden items-center gap-0.5 lg:flex xl:gap-2">
            {homeLinks.map(({ label, href }) => (
              <a key={href} href={href} className="whitespace-nowrap rounded-md px-2 py-2 text-sm font-semibold transition hover:bg-[#e7f2ff] hover:text-[#065cc8] xl:px-3">
                {label}
              </a>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <div className="flex items-center rounded-md border border-[#e2edf8] bg-white p-0.5" role="group" aria-label={copy.languageLabel}>
              {(["es", "en"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={language === item}
                  onClick={() => updateLanguage(item)}
                  className={`h-8 rounded px-2 text-xs font-semibold transition ${
                    language === item ? "bg-[#e4f0ff] text-[#065cc8]" : "text-[#536179] hover:text-[#065cc8]"
                  }`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="#contacto" className="home-primary-button hidden min-h-10 whitespace-nowrap rounded-lg px-3 text-sm lg:inline-flex xl:px-4">
              {copy.menu[3]}
            </a>
            <a href="#cotizar" className="hidden min-h-10 items-center whitespace-nowrap rounded-lg border border-[#dbe8f6] bg-[#f1f6fb] px-3 text-sm font-bold transition hover:bg-[#e5f0ff] lg:inline-flex xl:px-4">
              {copy.quote}
            </a>
            <button
              type="button"
              aria-label={open ? copy.closeMenu : copy.openMenu}
              aria-expanded={open}
              aria-controls="home-mobile-nav"
              className="grid h-10 w-10 place-items-center rounded-md border border-[#dbe8f6] lg:hidden"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        <div id="home-mobile-nav" hidden={!open} className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[#e2edf8] bg-white px-5 py-3 lg:hidden">
          {[
            ...homeLinks,
            { label: copy.pageLinks.packages, href: "/servicios" },
            { label: copy.pageLinks.questions, href: "/preguntas" },
            { label: copy.scheduleShort, href: "#agendar" },
            { label: copy.menu[3], href: "#contacto" },
            { label: copy.quote, href: "#cotizar" },
          ].map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-sm font-semibold hover:bg-[#e7f2ff] hover:text-[#065cc8]">
              {label}
            </a>
          ))}
        </div>
      </header>

      <section id="inicio" className="relative isolate overflow-hidden pt-16">
        <div className="light-hero-bg pointer-events-none absolute inset-x-0 bottom-0 top-16" aria-hidden="true" />
        <div className="relative">
          <div ref={heroVantaRef} className={`vanta-birds-layer vanta-birds-ambient${vantaFallback ? " vanta-birds-fallback" : ""}`} aria-hidden="true" />
          <div className="home-container relative z-10 pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pt-12">
            <div className="grid items-center gap-7 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10">
              <div>
                <p className="mb-4 inline-block rounded-full border border-[#c7e0ff] bg-white/80 px-3 py-1 text-xs font-bold text-[#0858bb] sm:mb-5">
                  {copy.heroBadge}
                </p>
                <h1 className="hero-display text-balance text-[2rem] leading-[1.08] sm:text-[2.625rem] lg:text-[2.875rem] xl:text-[3.125rem]">
                  {copy.heroBefore}{" "}
                  <span className="text-[#065fcf]">{copy.heroHighlight}</span>{" "}
                  {copy.heroAfter}
                </h1>
                <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-[#34465e] sm:mt-5 sm:text-lg">
                  {copy.heroText}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
                  <a href="#contacto" className="home-primary-button inline-flex min-h-12 gap-2 rounded-lg px-4 text-sm sm:px-5">
                    {copy.primaryCta} <ArrowRight size={17} aria-hidden="true" />
                  </a>
                  <a href="#casos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#9fc9fa] bg-white/90 px-4 text-sm font-bold text-[#0959b8] transition hover:border-[#0872e9] hover:bg-[#edf6ff] sm:px-5">
                    <CirclePlay size={19} aria-hidden="true" />
                    {copy.secondaryCta}
                  </a>
                </div>
              </div>
              <Image
                src="/dydweb-hero-dispositivos.webp"
                alt={copy.heroImageAlt}
                width={1280}
                height={853}
                sizes="(min-width: 1280px) 620px, (min-width: 768px) 50vw, 90vw"
                priority
                className="mx-auto h-auto w-full max-w-xl md:max-w-none"
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 md:grid-cols-4 lg:gap-4">
              {stats.map(([value], index) => {
                const MetricIcon = heroMetricIcons[index];

                return (
                  <div key={copy.stats[index]} className="light-metric-card flex min-h-[5rem] items-center gap-2.5 rounded-lg px-3 py-3 lg:gap-3 lg:px-5">
                    <MetricIcon className="h-5 w-5 shrink-0 text-[#0872e9] lg:h-7 lg:w-7" aria-hidden="true" />
                    <div>
                      <p className="text-xl font-extrabold leading-tight sm:text-2xl">{value}</p>
                      <p className="mt-1 text-xs font-semibold leading-tight text-[#34465e] sm:text-sm">{copy.stats[index]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="home-section">
        <div className="home-container">
          <SectionHeading
            eyebrow={copy.sections.services.eyebrow}
            title={copy.sections.services.title}
            text={copy.sections.services.text}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.services.map(({ icon: Icon, title, items }) => (
              <article key={title} className="home-surface p-5 lg:p-6">
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-md bg-[#edf5ff] text-[#076bd8]">
                  <Icon size={23} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-extrabold">{title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="home-muted flex items-start gap-2 text-sm">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#0873e9]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-col items-start gap-4 border-y border-[#deebf9] bg-[#f2f8ff] p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-extrabold">{copy.servicesCtaTitle}</h3>
              <p className="home-muted mt-1 text-sm leading-relaxed">{copy.servicesCtaText}</p>
            </div>
            <a href="/servicios" className="home-primary-button inline-flex min-h-11 gap-2 rounded-lg px-4 text-sm md:shrink-0">
              {copy.servicesCtaButton} <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <QuickQuote copy={copy} language={language} />

      <section id="soluciones" className="home-section">
        <div className="home-container">
          <SectionHeading
            eyebrow={copy.sections.solutions.eyebrow}
            title={copy.sections.solutions.title}
            text={copy.sections.solutions.text}
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {copy.sectors.map(([sector, useCase], index) => {
              const Icon = sectorIcons[index];
              return (
                <article key={sector} className="home-surface p-4">
                  <div className="flex items-center gap-2.5">
                    <Icon size={22} className="shrink-0 text-[#076bd8]" aria-hidden="true" />
                    <h3 className="font-extrabold">{sector}</h3>
                  </div>
                  <p className="home-muted mt-2 text-sm leading-relaxed">{useCase}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-tint border-y border-[#e8f0f8] py-10 sm:py-12">
        <div className="home-container grid items-center gap-6 lg:grid-cols-[0.85fr_1.15fr_auto] lg:gap-10">
          <div>
            <p className="home-kicker mb-2">{copy.sections.trust.eyebrow}</p>
            <h2 className="home-heading text-balance text-3xl">{copy.sections.trust.title}</h2>
            <p className="home-muted mt-3 leading-relaxed">{copy.sections.trust.text}</p>
          </div>
          <ul className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
            {copy.trustCards.map(([title, text]) => (
              <li key={title} className="flex gap-2.5">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#0873e9]" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-extrabold">{title}</h3>
                  <p className="home-muted mt-1 text-sm leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <ShieldCheck className="hidden text-[#0869d7] xl:block" size={88} strokeWidth={1.2} aria-hidden="true" />
        </div>
      </section>

      <section id="casos" className="home-section">
        <div className="home-container">
          <SectionHeading
            eyebrow={copy.sections.cases.eyebrow}
            title={copy.sections.cases.title}
            text={copy.sections.cases.text}
          />
          <div className="grid items-start gap-5 md:grid-cols-3">
            {copy.cases.map((item, index) => (
              <article key={item.client} className="home-surface overflow-hidden">
                <Image
                  src={caseImages[index]}
                  alt=""
                  width={960}
                  height={540}
                  sizes="(min-width: 1280px) 390px, (min-width: 768px) 33vw, 90vw"
                  className="aspect-video w-full object-cover"
                />
                <div className="p-5">
                  <p className="home-muted mb-1 text-xs">{copy.caseImageCaption}</p>
                  <h3 className="text-xl font-extrabold">{item.client}</h3>
                  <p className="mt-3 text-2xl font-extrabold text-[#087359]">{copy.caseMetrics[index][0]}</p>
                  <p className="home-muted mt-1 min-h-10 text-sm leading-relaxed">{item.result}</p>
                  <details className="group mt-4 border-t border-[#e4edf7] pt-3">
                    <summary className="home-link flex cursor-pointer list-none items-center justify-between gap-2 text-sm">
                      {copy.caseDetails}
                      <ChevronDown size={17} className="transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <dl className="home-muted mt-3 space-y-2 text-sm leading-relaxed">
                      <div><dt className="inline font-bold text-[#15263d]">{copy.caseLabels.problem}</dt>{" "}<dd className="inline">{item.problem}</dd></div>
                      <div><dt className="inline font-bold text-[#15263d]">{copy.caseLabels.solution}</dt>{" "}<dd className="inline">{item.solution}</dd></div>
                      <div><dt className="inline font-bold text-[#15263d]">{copy.caseLabels.tech}</dt>{" "}<dd className="inline">{item.tech}</dd></div>
                    </dl>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="noticias" className="home-section home-tint border-y border-[#e8f0f8]">
        <div className="home-container grid gap-6 xl:grid-cols-[0.8fr_2.2fr] xl:items-center xl:gap-8">
          <div>
            <p className="home-kicker mb-2">{copy.sections.news.eyebrow}</p>
            <h2 className="home-heading text-balance text-3xl">{copy.sections.news.title}</h2>
            <p className="home-muted mt-3 max-w-xl leading-relaxed">{copy.sections.news.text}</p>
            <a href="/noticias" className="home-primary-button mt-5 inline-flex min-h-11 gap-2 rounded-lg px-4 text-sm">
              {copy.exploreNews} <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {copy.news.map(([category, title, href], index) => {
              const TopicIcon = index === 1 ? Bot : Search;
              return (
                <article key={href} className="home-surface">
                  <a href={href} className="group block h-full rounded-lg">
                    {index === 0 ? (
                      <Image
                        src="/noticias/desarrollo-web-empresarial.png"
                        alt=""
                        width={720}
                        height={405}
                        sizes="(min-width: 640px) 32vw, 90vw"
                        className="aspect-video w-full rounded-t-lg object-cover"
                      />
                    ) : (
                      <div className="grid aspect-video place-items-center rounded-t-lg bg-[#eaf4ff] text-[#076bd8]">
                        <TopicIcon size={48} strokeWidth={1.45} aria-hidden="true" />
                      </div>
                    )}
                    <div className="p-4">
                      <p className="home-kicker">{category}</p>
                      <h3 className="mt-2 font-extrabold leading-snug group-hover:text-[#075bbf]">{title}</h3>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-container grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <p className="home-kicker mb-2">{copy.sections.admin.eyebrow}</p>
            <h2 className="home-heading text-balance text-3xl md:text-[2.5rem]">{copy.sections.admin.title}</h2>
            <p className="home-muted mt-3 max-w-md leading-relaxed">{copy.sections.admin.text}</p>
          </div>
          <div className="grid gap-3">
            {copy.adminCards.map(([title, text], index) => {
              const Icon = [LockKeyhole, BarChart3, ShieldCheck][index];
              return (
                <div key={title} className="home-surface flex gap-3.5 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#edf5ff] text-[#076bd8]">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-extrabold">{title}</h3>
                    <p className="home-muted mt-1 text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8f0f8] py-8">
        <div className="home-container flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="home-kicker">{copy.sections.faq.eyebrow}</p>
            <h2 className="home-heading mt-2 text-2xl">{copy.faqCtaTitle}</h2>
            <p className="home-muted mt-2 text-sm leading-relaxed">{copy.faqCtaText}</p>
          </div>
          <a href="/preguntas" className="home-link inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#b8d5f4] px-4 text-sm md:shrink-0">
            {copy.faqCtaButton} <ChevronRight size={18} />
          </a>
        </div>
      </section>

      <ScheduleMeeting copy={copy} />

      <section id="contacto" className="home-section">
        <div className="home-container grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div>
            <p className="home-kicker mb-2">{copy.contactEyebrow}</p>
            <h2 className="home-heading text-balance text-3xl md:text-[2.5rem]">{copy.contactTitle}</h2>
            <p className="home-muted mt-3 max-w-lg leading-relaxed">{copy.contactText}</p>
          </div>
          <form onSubmit={handleContactSubmit} className="home-surface grid min-w-0 gap-3 p-4 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {copy.contactFields.map((field, index) => (
                <input
                  key={field}
                  name={["name", "company", "email", "whatsapp"][index]}
                  type={["text", "text", "email", "tel"][index]}
                  autoComplete={["name", "organization", "email", "tel"][index]}
                  required={index === 0 || index === 2}
                  className="home-field"
                  placeholder={field}
                  aria-label={field}
                />
              ))}
            </div>
            <select name="service" required defaultValue="" className="home-field" aria-label={copy.serviceInterest}>
              <option value="">{copy.serviceInterest}</option>
              {copy.serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <input name="budget" className="home-field" placeholder={copy.budgetPlaceholder} aria-label={copy.budgetPlaceholder} />
            <textarea name="message" required rows={4} className="home-field" placeholder={copy.messagePlaceholder} aria-label={copy.messagePlaceholder} />
            {contactSent ? (
              <p role="status" className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
                {copy.contactSuccess}
              </p>
            ) : null}
            {contactError ? (
              <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900">
                {copy.contactError}
              </p>
            ) : null}
            <button className="home-primary-button inline-flex min-h-12 gap-2 rounded-lg px-3 text-sm">
              {copy.contactButton} <MessageSquareText size={18} aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#deebf9] bg-white pb-20 pt-10">
        <div className="home-container grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] md:gap-x-7">
          <div>
            <a href="#inicio" className="relative block h-10 w-36 max-w-full">
              <Image src="/logo-dydweb-nexus-header-wide.png" alt="DYDWEB Nexus" fill sizes="144px" className="object-contain object-left" />
            </a>
            <p className="home-muted mt-3 text-sm leading-relaxed">{copy.footerTagline}</p>
          </div>
          <div>
            <h3 className="text-sm font-extrabold">{copy.footerQuickLinks}</h3>
            <div className="home-muted mt-3 grid gap-2 text-sm [&_a:hover]:text-[#075bbf]">
              <a href="#inicio">{copy.menu[0]}</a>
              <a href="/nosotros">{copy.pageLinks.about}</a>
              <a href="/servicios">{copy.pageLinks.packages}</a>
              <a href="/preguntas">{copy.pageLinks.questions}</a>
              <a href="#agendar">{copy.scheduleShort}</a>
              <a href="#contacto">{copy.menu[3]}</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-extrabold">{copy.footerServices}</h3>
            <div className="home-muted mt-3 grid gap-2 text-sm [&_a:hover]:text-[#075bbf]">
              {copy.services.slice(0, 4).map((service) => (
                <a key={service.title} href="#servicios">{service.title}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-extrabold">{copy.footerContact}</h3>
            <p className="home-muted mt-3 text-sm">{language === "es" ? "Atención por WhatsApp" : "Support on WhatsApp"}</p>
            <p className="home-muted mt-2 text-sm">Colombia</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(copy.chatbot.leadIntro)}`}
              target="_blank"
              rel="noreferrer"
              className="home-primary-button mt-4 inline-flex min-h-11 gap-2 rounded-lg px-3 py-2 text-sm"
            >
              {copy.footerAdvisor} <MessageCircle size={17} />
            </a>
          </div>
        </div>
        <div className="home-container mt-8">
          <p className="home-muted border-t border-[#e3edf8] pt-5 text-xs">{copy.footerA}</p>
        </div>
      </footer>

      <WhatsAppChatbot language={language} />
    </main>
  );
}

