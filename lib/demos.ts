import { industries, type IndustrySlug } from "./industries";
export type Demo = {
  title: string;
  industry: IndustrySlug;
  thumbnail: string;
  description: string;
  url: string;
  status: "draft" | "published";
};
// Add a completed concept website only after checking its URL and local thumbnail.
export const demos: Demo[] = [
  {
    title: "Dental Clinic Website Demo",
    industry: "dentists",
    thumbnail: "/demos/dental-clinic-concept.svg",
    description:
      "A concept dental clinic website for a fictional practice, showing how services, appointment prompts and patient-friendly information can be presented.",
    url: "https://demo-dental-clinic-one.vercel.app/",
    status: "published",
  },
];
export function isDemoUrl(url: string): boolean {
  if (!url || /[\s\\]/.test(url)) return false;
  if (/^\/(?!\/)/.test(url)) return url.length > 1;
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      Boolean(parsed.hostname) &&
      !parsed.username &&
      !parsed.password
    );
  } catch {
    return false;
  }
}
export function getPublishedDemos(entries: Demo[]): Demo[] {
  return entries.filter(
    (d) =>
      d.status === "published" &&
      d.title.trim() &&
      d.description.trim() &&
      /^\/(?!\/)/.test(d.thumbnail) &&
      !/[\s\\]/.test(d.thumbnail) &&
      isDemoUrl(d.url) &&
      industries.some((i) => i.slug === d.industry),
  );
}
export const publishedDemos = getPublishedDemos(demos);
