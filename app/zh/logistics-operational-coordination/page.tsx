import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/metadata";
import { getZhServiceBySlug, servicePageZh } from "@/lib/site-zh";

const service = getZhServiceBySlug("logistics-operational-coordination");

export const metadata = buildMetadata({
  title: "物流与运营协调",
  description: "围绕仓储、物流、退货与欧洲本地运营衔接提供实际协调支持。",
  path: "/zh/logistics-operational-coordination",
  locale: "zh"
});

export default function ZhLogisticsOperationalCoordinationPage() {
  if (!service) return null;
  return <ServicePage service={service} locale="zh" path="/zh/logistics-operational-coordination" {...servicePageZh} />;
}
