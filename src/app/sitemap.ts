import type { MetadataRoute } from "next";
import { siteConfig, services, zones } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/contact/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/zones/`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/plan-du-site/`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/mentions-legales/`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/confidentialite/`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  // 3 blog articles
  const blogSlugs = [
    "entretenir-rideau-metallique-sete",
    "choisir-moteur-acm-somfy-rideau-metallique",
    "rideau-metallique-ou-grille-extensible-sete",
  ];
  for (const slug of blogSlugs) {
    entries.push({ url: `${base}/blog/${slug}/`, lastModified, changeFrequency: "monthly", priority: 0.5 });
  }

  // Service × city principale (7 entries — priorité haute)
  for (const s of services) {
    entries.push({
      url: `${base}/${s.slug}-${siteConfig.citySlug}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // Service × zone (7 × 26 = 182 entries)
  for (const s of services) {
    for (const z of zones) {
      entries.push({
        url: `${base}/${s.slug}-${z.slug}/`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
