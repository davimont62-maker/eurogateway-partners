import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import type { ServiceItem } from "@/lib/site";

export function ServicePage({ service }: { service: ServiceItem }) {
  return (
    <>
      <PageHero eyebrow="Service" title={service.title} description={service.excerpt} />

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="prose-copy space-y-6">
            <p>{service.intro}</p>
            <p>
              Eurolinq provides this support as part of a broader European market-access model:
              practical, structured, and aligned with the client&apos;s own commercial and investment
              approach.
            </p>
          </div>

          <div className="space-y-8">
            <div className="card-surface p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">What is included</p>
              <ul className="mt-5 space-y-3 text-base leading-8 text-slate">
                {service.included.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="container-shell grid gap-16 py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Who it is for</p>
            <ul className="mt-5 space-y-3 text-base leading-8 text-slate">
              {service.forWho.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">How it works</p>
            <ol className="mt-5 space-y-5">
              {service.howItWorks.map((item, index) => (
                <li key={item} className="card-surface p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 text-base leading-8 text-slate">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection
        title={service.ctaTitle}
        description="If you are considering how much local European presence your business needs, we can discuss an appropriate model around your market priorities and level of investment."
        primaryLabel="Speak with us"
        secondaryLabel="View all services"
      />
    </>
  );
}
