import { ContactForm } from "@/components/contact-form";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildContactPageSchema, buildFaqSchema } from "@/lib/schema";
import { companyDetails, contactSeoFaqs } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact EuroLinq",
  description:
    "Contact EuroLinq to discuss European market entry, local representation, distributor communication, exhibition follow-up, and practical support for your business in Europe.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <StructuredData
        id="contact-page-schema"
        data={[
          buildContactPageSchema({
            path: "/contact",
            title: "Contact EuroLinq",
            description:
              "Contact EuroLinq to discuss European market entry, local representation, distributor communication, exhibition follow-up, and practical support for your business in Europe."
          }),
          buildFaqSchema({
            path: "/contact",
            items: contactSeoFaqs
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" }
          ])
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="Speak with us about your European market entry."
        description="If you are considering how much local representation, communication support, or operational coordination your business requires in Europe, we would be pleased to discuss it."
      />

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <div className="card-surface bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.42))] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Direct contact</p>
              <div className="mt-5 space-y-3 text-base leading-8 text-slate">
                <p>
                  <span className="font-semibold text-ink">Email:</span> {companyDetails.email}
                </p>
                <p>
                  <span className="font-semibold text-ink">Registered office:</span>{" "}
                  {companyDetails.registeredOffice}
                </p>
              </div>
            </div>

            <div className="card-surface p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Typical discussions</p>
              <ul className="mt-5 space-y-3 text-base leading-8 text-slate">
                <li>- European representation without a full setup</li>
                <li>- Defining an appropriate support model</li>
                <li>- Supporting exhibitions, distributors, or buyers</li>
                <li>- Creating a stronger local European interface</li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <FAQSection
        title="Questions before getting in touch."
        description="If you are preparing for an initial discussion, these are some of the practical points businesses often want clarified first."
        items={contactSeoFaqs}
      />

      <CTASection
        title="If you prefer, start with a short introductory conversation"
        description="We can discuss your target market, the stage you are at, and what level of European support would be most appropriate."
        primaryLabel="Email us directly"
        primaryHref="mailto:enquiries@eurolinq-partners.com"
        secondaryLabel="Explore services"
      />
    </>
  );
}
