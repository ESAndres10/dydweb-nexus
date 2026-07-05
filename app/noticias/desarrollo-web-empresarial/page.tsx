import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Clock,
  Globe2,
  MessageCircle,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dydweb.co";
const articleUrl = `${siteUrl}/noticias/desarrollo-web-empresarial`;
const imageUrl = `${siteUrl}/noticias/desarrollo-web-empresarial.png`;
const whatsappNumber = "573508629779";
const whatsappMessage = [
  "Hola D&D WEB Nexus, leí la guía de desarrollo web empresarial y quiero recibir asesoría.",
  "",
  "Artículo: Desarrollo web empresarial",
  `URL: ${articleUrl}`,
].join("\n");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const benefits = [
  "Aumenta la credibilidad de la empresa antes de una llamada o cotización.",
  "Convierte el sitio web en un canal de captación de clientes potenciales.",
  "Permite integrar formularios, WhatsApp, CRM, analítica y automatizaciones.",
  "Mejora la visibilidad orgánica con una base técnica preparada para SEO.",
  "Reduce tareas manuales y facilita el seguimiento comercial.",
  "Crea una plataforma escalable para crecer con nuevos servicios, idiomas o campañas.",
];

const mistakes = [
  "Elegir una solución únicamente por precio y no por estrategia.",
  "Publicar una web sin objetivos, medición ni ruta clara de conversión.",
  "Ignorar velocidad, experiencia móvil, seguridad y SEO técnico.",
  "No actualizar contenido, servicios, casos o preguntas frecuentes.",
  "No conectar los formularios con un sistema de seguimiento comercial.",
];

const sections = [
  {
    title: "La nueva realidad digital",
    text: "Durante años muchas empresas consideraban suficiente tener una página con información básica. Hoy el comportamiento del consumidor cambió: antes de llamar, comprar o solicitar una cotización, investiga en internet. El sitio web es la primera impresión de una empresa y, en muchos casos, el factor que determina si un cliente continúa el proceso o busca otra opción.",
  },
  {
    title: "Qué es el desarrollo web empresarial",
    text: "Es el proceso de analizar, diseñar, desarrollar y optimizar una plataforma digital alineada con los objetivos del negocio. No se trata únicamente de diseño visual: incluye experiencia de usuario, rendimiento, seguridad, posicionamiento en buscadores, integraciones, automatización y escalabilidad.",
  },
  {
    title: "Tecnología preparada para crecer",
    text: "La tecnología debe elegirse según las necesidades reales del proyecto. Una empresa puede necesitar un sitio corporativo, una landing de captación, un portal privado, un e-commerce o una aplicación web. Lo importante es construir una arquitectura que pueda evolucionar sin reconstruir todo desde cero.",
  },
  {
    title: "SEO, contenido y autoridad",
    text: "Una buena página necesita contenido útil. Publicar guías, casos de éxito y respuestas a las preguntas de los clientes ayuda a posicionarse en Google y demuestra experiencia. Un blog estratégico se convierte en una fuente constante de tráfico orgánico cuando está conectado con una arquitectura SEO clara.",
  },
  {
    title: "Inteligencia artificial y automatización",
    text: "La IA permite automatizar respuestas, clasificar solicitudes, asistir a los usuarios y generar procesos más eficientes. Integrarla correctamente mejora la experiencia del cliente, optimiza recursos y ayuda a que cada lead reciba seguimiento oportuno.",
  },
];

const faqs = [
  [
    "¿Qué es el desarrollo web empresarial?",
    "Es la creación de una plataforma digital alineada con los objetivos de negocio, preparada para comunicar, captar clientes, medir resultados e integrarse con procesos comerciales.",
  ],
  [
    "¿Cuánto tarda desarrollar una página web empresarial?",
    "Un proyecto empresarial puede tomar entre 2 y 5 semanas si es un sitio corporativo. Plataformas con CRM, automatización, múltiples idiomas o software a medida requieren una estimación específica.",
  ],
  [
    "¿Por qué es importante el SEO?",
    "Porque permite que Google entienda la estructura, los servicios y la autoridad de la empresa. Sin SEO técnico y contenido útil, una web puede verse bien pero no generar tráfico calificado.",
  ],
  [
    "¿Cómo ayuda la inteligencia artificial?",
    "Puede automatizar atención inicial, clasificar solicitudes, generar respuestas, procesar datos y apoyar tareas comerciales para mejorar tiempos de respuesta.",
  ],
  [
    "¿Cómo medir los resultados?",
    "Con Google Analytics, Search Console, eventos de conversión, formularios conectados a Google Sheets, métricas de WhatsApp y seguimiento de leads.",
  ],
];

