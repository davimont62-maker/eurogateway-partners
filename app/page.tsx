import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { services, trustPoints, whoWeHelp, whyWorkWithUs } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-space">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Why work with us"
            title="Sharper positioning, stronger buyer confidence, and less friction across the market-entry journey."
            description="EuroLinq combines European-facing credibility with practical execution support so promising conversations are not lost through slow follow-up, unclear ownership, or weak local presentation."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyWorkWithUs.map((item) => (
              <article key={item.title} className="card-surface bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(237,243,252,0.75))] p-7">
                <h3 className="text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-tint">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Services"
            title="Core services for European market access"
            description="A coordinated offer designed for non-EU manufacturers that need a credible commercial presence and practical support on the ground."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10">
            <Link href="/services" className="button-secondary">
              View all service areas
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionTitle
            eyebrow="How we work"
            title="A structured route from initial enquiry to reliable European execution."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Assess your route into Europe",
                text: "We review your commercial objectives, target countries, product context, and the practical gaps that could slow market entry."
              },
              {
                step: "02",
                title: "Build the right support model",
                text: "We recommend a tailored combination of representation, contact-point, sales support, and operational coordination services."
              },
              {
                step: "03",
                title: "Support implementation",
                text: "We help you present a more established European-facing presence and coordinate the day-to-day work that keeps momentum moving."
              }
            ].map((item) => (
              <article key={item.step} className="overflow-hidden rounded-3xl border border-line/70 bg-white shadow-soft">
                <div className="h-1.5 w-full bg-gradient-to-r from-accent via-panel to-gold" />
                <div className="p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">{item.step}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-line/70 bg-[linear-gradient(135deg,rgba(16,40,70,0.98),rgba(22,55,102,0.94))]">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Who we help</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built for overseas manufacturers entering Europe
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/72">
              Particularly relevant for Chinese manufacturers and other non-EU businesses that need
              a practical route to a trusted presence in Europe.
            </p>
          </div>
          <div className="grid gap-4">
            {whoWeHelp.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-base leading-7 text-white/75 backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionTitle
              eyebrow="Trust and benefits"
              title="What businesses gain from working with EuroLinq"
              description="A more established market presence, more responsive communication, and a steadier bridge between overseas teams and European opportunities."
            />
          </div>
          <div className="grid gap-4">
            {trustPoints.map((item) => (
              <div key={item} className="rounded-3xl border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.48))] px-6 py-5 text-base font-medium leading-7 text-ink shadow-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      <CTASection
        title="Planning your European market-entry support model?"
        description="We help overseas manufacturers create a credible commercial presence and handle the practical coordination needed to work effectively with European buyers, organisers, and partners."
        primaryLabel="Contact EuroLinq"
        secondaryLabel="Read about our approach"
        secondaryHref="/about"
      />
    </>
  );
}
