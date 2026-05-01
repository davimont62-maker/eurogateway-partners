import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "市场进入与代表支持",
  description: "围绕展会、商业代表与欧盟联络点建立更可信的欧洲初始市场存在。",
  path: "/zh/market-entry-representation",
  locale: "zh"
});

const relatedServices = [
  {
    href: "/zh/exhibition-representation",
    title: "展会代表支持",
    text: "围绕欧洲展会的报名、主办方沟通、参展协调与展后跟进提供支持。"
  },
  {
    href: "/zh/eu-commercial-representation",
    title: "欧洲商业代表支持",
    text: "为买家、经销商与合作方建立更可信的欧洲商业沟通界面。"
  },
  {
    href: "/zh/eu-contact-point",
    title: "欧盟联络点 / 服务地址",
    text: "为询盘、前台沟通与本地联系连续性提供可靠支持。"
  }
];

export default function ChineseMarketEntryRepresentationPage() {
  return (
    <>
      <PageHero
        eyebrow="服务支柱"
        title="市场进入与代表支持"
        description="为需要在欧洲建立更可信本地存在的制造商提供务实的第一阶段支持。"
      />

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-8">
            <div className="prose-copy space-y-6">
              <p>
                对很多非欧盟制造商而言，第一步并不只是获得兴趣，而是让欧洲市场感受到企业具备更可信、更容易沟通的本地存在。
              </p>
              <p>
                这个支柱把欧洲进入初期最重要的工作流整合在一起，包括展会支持、更清晰的商业代表界面，以及能够提升响应和信任度的本地联络层。
              </p>
              <p>
                EuroLinq 并不要求客户立即建立完整本地架构，而是根据市场目标、内部资源与投入节奏，帮助设计合适的第一阶段支持结构。
              </p>
            </div>

            <div className="rounded-[2rem] border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,235,215,0.34))] p-7 shadow-soft">
              <p className="eyebrow">这个支柱主要解决什么问题</p>
              <p className="mt-4 text-lg leading-8 text-slate">
                它帮助客户从“仅有海外总部的供应商”转变为“在欧洲看起来更可信、沟通更顺畅、后续推进更有结构的市场参与者”。
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-line/10 bg-panel p-8 text-white shadow-glow">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">典型范围</p>
                <p className="mt-3 text-lg leading-8 text-white/78">
                  具体组合取决于客户当前更关注展会、买家信任、本地首轮回复，还是更广义的商业界面建立。
                </p>
              </div>
              <ul className="grid gap-3">
                <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/82">
                  欧洲展会支持与主办方沟通
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/82">
                  在适当情况下提供本地商业代表支持
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/82">
                  欧盟联络点与沟通连续性支持
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/82">
                  与客户投入节奏相匹配的分阶段模式
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
              <article key={service.href} className="rounded-[1.9rem] border border-line/70 bg-white p-7 shadow-soft">
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
        description="我们可以帮助您明确展会、代表支持与本地沟通界面之间最合适的组合。"
        primaryLabel="联系我们"
        primaryHref="/zh/contact"
        secondaryLabel="查看全部服务"
        secondaryHref="/zh/services"
      />
    </>
  );
}
