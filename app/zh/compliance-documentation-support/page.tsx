import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/metadata";
import { getZhServiceBySlug, servicePageZh } from "@/lib/site-zh";

const service = getZhServiceBySlug("compliance-documentation-support");

export const metadata = buildMetadata({
  title: service?.title ?? "合规与文件支持",
  description: service?.excerpt ?? "围绕合规文件协调、对外资料准备和专业顾问对接提供支持。",
  path: "/zh/compliance-documentation-support",
  locale: "zh"
});

export default function ZhComplianceDocumentationSupportPage() {
  if (!service) return null;
  return (
    <ServicePage
      service={service}
      locale="zh"
      path="/zh/compliance-documentation-support"
      {...servicePageZh}
    />
  );
}
