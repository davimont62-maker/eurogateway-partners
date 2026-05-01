import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { buildMetadata } from "@/lib/metadata";
import { companyDetails } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

export const metadata: Metadata = buildMetadata({
  title: companyDetails.name,
  description:
    "EuroLinq helps non-EU manufacturers establish a trusted commercial presence in Europe through representation, coordination, and market-entry support."
});

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyDetails.name,
    url: `https://${companyDetails.domain}`,
    email: companyDetails.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "42-50 Hersham Rd",
      addressLocality: "Walton-on-Thames",
      postalCode: "KT12 1RZ",
      addressCountry: "GB"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyDetails.name,
    url: `https://${companyDetails.domain}`,
    inLanguage: ["en-GB", "zh-CN"]
  };

  return (
    <html lang="en-GB" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-[var(--font-inter)]">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
