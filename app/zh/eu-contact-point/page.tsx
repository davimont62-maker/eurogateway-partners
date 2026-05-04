import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/metadata";
import { getZhServiceBySlug, servicePageZh } from "@/lib/site-zh";

const service = getZhServiceBySlug("eu-contact-point");

export const metadata = buildMetadata({
  title: "欧盟联络点 / 服务地址",
  description: "提供欧洲联络点、前台支持和服务地址支持。",
  path: "/zh/eu-contact-point",
  locale: "zh"
});

export default function ZhEuContactPointPage() {
  if (!service) return null;
  return <ServicePage service={service} locale="zh" path="/zh/eu-contact-point" {...servicePageZh} />;
}
