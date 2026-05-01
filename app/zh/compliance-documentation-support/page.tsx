import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/metadata";
import { getZhServiceBySlug, servicePageZh } from "@/lib/site-zh";

const service = getZhServiceBySlug("compliance-documentation-support");

export const metadata = buildMetadata({
  title: "合规与文件支持",
  description: "围绕欧洲面向型文件、合规组织与专业顾问沟通提供协调支持。",
  path: "/zh/compliance-documentation-support",
  locale: "zh"
});

export default function ZhComplianceDocumentationSupportPage() {
  if (!service) return null;
  return <ServicePage service={service} {...servicePageZh} />;
}
