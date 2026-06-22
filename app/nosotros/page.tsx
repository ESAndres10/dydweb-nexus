"use client";

import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  Compass,
  Cpu,
  Globe2,
  Layers3,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
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
    badge: "Identidad D&D WEB Nexus",
    titleBefore: "Creamos tecnología para empresas que no quieren",
    titleHighlight: "seguir haciendo lo mismo",
    titleAfter: ".",
    text: "Nacemos para transformar la manera en que las organizaciones diseñan, lanzan y escalan sus proyectos digitales: con estrategia, ingeniería, inteligencia artificial y una experiencia visual premium.",
    primaryCta: "Trabajemos juntos",
    secondaryCta: "Ver servicios",
    storyEyebrow: "Historia de marca",
    storyTitle: "Una empresa creada para reinventar el desarrollo digital",
    storyText:
      "D&D WEB Nexus surge de una idea clara: muchas empresas no necesitan solo una página bonita, necesitan un socio capaz de convertir tecnología en crecimiento real. Por eso unimos diseño, software, automatización, datos e inteligencia artificial en una sola ruta de trabajo. Nuestro enfoque rompe con lo tradicional: menos proyectos aislados, más plataformas preparadas para evolucionar.",
    missionTitle: "Misión",
    missionText: "Impulsar negocios con soluciones digitales modernas, medibles y escalables que conecten estrategia, tecnología y experiencia de usuario.",
    visionTitle: "Visión",
    visionText: "Convertirnos en un referente latinoamericano en transformación digital premium, ayudando a empresas y emprendedores a competir con tecnología de alto nivel.",
    valueEyebrow: "Lo que nos diferencia",
    valueTitle: "Construimos con mentalidad de futuro",
    values: [
      ["Innovación aplicada", "No usamos tecnología por moda: la conectamos con objetivos comerciales concretos."],
      ["Diseño premium", "Cuidamos cada detalle visual para transmitir confianza, claridad y posicionamiento."],
      ["Escalabilidad real", "Creamos bases preparadas para crecer hacia IA, CRM, portales, automatizaciones y datos."],
      ["Acompañamiento estratégico", "No entregamos solo archivos: guiamos decisiones para que el proyecto tenga dirección."],
    ],
    propositionEyebrow: "Propuesta de valor",
    propositionTitle: "De idea a sistema digital que vende, opera y aprende",
    propositionText:
      "Nuestra diferencia está en integrar estrategia, marca, ingeniería y automatización desde el primer día. Esto permite lanzar más rápido, medir mejor y evolucionar sin rehacer todo el camino.",
    pillars: [
      ["Estrategia", "Definimos objetivos, alcance, contenido y ruta de crecimiento."],
      ["Construcción", "Desarrollamos experiencias web, software, integraciones y componentes escalables."],
      ["Evolución", "Sumamos automatización, IA, medición y optimización continua."],
    ],
    stats: [
      ["42+", "soluciones proyectadas"],
      ["7", "sectores atendidos"],
      ["24/7", "visión operativa digital"],
      ["98%", "enfoque en satisfacción"],
    ],
    trustTitle: "Una marca preparada para crecer con tus objetivos",
    trustText:
      "Trabajamos para que cada proyecto transmita solidez desde el primer clic y pueda convertirse en una plataforma más completa cuando el negocio lo necesite.",
    ctaTitle: "Si tu empresa está lista para evolucionar, nosotros estamos listos para construir.",
    ctaText: "Conversemos sobre tu idea, etapa actual y oportunidades de crecimiento digital.",
    ctaButton: "Iniciar conversación",
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
    badge: "D&D WEB Nexus identity",
    titleBefore: "We build technology for companies that refuse to",
    titleHighlight: "keep doing business as usual",
    titleAfter: ".",
    text: "We exist to transform how organizations design, launch and scale digital projects: with strategy, engineering, artificial intelligence and a premium visual experience.",
    primaryCta: "Work with us",
    secondaryCta: "View services",
    storyEyebrow: "Brand story",
    storyTitle: "A company created to reinvent digital development",
    storyText:
      "D&D WEB Nexus was born from a clear idea: many companies do not only need a beautiful website, they need a partner capable of turning technology into real growth. That is why we connect design, software, automation, data and artificial intelligence in one work route. Our approach challenges the traditional model: fewer isolated projects, more platforms ready to evolve.",
    missionTitle: "Mission",
    missionText: "Drive businesses with modern, measurable and scalable digital solutions that connect strategy, technology and user experience.",
    visionTitle: "Visión",
    visionText: "Become a Latin American reference in premium digital transformation, helping companies and entrepreneurs compete with high-level technology.",
    valueEyebrow: "What makes us different",
    valueTitle: "We build with a future-ready mindset",
    values: [
      ["Applied innovation", "We do not use technology as a trend: we connect it with clear business goals."],
      ["Premium design", "We care for every visual detail to communicate trust, clarity and positioning."],
      ["Real scalability", "We create foundations ready to grow into AI, CRM, portals, automations and data."],
      ["Strategic guidance", "We do not only deliver files: we guide decisions so the project has direction."],
    ],
    propositionEyebrow: "Value proposition",
    propositionTitle: "From idea to a digital system that sells, operates and learns",
    propositionText:
      "Our difference is integrating strategy, brand, engineering and automation from day one. This allows teams to launch faster, measure better and evolve without rebuilding everything.",
    pillars: [
      ["Strategy", "We define goals, scope, content and the growth route."],
      ["Build", "We develop web experiences, software, integrations and scalable components."],
      ["Evolution", "We add automation, AI, measurement and continuous optimization."],
    ],
    stats: [
      ["42+", "projected solutions"],
      ["7", "sectors served"],
      ["24/7", "digital operations vision"],
      ["98%", "satisfaction focus"],
    ],
    trustTitle: "A brand ready to grow with your goals",
    trustText:
      "We work so every project communicates strength from the first click and can become a more complete platform when the business needs it.",
    ctaTitle: "If your company is ready to evolve, we are ready to build.",
    ctaText: "Let us talk about your idea, current stage and digital growth opportunities.",
    ctaButton: "Start conversation",
    footerTagline: "Technology that drives business.",
    footerQuickLinks: "Quick links",
    footerServices: "Services",
    footerContact: "Contact",
    footerAdvisor: "Talk to an advisor",
  },
};

