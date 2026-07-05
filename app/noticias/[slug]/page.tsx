"use client";

import { ArrowLeft, Clock, MessageCircle, Rocket, Sparkles } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ArticleContent } from "../article-content";
import { ArticleViewTracker } from "../article-view-tracker";

type ArticleImage = {
  id: string;
  name: string;
  src: string;
  caption: string;
};

type AdminArticle = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  featuredImage: string;
  status: "Borrador" | "Publicado";
  imageBank?: ArticleImage[];
  updatedAt?: string;
};

const whatsappNumber = "573508629779";

const emptySections: { title: string; text: string }[] = [];
const emptyList: string[] = [];
const emptyFaqs: string[][] = [];

export default function DynamicNewsArticlePage() {
  const params = useParams<{ slug: string }>();
  const slug = String(params.slug || "");
  const [article, setArticle] = useState<AdminArticle | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadArticle = () => {
      try {
        const stored = window.localStorage.getItem("dydweb-admin-articles");
        const articles = stored ? (JSON.parse(stored) as AdminArticle[]) : [];
        const current = articles.find((item) => item.slug === slug && item.status === "Publicado");
        setArticle(current || null);
      } catch {
        setArticle(null);
      } finally {
        setLoaded(true);
      }
    };

    loadArticle();
    window.addEventListener("focus", loadArticle);
    window.addEventListener("storage", loadArticle);

    return () => {
      window.removeEventListener("focus", loadArticle);
      window.removeEventListener("storage", loadArticle);
    };
  }, [slug]);

  const whatsappUrl = useMemo(() => {
    const title = article?.title || "Articulo DYDWEB";
    const message = [
      "Hola D&D WEB Nexus, lei un articulo y quiero recibir asesoria.",
      "",
      `Articulo: ${title}`,
      `URL: https://dydweb.co/noticias/${slug}`,
    ].join("\n");

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [article?.title, slug]);

  if (!loaded) {
    return (
      <main className="grid min-h-screen place-items-center bg-dyd-black px-4 text-white">
        <div className="grid-surface fixed inset-0 opacity-70" />
        <div className="relative z-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-dyd-cyan">DYDWEB Nexus</p>
          <h1 className="mt-3 text-3xl font-semibold">Cargando articulo...</h1>
        </div>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="grid min-h-screen place-items-center bg-dyd-black px-4 text-white">
        <div className="grid-surface fixed inset-0 opacity-70" />
        <section className="premium-card relative z-10 max-w-2xl rounded-lg p-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-dyd-cyan">Articulo no encontrado</p>
          <h1 className="mt-3 text-3xl font-semibold">Esta publicacion aun no esta disponible</h1>
          <p className="mt-4 text-sm leading-6 text-dyd-text">
            Verifica que el articulo este marcado como publicado en el administrador y que el slug coincida con la URL.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="/admin" className="inline-flex h-11 items-center justify-center rounded-md bg-dyd-cyan px-4 text-sm font-semibold text-dyd-ink">
              Ir al administrador
            </a>
            <a href="/noticias" className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-dyd-silver/15 px-4 text-sm font-semibold text-dyd-silver">
              <ArrowLeft size={16} /> Volver a noticias
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-dyd-black text-white">
      <ArticleViewTracker title={article.title} slug={slug} category={article.category || "Noticias"} />
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
            <a href="/noticias" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Noticias</a>
            <a href="/nosotros" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Quienes Somos</a>
            <a href="/#contacto" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Contacto</a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-4 text-sm font-semibold text-white shadow-glow"
          >
            Asesoria
          </a>
        </nav>
      </header>

      <section className="relative z-10 px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <a href="/noticias" className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-dyd-cyan">
                <ArrowLeft size={16} /> Volver a noticias
              </a>
              <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-dyd-cyan/35 bg-dyd-cyan/10 px-3 py-2 text-sm text-dyd-cyan">
                <Rocket size={18} />
                {article.category || "Noticias"}
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-dyd-cyan">Articulo DYDWEB Nexus</p>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight md:text-6xl">
                {article.title}
              </h1>
              {article.excerpt ? (
                <p className="mt-6 max-w-3xl text-lg leading-8 text-dyd-text">{article.excerpt}</p>
              ) : null}
              <div className="mt-7 flex flex-wrap gap-3 text-sm text-dyd-silver">
                <span className="inline-flex items-center gap-2 rounded-md border border-dyd-silver/15 bg-dyd-ink/60 px-3 py-2">
                  <Clock size={16} className="text-dyd-cyan" />
                  Lectura estrategica
                </span>
              </div>
            </div>
            {article.featuredImage ? (
              <figure className="premium-card overflow-hidden rounded-lg p-3">
                <div className="relative aspect-[3/2] overflow-hidden rounded-md bg-dyd-black/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="px-2 pt-3 text-xs leading-5 text-dyd-text">
                  Imagen destacada del articulo.
                </figcaption>
              </figure>
            ) : null}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_0.25fr]">
          <article className="premium-card rounded-lg p-6 md:p-8">
            <ArticleContent
              slug={slug}
              fallbackIntro={article.excerpt || "Articulo publicado desde el portal administrador."}
              sections={emptySections}
              benefits={emptyList}
              mistakes={emptyList}
              faqs={emptyFaqs}
            />
          </article>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-dyd-cyan/25 bg-gradient-to-br from-dyd-blue/20 via-dyd-cyan/10 to-dyd-panel/70 p-5">
              <Sparkles className="text-dyd-cyan" size={26} />
              <h2 className="mt-4 text-xl font-semibold">Quieres convertir esta idea en resultados?</h2>
              <p className="mt-3 text-sm leading-6 text-dyd-text">
                Hablemos de una estrategia digital enfocada en visibilidad, conversion y crecimiento.
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
          </aside>
        </div>
      </section>
    </main>
  );
}
