import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dydweb.co";

export const metadata: Metadata = {
  title: "Servicios de desarrollo web, software, IA y SEO",
  description:
    "Conoce los servicios y paquetes de DYDWEB: desarrollo web profesional, software a medida, inteligencia artificial, automatización, SEO, diseño y soluciones digitales escalables.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios digitales para empresas y emprendedores | DYDWEB",
    description:
      "Paquetes y soluciones digitales para crear presencia profesional, captar clientes, automatizar procesos y escalar negocios.",
    url: "/servicios",
    images: ["/logo-dydweb-nexus-og.png"],
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Desarrollo web, software a medida, IA y SEO",
  provider: {
    "@type": "Organization",
    name: "DYDWEB Nexus",
    url: siteUrl,
  },
  areaServed: ["Colombia", "Latinoamérica", "Estados Unidos"],
  serviceType: [
    "Desarrollo web profesional",
    "Software a medida",
    "Inteligencia artificial",
    "Automatización empresarial",
    "SEO técnico",
    "Diseño digital",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Paquete Emprendedor",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 500,
        maxPrice: 1000,
        priceCurrency: "USD",
      },
    },
    {
      "@type": "Offer",
      name: "Paquete Empresarial",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 1000,
        maxPrice: 2500,
        priceCurrency: "USD",
      },
    },
    {
      "@type": "Offer",
      name: "Paquete Crecimiento",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 2500,
        maxPrice: 5000,
        priceCurrency: "USD",
      },
    },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {children}
    </>
  );
}
