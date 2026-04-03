import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/site";

const service = getServiceBySlug("compliance-documentation-support");

export const metadata = buildMetadata({
  title: "Compliance & Documentation Support",
  description:
    "Documentation coordination, website localisation, and European-facing compliance support for manufacturers entering Europe.",
  path: "/compliance-documentation-support"
});

export default function ComplianceDocumentationSupportPage() {
  if (!service) return null;
  return <ServicePage service={service} />;
}
