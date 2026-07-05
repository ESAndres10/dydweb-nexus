import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias y articulos",
  description:
    "Centro de noticias de DYDWEB Nexus con articulos sobre desarrollo web, SEO, inteligencia artificial, automatizacion y transformacion digital.",
  alternates: { canonical: "/noticias" },
  openGraph: {
    title: "Noticias y articulos | DYDWEB",
    description:
      "Guias, analisis y contenido tecnologico para empresas que quieren crecer con soluciones digitales.",
    url: "/noticias",
    images: ["/logo-dydweb-nexus-og.png"],
  },
};

export default function NoticiasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
