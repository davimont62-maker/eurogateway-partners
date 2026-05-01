import type { MetadataRoute } from "next";

const routes = [
  "",
  "/zh",
  "/about",
  "/zh/about",
  "/services",
  "/zh/services",
  "/market-entry-representation",
  "/zh/market-entry-representation",
  "/exhibition-representation",
  "/zh/exhibition-representation",
  "/eu-commercial-representation",
  "/zh/eu-commercial-representation",
  "/eu-contact-point",
  "/zh/eu-contact-point",
  "/sales-distribution-support",
  "/zh/sales-distribution-support",
  "/logistics-operational-coordination",
  "/zh/logistics-operational-coordination",
  "/compliance-documentation-support",
  "/zh/compliance-documentation-support",
  "/contact",
  "/zh/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.eurolinq-partners.com${route}`,
    lastModified: new Date("2026-04-02"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
