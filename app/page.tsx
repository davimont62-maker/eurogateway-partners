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
            title="A practical European partner for manufacturers building market trust."
            description="We support the front-office, coordination, and representation work that often determines whether a European market-entry effort gains traction or stalls."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyWorkWithUs.map((item) => (
              <article key={item.title} className="card-surface p-7">
                <h3 className="text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-line bg-mist/50">
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
            title="Structured support from first discussion to operational coordination."
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
              <article key={item.step} className="card-surface p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">{item.step}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-line bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle
            eyebrow="Who we help"
            title="Built for overseas manufacturers entering Europe"
            description="Particularly relevant for Chinese manufacturers and other non-EU businesses that need a practical route to a trusted presence in Europe."
          />
          <div className="grid gap-4">
            {whoWeHelp.map((item) => (
              <div key={item} className="card-surface p-6 text-base leading-7 text-slate">
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
              title="What businesses gain from working with EuroGateway Partners"
              description="A more established market presence, more responsive communication, and a steadier bridge between overseas teams and European opportunities."
            />
          </div>
          <div className="grid gap-4">
            {trustPoints.map((item) => (
              <div key={item} className="card-surface px-6 py-5 text-base font-medium leading-7 text-ink">
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
        primaryLabel="Contact EuroGateway Partners"
        secondaryLabel="Read about our approach"
        secondaryHref="/about"
      />
    </>
  );
}
