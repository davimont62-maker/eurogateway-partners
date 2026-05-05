import { companyDetails, servicePillars, services, type ServiceItem } from "@/lib/site";
import { companyDescriptionZh } from "@/lib/site-zh";

type Locale = "en" | "zh";

type BreadcrumbItem = {
  name: string;
  path: string;
};

const siteUrl = `https://${companyDetails.domain}`;

function localeTag(locale: Locale) {
  return locale === "zh" ? "zh-CN" : "en-GB";
}

function companyDescription(locale: Locale) {
  return locale === "zh" ? companyDescriptionZh : companyDetails.description;
}

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path === "/" ? "" : path}`;
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: companyDetails.name,
    url: siteUrl,
    logo: absoluteUrl("/eurolinq-logo.png"),
    email: companyDetails.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "42-50 Hersham Rd",
      addressLocality: "Walton-on-Thames",
      postalCode: "KT12 1RZ",
      addressCountry: "GB"
    }
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: companyDetails.name,
    url: siteUrl,
    inLanguage: ["en-GB", "zh-CN"],
    publisher: {
      "@id": `${siteUrl}/#organization`
    }
  };
}

export function buildProfessionalServiceSchema({
  locale = "en",
  path = "/",
  description
}: {
  locale?: Locale;
  path?: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${absoluteUrl(path)}#professional-service`,
    name: companyDetails.name,
    url: absoluteUrl(path),
    image: absoluteUrl("/eurolinq-logo.png"),
    description: description ?? companyDescription(locale),
    slogan: companyDetails.tagline,
    email: companyDetails.email,
    areaServed: ["United Kingdom", "Europe"],
    availableLanguage: ["English", "Chinese"],
    knowsAbout: [
      "European market access",
      "European commercial representation",
      "Exhibition representation",
      "Sales and distribution support",
      "Logistics coordination",
      "Compliance and documentation coordination"
    ],
    provider: {
      "@id": `${siteUrl}/#organization`
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "European market access support",
      itemListElement: servicePillars.map((pillar) => ({
        "@type": "OfferCatalog",
        name: pillar.title,
        url: absoluteUrl(pillar.href)
      }))
    }
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function buildWebPageSchema({
  type = "WebPage",
  locale = "en",
  path,
  title,
  description
}: {
  type?: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";
  locale?: Locale;
  path: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    name: title,
    url: absoluteUrl(path),
    description,
    inLanguage: localeTag(locale),
    isPartOf: {
      "@id": `${siteUrl}/#website`
    },
    about: {
      "@id": `${siteUrl}/#organization`
    }
  };
}

export function buildCollectionPageSchema({
  locale = "en",
  path,
  title,
  description,
  items
}: {
  locale?: Locale;
  path: string;
  title: string;
  description: string;
  items: Array<{ name: string; path: string }>;
}) {
  return {
    ...buildWebPageSchema({
      type: "CollectionPage",
      locale,
      path,
      title,
      description
    }),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path)
      }))
    }
  };
}

export function buildContactPageSchema({
  locale = "en",
  path,
  title,
  description
}: {
  locale?: Locale;
  path: string;
  title: string;
  description: string;
}) {
  return {
    ...buildWebPageSchema({
      type: "ContactPage",
      locale,
      path,
      title,
      description
    }),
    mainEntity: {
      "@id": `${siteUrl}/#organization`
    }
  };
}

export function buildServiceSchema({
  service,
  locale = "en",
  path
}: {
  service: ServiceItem;
  locale?: Locale;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: service.title,
    serviceType: service.shortTitle ?? service.title,
    url: absoluteUrl(path),
    description: service.excerpt,
    provider: {
      "@id": `${siteUrl}/#organization`
    },
    areaServed: ["United Kingdom", "Europe"],
    availableLanguage: locale === "zh" ? ["Chinese", "English"] : ["English", "Chinese"],
    audience: service.forWho.map((item) => ({
      "@type": "Audience",
      audienceType: item
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} scope`,
      itemListElement: service.included.map((item) => ({
        "@type": "Offer",
        name: item
      }))
    }
  };
}

export function buildServiceGroupSchema({
  locale = "en",
  path,
  title,
  description,
  relatedServices
}: {
  locale?: Locale;
  path: string;
  title: string;
  description: string;
  relatedServices: Array<{ title: string; href: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service-group`,
    name: title,
    url: absoluteUrl(path),
    description,
    provider: {
      "@id": `${siteUrl}/#organization`
    },
    areaServed: ["United Kingdom", "Europe"],
    availableLanguage: locale === "zh" ? ["Chinese", "English"] : ["English", "Chinese"],
    isRelatedTo: relatedServices.map((service) => ({
      "@type": "Service",
      name: service.title,
      url: absoluteUrl(service.href)
    }))
  };
}

export function buildFaqSchema({
  path,
  items
}: {
  path: string;
  items: Array<{ question: string; answer: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    url: absoluteUrl(path),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export const serviceCatalogItems = services.map((service) => ({
  name: service.title,
  path: `/${service.slug}`
}));
