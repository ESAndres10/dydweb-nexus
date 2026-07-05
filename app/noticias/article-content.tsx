"use client";

import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

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
  status: "Borrador" | "Publicado";
  imageBank?: ArticleImage[];
  updatedAt?: string;
};

type ArticleContentProps = {
  slug: string;
  fallbackIntro: string;
  sections: { title: string; text: string }[];
  benefits: string[];
  mistakes: string[];
  faqs: string[][];
};

type ArticleBlock = {
  tag: string;
  attributes: string;
  html: string;
};

const articleHeadings = new Set([
  "La nueva realidad digital",
  "Qué es el desarrollo web empresarial",
  "Beneficios",
  "Errores frecuentes",
  "Tecnologías",
  "SEO y contenido",
  "Inteligencia artificial",
  "Conclusión",
  "FAQ",
  "Preguntas frecuentes",
]);

function decodeEntities(value: string) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(value: string) {
  return decodeEntities(
    value
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(p|h[1-6]|li|div|section)>/gi, "\n")
      .replace(/<[^>]*>/g, "")
  )
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function getTextAlign(attributes: string) {
  const match = attributes.match(/text-align:\s*(left|center|right|justify)/i);
  return match?.[1]?.toLowerCase() as "left" | "center" | "right" | "justify" | undefined;
}

function splitPlainBlocks(content: string): ArticleBlock[] {
  return content
    .split(/\n{2,}/)
    .map((block) => ({ tag: "p", attributes: "", html: block.trim() }))
    .filter((block) => block.html);
}

function splitArticleBlocks(content: string) {
  const normalized = content
    .replace(/\r\n/g, "\n")
    .replace(/<figure>[\s\S]*?<\/figure>/gi, "")
    .replace(/<p[^>]*>\s*(\[imagen:[^\]]+\])\s*<\/p>/gi, "\n$1\n");

  if (!/<(p|h[1-6]|li)\b/i.test(normalized)) {
    return splitPlainBlocks(normalized);
  }

  const blocks: ArticleBlock[] = [];
  const blockRegex = /<(p|h[1-6]|li)\b([^>]*)>([\s\S]*?)<\/\1>/gi;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = blockRegex.exec(normalized)) !== null) {
    const before = normalized.slice(lastIndex, match.index).trim();
    if (before) blocks.push(...splitPlainBlocks(before));

    blocks.push({
      tag: match[1].toLowerCase(),
      attributes: match[2] || "",
      html: match[3].trim(),
    });
    lastIndex = blockRegex.lastIndex;
  }

  const after = normalized.slice(lastIndex).trim();
  if (after) blocks.push(...splitPlainBlocks(after));

  return blocks.filter((block) => stripHtml(block.html) || /\[imagen:[^\]]+\]/.test(block.html));
}

function splitQuestions(value: string) {
  const normalized = value.replace(/Ã‚Â¿/g, "¿").replace(/Â¿/g, "¿").replace(/\s+/g, " ").trim();
  const matches = normalized.match(/¿[^?]+\?/g) || [];
  return matches.map((item) => item.trim()).filter(Boolean);
}

function FaqList({ questions }: { questions: string[] }) {
  return (
    <div className="grid gap-3">
      {questions.map((question) => (
        <details key={question} className="rounded-lg border border-dyd-silver/15 bg-dyd-black/35 p-4">
          <summary className="cursor-pointer text-base font-semibold text-white">{question}</summary>
          <p className="mt-3 text-sm leading-6 text-dyd-text">
            Respuesta pendiente para completar desde el portal administrador.
          </p>
        </details>
      ))}
    </div>
  );
}

function ArticleImageFigure({ image }: { image: ArticleImage }) {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-dyd-cyan/20 bg-dyd-black/35 p-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.name}
        className="max-h-[420px] w-full rounded-md bg-dyd-black/40 object-contain"
      />
      <figcaption className="px-1 pt-3 text-xs leading-5 text-dyd-text">
        {image.caption || image.name}
      </figcaption>
    </figure>
  );
}

