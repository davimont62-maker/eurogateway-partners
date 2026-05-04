import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { SectionTitle } from "@/components/section-title";
import { ServicePillarsSection } from "@/components/service-pillars-section";
import { StructuredData } from "@/components/structured-data";
import { TrustSection } from "@/components/trust-section";
import { buildMetadata } from "@/lib/metadata";
import { buildProfessionalServiceSchema } from "@/lib/schema";
import {
  companyDescriptionZh,
  credibilityStripZh,
  heroZh,
  homeZh,
  processStepsZh,
  servicePillarsZh,
  trustNarrativeZh,
  whoWeHelpZh
} from "@/lib/site-zh";

export const metadata = buildMetadata({
  title: "欧盟市场准入支持",
  description:
    "EuroLinq 为非欧盟制造商，尤其是中国企业，提供欧洲市场进入、商业代表、沟通协调与运营支持。",
  path: "/zh",
  locale: "zh"
});

export default function ChineseHomePage() {
  return (
    <>
      <StructuredData
        id="zh-home-professional-service-schema"
        data={buildProfessionalServiceSchema({
          locale: "zh",
          path: "/zh",
          description: companyDescriptionZh
        })}
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
        <ProcessSection eyebrow="我们的工作方式" title="围绕客户市场目标设计的分阶段支持模式。" steps={processStepsZh} />
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
              <div key={item} className="rounded-3xl border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.48))] px-6 py-6 text-lg leading-8 text-slate shadow-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

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
