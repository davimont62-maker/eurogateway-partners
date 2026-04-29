import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { servicePillars } from "@/lib/site";

export function ServicePillarsSection() {
  return (
    <section className="section-space section-tint relative overflow-hidden">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Services"
          title="A structured support model built around market entry, representation, and practical coordination."
          description="Rather than presenting six disconnected offers, Eurolinq's work is organised around three complementary pillars."
        />
        <div className="mt-14 space-y-8">
          {servicePillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="grid gap-8 rounded-[2rem] border border-line/70 bg-white/88 p-8 shadow-soft lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div>
                <p className="eyebrow">{`0${index + 1}`}</p>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">{pillar.title}</h3>
              </div>
              <div>
                <p className="max-w-3xl text-base leading-8 text-slate">{pillar.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {pillar.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.36))] px-4 py-3 text-sm leading-7 text-slate"
                    >
                      {bullet}
                    </li>
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
