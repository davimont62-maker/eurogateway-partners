import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import type { ServiceItem } from "@/lib/site";

export function ServicePage({ service }: { service: ServiceItem }) {
  return (
    <>
      <PageHero eyebrow="Service" title={service.title} description={service.excerpt} />

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="prose-copy space-y-6">
            <p>{service.intro}</p>
            <p>
              Our role is to create a stable and professional bridge between the manufacturer and
              the European market, helping enquiries, commercial discussions, and operational tasks
              move forward in a way that feels organised and dependable.
            </p>
          </div>

          <aside className="card-surface p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Typical scope</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="rounded-2xl bg-mist px-4 py-3">
                  {bullet}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-3">
            {service.outcomes.map((outcome) => (
              <div key={outcome} className="card-surface p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Outcome</p>
                <p className="mt-4 text-lg font-medium leading-8 text-ink">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need this capability as part of your European market-entry plan?"
        description="We can help you shape the right support model around your products, your target channels, and your immediate commercial priorities."
        primaryLabel="Discuss your requirements"
        secondaryLabel="See all services"
      />
    </>
  );
}
