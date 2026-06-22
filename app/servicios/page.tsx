"use client";

import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  ChevronRight,
  Code2,
  Globe2,
  Layers3,
  MessageCircle,
  Play,
  Search,
  Send,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Language = "es" | "en";

const whatsappNumber = "573508629779";

const pageCopy = {
  es: {
    languageLabel: "Idioma",
    back: "Volver al inicio",
    nav: { home: "Inicio", about: "Quiénes Somos", services: "Servicios", questions: "Preguntas", schedule: "Agendar", contact: "Contacto" },
    badge: "Servicios y paquetes",
    title: "Soluciones digitales para cada etapa de crecimiento",
    text: "Desde emprendedores que necesitan una presencia profesional hasta empresas que requieren automatización, IA e integraciones avanzadas.",
    contact: "Solicitar recomendación",
    packageButton: "Solicitar este paquete",
    packageMessageIntro: "Hola D&D WEB Nexus, quiero recibir información sobre este paquete.",
    advisorTitle: "Encuentra tu paquete ideal",
    advisorText: "Responde tres puntos y te sugerimos una ruta inicial para conversar con más claridad.",
    advisorStage: "Etapa",
    advisorNeed: "Necesidad principal",
    advisorBudget: "Presupuesto",
    advisorResult: "Recomendación inicial",
    advisorButton: "Enviar recomendación por WhatsApp",
    advisorStages: ["Estoy iniciando", "Ya vendo y quiero crecer", "Necesito escalar operaciones"],
    advisorNeeds: ["Presencia web", "Captar clientes", "Automatizar procesos"],
    advisorBudgets: ["USD 500 - 1.000", "USD 1.000 - 2.500", "USD 2.500+"],
    servicesTitle: "Capacidades principales",
    services: [
      { icon: Code2, title: "Software a medida", items: ["Portales privados", "Dashboards", "Roles y permisos", "APIs e integraciones"] },
      { icon: Globe2, title: "Desarrollo web", items: ["Sitios corporativos", "Landing pages", "SEO base", "Formularios comerciales"] },
      { icon: Bot, title: "Inteligencia artificial", items: ["Chatbots", "Agentes IA", "Automatización", "Procesamiento de datos"] },
      { icon: Search, title: "SEO y analítica", items: ["SEO técnico", "Open Graph", "Schema base", "Medición de conversión"] },
      { icon: Layers3, title: "Diseño y marca", items: ["Identidad visual", "UI premium", "Piezas digitales", "Contenido comercial"] },
      { icon: Play, title: "Audiovisual", items: ["Videos corporativos", "Motion graphics", "Edición", "Contenido social"] },
    ],
    packagesTitle: "Paquetes sugeridos",
    packagesText: "Cada paquete responde a una etapa distinta del negocio. Los rangos ayudan a orientar la conversación y el alcance final se define después del diagnóstico.",
    matrixTitle: "Comparativa rápida",
    matrixHeaders: ["Paquete", "Tiempo", "Enfoque", "Automatización", "Idiomas"],
    matrixRows: [
      ["Emprendedor", "1 - 2 semanas", "Presencia inicial", "Básica", "ES"],
      ["Empresarial", "2 - 4 semanas", "Captación de leads", "Media", "ES / EN opcional"],
      ["Crecimiento", "4 - 8 semanas", "Conversión y CRM", "Avanzada", "ES / EN"],
      ["Premium", "A medida", "Plataforma escalable", "Personalizada", "Multidioma"],
    ],
    packages: [
      {
        name: "Paquete Emprendedor",
        range: "$500 - $1.000 USD",
        bestFor: "Ideal para emprendedores y pequeños negocios que están iniciando y necesitan presencia profesional en internet.",
        includes: ["Sitio web moderno", "Diseño responsive", "Formulario a WhatsApp", "Base escalable para crecer"],
      },
      {
        name: "Paquete Empresarial",
        range: "$1.000 - $2.500 USD",
        bestFor: "Diseñado para pequeñas empresas que necesitan más funcionalidades y captación de clientes potenciales.",
        includes: ["Sitio corporativo completo", "Formularios avanzados", "Integración con redes sociales", "Optimización para leads"],
      },
      {
        name: "Paquete Crecimiento",
        range: "$2.500 - $5.000 USD",
        bestFor: "Enfocado en empresas que buscan automatización, CRM, chatbots, múltiples idiomas y conversión.",
        includes: ["Automatizaciones comerciales", "Integración con CRM", "Chatbot guiado", "Estrategias de conversión"],
      },
      {
        name: "Paquete Premium",
        range: "A medida",
        bestFor: "Soluciones personalizadas para empresas que necesitan una plataforma digital robusta y escalable.",
        includes: ["Diseño exclusivo", "Inteligencia artificial", "Automatizaciones avanzadas", "Integración con sistemas empresariales"],
      },
    ],
    compareTitle: "Cómo elegir",
    compare: [
      ["Estoy iniciando mi negocio", "Empieza con Paquete Emprendedor para validar presencia y generar confianza."],
      ["Necesito captar más clientes", "Elige Paquete Empresarial con formularios, redes sociales y enfoque en leads."],
      ["Quiero automatizar y escalar", "Avanza con Paquete Crecimiento o Premium según integraciones y complejidad."],
    ],
    messageIntro: "Hola D&D WEB Nexus, revisé la página de servicios y quiero una recomendación.",
    footerTagline: "Tecnología que impulsa negocios.",
    footerQuickLinks: "Enlaces rápidos",
    footerServices: "Servicios",
    footerContact: "Contacto",
    footerAdvisor: "Hablar con asesor",
  },
  en: {
    languageLabel: "Language",
    back: "Back home",
    nav: { home: "Home", about: "About Us", services: "Services", questions: "FAQ", schedule: "Schedule", contact: "Contact" },
    badge: "Services and packages",
    title: "Digital solutions for every growth stage",
    text: "From entrepreneurs who need a professional presence to companies requiring automation, AI and advanced integrations.",
    contact: "Request recommendation",
    packageButton: "Request this package",
    packageMessageIntro: "Hello D&D WEB Nexus, I would like information about this package.",
    advisorTitle: "Find your ideal package",
    advisorText: "Answer three points and we suggest an initial route for a clearer conversation.",
    advisorStage: "Stage",
    advisorNeed: "Main need",
    advisorBudget: "Budget",
    advisorResult: "Initial recommendation",
    advisorButton: "Send recommendation on WhatsApp",
    advisorStages: ["I am starting", "I already sell and want to grow", "I need to scale operations"],
    advisorNeeds: ["Web presence", "Capture clients", "Automate processes"],
    advisorBudgets: ["USD 500 - 1,000", "USD 1,000 - 2,500", "USD 2,500+"],
    servicesTitle: "Core capabilities",
    services: [
      { icon: Code2, title: "Custom software", items: ["Private portals", "Dashboards", "Roles and permissions", "APIs and integrations"] },
      { icon: Globe2, title: "Web development", items: ["Corporate sites", "Landing pages", "Base SEO", "Commercial forms"] },
      { icon: Bot, title: "Artificial intelligence", items: ["Chatbots", "AI agents", "Automation", "Data processing"] },
      { icon: Search, title: "SEO and analytics", items: ["Technical SEO", "Open Graph", "Base schema", "Conversión measurement"] },
      { icon: Layers3, title: "Design and brand", items: ["Visual identity", "Premium UI", "Digital assets", "Commercial content"] },
      { icon: Play, title: "Audiovisual", items: ["Corporate videos", "Motion graphics", "Editing", "Social content"] },
    ],
    packagesTitle: "Suggested packages",
    packagesText: "Each package responds to a different business stage. Ranges help guide the conversation and final scope is defined after diagnosis.",
    matrixTitle: "Quick comparison",
    matrixHeaders: ["Package", "Timeline", "Focus", "Automation", "Languages"],
    matrixRows: [
      ["Entrepreneur", "1 - 2 weeks", "Initial presence", "Basic", "ES"],
      ["Business", "2 - 4 weeks", "Lead capture", "Medium", "ES / EN optional"],
      ["Growth", "4 - 8 weeks", "Conversion and CRM", "Advanced", "ES / EN"],
      ["Premium", "Custom", "Scalable platform", "Custom", "Multilingual"],
    ],
    packages: [
      {
        name: "Entrepreneur Package",
        range: "$500 - $1,000 USD",
        bestFor: "Ideal for entrepreneurs and small businesses starting out and needing a professional online presence.",
        includes: ["Modern website", "Responsive design", "WhatsApp form", "Scalable foundation to grow"],
      },
      {
        name: "Business Package",
        range: "$1,000 - $2,500 USD",
        bestFor: "Designed for small companies that need more functionality and lead generation.",
        includes: ["Complete corporate site", "Advanced forms", "Social media integration", "Lead optimization"],
      },
      {
        name: "Growth Package",
        range: "$2,500 - $5,000 USD",
        bestFor: "Focused on companies looking for automation, CRM, chatbots, multiple languages and conversión strategies.",
        includes: ["Commercial automations", "CRM integration", "Guided chatbot", "Conversión strategies"],
      },
      {
        name: "Premium Package",
        range: "Custom",
        bestFor: "Custom solutions for companies that need a robust and scalable digital platform.",
        includes: ["Exclusive design", "Artificial intelligence", "Advanced automations", "Enterprise systems integration"],
      },
    ],
    compareTitle: "How to choose",
    compare: [
      ["I am starting my business", "Start with the Entrepreneur Package to validate presence and build trust."],
      ["I need to capture more clients", "Choose the Business Package with forms, social media and lead focus."],
      ["I want to automate and scale", "Move into Growth or Premium depending on integrations and complexity."],
    ],
    messageIntro: "Hello D&D WEB Nexus, I reviewed the services page and would like a recommendation.",
    footerTagline: "Technology that drives business.",
    footerQuickLinks: "Quick links",
    footerServices: "Services",
    footerContact: "Contact",
    footerAdvisor: "Talk to an advisor",
  },
};

