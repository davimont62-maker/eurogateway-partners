import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { aboutPoints } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn how Eurolinq acts as a European extension of non-EU manufacturers entering and developing business in Europe.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A European extension of the client company."
        description="Eurolinq is not a commission-led sales platform and not a generic service agency. We act as a practical local extension for non-EU manufacturers that need credible representation, structured communication, and operational continuity in Europe."
      />

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="prose-copy space-y-6">
            <p>
              Our role is to help clients build a European presence that reflects their commercial
              objectives, route-to-market priorities, and intended level of investment. That may
              involve representation, contact-point support, sales coordination, exhibition support,
              or operational follow-through.
            </p>
            <p>
              The central principle is flexibility. Some clients are testing the market. Some need
              a stronger local commercial interface. Others require a broader support model that
              creates continuity across buyers, organisers, distributors, logistics providers, and
              documentation workstreams.
            </p>
            <p>
              In each case, Eurolinq&apos;s value lies in acting as a trusted intermediary between the
              client company and the European market.
            </p>
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

      <CTASection
        title="Discuss the right European support model for your business"
        description="We can help define an approach that fits your market targets, your pace of entry, and the level of local presence you want to establish."
      />
    </>
  );
}
