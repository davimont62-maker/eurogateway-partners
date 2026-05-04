import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ServicePillarsSection } from "@/components/service-pillars-section";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildCollectionPageSchema, serviceCatalogItems } from "@/lib/schema";
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
      <StructuredData
        id="services-page-schema"
        data={[
          buildCollectionPageSchema({
            path: "/services",
            title: "EuroLinq Services",
            description:
              "Explore EuroLinq's structured European market access support across representation, sales coordination, and operational continuity.",
            items: serviceCatalogItems
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" }
          ])
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Structured European support, organised around three core pillars."
        description="Eurolinq does not present a disconnected set of standalone offers. Our services are designed to work together as part of a broader European market-entry and development model."
      />

      <section className="border-b border-line/60 bg-white">
        <div className="container-shell grid gap-8 py-12 lg:grid-cols-[1fr_0.95fr] lg:py-16">
          <div className="max-w-3xl">
            <p className="eyebrow">Advisory model</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl">
              A support structure that flexes around the client, rather than forcing a fixed package.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(236,242,249,0.64))] p-7 shadow-soft">
            <p className="text-base leading-8 text-slate">
              Some clients need exhibition and follow-up continuity. Others need a more credible
              European commercial interface, or practical coordination around logistics,
              documentation, and market-entry progression. Eurolinq&apos;s role is shaped around that
              real operating context.
            </p>
          </div>
        </div>
      </section>

      <ServicePillarsSection />

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.24))]">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Detailed services</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl">
                Individual areas of support within the broader Eurolinq model.
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-slate">
              Each service page explains where a particular workstream fits, what it typically
              includes, and the kind of manufacturer or market-entry situation it is designed to
              support.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="grid gap-6 rounded-[2rem] border border-line/70 bg-white p-7 shadow-soft lg:grid-cols-[88px_0.78fr_1.12fr_auto] lg:items-start"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate">{`0${index + 1}`}</p>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">{service.title}</h3>
                <p className="text-base leading-8 text-slate">{service.excerpt}</p>
                <Link
                  href={`/${service.slug}`}
                  className="inline-flex self-start rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink hover:text-accent"
                >
                  Learn more
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] border border-line/10 bg-panel p-8 text-white shadow-glow">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  Need help defining the right mix?
                </p>
                <p className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight">
                  We can help identify which combination of representation, communication, and
                  coordination support fits your European plan.
                </p>
              </div>
              <Link href="/contact" className="button-secondary border-white/20 bg-white/10 text-white hover:border-white/40">
                Speak with us
              </Link>
            </div>
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
