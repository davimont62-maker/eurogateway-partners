import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/site";

const service = getServiceBySlug("eu-commercial-representation");

export const metadata = buildMetadata({
  title: "EU Commercial Representation",
  description:
    "European commercial representation support for non-EU manufacturers engaging distributors, retailers, and counterparties.",
  path: "/eu-commercial-representation"
});

export default function EUCommercialRepresentationPage() {
  if (!service) return null;
  return <ServicePage service={service} />;
}
