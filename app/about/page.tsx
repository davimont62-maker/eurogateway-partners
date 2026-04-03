import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about EuroGateway Partners and how we help non-EU manufacturers establish a trusted commercial presence in Europe.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A practical partner for manufacturers entering Europe."
        description="EuroGateway Partners was created to help overseas manufacturers build trust, improve responsiveness, and navigate the practical realities of European market access."
      />

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="prose-copy space-y-6">
            <p>
              Many manufacturers have strong products and serious export ambitions, but still face a
              credibility gap when approaching Europe. Buyers, organisers, distributors, and service
              partners often expect a recognisable regional contact layer and clearer local follow-through.
            </p>
            <p>
              We address that gap by helping businesses create a structured European-facing presence.
              Our work combines commercial representation, front-office contact support, sales and
              distributor coordination, and practical operational liaison.
            </p>
            <p>
              We are especially relevant for Chinese manufacturers and other non-EU companies that
              want to approach the European market in a professional, trustworthy, and measured way.
            </p>
          </div>

          <div className="card-surface p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Our positioning</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink">Your European Market Access Partner</h2>
            <p className="mt-4 text-base leading-7 text-slate">
              Helping global manufacturers establish a trusted commercial presence in Europe.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-line bg-mist/60">
        <div className="container-shell">
          <SectionTitle
            eyebrow="What matters to us"
            title="Trust, responsiveness, and practical coordination."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Trustworthy presentation",
                text: "We help ensure that the company is presented to Europe in a clear, professional, and reassuring way."
              },
              {
                title: "Commercial practicality",
                text: "Our work is designed to support actual conversations, enquiries, shipments, exhibitions, and relationships."
              },
              {
                title: "Cross-border clarity",
                text: "We bridge language, time-zone, and process gaps so European contacts can engage more confidently."
              }
            ].map((item) => (
              <article key={item.title} className="card-surface p-7">
                <h3 className="text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for a European-facing partner rather than a generic consultant?"
        description="We combine representation, communication support, and market-entry coordination in a way that reflects the realities of cross-border manufacturing businesses."
      />
    </>
  );
}
