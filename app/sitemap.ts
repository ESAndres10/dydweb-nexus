import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dydweb.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/nosotros",
    "/servicios",
    "/preguntas",
    "/desarrollo-web-para-emprendedores",
    "/desarrollo-web-empresas",
    "/software-a-medida",
    "/automatizacion-con-inteligencia-artificial",
    "/chatbots-whatsapp-empresas",
    "/seo-tecnico-para-negocios",
  ];
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/servicios" ? 0.9 : 0.8,
  }));
}
