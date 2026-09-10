import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
export default function sitemap(): MetadataRoute.Sitemap {
  const root = "https://rebadigitalsolutions.com";
  return [
    "",
    "/services",
    "/industries",
    "/work",
    "/demos",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
  ].map((path) => ({
    url: root + path,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
