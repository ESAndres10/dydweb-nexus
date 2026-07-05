"use client";

import { ArrowRight, CalendarDays, ImageIcon, Search, Tag } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type AdminArticle = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string;
  featuredImage: string;
  status: "Borrador" | "Publicado";
  createdAt: string;
  updatedAt: string;
};

type NewsCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  href: string;
};

const staticArticles: NewsCard[] = [
  {
    slug: "desarrollo-web-empresarial",
    title: "Desarrollo web empresarial: la guia definitiva para hacer crecer tu empresa en 2026",
    excerpt:
      "Conoce como el desarrollo web empresarial impulsa las ventas, fortalece tu marca y acelera la transformacion digital de tu empresa.",
    category: "Desarrollo Web",
    image: "/noticias/desarrollo-web-empresarial.png",
    date: "2026-07-04",
    href: "/noticias/desarrollo-web-empresarial",
  },
];

function toExcerpt(article: AdminArticle) {
  if (article.excerpt?.trim()) return article.excerpt.trim();

  return article.content
    .replace(/<[^>]+>/g, "")
    .replace(/\[imagen:[^\]]+\]/g, "")
    .replace(/\s+/g, " ")
    .slice(0, 170)
    .trim();
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default function NoticiasPage() {
  const [adminArticles, setAdminArticles] = useState<NewsCard[]>([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("dydweb-admin-articles");
      if (!stored) return;

      const parsed = JSON.parse(stored) as AdminArticle[];
      const published = parsed
        .filter((article) => article.status === "Publicado" && article.slug && article.title)
        .map((article) => ({
          slug: article.slug,
          title: article.title,
          excerpt: toExcerpt(article),
          category: article.category || "Noticias",
          image: article.featuredImage || "/logo-dydweb-nexus-og.png",
          date: article.updatedAt || article.createdAt || new Date().toISOString(),
          href: `/noticias/${article.slug}`,
        }));

      setAdminArticles(published);
    } catch {
      setAdminArticles([]);
    }
  }, []);

  const articles = useMemo(() => {
    const bySlug = new Map<string, NewsCard>();
    staticArticles.forEach((article) => bySlug.set(article.slug, article));
    adminArticles.forEach((article) => bySlug.set(article.slug, article));

    return Array.from(bySlug.values()).sort((a, b) => b.date.localeCompare(a.date));
  }, [adminArticles]);

  const categories = useMemo(() => {
    return ["Todos", ...Array.from(new Set(articles.map((article) => article.category)))];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory = category === "Todos" || article.category === category;
      const matchesQuery =
        !normalized ||
        [article.title, article.excerpt, article.category].join(" ").toLowerCase().includes(normalized);

      return matchesCategory && matchesQuery;
    });
  }, [articles, category, query]);

  return (
    <main className="min-h-screen overflow-hidden bg-dyd-black text-white">
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
            <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Inicio</a>
            <a href="/servicios" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Servicios</a>
            <a href="/noticias" className="rounded-md bg-dyd-cyan/10 px-3 py-2 text-sm font-medium text-white">Noticias</a>
            <a href="/nosotros" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Quienes Somos</a>
            <a href="/#contacto" className="rounded-md px-3 py-2 text-sm font-medium text-dyd-text transition hover:text-white">Contacto</a>
          </div>
          <a
            href="/#contacto"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-4 text-sm font-semibold text-white shadow-glow"
          >
            Cotizar
          </a>
        </nav>
      </header>

      <section className="relative z-10 px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-dyd-cyan/35 bg-dyd-cyan/10 px-3 py-2 text-sm text-dyd-cyan">
              <ImageIcon size={18} />
              Centro de noticias
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
              Articulos, guias y analisis para crecer con tecnologia
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-dyd-text">
              Contenido sobre desarrollo web, SEO, inteligencia artificial, automatizacion y transformacion digital para empresas.
            </p>
          </div>

          <div className="mt-8 grid gap-3 lg:grid-cols-[1fr_auto]">
            <label className="relative block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dyd-text" size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-12 w-full rounded-md border border-dyd-silver/15 bg-dyd-ink/70 pl-12 pr-4 text-white outline-none placeholder:text-dyd-text focus:border-dyd-cyan"
                placeholder="Buscar por tema, SEO, IA, desarrollo web..."
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`h-12 rounded-md border px-4 text-sm font-semibold transition ${
                    category === item
                      ? "border-dyd-cyan bg-dyd-cyan text-dyd-ink"
                      : "border-dyd-silver/15 bg-dyd-ink/65 text-dyd-silver hover:border-dyd-cyan hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {filteredArticles.length ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredArticles.map((article) => (
                <article key={article.slug} className="premium-card group overflow-hidden rounded-lg p-0 transition hover:-translate-y-1 hover:border-dyd-cyan/45">
                  <a href={article.href} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-dyd-ink">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-dyd-cyan">
                        <span className="inline-flex items-center gap-1 rounded-md bg-dyd-cyan/10 px-2 py-1">
                          <Tag size={13} />
                          {article.category}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-md bg-dyd-silver/10 px-2 py-1 text-dyd-silver">
                          <CalendarDays size={13} />
                          {formatDate(article.date)}
                        </span>
                      </div>
                      <h2 className="mt-4 line-clamp-3 text-xl font-semibold leading-7 text-white">{article.title}</h2>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-dyd-text">{article.excerpt}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-dyd-cyan transition group-hover:text-white">
                        Leer articulo completo <ArrowRight size={16} />
                      </span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dyd-silver/15 bg-dyd-ink/70 p-8 text-center">
              <p className="text-lg font-semibold">No encontramos articulos con ese filtro.</p>
              <p className="mt-2 text-sm text-dyd-text">Prueba otra palabra clave o selecciona otra categoria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