const serviceLinks = {
  es: ["Desarrollo de software", "Desarrollo web", "Inteligencia artificial", "SEO"],
  en: ["Software development", "Web development", "Artificial intelligence", "SEO"],
};

export default function AboutPage() {
  const [language, setLanguage] = useState<Language>("es");
  const copy = pageCopy[language];
  const whatsappMessage =
    language === "es"
      ? "Hola D&D WEB Nexus, revise la sección Quiénes Somos y quiero conversar sobre un proyecto digital."
      : "Hello D&D WEB Nexus, I reviewed the About Us section and would like to discuss a digital project.";

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
            <a href="/nosotros" className="rounded-md bg-dyd-cyan/10 px-3 py-2 text-sm font-medium text-white">{copy.nav.about}</a>
            <a href="/servicios" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:bg-dyd-silver/10 hover:text-white">{copy.nav.services}</a>
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

      <section className="relative z-10 px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-dyd-cyan/35 bg-dyd-cyan/10 px-3 py-2 text-sm text-dyd-cyan">
              <span className="relative h-7 w-7 shrink-0">
                <Image src="/nexus-rocket-badge.png" alt="" fill sizes="28px" className="object-contain" />
              </span>
              {copy.badge}
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
              {copy.titleBefore}{" "}
              <span className="bg-gradient-to-r from-dyd-blue via-dyd-cyan to-dyd-royal bg-clip-text text-transparent">
                {copy.titleHighlight}
              </span>
              {copy.titleAfter}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-dyd-text">{copy.text}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                {copy.primaryCta} <ArrowRight size={18} />
              </a>
              <a href="/servicios" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-dyd-cyan/35 px-5 text-sm font-semibold text-dyd-silver transition hover:bg-dyd-cyan hover:text-dyd-ink">
                {copy.secondaryCta} <Rocket size={18} />
              </a>
            </div>
          </div>

          <div className="premium-card rounded-lg p-5">
            <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-dyd-cyan/20 bg-dyd-ink/80">
              <div className="hero-mesh absolute inset-0 opacity-80" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(18,199,232,0.22),transparent_16rem)]" />
              <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-dyd-cyan/35 bg-dyd-cyan/10 shadow-glow">
                <div className="grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-dyd-blue via-dyd-cyan to-dyd-silver text-dyd-ink shadow-[0_0_42px_rgba(18,199,232,0.55)]">
                  <Bot size={54} />
                </div>
              </div>
              {[
                [Cpu, "IA", "left-6 top-8"],
                [Globe2, "WEB", "right-6 top-16"],
                [Layers3, "UX", "left-10 bottom-14"],
                [ShieldCheck, "DATA", "right-8 bottom-8"],
              ].map(([Icon, label, position]) => (
                <div key={label as string} className={`absolute ${position as string} rounded-lg border border-dyd-silver/15 bg-dyd-black/55 p-4 backdrop-blur-xl`}>
                  <Icon className="mb-2 text-dyd-cyan" size={24} />
                  <p className="text-sm font-semibold text-white">{label as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="premium-card rounded-lg p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">{copy.storyEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{copy.storyTitle}</h2>
            <p className="mt-5 text-base leading-8 text-dyd-text">{copy.storyText}</p>
          </article>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="premium-card rounded-lg p-6">
              <Target className="mb-5 text-dyd-cyan" size={30} />
              <h3 className="text-2xl font-semibold">{copy.missionTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-dyd-text">{copy.missionText}</p>
            </article>
            <article className="premium-card rounded-lg p-6">
              <Compass className="mb-5 text-dyd-cyan" size={30} />
              <h3 className="text-2xl font-semibold">{copy.visionTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-dyd-text">{copy.visionText}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-dyd-silver/15 bg-dyd-panel/70 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">{copy.valueEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{copy.valueTitle}</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {copy.values.map(([title, text], index) => {
              const ValueIcon = [Rocket, Sparkles, TrendingUp, UsersRound][index];
              return (
                <article key={title} className="premium-card group rounded-lg p-6 transition hover:-translate-y-1 hover:border-dyd-cyan/50">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-md border border-dyd-cyan/25 bg-dyd-cyan/10 text-dyd-cyan transition group-hover:bg-dyd-cyan group-hover:text-dyd-ink">
                    <ValueIcon size={25} />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-dyd-text">{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">{copy.propositionEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{copy.propositionTitle}</h2>
            <p className="mt-5 text-base leading-8 text-dyd-text">{copy.propositionText}</p>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {copy.stats.map(([value, label]) => (
                <div key={label} className="premium-card rounded-lg p-4">
                  <p className="text-3xl font-semibold text-white">{value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-dyd-cyan">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {copy.pillars.map(([title, text], index) => (
              <article key={title} className="rounded-lg border border-dyd-silver/15 bg-dyd-ink/70 p-5">
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-dyd-cyan/30 bg-dyd-cyan/10 text-sm font-bold text-dyd-cyan">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-dyd-text">{text}</p>
                  </div>
                </div>
              </article>
            ))}
            <article className="premium-card rounded-lg p-6">
              <h3 className="text-2xl font-semibold">{copy.trustTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-dyd-text">{copy.trustText}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-lg border border-dyd-cyan/20 bg-gradient-to-r from-dyd-blue/22 via-dyd-cyan/10 to-dyd-panel/75 p-6 shadow-glow md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-3xl">{copy.ctaTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-dyd-silver">{copy.ctaText}</p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            {copy.ctaButton} <MessageCircle size={18} />
          </a>
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
              {serviceLinks[language].map((service) => (
                <a key={service} href="/servicios" className="hover:text-white">{service}</a>
              ))}
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

