"use client";

import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

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

function renderAdminContent(content: string, imageBank: ArticleImage[] = []) {
  const imageMap = new Map(imageBank.map((image) => [image.id, image]));

  return content
    .replace(/\[imagen:([^\]]+)\]/g, (_match, id: string) => {
      const image = imageMap.get(id.trim());
      if (!image) {
        return `<p class="rounded-md border border-dyd-silver/15 bg-dyd-black/35 px-3 py-2 text-sm text-dyd-text">Imagen no encontrada: ${id}</p>`;
      }

      return `<figure class="my-8 overflow-hidden rounded-lg border border-dyd-cyan/20 bg-dyd-black/35 p-3">
        <img src="${image.src}" alt="${image.name}" class="w-full rounded-md object-cover" />
        <figcaption class="px-1 pt-3 text-xs leading-5 text-dyd-text">${image.caption || image.name}</figcaption>
      </figure>`;
    })
    .replace(/\n/g, "<br />");
}

export function ArticleContent({ slug, fallbackIntro, sections, benefits, mistakes, faqs }: ArticleContentProps) {
  const [adminArticle, setAdminArticle] = useState<AdminArticle | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("dydweb-admin-articles");
      if (!stored) return;

      const articles = JSON.parse(stored) as AdminArticle[];
      const article = articles.find((item) => item.slug === slug && item.status === "Publicado");
      if (article?.content?.trim()) {
        setAdminArticle(article);
      }
    } catch {
      setAdminArticle(null);
    }
  }, [slug]);

  const renderedAdminContent = useMemo(
    () => (adminArticle ? renderAdminContent(adminArticle.content, adminArticle.imageBank) : ""),
    [adminArticle]
  );

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
        <div
          className="mt-8 text-base leading-8 text-dyd-text [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_p]:my-4"
          dangerouslySetInnerHTML={{ __html: renderedAdminContent }}
        />
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
