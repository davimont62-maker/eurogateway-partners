import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/site";

const service = getServiceBySlug("logistics-operational-coordination");

export const metadata = buildMetadata({
  title: "Logistics & Operational Coordination",
  description:
    "Operational and logistics coordination support with warehouses, 3PLs, returns handling, and European customer-facing continuity.",
  path: "/logistics-operational-coordination"
});

export default function LogisticsOperationalCoordinationPage() {
  if (!service) return null;
  return <ServicePage service={service} />;
}
