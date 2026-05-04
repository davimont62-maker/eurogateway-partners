import { ContactForm } from "@/components/contact-form";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildContactPageSchema } from "@/lib/schema";
import { companyDetails } from "@/lib/site";
import { contactFormZh, contactZh } from "@/lib/site-zh";

export const metadata = buildMetadata({
  title: "联系我们",
  description: "联系 EuroLinq，讨论适合您企业的欧洲市场进入与本地支持模式。",
  path: "/zh/contact",
  locale: "zh"
});

export default function ChineseContactPage() {
  return (
    <>
      <StructuredData
        id="zh-contact-page-schema"
        data={[
          buildContactPageSchema({
            locale: "zh",
            path: "/zh/contact",
            title: "联系 EuroLinq",
            description: "联系 EuroLinq，讨论适合您企业的欧洲市场进入与本地支持模式。"
          }),
          buildBreadcrumbSchema([
            { name: "首页", path: "/zh" },
            { name: "联系", path: "/zh/contact" }
          ])
        ]}
      />

      <PageHero eyebrow="联系我们" title={contactZh.title} description={contactZh.description} />

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <div className="card-surface bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.42))] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">
                {contactZh.directContact}
              </p>
              <div className="mt-5 space-y-3 text-base leading-8 text-slate">
                <p>
                  <span className="font-semibold text-ink">Email:</span> {companyDetails.email}
                </p>
                <p>
                  <span className="font-semibold text-ink">地址:</span> {companyDetails.registeredOffice}
                </p>
              </div>
            </div>

            <div className="card-surface p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">
                {contactZh.typicalDiscussions}
              </p>
              <ul className="mt-5 space-y-3 text-base leading-8 text-slate">
                {contactZh.typicalItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <ContactForm
            labels={{
              ...contactFormZh,
              options: [
                "展会代表支持",
                "欧洲商业代表支持",
                "欧盟联络点 / 服务地址",
                "销售与渠道支持",
                "物流与运营协调",
                "合规与文件支持"
              ]
            }}
          />
        </div>
      </section>

      <CTASection
        eyebrow="下一步"
        title={contactZh.ctaTitle}
        description={contactZh.ctaDescription}
        primaryLabel="直接发送邮件"
        primaryHref="mailto:enquiries@eurolinq-partners.com"
        secondaryLabel="查看服务"
        secondaryHref="/zh/services"
      />
    </>
  );
}
