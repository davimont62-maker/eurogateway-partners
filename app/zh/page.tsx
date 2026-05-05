import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { SectionTitle } from "@/components/section-title";
import { ServicePillarsSection } from "@/components/service-pillars-section";
import { StructuredData } from "@/components/structured-data";
import { TrustSection } from "@/components/trust-section";
import { buildMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildProfessionalServiceSchema,
  buildWebPageSchema
} from "@/lib/schema";
import {
  companyDescriptionZh,
  credibilityStripZh,
  heroZh,
  homeSeoFaqsZh,
  homeZh,
  processStepsZh,
  servicePillarsZh,
  trustNarrativeZh,
  whoWeHelpZh
} from "@/lib/site-zh";

export const metadata = buildMetadata({
  title: "欧洲市场进入支持与欧洲代表服务",
  description:
    "EuroLinq 为中国制造商和出口企业提供欧洲市场进入支持、欧洲代表服务、经销商沟通、展会后客户跟进以及本地执行协调。",
  path: "/zh",
  locale: "zh"
});

export default function ChineseHomePage() {
  return (
    <>
      <StructuredData
        id="zh-home-professional-service-schema"
        data={[
          buildProfessionalServiceSchema({
            locale: "zh",
            path: "/zh",
            description: companyDescriptionZh
          }),
          buildWebPageSchema({
            locale: "zh",
            path: "/zh",
            title: "欧洲市场进入支持与欧洲代表服务",
            description:
              "EuroLinq 为中国制造商和出口企业提供欧洲市场进入支持、欧洲代表服务、经销商沟通、展会后客户跟进以及本地执行协调。"
          }),
          buildBreadcrumbSchema([{ name: "首页", path: "/zh" }]),
          buildFaqSchema({
            path: "/zh",
            items: homeSeoFaqsZh
          })
        ]}
      />

      <Hero
        eyebrow={heroZh.eyebrow}
        title={heroZh.title}
        description={heroZh.description}
        primaryLabel={heroZh.primaryLabel}
        primaryHref="/zh/contact"
        secondaryLabel={heroZh.secondaryLabel}
        secondaryHref="/zh/services"
        credibilityItems={credibilityStripZh}
        fitTitle={heroZh.fitTitle}
        fitText={heroZh.fitText}
        positioningLabel={heroZh.positioningLabel}
        positioningDescription={companyDescriptionZh}
        pillars={servicePillarsZh}
        engagementLabel={heroZh.engagementLabel}
        engagementText={heroZh.engagementText}
      />

      <ServicePillarsSection
        eyebrow="服务支柱"
        title="围绕市场进入、代表支持与实际协调而构建的结构化支持模式。"
        description="EuroLinq 并不是提供六项彼此分散的服务，而是围绕三个互补支柱来组织工作。"
        pillars={servicePillarsZh}
        learnMoreLabel="了解更多"
      />

      <div className="border-y border-line/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(236,242,249,0.55)_52%,rgba(255,255,255,0.98))]">
        <ProcessSection
          eyebrow="我们的工作方式"
          title="围绕客户市场目标设计的分阶段支持模式。"
          steps={processStepsZh}
        />
      </div>

      <TrustSection eyebrow="为什么选择 EuroLinq" narrative={trustNarrativeZh} />

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.26))]">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow={homeZh.whoEyebrow}
            title={homeZh.whoTitle}
            description={homeZh.whoDescription}
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {whoWeHelpZh.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.48))] px-6 py-6 text-lg leading-8 text-slate shadow-soft"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow="常见问题"
        title="中国制造商进入欧洲市场前常问的问题。"
        description="以下问题大多来自正在评估欧洲代表服务、经销商对接、展会后跟进和本地执行支持的制造企业。"
        items={homeSeoFaqsZh}
      />

      <CTASection
        eyebrow="下一步"
        title={homeZh.ctaTitle}
        description={homeZh.ctaDescription}
        primaryLabel="联系我们"
        primaryHref="/zh/contact"
        secondaryLabel="查看服务"
        secondaryHref="/zh/services"
      />
    </>
  );
}