function AdminArticleBody({ content, imageBank = [] }: { content: string; imageBank?: ArticleImage[] }) {
  const imageMap = new Map(imageBank.map((image) => [image.id, image]));
  const blocks = splitArticleBlocks(content);

  return (
    <div className="mt-8 space-y-8">
      {blocks.map((block, index) => {
        const cleaned = stripHtml(block.html);
        const imageOnly = cleaned.match(/^\[imagen:([^\]]+)\]$/);

        if (imageOnly) {
          const image = imageMap.get(imageOnly[1].trim());
          return image ? (
            <ArticleImageFigure key={`${block.html}-${index}`} image={image} />
          ) : (
            <p key={`${block.html}-${index}`} className="rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-3 py-2 text-sm text-dyd-text">
              Imagen no encontrada: {imageOnly[1]}
            </p>
          );
        }

        if (!cleaned) return null;

        const align = getTextAlign(block.attributes);

        if (block.tag.startsWith("h") || articleHeadings.has(cleaned)) {
          return (
            <h2
              key={`${block.html}-${index}`}
              className="pt-4 text-2xl font-semibold leading-tight text-white md:text-3xl"
              style={align ? { textAlign: align } : undefined}
            >
              {cleaned === "FAQ" ? "Preguntas frecuentes" : cleaned}
            </h2>
          );
        }

        const lines = cleaned.split("\n").map((line) => line.trim()).filter(Boolean);
        const questions = splitQuestions(cleaned);
        if (
          questions.length > 1 &&
          (lines.every((line) => line.startsWith("¿") || line.startsWith("Â¿") || line.startsWith("Ã‚Â¿")) ||
            questions.join(" ").length >= cleaned.length * 0.55)
        ) {
          return <FaqList key={`${block.html}-${index}`} questions={questions} />;
        }

        const parts = block.html.split(/(\[imagen:[^\]]+\])/g).filter(Boolean);
        if (parts.length > 1) {
          return (
            <div key={`${block.html}-${index}`} className="space-y-5">
              {parts.map((part, partIndex) => {
                const marker = stripHtml(part).match(/^\[imagen:([^\]]+)\]$/);
                if (marker) {
                  const image = imageMap.get(marker[1].trim());
                  return image ? <ArticleImageFigure key={`${part}-${partIndex}`} image={image} /> : null;
                }

                return (
                  <p
                    key={`${part}-${partIndex}`}
                    className="text-base leading-8 text-dyd-text"
                    style={align ? { textAlign: align } : undefined}
                  >
                    {stripHtml(part)}
                  </p>
                );
              })}
            </div>
          );
        }

        return (
          <p
            key={`${block.html}-${index}`}
            className="text-base leading-8 text-dyd-text"
            style={align ? { textAlign: align } : undefined}
          >
            {cleaned}
          </p>
        );
      })}
    </div>
  );
}

export function ArticleContent({ slug, fallbackIntro, sections, benefits, mistakes, faqs }: ArticleContentProps) {
  const [adminArticle, setAdminArticle] = useState<AdminArticle | null>(null);

  useEffect(() => {
    const loadArticle = () => {
      try {
        const stored = window.localStorage.getItem("dydweb-admin-articles");
        if (!stored) {
          setAdminArticle(null);
          return;
        }

        const articles = JSON.parse(stored) as AdminArticle[];
        const article = articles.find((item) => item.slug === slug && item.status === "Publicado");
        setAdminArticle(article?.content?.trim() ? article : null);
      } catch {
        setAdminArticle(null);
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

  if (adminArticle) {
    return (
      <>
        <div className="mb-6 rounded-lg border border-dyd-cyan/25 bg-dyd-cyan/10 px-4 py-3 text-sm leading-6 text-dyd-cyan">
          Versión actualizada desde el portal administrador. Última edición: {adminArticle.updatedAt || "sin fecha"}.
        </div>
        <h2 className="text-3xl font-semibold text-white">{adminArticle.title}</h2>
        {adminArticle.excerpt ? (
          <p className="mt-4 text-base leading-8 text-dyd-text">{adminArticle.excerpt}</p>
        ) : null}
        <AdminArticleBody content={adminArticle.content} imageBank={adminArticle.imageBank} />
      </>
    );
  }

  return (
    <>
      <p className="text-base leading-8 text-dyd-text">{fallbackIntro}</p>

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
    </>
  );
}
