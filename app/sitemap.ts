import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/services",
  "/exhibition-representation",
  "/eu-commercial-representation",
  "/eu-contact-point",
  "/sales-distribution-support",
  "/logistics-operational-coordination",
  "/compliance-documentation-support",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.eurolinq-partners.com${route}`,
    lastModified: new Date("2026-04-02"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
