import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/metadata";
import { getZhServiceBySlug, servicePageZh } from "@/lib/site-zh";

const service = getZhServiceBySlug("exhibition-representation");

export const metadata = buildMetadata({
  title: "展会代表支持",
  description: "围绕欧洲展会报名、主办方沟通、参展协调和展会后跟进提供支持。",
  path: "/zh/exhibition-representation",
  locale: "zh"
});

export default function ZhExhibitionRepresentationPage() {
  if (!service) return null;
  return <ServicePage service={service} locale="zh" path="/zh/exhibition-representation" {...servicePageZh} />;
}
