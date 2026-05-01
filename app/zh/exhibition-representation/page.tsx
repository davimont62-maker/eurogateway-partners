import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/metadata";
import { getZhServiceBySlug, servicePageZh } from "@/lib/site-zh";

const service = getZhServiceBySlug("exhibition-representation");

export const metadata = buildMetadata({
  title: "展会代表支持",
  description: "围绕欧洲展会的报名、主办方沟通、参展协调与展后跟进提供支持。",
  path: "/zh/exhibition-representation",
  locale: "zh"
});

export default function ZhExhibitionRepresentationPage() {
  if (!service) return null;
  return <ServicePage service={service} {...servicePageZh} />;
}
