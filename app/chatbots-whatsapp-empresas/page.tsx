import type { Metadata } from "next";
import { SeoServiceLanding } from "../seo-service-pages";
import { seoPages } from "../seo-pages-data";

const page = seoPages["chatbots-whatsapp-empresas"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: { canonical: `/${page.slug}` },
  openGraph: {
    title: `${page.metaTitle} | DYDWEB`,
    description: page.description,
    url: `/${page.slug}`,
    images: ["/logo-dydweb-nexus-og.png"],
  },
};

export default function Page() {
  return <SeoServiceLanding page={page} />;
}
