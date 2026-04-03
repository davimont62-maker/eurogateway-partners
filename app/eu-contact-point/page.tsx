import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/site";

const service = getServiceBySlug("eu-contact-point");

export const metadata = buildMetadata({
  title: "EU Contact Point / Service Address",
  description:
    "European phone, email, front-office, and service address support for non-EU manufacturers trading into Europe.",
  path: "/eu-contact-point"
});

export default function EUContactPointPage() {
  if (!service) return null;
  return <ServicePage service={service} />;
}
