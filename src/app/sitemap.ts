import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";
import { visibleServices } from "@/data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const currentDate = new Date();
  const mainRoutes = ["/", "/services", "/portfolio", "/contact"];
  const serviceRoutes = visibleServices.map(
    (service) => `/services/${service.slug}`,
  );

  return [...mainRoutes, ...serviceRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.startsWith("/services/") ? 0.7 : 0.8,
  }));
}
