import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Cpu,
  Globe2,
  MessageCircle,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

export type SeoServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  badge: string;
  eyebrow: string;
  intro: string;
  intent: string;
  icon: "web" | "software" | "ai" | "chatbot" | "seo";
  primaryKeyword: string;
  benefits: string[];
  outcomes: string[];
  process: [string, string][];
  packages: [string, string][];
  faqs: [string, string][];
  related: [string, string][];
};

const whatsappNumber = "573508629779";

const iconMap = {
  web: Globe2,
  software: Code2,
  ai: Cpu,
  chatbot: Bot,
  seo: Search,
};

export function SeoServiceLanding({ page }: { page: SeoServicePage }) {
  const Icon = iconMap[page.icon];
  const whatsappMessage = [
    "Hola D&D WEB Nexus, llegué desde Google y quiero recibir asesoría.",
    "",
    `Servicio de interés: ${page.primaryKeyword}`,
    `Página consultada: https://dydweb.co/${page.slug}`,
  ].join("\n");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.primaryKeyword,
    description: page.description,
    provider: {
      "@type": "Organization",
      name: "DYDWEB Nexus",
      url: "https://dydweb.co",
    },
    areaServed: ["Colombia", "Latinoamérica", "Estados Unidos"],
    serviceType: page.primaryKeyword,
  };

  return (
    <main className="min-h-screen overflow-hidden bg-dyd-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="grid-surface fixed inset-0 opacity-80" />

      <header className="relative z-10 border-b border-dyd-silver/15 bg-dyd-ink/82 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="relative block h-11 w-40 overflow-hidden rounded-md border border-dyd-cyan/20 bg-dyd-black/70">
              <Image src="/logo-dydweb-nexus-header-wide.png" alt="DYDWEB" fill sizes="160px" className="object-contain p-1" />
            </span>
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Inicio</a>
            <a href="/servicios" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Servicios</a>
            <a href="/nosotros" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Quiénes Somos</a>
            <a href="/preguntas" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Preguntas</a>
            <a href="/#contacto" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Contacto</a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-4 text-sm font-semibold text-white shadow-glow"
          >
            Cotizar
          </a>
        </nav>
      </header>

      <section className="relative z-10 px-4 pb-14 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-dyd-cyan/35 bg-dyd-cyan/10 px-3 py-2 text-sm text-dyd-cyan">
              <span className="relative h-7 w-7 shrink-0">
                <Image src="/nexus-rocket-badge.png" alt="" fill sizes="28px" className="object-contain" />
              </span>
              {page.badge}
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-dyd-cyan">{page.eyebrow}</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight md:text-6xl">{page.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-dyd-text">{page.intro}</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-dyd-silver">{page.intent}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                Solicitar diagnóstico <ArrowRight size={18} />
              </a>
              <a href="/servicios" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-dyd-cyan/35 px-5 text-sm font-semibold text-dyd-silver transition hover:bg-dyd-cyan hover:text-dyd-ink">
                Ver paquetes <Rocket size={18} />
              </a>
            </div>
          </div>

          <div className="premium-card rounded-lg p-6">
            <div className="relative min-h-[410px] overflow-hidden rounded-lg border border-dyd-cyan/20 bg-dyd-ink/80">
              <div className="hero-mesh absolute inset-0 opacity-80" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(18,199,232,0.24),transparent_16rem)]" />
              <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-dyd-cyan/35 bg-dyd-cyan/10 shadow-glow">
                <div className="grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-dyd-blue via-dyd-cyan to-dyd-silver text-dyd-ink shadow-[0_0_42px_rgba(18,199,232,0.55)]">
                  <Icon size={54} />
                </div>
              </div>
              {[
                [Sparkles, "Estrategia", "left-6 top-8"],
                [ShieldCheck, "Seguridad", "right-6 top-14"],
                [TrendingUp, "Conversión", "left-8 bottom-14"],
                [MessageCircle, "WhatsApp", "right-8 bottom-8"],
              ].map(([CardIcon, label, position]) => (
                <div key={label as string} className={`absolute ${position as string} rounded-lg border border-dyd-silver/15 bg-dyd-black/55 p-4 backdrop-blur-xl`}>
                  <CardIcon className="mb-2 text-dyd-cyan" size={24} />
                  <p className="text-sm font-semibold text-white">{label as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="premium-card rounded-lg p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">Por qué importa</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Una solución pensada para vender, operar y crecer.</h2>
            <p className="mt-5 text-base leading-8 text-dyd-text">{page.description}</p>
          </article>
          <div className="grid gap-4 md:grid-cols-2">
            {page.benefits.map((benefit) => (
              <div key={benefit} className="rounded-lg border border-dyd-silver/15 bg-dyd-ink/70 p-5">
                <CheckCircle2 className="mb-4 text-dyd-cyan" size={24} />
                <p className="text-sm leading-6 text-dyd-silver">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-dyd-silver/15 bg-dyd-panel/70 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">Resultados esperados</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Qué debe lograr esta inversión digital</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {page.outcomes.map((outcome, index) => (
              <article key={outcome} className="premium-card rounded-lg p-5">
                <span className="text-sm font-semibold text-dyd-cyan">0{index + 1}</span>
                <p className="mt-4 text-sm leading-6 text-dyd-text">{outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">Proceso</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Una ruta clara antes de desarrollar</h2>
            <p className="mt-5 text-base leading-8 text-dyd-text">
              Antes de escribir código definimos objetivo, alcance, contenido, conversiones y medición. Así cada entrega tiene una razón comercial.
            </p>
          </div>
          <div className="grid gap-4">
            {page.process.map(([title, text], index) => (
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
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-dyd-silver/15 bg-dyd-black/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">Paquetes recomendados</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Elige una ruta acorde a la etapa de tu empresa</h2>
            <p className="mt-5 text-base leading-8 text-dyd-text">
              Cada paquete puede crecer con nuevas secciones, automatizaciones, analítica, CRM, idiomas o campañas de captación.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {page.packages.map(([title, text], index) => (
              <article key={title} className="premium-card rounded-lg p-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-dyd-cyan/30 bg-dyd-cyan/10 text-sm font-bold text-dyd-cyan">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-dyd-text">{text}</p>
                <a
                  href="/servicios"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-dyd-cyan transition hover:text-white"
                >
                  Ver detalles <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="premium-card rounded-lg p-6">
            <h2 className="text-3xl font-semibold">Preguntas frecuentes</h2>
            <div className="mt-6 grid gap-3">
              {page.faqs.map(([question, answer]) => (
                <details key={question} className="rounded-lg border border-dyd-silver/15 bg-dyd-silver/[0.04] p-4">
                  <summary className="cursor-pointer text-base font-semibold text-white">{question}</summary>
                  <p className="mt-3 text-sm leading-6 text-dyd-text">{answer}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className="rounded-lg border border-dyd-cyan/25 bg-gradient-to-br from-dyd-blue/20 via-dyd-cyan/10 to-dyd-panel/70 p-6">
            <h2 className="text-2xl font-semibold">Servicios relacionados</h2>
            <div className="mt-5 grid gap-3">
              {page.related.map(([label, href]) => (
                <a key={href} href={href} className="rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-4 py-3 text-sm font-semibold text-dyd-silver transition hover:border-dyd-cyan/50 hover:text-white">
                  {label}
                </a>
              ))}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
              Hablar con asesor <MessageCircle size={18} />
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
