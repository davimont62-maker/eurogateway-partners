import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { servicePillars } from "@/lib/site";

export function ServicePillarsSection() {
  return (
    <section className="section-space section-tint">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Services"
          title="A structured support model built around market entry, representation, and practical coordination."
          description="Rather than presenting six disconnected offers, Eurolinq's work is organised around three complementary pillars."
        />
        <div className="mt-14 space-y-12">
          {servicePillars.map((pillar) => (
            <article key={pillar.title} className="grid gap-8 border-t border-line pt-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">{pillar.title}</h3>
              </div>
              <div>
                <p className="max-w-3xl text-base leading-8 text-slate">{pillar.description}</p>
                <ul className="mt-5 space-y-3 text-base leading-8 text-slate">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
                <Link href={pillar.href} className="mt-6 inline-flex text-sm font-semibold text-ink hover:text-accent">
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
