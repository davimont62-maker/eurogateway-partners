import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/schema";
import { aboutPoints } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About EuroLinq",
  description:
    "Learn how EuroLinq acts as a European extension for Chinese manufacturers and non-EU exporters developing business in Europe.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <StructuredData
        id="about-page-schema"
        data={[
          buildWebPageSchema({
            type: "AboutPage",
            path: "/about",
            title: "About EuroLinq",
            description:
              "Learn how EuroLinq acts as a European extension of non-EU manufacturers entering and developing business in Europe."
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" }
          ])
        ]}
      />
      <PageHero
        eyebrow="About"
        title="A European extension of the client company."
        description="Eurolinq is not a commission-led sales platform and not a generic service agency. We act as a practical local extension for non-EU manufacturers that need credible representation, structured communication, and operational continuity in Europe."
      />

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="prose-copy space-y-6">
              <p>
                Our role is to help clients build a European presence that reflects their
                commercial objectives, route-to-market priorities, and intended level of
                investment. That may involve representation, contact-point support, sales
                coordination, exhibition support, or operational follow-through.
              </p>
              <p>
                The central principle is flexibility. Some clients are testing the market. Some
                need a stronger local commercial interface. Others require a broader support model
                that creates continuity across buyers, organisers, distributors, logistics
                providers, and documentation workstreams.
              </p>
              <p>
                In each case, Eurolinq&apos;s value lies in acting as a trusted intermediary between
                the client company and the European market.
              </p>
            </div>

            <div className="rounded-[2rem] border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.38))] p-7 shadow-soft">
              <p className="eyebrow">What this means in practice</p>
              <p className="mt-4 text-lg leading-8 text-slate">
                We do not force clients into a standard setup. We help define an appropriate level
                of presence, communication, and coordination based on what the European market is
                likely to expect and what the client is genuinely ready to support.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-line/70 bg-[linear-gradient(160deg,rgba(16,40,70,0.97),rgba(29,76,152,0.88))] p-8 text-white shadow-glow">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Our role</p>
            <div className="mt-6 space-y-5">
              {aboutPoints.map((point) => (
                <div key={point} className="border-b border-white/10 pb-5">
                  <p className="text-xl font-medium tracking-[-0.03em] text-white">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(236,242,249,0.64),rgba(255,255,255,0.98))]">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">How we position our role</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl">
              A local intermediary role designed around trust, clarity, and continuity.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-line/70 bg-white p-6 shadow-soft">
              <p className="text-xl font-semibold tracking-[-0.03em] text-ink">Gateway</p>
              <p className="mt-3 text-base leading-8 text-slate">
                A more credible route into European conversations, relationships, and practical
                market-entry activity.
              </p>
            </div>
            <div className="rounded-[2rem] border border-line/70 bg-white p-6 shadow-soft">
              <p className="text-xl font-semibold tracking-[-0.03em] text-ink">Communication interface</p>
              <p className="mt-3 text-base leading-8 text-slate">
                A local layer that helps make communication more responsive, structured, and easier
                for European counterparties.
              </p>
            </div>
            <div className="rounded-[2rem] border border-line/70 bg-white p-6 shadow-soft">
              <p className="text-xl font-semibold tracking-[-0.03em] text-ink">Commercial bridge</p>
              <p className="mt-3 text-base leading-8 text-slate">
                A practical bridge between overseas manufacturers and the buyers, partners, and
                service providers they need to engage in Europe.
              </p>
            </div>
            <div className="rounded-[2rem] border border-line/70 bg-white p-6 shadow-soft">
              <p className="text-xl font-semibold tracking-[-0.03em] text-ink">Scalable support</p>
              <p className="mt-3 text-base leading-8 text-slate">
                A model that can stay light and targeted or become broader as the client&apos;s
                objectives and investment level develop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss the right European support model for your business"
        description="We can help define an approach that fits your market targets, your pace of entry, and the level of local presence you want to establish."
      />
    </>
  );
}
