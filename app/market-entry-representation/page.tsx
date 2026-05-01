import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Market Entry & Representation",
  description:
    "A structured first European presence combining exhibition support, commercial representation, and a dependable local contact interface.",
  path: "/market-entry-representation"
});

const relatedServices = [
  {
    href: "/exhibition-representation",
    title: "Exhibition Representation",
    text: "Support around European exhibitions, organiser liaison, exhibitor administration, and practical follow-up."
  },
  {
    href: "/eu-commercial-representation",
    title: "EU Commercial Representation",
    text: "A more credible European-facing commercial interface for buyers, distributors, and counterparties."
  },
  {
    href: "/eu-contact-point",
    title: "EU Contact Point / Service Address",
    text: "A dependable local communication layer for enquiries, front-office handling, and contact continuity."
  }
];

export default function MarketEntryRepresentationPage() {
  return (
    <>
      <PageHero
        eyebrow="Service pillar"
        title="Market Entry & Representation"
        description="A practical first European presence for manufacturers that need credibility, continuity, and a clearer local interface before or alongside wider commercial development."
      />

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-8">
            <div className="prose-copy space-y-6">
              <p>
                For many non-EU manufacturers, the first challenge is not only generating interest.
                It is establishing a presence that feels dependable and understandable from a
                European perspective.
              </p>
              <p>
                This pillar brings together the workstreams that often matter first: exhibition
                support, a clearer European commercial interface, and a local contact layer that
                helps communication feel more responsive and credible.
              </p>
              <p>
                Rather than forcing an immediate full setup, Eurolinq helps create an appropriate
                first structure around the client&apos;s market goals, internal capacity, and intended
                pace of investment.
              </p>
            </div>

            <div className="rounded-[2rem] border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.34))] p-7 shadow-soft">
              <p className="eyebrow">What this pillar is designed to solve</p>
              <p className="mt-4 text-lg leading-8 text-slate">
                It helps clients move from being an overseas supplier with no visible European
                interface to having a more credible market-facing presence that supports trust,
                communication, and structured follow-through.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-line/10 bg-panel p-8 text-white shadow-glow">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  Typical scope
                </p>
                <p className="mt-3 text-lg leading-8 text-white/78">
                  The exact combination depends on whether the priority is exhibitions, buyer
                  confidence, first-response continuity, or a broader commercial presence.
                </p>
              </div>
              <ul className="grid gap-3">
                <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/82">
                  European exhibition support and organiser liaison
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/82">
                  Local commercial representation where appropriate
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/82">
                  EU contact-point support and communication continuity
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/82">
                  A staged model aligned with the client&apos;s investment approach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="container-shell py-16">
          <div className="max-w-3xl">
            <p className="eyebrow">Related services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl">
              Explore the individual services within this pillar.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <article
                key={service.href}
                className="rounded-[1.9rem] border border-line/70 bg-white p-7 shadow-soft"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">{service.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate">{service.text}</p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink hover:text-accent"
                >
                  View service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss a first European presence that fits your market-entry plan"
        description="We can help define the right mix of representation, exhibition support, and local communication for your initial European development."
      />
    </>
  );
}
