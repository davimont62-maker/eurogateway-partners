import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/site";

const service = getServiceBySlug("sales-distribution-support");

export const metadata = buildMetadata({
  title: "Sales & Distribution Support",
  description:
    "Lead handling, distributor communication, and sales support for manufacturers entering European markets.",
  path: "/sales-distribution-support"
});

export default function SalesDistributionSupportPage() {
  if (!service) return null;
  return <ServicePage service={service} />;
}
