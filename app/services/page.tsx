import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore EuroGateway Partners' European market access services for non-EU manufacturers, including representation, contact-point, logistics, and compliance coordination support.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A joined-up service offer for European market access."
        description="Our services are designed to help non-EU manufacturers appear more established, respond more effectively, and coordinate practical commercial activity across Europe."
      />

      <section className="section-space">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <CTASection
        title="Need help deciding which combination of services is right for your business?"
        description="We can help you define an appropriate support model based on your stage of market entry, target channels, and internal resourcing."
        primaryLabel="Discuss service options"
      />
    </>
  );
}
