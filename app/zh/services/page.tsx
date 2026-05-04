import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ServicePillarsSection } from "@/components/service-pillars-section";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/schema";
import { servicePillarsZh, servicesListZh, servicesZh } from "@/lib/site-zh";

export const metadata = buildMetadata({
  title: "服务",
  description: "查看 EuroLinq 围绕欧洲市场进入支持、欧洲代表服务、渠道开发与运营协调提供的服务内容。",
  path: "/zh/services",
  locale: "zh"
});

export default function ChineseServicesPage() {
  return (
    <>
      <StructuredData
        id="zh-services-page-schema"
        data={[
          buildCollectionPageSchema({
            locale: "zh",
            path: "/zh/services",
            title: "EuroLinq 服务",
            description:
              "查看 EuroLinq 围绕欧洲市场进入支持、欧洲代表服务、渠道开发与运营协调提供的服务内容。",
            items: servicesListZh.map((service) => ({
              name: service.title,
              path: `/zh/${service.slug}`
            }))
          }),
          buildBreadcrumbSchema([
            { name: "首页", path: "/zh" },
            { name: "服务", path: "/zh/services" }
          ])
        ]}
      />

      <PageHero eyebrow="服务" title={servicesZh.pageTitle} description={servicesZh.pageDescription} />

      <section className="border-b border-line/60 bg-white">
        <div className="container-shell grid gap-8 py-12 lg:grid-cols-[1fr_0.95fr] lg:py-16">
          <div className="max-w-3xl">
            <p className="eyebrow">{servicesZh.advisoryEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl">
              {servicesZh.advisoryTitle}
            </h2>
          </div>
          <div className="rounded-[2rem] border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(236,242,249,0.64))] p-7 shadow-soft">
            <p className="text-base leading-8 text-slate">{servicesZh.advisoryText}</p>
          </div>
        </div>
      </section>

      <ServicePillarsSection
        eyebrow="服务支柱"
        title="围绕市场进入、代表支持和落地协调而构建的整体服务框架。"
        description="EuroLinq 并不是提供几项彼此分散的单项服务，而是围绕三个互补支柱来组织工作。"
        pillars={servicePillarsZh}
        learnMoreLabel="了解更多"
      />

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.24))]">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">{servicesZh.detailEyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl">
                {servicesZh.detailTitle}
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-slate">
              {servicesZh.detailDescription}
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {servicesListZh.map((service, index) => (
              <article
                key={service.slug}
                className="grid gap-6 rounded-[2rem] border border-line/70 bg-white p-7 shadow-soft lg:grid-cols-[88px_0.78fr_1.12fr_auto] lg:items-start"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate">{`0${index + 1}`}</p>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">{service.title}</h3>
                <p className="text-base leading-8 text-slate">{service.excerpt}</p>
                <Link
                  href={`/zh/${service.slug}`}
                  className="inline-flex self-start rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink hover:text-accent"
                >
                  查看详情
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] border border-line/10 bg-panel p-8 text-white shadow-glow">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  下一步
                </p>
                <p className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight">
                  {servicesZh.mixTitle}
                </p>
              </div>
              <Link
                href="/zh/contact"
                className="button-secondary border-white/20 bg-white/10 text-white hover:border-white/40"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="下一步"
        title="讨论哪种服务组合更适合您的欧洲策略"
        description="更合适的支持方式，取决于您的目标市场、内部资源以及投入节奏。"
        primaryLabel="联系我们"
        primaryHref="/zh/contact"
        secondaryLabel="返回首页"
        secondaryHref="/zh"
      />
    </>
  );
}
