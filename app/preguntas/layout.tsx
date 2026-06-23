import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas frecuentes sobre proyectos digitales",
  description:
    "Resuelve dudas sobre tiempos, paquetes, chatbot, SEO, automatización, desarrollo web y cómo iniciar un proyecto digital con DYDWEB Nexus.",
  alternates: {
    canonical: "/preguntas",
  },
  openGraph: {
    title: "Preguntas frecuentes para iniciar tu proyecto | DYDWEB",
    description:
      "Guía rápida para entender alcance, tiempos, SEO, automatización y próximos pasos antes de cotizar tu proyecto digital.",
    url: "/preguntas",
    images: ["/logo-dydweb-nexus-og.png"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tarda un proyecto digital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una web premium puede iniciar entre 2 y 5 semanas. Software o automatizaciones avanzadas dependen del alcance, integraciones y contenido disponible.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo empezar pequeño y crecer después?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La arquitectura se plantea por etapas para lanzar rápido, medir resultados y sumar funcionalidades sin rehacer todo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Incluye SEO y medición?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La base contempla estructura técnica, velocidad, Open Graph, etiquetas y preparación para analítica según el plan del proyecto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué necesito para iniciar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Objetivo del proyecto, referencias visuales, servicios prioritarios, presupuesto aproximado y datos de contacto para coordinar el diagnóstico.",
      },
    },
  ],
};

export default function QuestionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
