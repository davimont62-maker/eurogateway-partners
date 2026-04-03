import type { Metadata } from "next";
import { companyDetails } from "@/lib/site";

const siteUrl = "https://www.eurogatewaypartners.com";

export function buildMetadata({
  title,
  description,
  path = "/"
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = title === companyDetails.name ? title : `${title} | ${companyDetails.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: path
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: companyDetails.name,
      type: "website",
      locale: "en_GB"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
}
