import type { Metadata } from "next";
import { companyDetails } from "@/lib/site";

const siteUrl = `https://${companyDetails.domain}`;
const sharedKeywords = [
  "European market access",
  "European market entry services",
  "EU commercial representation",
  "European representation services",
  "European market entry support",
  "European distributor communication support",
  "European exhibition follow-up",
  "UK-based market access advisory",
  "support for Chinese manufacturers in Europe",
  "European contact point service"
];
const sharedKeywordsZh = [
  "欧洲市场进入支持",
  "欧洲代表服务",
  "欧洲本地商务窗口",
  "经销商沟通与客户跟进",
  "展会后客户跟进",
  "合规与文件协调支持",
  "中国制造商欧洲市场拓展"
];

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
  const socialImage = "/opengraph-image";

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    keywords: locale === "zh" ? sharedKeywordsZh : sharedKeywords,
    category: "business",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
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
      alternateLocale: locale === "zh" ? ["en_GB"] : ["zh_CN"],
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${companyDetails.name} - ${companyDetails.tagline}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage]
    }
  };
}
