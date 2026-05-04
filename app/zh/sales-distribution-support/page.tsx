import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/metadata";
import { getZhServiceBySlug, servicePageZh } from "@/lib/site-zh";

const service = getZhServiceBySlug("sales-distribution-support");

export const metadata = buildMetadata({
  title: "销售与渠道支持",
  description: "围绕经销商沟通、询盘推进与销售协调提供欧洲本地支持。",
  path: "/zh/sales-distribution-support",
  locale: "zh"
});

export default function ZhSalesDistributionSupportPage() {
  if (!service) return null;
  return <ServicePage service={service} locale="zh" path="/zh/sales-distribution-support" {...servicePageZh} />;
}
