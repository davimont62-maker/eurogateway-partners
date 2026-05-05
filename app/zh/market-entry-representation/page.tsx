import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbSchema,
  buildServiceGroupSchema,
  buildWebPageSchema
} from "@/lib/schema";

const title = "市场进入与代表支持";
const description =
  "围绕展会支持、欧洲代表支持和欧盟联络点安排，帮助企业建立更专业的欧洲市场进入基础。";

const relatedServices = [
  {
    href: "/zh/exhibition-representation",
    title: "展会代表支持",
    text: "围绕欧洲展会的报名、主办方沟通、参展协调与展后跟进提供支持。"
  },
  {
    href: "/zh/eu-commercial-representation",
    title: "欧洲商业代表支持",
    text: "为买家、经销商和合作方建立更专业的欧洲本地商务窗口。"
  },
  {
    href: "/zh/eu-contact-point",
    title: "欧盟联络点 / 服务地址",
    text: "为询盘承接、前台沟通和日常联络提供可靠的欧洲窗口支持。"
  }
];

export const metadata = buildMetadata({
  title,
  description,
  path: "/zh/market-entry-representation",
  locale: "zh"
});

export default function ChineseMarketEntryRepresentationPage() {
  return (
    <>
      <StructuredData
        id="zh-market-entry-page-schema"
        data={[
          buildWebPageSchema({
            type: "WebPage",
            locale: "zh",
            path: "/zh/market-entry-representation",
            title,
            description
          }),
          buildServiceGroupSchema({
            locale: "zh",
            path: "/zh/market-entry-representation",
            title,
            description,
            relatedServices: relatedServices.map((service) => ({
              title: service.title,
              href: service.href
            }))
          }),
          buildBreadcrumbSchema([
            { name: "首页", path: "/zh" },
            { name: "服务", path: "/zh/services" },
            { name: title, path: "/zh/market-entry-representation" }
          ])
        ]}
      />

      <PageHero
        eyebrow="服务支柱"
        title={title}
        description="为需要进入欧洲市场、但暂不准备重投入设立本地团队的制造商，提供务实的第一阶段支持。"
      />

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-8">
            <div className="prose-copy space-y-6">
              <p>
                对很多非欧盟制造商而言，第一步并不只是获得客户兴趣，而是先让欧洲市场看到一家企业具备更专业、更易对接的本地商务窗口。
              </p>
              <p>
                这个支柱把欧洲市场进入初期最关键的工作整合在一起，包括展会支持、欧洲代表支持，以及能够提升响应效率和信任度的联络窗口安排。
              </p>
              <p>
                EuroLinq 不要求客户一开始就建立完整本地团队，而是根据市场目标、内部资源和投入节奏，帮助设计更合适的第一阶段推进方式。
              </p>
            </div>

            <div className="rounded-[2rem] border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.34))] p-7 shadow-soft">
              <p className="eyebrow">这个支柱主要解决什么问题</p>
              <p className="mt-4 text-lg leading-8 text-slate">
                它帮助客户从“只有海外总部的供应商”转变为“在欧洲更值得信赖、对接更顺畅、后续推进更有把握的市场参与者”。
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-line/10 bg-panel p-8 text-white shadow-glow">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  典型范围
                </p>
                <p className="mt-3 text-lg leading-8 text-white/78">
                  具体组合取决于客户当前更关注展会安排、买家信任建立、首轮回复效率，还是整体欧洲商务窗口的搭建。
                </p>
              </div>
              <ul className="grid gap-3">
                <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/82">
                  展会落地与主办方沟通
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/82">
                  在适当情况下提供欧洲代表支持
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/82">
                  欧盟联络点和日常商务联系支持
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/82">
                  与客户投入节奏匹配的分阶段推进方式
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="container-shell py-16">
          <div className="max-w-3xl">
            <p className="eyebrow">相关具体服务</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl">
              进一步查看该支柱下的具体服务内容。
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <article
                key={service.href}
                className="rounded-[1.9rem] border border-line/70 bg-white p-7 shadow-soft"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">{service.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate">{service.text}</p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink hover:text-accent"
                >
                  查看服务
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="下一步"
        title="讨论适合您欧洲进入计划的第一阶段支持结构"
        description="我们可以帮助您判断展会支持、欧洲代表支持和本地窗口安排之间更适合您的组合。"
        primaryLabel="联系我们"
        primaryHref="/zh/contact"
        secondaryLabel="查看全部服务"
        secondaryHref="/zh/services"
      />
    </>
  );
}
