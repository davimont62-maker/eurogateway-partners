import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildBreadcrumbSchema, buildServiceSchema, buildWebPageSchema } from "@/lib/schema";
import type { ServiceItem } from "@/lib/site";

type ServicePageProps = {
  service: ServiceItem;
  locale?: "en" | "zh";
  path?: string;
  eyebrow?: string;
  fitEyebrow?: string;
  fitText?: string;
  includedEyebrow?: string;
  includedDescription?: string;
  forWhoEyebrow?: string;
  howItWorksEyebrow?: string;
  stepLabel?: string;
  ctaEyebrow?: string;
  ctaDescription?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function ServicePage({
  service,
  locale = "en",
  path,
  eyebrow = "Service",
  fitEyebrow = "How this fits",
  fitText = "This service is usually most effective when it forms part of a wider European presence, with clear local communication and practical continuity around the client's market objectives.",
  includedEyebrow = "What is included",
  includedDescription = "The scope depends on the client's market-entry stage and the degree of local support required.",
  forWhoEyebrow = "Who it is for",
  howItWorksEyebrow = "How it works",
  stepLabel = "Step",
  ctaEyebrow = "Next step",
  ctaDescription = "If you are considering how much local European presence your business needs, we can discuss an appropriate model around your market priorities and level of investment.",
  primaryLabel = "Speak with us",
  secondaryLabel = "View all services",
  secondaryHref = "/services"
}: ServicePageProps) {
  const servicePath = path ?? `/${service.slug}`;
  const serviceListPath = locale === "zh" ? "/zh/services" : "/services";
  const homePath = locale === "zh" ? "/zh" : "/";
  const homeLabel = locale === "zh" ? "首页" : "Home";
  const servicesLabel = locale === "zh" ? "服务" : "Services";

  return (
    <>
      <StructuredData
        id={`service-schema-${service.slug}-${locale}`}
        data={[
          buildWebPageSchema({
            locale,
            path: servicePath,
            title: service.title,
            description: service.excerpt
          }),
          buildServiceSchema({
            service,
            locale,
            path: servicePath
          }),
          buildBreadcrumbSchema([
            { name: homeLabel, path: homePath },
            { name: servicesLabel, path: serviceListPath },
            { name: service.title, path: servicePath }
          ])
        ]}
      />
      <PageHero eyebrow={eyebrow} title={service.title} description={service.excerpt} />

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-8">
            <div className="prose-copy space-y-6">
              <p>{service.intro}</p>
              <p>
                Eurolinq provides this support as part of a broader European market-access model:
                practical, structured, and aligned with the client&apos;s own commercial and
                investment approach.
              </p>
            </div>

            <div className="rounded-[2rem] border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.34))] p-7 shadow-soft">
              <p className="eyebrow">{fitEyebrow}</p>
              <p className="mt-4 text-lg leading-8 text-slate">{fitText}</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-line/10 bg-panel p-8 text-white shadow-glow">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">{includedEyebrow}</p>
                <p className="mt-3 text-lg leading-8 text-white/78">{includedDescription}</p>
              </div>
              <ul className="grid gap-3">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/82"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="container-shell grid gap-16 py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">{forWhoEyebrow}</p>
            <ul className="mt-5 grid gap-4">
              {service.forWho.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.75rem] border border-line/70 bg-white px-5 py-4 text-base leading-8 text-slate shadow-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">{howItWorksEyebrow}</p>
            <ol className="mt-5 space-y-5">
              {service.howItWorks.map((item, index) => (
                <li
                  key={item}
                  className="overflow-hidden rounded-[1.75rem] border border-line/70 bg-white shadow-soft"
                >
                  <div className="h-1.5 w-full bg-gradient-to-r from-accent via-panel to-gold" />
                  <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">
                    {stepLabel} {index + 1}
                  </p>
                  <p className="mt-2 text-base leading-8 text-slate">{item}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow={ctaEyebrow}
        title={service.ctaTitle}
        description={ctaDescription}
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
        secondaryHref={secondaryHref}
      />
    </>
  );
}
