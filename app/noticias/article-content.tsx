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

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, "").trim();
}

function splitQuestions(value: string) {
  const normalized = value.replace(/Â¿/g, "¿").replace(/\s+/g, " ").trim();
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
  const blocks = content
    .replace(/\r\n/g, "\n")
    .replace(/<figure>[\s\S]*?<\/figure>/g, "")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="mt-8 space-y-7">
      {blocks.map((block, index) => {
        const imageOnly = block.match(/^\[imagen:([^\]]+)\]$/);
        if (imageOnly) {
          const image = imageMap.get(imageOnly[1].trim());
          return image ? (
            <ArticleImageFigure key={`${block}-${index}`} image={image} />
          ) : (
            <p key={`${block}-${index}`} className="rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-3 py-2 text-sm text-dyd-text">
              Imagen no encontrada: {imageOnly[1]}
            </p>
          );
        }

        const aligned = block.match(/^<p style="text-align:\s*(left|center|right|justify);">\n?([\s\S]*?)\n?<\/p>$/);
        if (aligned) {
          return (
            <p
              key={`${block}-${index}`}
              className="text-base leading-8 text-dyd-text"
              style={{ textAlign: aligned[1] as "left" | "center" | "right" | "justify" }}
            >
              {stripHtml(aligned[2])}
            </p>
          );
        }

        const cleaned = stripHtml(block);
        if (!cleaned) return null;

        if (articleHeadings.has(cleaned)) {
          return (
            <h2 key={`${block}-${index}`} className="pt-4 text-2xl font-semibold text-white md:text-3xl">
              {cleaned === "FAQ" ? "Preguntas frecuentes" : cleaned}
            </h2>
          );
        }

        const lines = cleaned.split("\n").map((line) => line.trim()).filter(Boolean);
        const questions = splitQuestions(cleaned);
        if (
          questions.length > 1 &&
          (lines.every((line) => line.startsWith("¿") || line.startsWith("Â¿")) || questions.join(" ").length >= cleaned.length * 0.55)
        ) {
          return <FaqList key={`${block}-${index}`} questions={questions} />;
        }

        const parts = block.split(/(\[imagen:[^\]]+\])/g).filter(Boolean);
        if (parts.length > 1) {
          return (
            <div key={`${block}-${index}`} className="space-y-5">
              {parts.map((part, partIndex) => {
                const marker = part.match(/^\[imagen:([^\]]+)\]$/);
                if (marker) {
                  const image = imageMap.get(marker[1].trim());
                  return image ? <ArticleImageFigure key={`${part}-${partIndex}`} image={image} /> : null;
                }
                return (
                  <p key={`${part}-${partIndex}`} className="text-base leading-8 text-dyd-text">
                    {stripHtml(part)}
                  </p>
                );
              })}
            </div>
          );
        }

        return (
          <p key={`${block}-${index}`} className="text-base leading-8 text-dyd-text">
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
