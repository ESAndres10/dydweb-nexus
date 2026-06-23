import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Conoce a DYDWEB Nexus, una empresa de tecnología enfocada en innovación, transformación digital, desarrollo web, software a medida, IA y crecimiento empresarial.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Quiénes somos | DYDWEB Nexus",
    description:
      "Una empresa creada para reinventar la forma en que las organizaciones aprovechan la tecnología para crecer.",
    url: "/nosotros",
    images: ["/logo-dydweb-nexus-og.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
