import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dydweb.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DYDWEB | Soluciones digitales, IA y transformación tecnológica",
  description:
    "DYDWEB desarrolla software, aplicaciones web, inteligencia artificial, SEO, automatización, diseño y producción audiovisual para empresas en crecimiento.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DYDWEB | Tecnología para negocios que crecen",
    description:
      "Plataforma empresarial de captación, innovación, contenido, inversión e impacto social bajo la marca DYDWEB.",
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
    title: "DYDWEB | Tecnología para negocios que crecen",
    description:
      "Soluciones digitales, IA, automatización y desarrollo web para empresas en crecimiento.",
    images: ["/logo-dydweb-nexus-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
