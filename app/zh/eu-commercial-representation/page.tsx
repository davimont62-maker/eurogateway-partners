import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/metadata";
import { getZhServiceBySlug, servicePageZh } from "@/lib/site-zh";

const service = getZhServiceBySlug("eu-commercial-representation");

export const metadata = buildMetadata({
  title: "欧洲商业代表支持",
  description: "建立更可信的欧洲商业界面，支持买家、经销商与合作方沟通。",
  path: "/zh/eu-commercial-representation",
  locale: "zh"
});

export default function ZhEuCommercialRepresentationPage() {
  if (!service) return null;
  return <ServicePage service={service} {...servicePageZh} />;
}
