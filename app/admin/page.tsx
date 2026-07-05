"use client";

import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  BarChart3,
  CheckCircle2,
  Edit3,
  Eye,
  FileText,
  ImagePlus,
  LayoutDashboard,
  LockKeyhole,
  Plus,
  Save,
  Search,
  Send,
  Tag,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type ArticleStatus = "Borrador" | "Publicado";

type ArticleImage = {
  id: string;
  name: string;
  src: string;
  caption: string;
};

type Article = {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  tags: string;
  featuredImage: string;
  imageBank?: ArticleImage[];
  status: ArticleStatus;
  views: number;
  createdAt: string;
  updatedAt: string;
};

const adminPasscode = "DYDWEB2026";
const articlesKey = "dydweb-admin-articles";
const categoriesKey = "dydweb-admin-categories";
const sessionKey = "dydweb-admin-session";

const defaultCategories = ["Desarrollo Web", "SEO", "Inteligencia Artificial", "Automatización", "Noticias"];

const starterArticleContent = `La nueva realidad digital

Durante años muchas empresas consideraban suficiente tener una página con información básica. Hoy el comportamiento del consumidor cambió: antes de llamar, comprar o solicitar una cotización, investiga en internet. El sitio web es la primera impresión de una empresa y, en muchos casos, el factor que determina si un cliente continúa el proceso o busca otra opción.

Cada proyecto debe partir de un análisis del negocio, definir objetivos claros, establecer indicadores de rendimiento y construir una experiencia centrada en el usuario. Esta visión permite que el sitio web evolucione con el tiempo y siga generando valor para la organización.

Qué es el desarrollo web empresarial

Es el proceso de analizar, diseñar, desarrollar y optimizar una plataforma digital alineada con los objetivos del negocio. No se trata únicamente de diseño visual: incluye experiencia de usuario, rendimiento, seguridad, posicionamiento en buscadores, integraciones, automatización y escalabilidad.

Beneficios

Una plataforma profesional aumenta la credibilidad, mejora la captación de clientes, automatiza tareas, integra CRM, facilita el análisis de datos, fortalece la marca y crea nuevas oportunidades comerciales. También permite atender usuarios las 24 horas y reducir procesos manuales.

Errores frecuentes

Elegir soluciones únicamente por precio, ignorar el SEO, no optimizar para móviles, descuidar la velocidad, no medir resultados y publicar contenido desactualizado son algunos de los errores más comunes. Corregirlos puede representar una ventaja competitiva importante.

Tecnologías

La tecnología debe elegirse según las necesidades del proyecto. Existen soluciones para sitios corporativos, plataformas a medida, comercio electrónico y aplicaciones web. Lo importante es construir una arquitectura preparada para crecer junto con la empresa.

SEO y contenido

Una buena página necesita contenido útil. Publicar guías, casos de éxito y respuestas a las preguntas de los clientes ayuda a posicionarse en Google y demuestra experiencia. Un blog estratégico se convierte en una fuente constante de tráfico orgánico.

Inteligencia artificial

La IA permite automatizar respuestas, clasificar solicitudes, asistir a los usuarios y generar procesos más eficientes. Integrarla correctamente mejora la experiencia del cliente y optimiza recursos.

Conclusión

El desarrollo web empresarial ya no es un gasto, sino una inversión. Las empresas que construyen plataformas rápidas, seguras y orientadas a resultados tienen mayores posibilidades de crecer en un mercado cada vez más digital. En DYDWEB creemos en crear soluciones que impulsen negocios, no solo páginas web.

FAQ

¿Qué es el desarrollo web empresarial?
¿Cuánto tarda desarrollar una página web empresarial?
¿Qué tecnologías son recomendables?
¿Por qué es importante el SEO?
¿Cómo ayuda la inteligencia artificial?
¿Qué mantenimiento requiere un sitio web?
¿Cómo medir los resultados?
¿Qué diferencia hay entre una web básica y una plataforma empresarial?
¿Es importante la velocidad del sitio?
¿Cómo elegir una agencia de desarrollo web?`;

