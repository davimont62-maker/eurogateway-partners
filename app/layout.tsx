import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/google-analytics";
import { StructuredData } from "@/components/structured-data";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { buildMetadata } from "@/lib/metadata";
import { buildOrganizationSchema, buildWebsiteSchema } from "@/lib/schema";
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
    "EuroLinq helps Chinese manufacturers and non-EU exporters establish a trusted commercial presence in Europe through representation, coordination, and practical market-entry support."
});

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-[var(--font-inter)]">
        <StructuredData id="organization-schema" data={buildOrganizationSchema()} />
        <StructuredData id="website-schema" data={buildWebsiteSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
