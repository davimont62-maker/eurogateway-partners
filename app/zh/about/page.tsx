import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/schema";
import { aboutPointsZh, aboutZh } from "@/lib/site-zh";

export const metadata = buildMetadata({
  title: "关于我们",
  description: "了解 EuroLinq 如何作为非欧盟制造商进入欧洲市场过程中的欧洲延伸团队。",
  path: "/zh/about",
  locale: "zh"
});

export default function ChineseAboutPage() {
  return (
    <>
      <StructuredData
        id="zh-about-page-schema"
        data={[
          buildWebPageSchema({
            type: "AboutPage",
            locale: "zh",
            path: "/zh/about",
            title: "关于 EuroLinq",
            description: "了解 EuroLinq 如何作为非欧盟制造商进入欧洲市场过程中的欧洲延伸团队。"
          }),
          buildBreadcrumbSchema([
            { name: "首页", path: "/zh" },
            { name: "关于我们", path: "/zh/about" }
          ])
        ]}
      />

      <PageHero eyebrow="关于我们" title={aboutZh.title} description={aboutZh.description} />

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="prose-copy space-y-6">
              {aboutZh.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="rounded-[2rem] border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.38))] p-7 shadow-soft">
              <p className="eyebrow">{aboutZh.practiceTitle}</p>
              <p className="mt-4 text-lg leading-8 text-slate">{aboutZh.practiceText}</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-line/70 bg-[linear-gradient(160deg,rgba(16,40,70,0.97),rgba(29,76,152,0.88))] p-8 text-white shadow-glow">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              我们的角色
            </p>
            <div className="mt-6 space-y-5">
              {aboutPointsZh.map((point) => (
                <div key={point} className="border-b border-white/10 pb-5">
                  <p className="text-xl font-medium tracking-[-0.03em] text-white">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(236,242,249,0.64),rgba(255,255,255,0.98))]">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">{aboutZh.roleEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl">
              {aboutZh.roleTitle}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {aboutZh.roleCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[2rem] border border-line/70 bg-white p-6 shadow-soft"
              >
                <p className="text-xl font-semibold tracking-[-0.03em] text-ink">{card.title}</p>
                <p className="mt-3 text-base leading-8 text-slate">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="下一步"
        title={aboutZh.ctaTitle}
        description={aboutZh.ctaDescription}
        primaryLabel="联系我们"
        primaryHref="/zh/contact"
        secondaryLabel="查看服务"
        secondaryHref="/zh/services"
      />
    </>
  );
}