const starterImageBank: ArticleImage[] = [
  {
    id: "img-desarrollo-web-empresarial",
    name: "desarrollo-web-empresarial.png",
    src: "/noticias/desarrollo-web-empresarial.png",
    caption: "Guía visual sobre desarrollo web empresarial.",
  },
];

const starterArticle: Article = {
  id: "article-desarrollo-web-empresarial",
  title: "Desarrollo web empresarial: la guía definitiva para hacer crecer tu empresa en 2026",
  slug: "desarrollo-web-empresarial",
  category: "Desarrollo Web",
  excerpt:
    "Conoce cómo el desarrollo web empresarial impulsa las ventas, fortalece tu marca y acelera la transformación digital de tu empresa.",
  content: starterArticleContent,
  tags: "Desarrollo Web, Empresas, SEO, Transformación Digital, IA",
  featuredImage: "/noticias/desarrollo-web-empresarial.png",
  imageBank: starterImageBank,
  status: "Publicado",
  views: 0,
  createdAt: "2026-07-04",
  updatedAt: "2026-07-04",
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 82);
}

function createEmptyArticle(categories: string[]): Article {
  const now = new Date().toISOString().slice(0, 10);
  return {
    id: `article-${Date.now()}`,
    title: "",
    slug: "",
    category: categories[0] || "Noticias",
    excerpt: "",
    content: "",
    tags: "",
    featuredImage: "",
    imageBank: [],
    status: "Borrador",
    views: 0,
    createdAt: now,
    updatedAt: now,
  };
}

