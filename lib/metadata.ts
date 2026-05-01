import type { Metadata } from "next";
import { companyDetails } from "@/lib/site";

const siteUrl = `https://${companyDetails.domain}`;

export function buildMetadata({
  title,
  description,
  path = "/",
  locale = "en"
}: {
  title: string;
  description: string;
  path?: string;
  locale?: "en" | "zh";
}): Metadata {
  const fullTitle = title === companyDetails.name ? title : `${title} | ${companyDetails.name}`;
  const englishPath = path.startsWith("/zh") ? path.replace(/^\/zh/, "") || "/" : path;
  const chinesePath = englishPath === "/" ? "/zh" : `/zh${englishPath}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: path,
      languages: {
        "en-GB": englishPath,
        "zh-CN": chinesePath
      }
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: companyDetails.name,
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_GB",
      alternateLocale: locale === "zh" ? ["en_GB"] : ["zh_CN"]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
}