export const metadata: Metadata = {
  title: "Desarrollo Web Empresarial en Colombia | Guía Completa",
  description:
    "Conoce cómo el desarrollo web empresarial impulsa las ventas, fortalece tu marca y acelera la transformación digital de tu empresa.",
  keywords: [
    "desarrollo web empresarial",
    "desarrollo web para empresas",
    "agencia de desarrollo web",
    "páginas web empresariales",
    "desarrollo web en Colombia",
    "diseño web empresarial",
  ],
  alternates: { canonical: "/noticias/desarrollo-web-empresarial" },
  openGraph: {
    title: "Desarrollo web empresarial: guía para hacer crecer tu empresa",
    description:
      "Una guía práctica sobre sitios empresariales, SEO, automatización, IA y conversión comercial.",
    url: "/noticias/desarrollo-web-empresarial",
    type: "article",
    publishedTime: "2026-07-04",
    authors: ["DYDWEB Nexus"],
    images: [
      {
        url: "/noticias/desarrollo-web-empresarial.png",
        width: 1536,
        height: 1024,
        alt: "Desarrollo web empresarial con tecnologia, datos e inteligencia artificial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo web empresarial: guía para hacer crecer tu empresa",
    description:
      "Claves para convertir una web empresarial en un activo comercial, medible y escalable.",
    images: ["/noticias/desarrollo-web-empresarial.png"],
  },
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Desarrollo web empresarial: la guía definitiva para hacer crecer tu empresa en 2026",
    description:
      "Conoce cómo el desarrollo web empresarial impulsa las ventas, fortalece tu marca y acelera la transformación digital de tu empresa.",
    image: imageUrl,
    datePublished: "2026-07-04",
    dateModified: "2026-07-04",
    author: {
      "@type": "Organization",
      name: "DYDWEB Nexus",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "DYDWEB Nexus",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo-dydweb-nexus-og.png`,
      },
    },
    mainEntityOfPage: articleUrl,
    inLanguage: "es-CO",
    keywords:
      "desarrollo web empresarial, desarrollo web para empresas, agencia de desarrollo web, páginas web empresariales, desarrollo web en Colombia",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <main className="min-h-screen overflow-hidden bg-dyd-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="grid-surface fixed inset-0 opacity-70" />

      <header className="relative z-10 border-b border-dyd-silver/15 bg-dyd-ink/82 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="relative block h-11 w-40 overflow-hidden rounded-md border border-dyd-cyan/20 bg-dyd-black/70">
            <Image
              src="/logo-dydweb-nexus-header-wide.png"
              alt="DYDWEB Nexus"
              fill
              sizes="160px"
              className="object-contain p-1"
            />
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            <a href="/#inicio" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Inicio</a>
            <a href="/servicios" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Servicios</a>
            <a href="/#noticias" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Noticias</a>
            <a href="/nosotros" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Quiénes Somos</a>
            <a href="/#contacto" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Contacto</a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-4 text-sm font-semibold text-white shadow-glow"
          >
            Asesoría
          </a>
        </nav>
      </header>

      <section className="relative z-10 px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-dyd-cyan/35 bg-dyd-cyan/10 px-3 py-2 text-sm text-dyd-cyan">
                <Rocket size={18} />
                Desarrollo Web
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-dyd-cyan">Guía empresarial 2026</p>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight md:text-6xl">
                Desarrollo web empresarial: la guía definitiva para hacer crecer tu empresa
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-dyd-text">
                Una plataforma empresarial moderna no es solo una vitrina. Es un activo comercial que comunica confianza,
                captura oportunidades, mide resultados y prepara a la empresa para escalar con tecnología.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm text-dyd-silver">
                <span className="inline-flex items-center gap-2 rounded-md border border-dyd-silver/15 bg-dyd-ink/60 px-3 py-2">
                  <Clock size={16} className="text-dyd-cyan" />
                  7 min de lectura
                </span>
                <span className="inline-flex items-center gap-2 rounded-md border border-dyd-silver/15 bg-dyd-ink/60 px-3 py-2">
                  <Search size={16} className="text-dyd-cyan" />
                  SEO y conversión
                </span>
                <span className="inline-flex items-center gap-2 rounded-md border border-dyd-silver/15 bg-dyd-ink/60 px-3 py-2">
                  <BarChart3 size={16} className="text-dyd-cyan" />
                  Transformación digital
                </span>
              </div>
            </div>
            <figure className="premium-card overflow-hidden rounded-lg p-3">
              <div className="relative aspect-[3/2] overflow-hidden rounded-md">
                <Image
                  src="/noticias/desarrollo-web-empresarial.png"
                  alt="Desarrollo web empresarial con tecnología, datos e inteligencia artificial"
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-2 pt-3 text-xs leading-5 text-dyd-text">
                Una web empresarial debe conectar marca, datos, SEO, automatización y experiencia de usuario.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_0.25fr]">
          <article className="premium-card rounded-lg p-6 md:p-8">
            <p className="text-base leading-8 text-dyd-text">
              Esta guía explica por qué el desarrollo web empresarial es una inversión estratégica, qué características debe tener una
              plataforma moderna y cómo una empresa puede convertir su sitio web en un activo para generar clientes y automatizar procesos.
            </p>

            <div className="mt-10 grid gap-6">
              {sections.map(({ title, text }) => (
                <section key={title}>
                  <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
                  <p className="mt-4 text-base leading-8 text-dyd-text">{text}</p>
                </section>
              ))}
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">Beneficios de una plataforma empresarial moderna</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="rounded-lg border border-dyd-silver/15 bg-dyd-silver/[0.04] p-4">
                    <CheckCircle2 className="mb-3 text-dyd-cyan" size={22} />
                    <p className="text-sm leading-6 text-dyd-text">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-lg border border-dyd-cyan/20 bg-dyd-cyan/10 p-5">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 shrink-0 text-dyd-cyan" size={26} />
                <div>
                  <h2 className="text-xl font-semibold text-white">Errores frecuentes que frenan el crecimiento digital</h2>
                  <ul className="mt-4 grid gap-3 text-sm leading-6 text-dyd-text">
                    {mistakes.map((mistake) => (
                      <li key={mistake} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dyd-cyan" />
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">Conclusión</h2>
              <p className="mt-4 text-base leading-8 text-dyd-text">
                El desarrollo web empresarial ya no es un gasto, sino una inversión. Las empresas que construyen plataformas rápidas,
                seguras y orientadas a resultados tienen mayores posibilidades de crecer en un mercado cada vez más digital. En DYDWEB
                creemos en crear soluciones que impulsen negocios, no solo páginas web.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">Preguntas frecuentes</h2>
              <div className="mt-6 grid gap-3">
                {faqs.map(([question, answer]) => (
                  <details key={question} className="rounded-lg border border-dyd-silver/15 bg-dyd-black/35 p-4">
                    <summary className="cursor-pointer text-base font-semibold text-white">{question}</summary>
                    <p className="mt-3 text-sm leading-6 text-dyd-text">{answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-dyd-cyan/25 bg-gradient-to-br from-dyd-blue/20 via-dyd-cyan/10 to-dyd-panel/70 p-5">
              <Sparkles className="text-dyd-cyan" size={26} />
              <h2 className="mt-4 text-xl font-semibold">¿Quieres convertir tu web en un canal comercial?</h2>
              <p className="mt-3 text-sm leading-6 text-dyd-text">
                Diseñamos plataformas modernas, optimizadas para SEO, seguras y preparadas para el futuro.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-4 text-sm font-semibold text-white shadow-glow"
              >
                Hablar con asesor <MessageCircle size={18} />
              </a>
            </div>
            <div className="rounded-lg border border-dyd-silver/15 bg-dyd-ink/70 p-5">
              <h2 className="text-lg font-semibold">Enlaces recomendados</h2>
              <div className="mt-4 grid gap-3">
                {[
                  ["Desarrollo web para empresas", "/desarrollo-web-empresas", Globe2],
                  ["Servicios y paquetes", "/servicios", Rocket],
                  ["Automatización con IA", "/automatizacion-con-inteligencia-artificial", Bot],
                ].map(([label, href, Icon]) => (
                  <a
                    key={href as string}
                    href={href as string}
                    className="flex items-center justify-between rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-3 py-3 text-sm font-semibold text-dyd-silver transition hover:border-dyd-cyan/50 hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="text-dyd-cyan" size={17} />
                      {label as string}
                    </span>
                    <ArrowRight size={16} />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
