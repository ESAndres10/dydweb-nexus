import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dydweb.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DYDWEB | Desarrollo web, software e IA para empresas",
    template: "%s | DYDWEB",
  },
  description:
    "DYDWEB desarrolla sitios web, software a medida, inteligencia artificial, automatización, SEO y experiencias digitales premium para empresas y emprendedores.",
  keywords: [
    "desarrollo web Colombia",
    "software a medida",
    "inteligencia artificial para empresas",
    "automatización de negocios",
    "SEO técnico",
    "diseño web premium",
    "chatbots para empresas",
    "DYDWEB",
  ],
  authors: [{ name: "DYDWEB Nexus" }],
  creator: "DYDWEB Nexus",
  publisher: "DYDWEB Nexus",
  category: "technology",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DYDWEB | Desarrollo web, software e IA para empresas",
    description:
      "Soluciones digitales premium para crear presencia profesional, captar clientes, automatizar procesos y escalar negocios con tecnología.",
    url: "/",
    siteName: "DYDWEB Nexus",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/logo-dydweb-nexus-og.png",
        width: 1200,
        height: 630,
        alt: "DYDWEB Nexus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DYDWEB | Desarrollo web, software e IA para empresas",
    description:
      "Soluciones digitales, IA, automatización y desarrollo web para empresas en crecimiento.",
    images: ["/logo-dydweb-nexus-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "DYDWEB Nexus",
  alternateName: ["D&D WEB Nexus", "DYDWEB"],
  url: siteUrl,
  logo: `${siteUrl}/logo-dydweb-nexus-og.png`,
  image: `${siteUrl}/logo-dydweb-nexus-og.png`,
  description:
    "Empresa de tecnología especializada en desarrollo web, software a medida, inteligencia artificial, automatización, SEO y transformación digital.",
  areaServed: ["Colombia", "Latinoamérica", "Estados Unidos"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "CO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+57-350-862-9779",
    contactType: "sales",
    areaServed: ["CO", "US", "LATAM"],
    availableLanguage: ["Spanish", "English"],
  },
  sameAs: [siteUrl],
  makesOffer: [
    "Desarrollo web profesional",
    "Software a medida",
    "Inteligencia artificial para empresas",
    "Automatización comercial",
    "SEO y analítica",
    "Diseño de marca y contenido digital",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DYDWEB Nexus",
  url: siteUrl,
  inLanguage: ["es-CO", "en"],
  publisher: {
    "@type": "Organization",
    name: "DYDWEB Nexus",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
