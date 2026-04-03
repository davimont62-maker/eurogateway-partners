import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/site";

const service = getServiceBySlug("exhibition-representation");

export const metadata = buildMetadata({
  title: "Exhibition Representation",
  description:
    "Trade fair and exhibition representation support, including organiser liaison, exhibitor coordination, and lead follow-up planning.",
  path: "/exhibition-representation"
});

export default function ExhibitionRepresentationPage() {
  if (!service) return null;
  return <ServicePage service={service} />;
}
