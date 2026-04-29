import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ServicePillarsSection } from "@/components/service-pillars-section";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore Eurolinq's structured European market access support across representation, sales coordination, and operational continuity.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Structured European support, organised around three core pillars."
        description="Eurolinq does not present a disconnected set of standalone offers. Our services are designed to work together as part of a broader European market-entry and development model."
      />

      <ServicePillarsSection />

      <section className="section-space">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Detailed services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl">
              Service detail pages
            </h2>
          </div>
          <div className="mt-12 space-y-8">
            {services.map((service) => (
              <article
                key={service.slug}
                className="grid gap-6 border-t border-line pt-6 lg:grid-cols-[0.8fr_1.2fr_auto]"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">{service.title}</h3>
                <p className="text-base leading-8 text-slate">{service.excerpt}</p>
                <Link href={`/${service.slug}`} className="text-sm font-semibold text-ink hover:text-accent">
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss which combination of services fits your European strategy"
        description="The right support model depends on your target market, internal resources, and intended pace of investment."
      />
    </>
  );
}
