import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { SectionTitle } from "@/components/section-title";
import { ServicePillarsSection } from "@/components/service-pillars-section";
import { TrustSection } from "@/components/trust-section";
import { whoWeHelp } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicePillarsSection />
      <div className="border-y border-line/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(236,242,249,0.55)_52%,rgba(255,255,255,0.98))]">
        <ProcessSection />
      </div>
      <TrustSection />

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.26))]">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="Who we help"
            title="Built for manufacturers that need European presence without premature overcommitment."
            description="Eurolinq is particularly relevant where the client needs a practical European extension before, during, or instead of a larger permanent setup."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {whoWeHelp.map((item) => (
              <div key={item} className="rounded-3xl border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.48))] px-6 py-6 text-lg leading-8 text-slate shadow-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss your European market entry"
        description="If you are considering how much local representation, coordination, or European-facing support your business needs, we would be pleased to discuss a structured approach."
        primaryLabel="Speak with us"
        secondaryLabel="Explore services"
      />
    </>
  );
}
