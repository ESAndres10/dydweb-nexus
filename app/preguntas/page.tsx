"use client";

import {
  ArrowLeft,
  ChevronRight,
  Globe2,
  MessageCircle,
  Server,
  TrendingUp,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Language = "es" | "en";

const pageCopy = {
  es: {
    languageLabel: "Idioma",
    back: "Volver al inicio",
    nav: { home: "Inicio", about: "Quiénes Somos", services: "Servicios", questions: "Preguntas", schedule: "Agendar", contact: "Contacto" },
    badge: "Centro de orientación",
    title: "Preguntas frecuentes y rutas para iniciar tu proyecto",
    text: "Esta sección concentra las dudas principales y ayuda a identificar el mejor punto de partida antes de hablar por WhatsApp.",
    contact: "Hablar por WhatsApp",
    audienceEyebrow: "Para quién es",
    audienceTitle: "Encuentra la ruta correcta según tu necesidad",
    audienceCards: [
      ["Empresas que necesitan presencia premium", "Sitio web, SEO base, formularios, marca visual y conversión desde el primer lanzamiento."],
      ["Equipos que quieren automatizar ventas", "WhatsApp, CRM, flujos de seguimiento, captura de leads y dashboards comerciales."],
      ["Organizaciones con procesos complejos", "Software a medida, roles, bases de datos, integraciones y portales privados."],
    ],
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Lo que conviene resolver antes de cotizar",
    faqItems: [
      ["Cuánto tarda un proyecto?", "Una web premium puede iniciar entre 2 y 5 semanas. Software o automatizaciones avanzadas dependen del alcance, integraciones y contenido disponible."],
      ["Puedo empezar pequeño y crecer después?", "Sí. La arquitectura se plantea por etapas para lanzar rápido, medir resultados y sumar funcionalidades sin rehacer todo."],
      ["El chatbot envía datos a WhatsApp?", "Sí. El visitante completa su consulta y el sistema prepara un mensaje directo a tu WhatsApp con servicio, presupuesto y contexto."],
      ["Incluye SEO y medición?", "La base contempla estructura técnica, velocidad, Open Graph, etiquetas y preparación para analítica según el plan del proyecto."],
      ["Qué necesito para iniciar?", "Objetivo del proyecto, referencias visuales, servicios prioritarios, presupuesto aproximado y datos de contacto para coordinar el diagnóstico."],
      ["Trabajan proyectos por etapas?", "Sí. Podemos iniciar con una versión esencial y evolucionar hacia automatizaciones, dashboards, IA o portales privados."],
    ],
    nextTitle: "Listo para avanzar?",
    nextText: "Envía una consulta con el contexto inicial y preparamos una ruta de trabajo.",
    footerTagline: "Tecnología que impulsa negocios.",
    footerQuickLinks: "Enlaces rápidos",
    footerContact: "Contacto",
    footerAdvisor: "Hablar con asesor",
  },
  en: {
    languageLabel: "Language",
    back: "Back home",
    nav: { home: "Home", about: "About Us", services: "Services", questions: "FAQ", schedule: "Schedule", contact: "Contact" },
    badge: "Guidance center",
    title: "FAQ and routes to start your project",
    text: "This section gathers the main questions and helps identify the best starting point before speaking on WhatsApp.",
    contact: "Talk on WhatsApp",
    audienceEyebrow: "Who it is for",
    audienceTitle: "Find the right route based on your need",
    audienceCards: [
      ["Companies needing a premium presence", "Website, base SEO, forms, visual brand and conversion from the first launch."],
      ["Teams wanting to automate sales", "WhatsApp, CRM, follow-up flows, lead capture and commercial dashboards."],
      ["Organizations with complex processes", "Custom software, roles, databases, integrations and private portals."],
    ],
    faqEyebrow: "FAQ",
    faqTitle: "What is useful to clarify before quoting",
    faqItems: [
      ["How long does a project take?", "A premium website can start between 2 and 5 weeks. Software or advanced automations depend on scope, integrations and available content."],
      ["Can I start small and grow later?", "Yes. The architecture is planned in stages to launch fast, measure results and add functionality without rebuilding everything."],
      ["Does the chatbot send data to WhatsApp?", "Yes. The visitor completes the request and the system prepares a direct WhatsApp message with service, budget and context."],
      ["Does it include SEO and measurement?", "The foundation includes technical structure, speed, Open Graph, tags and analytics preparation depending on the project plan."],
      ["What do I need to start?", "Project goal, visual references, priority services, approximate budget and contact details to coordinate the diagnosis."],
      ["Do you work in stages?", "Yes. We can start with an essential version and evolve toward automations, dashboards, AI or private portals."],
    ],
    nextTitle: "Ready to move forward?",
    nextText: "Send a request with the initial context and we will prepare a work route.",
    footerTagline: "Technology that drives business.",
    footerQuickLinks: "Quick links",
    footerContact: "Contact",
    footerAdvisor: "Talk to an advisor",
  },
};

const whatsappNumber = "573508629779";

export default function QuestionsPage() {
  const [language, setLanguage] = useState<Language>("es");
  const copy = pageCopy[language];
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
  const whatsappMessage =
    language === "es"
      ? "Hola D&D WEB Nexus, revise la sección de preguntas frecuentes y quiero recibir asesoría."
      : "Hello D&D WEB Nexus, I reviewed the FAQ section and would like advisory.";

  return (
    <main className="min-h-screen overflow-hidden bg-dyd-black text-white">
      <div className="grid-surface fixed inset-0 opacity-80" />
      <header className="relative z-10 border-b border-dyd-silver/15 bg-dyd-ink/82 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3 text-sm font-semibold text-dyd-text transition hover:text-white">
            <span className="relative block h-11 w-40 overflow-hidden rounded-md border border-dyd-cyan/20 bg-dyd-black/70">
              <Image src="/logo-dydweb-nexus-header-wide.png" alt="DYDWEB" fill sizes="160px" className="object-contain p-1" />
            </span>
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:bg-dyd-silver/10 hover:text-white">{copy.nav.home}</a>
            <a href="/nosotros" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:bg-dyd-silver/10 hover:text-white">{copy.nav.about}</a>
            <a href="/servicios" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:bg-dyd-silver/10 hover:text-white">{copy.nav.services}</a>
            <a href="/preguntas" className="rounded-md bg-dyd-cyan/10 px-3 py-2 text-sm font-medium text-white">{copy.nav.questions}</a>
            <a href="/#agendar" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:bg-dyd-silver/10 hover:text-white">{copy.nav.schedule}</a>
            <a href="/#contacto" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:bg-dyd-silver/10 hover:text-white">{copy.nav.contact}</a>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-md border border-dyd-silver/15 bg-dyd-silver/5 p-1" aria-label={copy.languageLabel}>
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
            <a href="/" className="hidden items-center gap-2 rounded-md border border-dyd-silver/15 px-3 py-2 text-sm font-semibold text-dyd-text transition hover:border-dyd-cyan/45 hover:text-white sm:inline-flex">
              <ArrowLeft size={16} /> {copy.back}
            </a>
          </div>
        </nav>
      </header>

      <section className="relative z-10 px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-dyd-cyan/35 bg-dyd-cyan/10 px-3 py-2 text-sm text-dyd-cyan">
              <span className="relative h-7 w-7 shrink-0">
                <Image src="/nexus-rocket-badge.png" alt="" fill sizes="28px" className="object-contain" />
              </span>
              {copy.badge}
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">{copy.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-dyd-text">{copy.text}</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">{copy.audienceEyebrow}</p>
            <h2 className="text-3xl font-semibold md:text-5xl">{copy.audienceTitle}</h2>
            <div className="mt-8 grid gap-3">
              {copy.audienceCards.map(([title, text], index) => {
                const AudienceIcon = [Globe2, TrendingUp, Server][index];
                return (
                  <article key={title} className="premium-card group rounded-lg p-5 transition hover:border-dyd-cyan/45">
                    <div className="flex gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-dyd-cyan/25 bg-dyd-cyan/10 text-dyd-cyan transition group-hover:bg-dyd-cyan group-hover:text-dyd-ink">
                        <AudienceIcon size={22} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-dyd-text">{text}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">{copy.faqEyebrow}</p>
            <h2 className="text-3xl font-semibold md:text-5xl">{copy.faqTitle}</h2>
            <div className="mt-8 grid gap-3">
              {copy.faqItems.map(([question, answer], index) => (
                <details key={question} className="premium-card group rounded-lg p-5" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white">
                    <span>{question}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-dyd-silver/15 text-dyd-cyan transition group-open:rotate-45">
                      <X size={15} />
                    </span>
                  </summary>
                  <div className="mt-4 border-t border-dyd-silver/10 pt-4">
                    <p className="text-sm leading-6 text-dyd-text">{answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-lg border border-dyd-cyan/20 bg-dyd-panel/75 p-6 shadow-glow md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{copy.nextTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-dyd-text">{copy.nextText}</p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            {copy.contact} <MessageCircle size={18} />
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-dyd-silver/15 bg-dyd-ink/78 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <span className="relative block h-12 w-40 overflow-hidden rounded-md border border-dyd-cyan/20 bg-dyd-black/70">
              <Image src="/logo-dydweb-nexus-header-wide.png" alt="DYDWEB" fill sizes="160px" className="object-contain p-1" />
            </span>
            <p className="mt-4 text-sm leading-6 text-dyd-text">{copy.footerTagline}</p>
            <p className="mt-3 text-xs leading-5 text-dyd-text">{copy.text}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-dyd-cyan">{copy.footerQuickLinks}</h3>
            <div className="mt-4 grid gap-2 text-sm text-dyd-text">
              <a href="/" className="hover:text-white">{copy.nav.home}</a>
              <a href="/nosotros" className="hover:text-white">{copy.nav.about}</a>
              <a href="/servicios" className="hover:text-white">{copy.nav.services}</a>
              <a href="/preguntas" className="hover:text-white">{copy.nav.questions}</a>
              <a href="/#agendar" className="hover:text-white">{copy.nav.schedule}</a>
              <a href="/#contacto" className="hover:text-white">{copy.nav.contact}</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-dyd-cyan">{copy.footerContact}</h3>
            <p className="mt-4 text-sm text-dyd-text">WhatsApp +57 350 862 9779</p>
            <p className="mt-2 text-sm text-dyd-text">Colombia</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-4 text-sm font-semibold text-white shadow-glow"
            >
              {copy.footerAdvisor} <MessageCircle size={17} />
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-dyd-silver/10 pt-5 text-xs text-dyd-text md:flex-row md:items-center md:justify-between">
          <p>DYDWEB. Plataforma tecnológica empresarial.</p>
          <p>DYDWEB Nexus</p>
        </div>
      </footer>
    </main>
  );
}

