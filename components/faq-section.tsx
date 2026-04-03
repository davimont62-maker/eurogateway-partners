import { faqs } from "@/lib/site";
import { SectionTitle } from "@/components/section-title";

export function FAQSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionTitle
          eyebrow="FAQ"
          title="Common questions"
          description="A few of the points manufacturers most often ask when planning their European market-entry approach."
        />
        <div className="mt-10 grid gap-4">
          {faqs.map((item) => (
            <details key={item.question} className="card-surface px-6 py-5">
              <summary className="cursor-pointer list-none text-lg font-semibold text-ink">
                {item.question}
              </summary>
              <p className="mt-4 max-w-4xl text-base leading-7 text-slate">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