export default function ServicesPage() {
  const [language, setLanguage] = useState<Language>("es");
  const [stageIndex, setStageIndex] = useState(0);
  const [needIndex, setNeedIndex] = useState(0);
  const [budgetIndex, setBudgetIndex] = useState(0);
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
  const recommendedIndex = Math.min(
    copy.packages.length - 1,
    Math.max(stageIndex, needIndex, budgetIndex)
  );
  const recommendedPackage = copy.packages[recommendedIndex];
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(copy.messageIntro)}`;
  const packageWhatsAppUrl = (item: (typeof copy.packages)[number]) => {
    const message = [
      copy.packageMessageIntro,
      "",
      `${language === "es" ? "Paquete" : "Package"}: ${item.name}`,
      `${language === "es" ? "Rango" : "Range"}: ${item.range}`,
      `${language === "es" ? "Contexto" : "Context"}: ${item.bestFor}`,
      "",
      language === "es"
        ? "Me gustaria saber alcance, tiempos y siguientes pasos."
        : "I would like to know scope, timeline and next steps.",
    ].join("\n");

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };
  const advisorWhatsAppUrl = () => {
    const message = [
      language === "es"
        ? "Hola D&D WEB Nexus, usé el selector de paquetes y quiero avanzar con esta recomendación."
        : "Hello D&D WEB Nexus, I used the package selector and would like to move forward with this recommendation.",
      "",
      `${copy.advisorStage}: ${copy.advisorStages[stageIndex]}`,
      `${copy.advisorNeed}: ${copy.advisorNeeds[needIndex]}`,
      `${copy.advisorBudget}: ${copy.advisorBudgets[budgetIndex]}`,
      "",
      `${copy.advisorResult}: ${recommendedPackage.name} - ${recommendedPackage.range}`,
    ].join("\n");

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

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
            <a href="/servicios" className="rounded-md bg-dyd-cyan/10 px-3 py-2 text-sm font-medium text-white">{copy.nav.services}</a>
            <a href="/preguntas" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:bg-dyd-silver/10 hover:text-white">{copy.nav.questions}</a>
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

      <section className="relative z-10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 rounded-lg border border-dyd-cyan/20 bg-dyd-panel/75 p-6 shadow-glow lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">{copy.advisorResult}</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">{copy.advisorTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-dyd-text">{copy.advisorText}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                [copy.advisorStage, copy.advisorStages, stageIndex, setStageIndex],
                [copy.advisorNeed, copy.advisorNeeds, needIndex, setNeedIndex],
                [copy.advisorBudget, copy.advisorBudgets, budgetIndex, setBudgetIndex],
              ].map(([label, options, activeIndex, setActive]) => (
                <div key={label as string}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-dyd-text">{label as string}</p>
                  <div className="grid gap-2">
                    {(options as string[]).map((option, index) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => (setActive as (value: number) => void)(index)}
                        className={`rounded-md border px-3 py-2 text-left text-xs font-semibold transition ${
                          activeIndex === index
                            ? "border-dyd-cyan bg-dyd-cyan/15 text-white"
                            : "border-dyd-silver/15 bg-dyd-silver/[0.04] text-dyd-text hover:border-dyd-cyan/45 hover:text-white"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-dyd-cyan/25 bg-dyd-black/50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dyd-cyan">{copy.advisorResult}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{recommendedPackage.name}</h3>
            <p className="mt-2 text-2xl font-semibold text-dyd-cyan">{recommendedPackage.range}</p>
            <p className="mt-4 text-sm leading-6 text-dyd-text">{recommendedPackage.bestFor}</p>
            <ul className="mt-5 space-y-3">
              {recommendedPackage.includes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white">
                  <CheckCircle2 size={16} className="shrink-0 text-dyd-cyan" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={advisorWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
              {copy.advisorButton} <Send size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold md:text-5xl">{copy.servicesTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>

      <section className="relative z-10 border-y border-dyd-silver/15 bg-dyd-panel/70 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">{copy.badge}</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{copy.packagesTitle}</h2>
            <p className="mt-4 text-base leading-7 text-dyd-text">{copy.packagesText}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {copy.packages.map((item, index) => (
              <article key={item.name} className={`premium-card rounded-lg p-6 ${index === 2 ? "border-dyd-cyan/55 shadow-glow" : ""}`}>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="mt-2 text-2xl font-semibold text-dyd-cyan">{item.range}</p>
                  </div>
                  <span className="rounded-md border border-dyd-silver/15 px-2 py-1 text-xs font-semibold text-dyd-silver">0{index + 1}</span>
                </div>
                <p className="text-sm leading-6 text-dyd-text">{item.bestFor}</p>
                <ul className="mt-5 space-y-3">
                  {item.includes.map((include) => (
                    <li key={include} className="flex items-center gap-3 text-sm text-white">
                      <CheckCircle2 size={16} className="shrink-0 text-dyd-cyan" />
                      {include}
                    </li>
                  ))}
                </ul>
                <a
                  href={packageWhatsAppUrl(item)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-dyd-cyan/35 px-4 text-sm font-semibold text-dyd-silver transition hover:bg-dyd-cyan hover:text-dyd-ink"
                >
                  {copy.packageButton} <MessageCircle size={17} />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-lg border border-dyd-silver/15 bg-dyd-ink/70">
            <div className="border-b border-dyd-silver/10 px-5 py-4">
              <h3 className="text-xl font-semibold text-white">{copy.matrixTitle}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-dyd-silver/[0.04] text-xs uppercase tracking-[0.16em] text-dyd-cyan">
                    {copy.matrixHeaders.map((header) => (
                      <th key={header} className="px-5 py-4 font-semibold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {copy.matrixRows.map((row, index) => (
                    <tr key={row[0]} className="border-t border-dyd-silver/10">
                      {row.map((cell, cellIndex) => (
                        <td key={cell} className="px-5 py-4 text-dyd-text">
                          {cellIndex === 0 ? (
                            <span className="font-semibold text-white">{cell}</span>
                          ) : cellIndex === 3 ? (
                            <span className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                              index >= 2 ? "bg-dyd-cyan/15 text-dyd-cyan" : "bg-dyd-silver/10 text-dyd-silver"
                            }`}>
                              {cell}
                            </span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="premium-card rounded-lg p-6">
            <h2 className="text-3xl font-semibold">{copy.compareTitle}</h2>
            <div className="mt-6 grid gap-3">
              {copy.compare.map(([need, route]) => (
                <div key={need} className="rounded-md border border-dyd-silver/15 bg-dyd-silver/[0.04] p-4">
                  <p className="font-semibold text-white">{need}</p>
                  <p className="mt-2 text-sm leading-6 text-dyd-text">{route}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-dyd-cyan/25 bg-gradient-to-br from-dyd-blue/20 via-dyd-cyan/10 to-dyd-panel/70 p-6">
            <h2 className="text-3xl font-semibold">{copy.contact}</h2>
            <p className="mt-3 text-sm leading-6 text-dyd-silver">{copy.text}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
              {copy.contact} <Send size={17} />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-dyd-silver/15 bg-dyd-ink/78 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
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
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-dyd-cyan">{copy.footerServices}</h3>
            <div className="mt-4 grid gap-2 text-sm text-dyd-text">
              {copy.services.slice(0, 4).map((service) => (
                <a key={service.title} href="/servicios" className="hover:text-white">{service.title}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-dyd-cyan">{copy.footerContact}</h3>
            <p className="mt-4 text-sm text-dyd-text">WhatsApp +57 350 862 9779</p>
            <p className="mt-2 text-sm text-dyd-text">Colombia</p>
            <a
              href={whatsappUrl}
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

