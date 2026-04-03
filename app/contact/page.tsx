import { ContactForm } from "@/components/contact-form";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { companyDetails } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact EuroLinq to discuss European market access support for your manufacturing business.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us about your European market-entry plans."
        description="If you need a practical UK and European-facing partner to support commercial representation, contact-point services, or cross-border coordination, we would be pleased to hear from you."
      />

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="card-surface p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Direct details</p>
              <div className="mt-5 space-y-3 text-base leading-7 text-slate">
                <p>
                  <span className="font-semibold text-ink">Email:</span> {companyDetails.email}
                </p>
                <p>
                  <span className="font-semibold text-ink">Phone:</span> {companyDetails.phone}
                </p>
                <p>
                  <span className="font-semibold text-ink">Registered office:</span>{" "}
                  {companyDetails.registeredOffice}
                </p>
                <p>
                  <span className="font-semibold text-ink">Company number:</span>{" "}
                  {companyDetails.companyNumber}
                </p>
              </div>
            </div>

            <div className="card-surface p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Typical enquiries</p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-slate">
                <li>European exhibition support for new market entrants</li>
                <li>Commercial representation for UK and EU buyers</li>
                <li>Contact-point and service address arrangements</li>
                <li>Sales, logistics, and documentation coordination</li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <CTASection
        title="Prefer to start with a short introductory conversation?"
        description="We can discuss your products, your target markets, and the level of local European support that would be most useful at your current stage."
        primaryLabel="Email us directly"
        primaryHref="mailto:enquiries@eurolinq-solutions.com"
        secondaryLabel="Review services"
      />
    </>
  );
}