function normalizeArticleImages(article: Article): Article {
  let imageBank = article.imageBank || (article.id === starterArticle.id ? [...starterImageBank] : []);
  let content = article.content || "";
  let migrated = false;

  content = content.replace(
    /<figure>\s*<img\s+src="(data:image\/[^"]+)"\s+alt="([^"]*)"[^>]*\/>\s*<figcaption>([\s\S]*?)<\/figcaption>\s*<\/figure>/g,
    (_match, src: string, alt: string, caption: string) => {
      const id = `img-local-${Date.now()}-${imageBank.length + 1}`;
      imageBank = [
        ...imageBank,
        {
          id,
          name: alt || "imagen-local",
          src,
          caption: caption.replace(/<[^>]*>/g, "").trim() || "Imagen del artículo.",
        },
      ];
      migrated = true;
      return `\n[imagen:${id}]\n`;
    }
  );

  if (article.id === starterArticle.id && content.trim().length < 420) {
    content = starterArticleContent;
    migrated = true;
  }

  return {
    ...article,
    content,
    imageBank,
    updatedAt: migrated ? new Date().toISOString().slice(0, 10) : article.updatedAt,
  };
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [categories, setCategories] = useState(defaultCategories);
  const [newCategory, setNewCategory] = useState("");
  const [articles, setArticles] = useState<Article[]>([starterArticle]);
  const [selectedId, setSelectedId] = useState(starterArticle.id);
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const contentTextareaRef = useRef<HTMLTextAreaElement | null>(null);
  const inlineImageInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setAuthenticated(window.localStorage.getItem(sessionKey) === "active");

    const storedCategories = window.localStorage.getItem(categoriesKey);
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories) as string[]);
    }

    const storedArticles = window.localStorage.getItem(articlesKey);
    if (storedArticles) {
      const parsed = JSON.parse(storedArticles) as Article[];
      const migrated = parsed.map((article) =>
        normalizeArticleImages({
          ...article,
          excerpt: article.excerpt || (article.id === starterArticle.id ? starterArticle.excerpt : ""),
          featuredImage: article.featuredImage || (article.id === starterArticle.id ? starterArticle.featuredImage : ""),
        })
      );
      setArticles(migrated.length ? migrated : [starterArticle]);
      setSelectedId(migrated[0]?.id || starterArticle.id);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(categoriesKey, JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    window.localStorage.setItem(articlesKey, JSON.stringify(articles));
  }, [articles]);

  const selectedArticle = articles.find((article) => article.id === selectedId) || articles[0];

  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return articles;
    return articles.filter((article) =>
      [article.title, article.category, article.slug, article.tags].join(" ").toLowerCase().includes(normalized)
    );
  }, [articles, query]);

  const stats = useMemo(() => {
    const published = articles.filter((article) => article.status === "Publicado").length;
    const drafts = articles.filter((article) => article.status === "Borrador").length;
    const views = articles.reduce((total, article) => total + Number(article.views || 0), 0);
    return { published, drafts, views };
  }, [articles]);

  const updateArticle = (patch: Partial<Article>) => {
    setArticles((current) =>
      current.map((article) =>
        article.id === selectedArticle.id
          ? {
              ...article,
              ...patch,
              updatedAt: new Date().toISOString().slice(0, 10),
            }
          : article
      )
    );
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (passcode.trim() !== adminPasscode) {
      setNotice("Clave incorrecta. Revisa la clave del administrador.");
      return;
    }

    window.localStorage.setItem(sessionKey, "active");
    setAuthenticated(true);
    setNotice("");
  };

  const handleNewArticle = () => {
    const article = createEmptyArticle(categories);
    setArticles((current) => [article, ...current]);
    setSelectedId(article.id);
    setNotice("Nuevo artículo creado como borrador.");
  };

  const handleDeleteArticle = () => {
    if (articles.length === 1) {
      setNotice("Debe existir al menos un artículo en el panel.");
      return;
    }

    const nextArticles = articles.filter((article) => article.id !== selectedArticle.id);
    setArticles(nextArticles);
    setSelectedId(nextArticles[0].id);
    setNotice("Artículo eliminado del panel local.");
  };

  const handleAddCategory = () => {
    const value = newCategory.trim();
    if (!value) return;
    if (categories.some((category) => category.toLowerCase() === value.toLowerCase())) {
      setNotice("Esa categoría ya existe.");
      return;
    }
    setCategories((current) => [...current, value]);
    setNewCategory("");
    setNotice("Categoría agregada.");
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      updateArticle({ featuredImage: String(reader.result || "") });
      setNotice("Imagen destacada cargada en la vista previa.");
    };
    reader.readAsDataURL(file);
  };

  const insertIntoContent = (before: string, after = "", fallbackText = "") => {
    const textarea = contentTextareaRef.current;
    const content = selectedArticle.content || "";
    const start = textarea?.selectionStart ?? content.length;
    const end = textarea?.selectionEnd ?? content.length;
    const selectedText = content.slice(start, end) || fallbackText;
    const nextContent = `${content.slice(0, start)}${before}${selectedText}${after}${content.slice(end)}`;

    updateArticle({ content: nextContent });

    window.requestAnimationFrame(() => {
      textarea?.focus();
      const cursor = start + before.length + selectedText.length + after.length;
      textarea?.setSelectionRange(cursor, cursor);
    });
  };

  const alignSelectedText = (alignment: "left" | "center" | "right" | "justify") => {
    insertIntoContent(
      `<p style="text-align: ${alignment};">\n`,
      "\n</p>",
      "Escribe aquí el texto que quieres alinear."
    );
    setNotice(`Bloque con alineación ${alignment} agregado al contenido.`);
  };

  const insertImageMarker = (image: ArticleImage) => {
    updateArticle({ imageBank: [...(selectedArticle.imageBank || []), image] });
    insertIntoContent(`\n[imagen:${image.id}]\n`, "", "");
  };

  const insertInlineImage = () => {
    const imageUrl = window.prompt("Pega la URL de la imagen que quieres insertar en el artículo:");
    if (!imageUrl?.trim()) return;
    const id = `img-url-${Date.now()}`;
    insertImageMarker({
      id,
      name: imageUrl.trim().split("/").pop() || "imagen-url",
      src: imageUrl.trim(),
      caption: "Describe la imagen aquí.",
    });
    setNotice("Imagen agregada al banco e insertada como marcador corto.");
  };

  const handleInlineImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const imageData = String(reader.result || "");
      const id = `img-local-${Date.now()}`;
      insertImageMarker({
        id,
        name: file.name,
        src: imageData,
        caption: "Describe la imagen aquí.",
      });
      setNotice("Imagen local cargada al banco e insertada como marcador corto.");
      event.target.value = "";
    };
    reader.readAsDataURL(file);
  };

  const insertExistingBankImage = (imageId: string) => {
    insertIntoContent(`\n[imagen:${imageId}]\n`, "", "");
    setNotice("Imagen del banco insertada como marcador corto.");
  };

  const updateBankImage = (imageId: string, patch: Partial<ArticleImage>) => {
    updateArticle({
      imageBank: (selectedArticle.imageBank || []).map((image) =>
        image.id === imageId ? { ...image, ...patch } : image
      ),
    });
  };

  const removeBankImage = (imageId: string) => {
    updateArticle({
      imageBank: (selectedArticle.imageBank || []).filter((image) => image.id !== imageId),
      content: selectedArticle.content.replaceAll(`[imagen:${imageId}]`, ""),
    });
    setNotice("Imagen eliminada del banco y del contenido.");
  };

  const restoreFullArticleContent = () => {
    updateArticle({ content: starterArticleContent });
    setNotice("Contenido completo del artículo cargado en el editor.");
  };

  const cleanEmbeddedImages = () => {
    const normalized = normalizeArticleImages(selectedArticle);
    updateArticle({
      content: normalized.content,
      imageBank: normalized.imageBank,
    });
    setNotice("Contenido limpiado: las imágenes pesadas se movieron al banco.");
  };

  const handlePublishArticle = () => {
    const title = selectedArticle.title.trim();
    const content = selectedArticle.content.trim();
    const nextSlug = selectedArticle.slug || slugify(title);

    if (!title || !content) {
      setNotice("Antes de publicar, completa al menos el título y el contenido del artículo.");
      return;
    }

    updateArticle({
      slug: nextSlug,
      status: "Publicado",
    });
    setNotice(`Artículo marcado como publicado. URL sugerida: /noticias/${nextSlug}`);
  };

  const handleExport = async () => {
    const payload = {
      ...selectedArticle,
      publicUrl: selectedArticle.slug ? `/noticias/${selectedArticle.slug}` : "",
    };
    await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    setNotice("Artículo copiado en formato JSON. Ya puedes guardarlo o enviarlo para publicación.");
  };

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-dyd-black px-4 py-10 text-white">
        <div className="grid-surface fixed inset-0 opacity-70" />
        <section className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-md place-items-center">
          <form onSubmit={handleLogin} className="premium-card w-full rounded-lg p-6">
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-lg border border-dyd-cyan/30 bg-dyd-cyan/10 text-dyd-cyan">
              <LockKeyhole size={28} />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-dyd-cyan">Portal administrador</p>
            <h1 className="mt-3 text-3xl font-semibold">DYDWEB Nexus</h1>
            <p className="mt-3 text-sm leading-6 text-dyd-text">
              Acceso interno para gestionar artículos, categorías, imágenes destacadas y métricas editoriales.
            </p>
            <label className="mt-6 block">
              <span className="text-sm font-semibold text-dyd-silver">Clave de acceso</span>
              <input
                type="password"
                value={passcode}
                onChange={(event) => setPasscode(event.target.value)}
                className="mt-2 h-12 w-full rounded-md border border-dyd-silver/15 bg-dyd-ink/70 px-4 text-white outline-none transition focus:border-dyd-cyan"
                placeholder="Ingresa la clave"
              />
            </label>
            {notice ? <p className="mt-3 text-sm text-dyd-cyan">{notice}</p> : null}
            <button className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-5 text-sm font-semibold text-white shadow-glow">
              Entrar al portal <LayoutDashboard size={18} />
            </button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-dyd-black text-white">
      <div className="grid-surface fixed inset-0 opacity-70" />
      <header className="sticky top-0 z-30 border-b border-dyd-silver/15 bg-dyd-ink/88 backdrop-blur-xl">
        <nav className="mx-auto flex min-h-16 max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="relative block h-11 w-40 overflow-hidden rounded-md border border-dyd-cyan/20 bg-dyd-black/70">
              <Image src="/logo-dydweb-nexus-header-wide.png" alt="DYDWEB Nexus" fill sizes="160px" className="object-contain p-1" />
            </span>
            <span className="hidden text-sm font-semibold text-dyd-silver sm:inline">Administrador de contenidos</span>
          </a>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleNewArticle}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-4 text-sm font-semibold text-white shadow-glow"
            >
              Nuevo artículo <Plus size={17} />
            </button>
            <button
              type="button"
              onClick={() => {
                window.localStorage.removeItem(sessionKey);
                setAuthenticated(false);
              }}
              className="inline-flex h-10 items-center justify-center rounded-md border border-dyd-silver/15 px-4 text-sm font-semibold text-dyd-silver transition hover:border-dyd-cyan hover:text-white"
            >
              Salir
            </button>
          </div>
        </nav>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-4 md:grid-cols-4">
          {([
            ["Artículos publicados", stats.published, FileText],
            ["Borradores", stats.drafts, Edit3],
            ["Categorías", categories.length, Tag],
            ["Visitas registradas", stats.views, Eye],
          ] as [string, number, LucideIcon][]).map(([label, value, Icon]) => (
            <article key={label} className="premium-card rounded-lg p-5">
              <Icon className="text-dyd-cyan" size={24} />
              <p className="mt-4 text-2xl font-semibold">{value}</p>
              <p className="mt-1 text-sm text-dyd-text">{label}</p>
            </article>
          ))}
        </div>

        {notice ? (
          <div className="mb-6 rounded-lg border border-dyd-cyan/25 bg-dyd-cyan/10 px-4 py-3 text-sm text-dyd-cyan">
            {notice}
          </div>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="space-y-6">
            <section className="premium-card rounded-lg p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">Artículos</h2>
                <span className="rounded-md bg-dyd-cyan/10 px-2 py-1 text-xs font-semibold text-dyd-cyan">{articles.length}</span>
              </div>
              <label className="relative mt-4 block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dyd-text" size={17} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="h-11 w-full rounded-md border border-dyd-silver/15 bg-dyd-black/35 pl-10 pr-3 text-sm text-white outline-none focus:border-dyd-cyan"
                  placeholder="Buscar artículo"
                />
              </label>
              <div className="mt-4 max-h-[520px] space-y-3 overflow-auto pr-1">
                {filteredArticles.map((article) => (
                  <button
                    type="button"
                    key={article.id}
                    onClick={() => setSelectedId(article.id)}
                    className={`w-full rounded-lg border p-4 text-left transition ${
                      article.id === selectedArticle.id
                        ? "border-dyd-cyan/55 bg-dyd-cyan/10"
                        : "border-dyd-silver/15 bg-dyd-black/30 hover:border-dyd-cyan/35"
                    }`}
                  >
                    <span className="rounded-md bg-dyd-silver/10 px-2 py-1 text-xs font-semibold text-dyd-cyan">{article.category}</span>
                    <h3 className="mt-3 line-clamp-2 text-sm font-semibold leading-5 text-white">{article.title || "Artículo sin título"}</h3>
                    <div className="mt-3 flex items-center justify-between text-xs text-dyd-text">
                      <span>{article.status}</span>
                      <span className="inline-flex items-center gap-1">
                        <Eye size={14} /> {article.views || 0}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <section className="premium-card rounded-lg p-5">
              <h2 className="text-xl font-semibold">Categorías</h2>
              <div className="mt-4 flex gap-2">
                <input
                  value={newCategory}
                  onChange={(event) => setNewCategory(event.target.value)}
                  className="h-10 min-w-0 flex-1 rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-3 text-sm text-white outline-none focus:border-dyd-cyan"
                  placeholder="Nueva categoría"
                />
                <button
                  type="button"
                  onClick={handleAddCategory}
                  className="grid h-10 w-10 place-items-center rounded-md bg-dyd-cyan text-dyd-ink"
                  aria-label="Agregar categoría"
                >
                  <Plus size={18} />
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span key={category} className="rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-3 py-2 text-xs font-semibold text-dyd-silver">
                    {category}
                  </span>
                ))}
              </div>
            </section>
          </aside>

          <section className="premium-card rounded-lg p-5 md:p-6">
            <div className="flex flex-col gap-3 border-b border-dyd-silver/10 pb-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyd-cyan">Editor de artículo</p>
                <h1 className="mt-2 text-3xl font-semibold">Crear y preparar contenido</h1>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handlePublishArticle}
                  className="inline-flex h-10 items-center gap-2 rounded-md bg-gradient-to-r from-dyd-blue to-dyd-cyan px-4 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
                >
                  Publicar artículo <Send size={16} />
                </button>
                {selectedArticle.status === "Publicado" && selectedArticle.slug ? (
                  <a
                    href={`/noticias/${selectedArticle.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-md border border-dyd-cyan/35 px-3 text-sm font-semibold text-dyd-cyan transition hover:bg-dyd-cyan hover:text-dyd-ink"
                  >
                    Ver publicación <Eye size={16} />
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={() => updateArticle({ views: Number(selectedArticle.views || 0) + 1 })}
                  className="inline-flex h-10 items-center gap-2 rounded-md border border-dyd-silver/15 px-3 text-sm font-semibold text-dyd-silver transition hover:border-dyd-cyan hover:text-white"
                >
                  Sumar vista <BarChart3 size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleExport}
                  className="inline-flex h-10 items-center gap-2 rounded-md border border-dyd-cyan/35 px-3 text-sm font-semibold text-dyd-cyan transition hover:bg-dyd-cyan hover:text-dyd-ink"
                >
                  Exportar <Save size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleDeleteArticle}
                  className="inline-flex h-10 items-center gap-2 rounded-md border border-red-400/25 px-3 text-sm font-semibold text-red-200 transition hover:bg-red-400/10"
                >
                  Eliminar <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-5">
              <label className="block">
                <span className="text-sm font-semibold text-dyd-silver">Título del artículo</span>
                <input
                  value={selectedArticle.title}
                  onChange={(event) => {
                    const title = event.target.value;
                    updateArticle({ title, slug: selectedArticle.slug || slugify(title) });
                  }}
                  className="mt-2 h-12 w-full rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-4 text-white outline-none focus:border-dyd-cyan"
                  placeholder="Ej: Desarrollo web empresarial..."
                />
              </label>

              <div className="grid gap-4 md:grid-cols-3">
                <label className="block">
                  <span className="text-sm font-semibold text-dyd-silver">Slug URL</span>
                  <input
                    value={selectedArticle.slug}
                    onChange={(event) => updateArticle({ slug: slugify(event.target.value) })}
                    className="mt-2 h-12 w-full rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-4 text-white outline-none focus:border-dyd-cyan"
                    placeholder="desarrollo-web..."
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-dyd-silver">Categoría</span>
                  <select
                    value={selectedArticle.category}
                    onChange={(event) => updateArticle({ category: event.target.value })}
                    className="mt-2 h-12 w-full rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-4 text-white outline-none focus:border-dyd-cyan"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-dyd-silver">Estado</span>
                  <select
                    value={selectedArticle.status}
                    onChange={(event) => updateArticle({ status: event.target.value as ArticleStatus })}
                    className="mt-2 h-12 w-full rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-4 text-white outline-none focus:border-dyd-cyan"
                  >
                    <option value="Borrador">Borrador</option>
                    <option value="Publicado">Publicado</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-semibold text-dyd-silver">Resumen SEO</span>
                <textarea
                  value={selectedArticle.excerpt}
                  onChange={(event) => updateArticle({ excerpt: event.target.value })}
                  rows={3}
                  className="mt-2 w-full rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-4 py-3 text-white outline-none focus:border-dyd-cyan"
                  placeholder="Descripción corta para Google y tarjetas sociales"
                />
              </label>

              <div className="grid gap-4 lg:grid-cols-[0.58fr_0.42fr]">
                <div className="block">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm font-semibold text-dyd-silver">Contenido del artículo</span>
                    <div className="flex flex-wrap gap-2">
                      {([
                        ["Izquierda", AlignLeft, () => alignSelectedText("left")],
                        ["Centrar", AlignCenter, () => alignSelectedText("center")],
                        ["Derecha", AlignRight, () => alignSelectedText("right")],
                        ["Justificar", AlignJustify, () => alignSelectedText("justify")],
                      ] as [string, LucideIcon, () => void][]).map(([label, Icon, action]) => (
                        <button
                          key={label}
                          type="button"
                          onClick={action}
                          title={label}
                          className="grid h-9 w-9 place-items-center rounded-md border border-dyd-silver/15 bg-dyd-black/35 text-dyd-silver transition hover:border-dyd-cyan hover:text-dyd-cyan"
                        >
                          <Icon size={17} />
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={insertInlineImage}
                        className="inline-flex h-9 items-center gap-2 rounded-md border border-dyd-cyan/30 bg-dyd-cyan/10 px-3 text-xs font-semibold text-dyd-cyan transition hover:bg-dyd-cyan hover:text-dyd-ink"
                      >
                        Insertar imagen <ImagePlus size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => inlineImageInputRef.current?.click()}
                        className="inline-flex h-9 items-center gap-2 rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-3 text-xs font-semibold text-dyd-silver transition hover:border-dyd-cyan hover:text-white"
                      >
                        Subir imagen local <ImagePlus size={16} />
                      </button>
                      <input
                        ref={inlineImageInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleInlineImageUpload}
                        className="sr-only"
                      />
                      <button
                        type="button"
                        onClick={restoreFullArticleContent}
                        className="inline-flex h-9 items-center rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-3 text-xs font-semibold text-dyd-silver transition hover:border-dyd-cyan hover:text-white"
                      >
                        Cargar completo
                      </button>
                      <button
                        type="button"
                        onClick={cleanEmbeddedImages}
                        className="inline-flex h-9 items-center rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-3 text-xs font-semibold text-dyd-silver transition hover:border-dyd-cyan hover:text-white"
                      >
                        Limpiar imágenes
                      </button>
                    </div>
                  </div>
                  <textarea
                    ref={contentTextareaRef}
                    value={selectedArticle.content}
                    onChange={(event) => updateArticle({ content: event.target.value })}
                    rows={24}
                    className="mt-3 min-h-[620px] w-full resize-y rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-4 py-3 font-mono text-sm leading-7 text-white outline-none focus:border-dyd-cyan"
                    placeholder="Escribe o pega aquí el artículo. Puedes separar secciones con saltos de línea o usar HTML simple."
                  />
                  <p className="mt-2 text-xs leading-5 text-dyd-text">
                    Tip: selecciona un párrafo y usa los botones de alineación. Para imágenes, usa el banco: el contenido solo mostrará marcadores cortos como [imagen:id].
                  </p>
                </div>

                <div>
                  <section className="mb-5 rounded-lg border border-dyd-silver/15 bg-dyd-black/25 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-sm font-semibold text-dyd-silver">Banco de imágenes</h2>
                        <p className="mt-1 text-xs leading-5 text-dyd-text">
                          Las imágenes cargadas quedan aquí como miniaturas. En el contenido solo verás un marcador corto.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => inlineImageInputRef.current?.click()}
                        className="inline-flex h-9 shrink-0 items-center gap-2 rounded-md bg-dyd-cyan px-3 text-xs font-semibold text-dyd-ink"
                      >
                        Subir <ImagePlus size={15} />
                      </button>
                    </div>

                    {(selectedArticle.imageBank || []).length ? (
                      <div className="mt-4 grid gap-3">
                        {(selectedArticle.imageBank || []).map((image) => (
                          <article key={image.id} className="rounded-lg border border-dyd-silver/15 bg-dyd-ink/65 p-3">
                            <div className="grid gap-3 sm:grid-cols-[96px_1fr]">
                              <div className="overflow-hidden rounded-md border border-dyd-cyan/20 bg-dyd-black/50">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={image.src} alt={image.name} className="h-24 w-full object-cover" />
                              </div>
                              <div className="min-w-0">
                                <p className="truncate text-xs font-semibold text-white">{image.name}</p>
                                <p className="mt-1 truncate rounded bg-dyd-black/45 px-2 py-1 font-mono text-[11px] text-dyd-cyan">
                                  [imagen:{image.id}]
                                </p>
                                <input
                                  value={image.caption}
                                  onChange={(event) => updateBankImage(image.id, { caption: event.target.value })}
                                  className="mt-2 h-9 w-full rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-2 text-xs text-white outline-none focus:border-dyd-cyan"
                                  placeholder="Caption de la imagen"
                                />
                              </div>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <button
                                type="button"
                                onClick={() => insertExistingBankImage(image.id)}
                                className="inline-flex h-8 items-center rounded-md border border-dyd-cyan/30 px-3 text-xs font-semibold text-dyd-cyan transition hover:bg-dyd-cyan hover:text-dyd-ink"
                              >
                                Insertar
                              </button>
                              <button
                                type="button"
                                onClick={() => navigator.clipboard.writeText(`[imagen:${image.id}]`)}
                                className="inline-flex h-8 items-center rounded-md border border-dyd-silver/15 px-3 text-xs font-semibold text-dyd-silver transition hover:border-dyd-cyan hover:text-white"
                              >
                                Copiar marcador
                              </button>
                              <button
                                type="button"
                                onClick={() => removeBankImage(image.id)}
                                className="inline-flex h-8 items-center rounded-md border border-red-400/25 px-3 text-xs font-semibold text-red-200 transition hover:bg-red-400/10"
                              >
                                Eliminar
                              </button>
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-4 rounded-md border border-dashed border-dyd-silver/20 p-4 text-center text-xs leading-5 text-dyd-text">
                        Todavía no hay imágenes en este artículo.
                      </div>
                    )}
                  </section>

                  <span className="text-sm font-semibold text-dyd-silver">Imagen destacada</span>
                  <label className="mt-2 flex min-h-[230px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-dyd-cyan/35 bg-dyd-black/35 p-4 text-center transition hover:bg-dyd-cyan/10">
                    {selectedArticle.featuredImage ? (
                      <span className="relative block aspect-[4/3] w-full overflow-hidden rounded-md">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={selectedArticle.featuredImage} alt="" className="h-full w-full object-cover" />
                      </span>
                    ) : (
                      <>
                        <ImagePlus className="text-dyd-cyan" size={36} />
                        <span className="mt-3 text-sm font-semibold text-white">Seleccionar imagen</span>
                        <span className="mt-1 text-xs leading-5 text-dyd-text">PNG, JPG o WebP. Recomendado 1536 x 1024.</span>
                      </>
                    )}
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="sr-only" />
                  </label>
                  <label className="mt-4 block">
                    <span className="text-sm font-semibold text-dyd-silver">URL de imagen</span>
                    <input
                      value={selectedArticle.featuredImage}
                      onChange={(event) => updateArticle({ featuredImage: event.target.value })}
                      className="mt-2 h-11 w-full rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-3 text-sm text-white outline-none focus:border-dyd-cyan"
                      placeholder="/noticias/imagen.png"
                    />
                  </label>
                </div>
              </div>

              <label className="block">
                <span className="text-sm font-semibold text-dyd-silver">Tags</span>
                <input
                  value={selectedArticle.tags}
                  onChange={(event) => updateArticle({ tags: event.target.value })}
                  className="mt-2 h-12 w-full rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-4 text-white outline-none focus:border-dyd-cyan"
                  placeholder="SEO, Desarrollo Web, Empresas"
                />
              </label>

              <section className="rounded-lg border border-dyd-cyan/20 bg-dyd-cyan/10 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-dyd-cyan" size={22} />
                  <div>
                    <h2 className="text-lg font-semibold">Vista y publicación</h2>
                    <p className="mt-2 text-sm leading-6 text-dyd-text">
                      Esta primera versión guarda el contenido en este navegador y permite exportarlo en JSON. Para publicación automática,
                      el siguiente paso es conectar este portal a Google Sheets/Drive o a una base de datos con almacenamiento de imágenes.
                    </p>
                    <p className="mt-3 text-sm text-dyd-cyan">
                      URL sugerida: {selectedArticle.slug ? `/noticias/${selectedArticle.slug}` : "Define un slug para generar la URL"}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
