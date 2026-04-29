import { SectionTitle } from "@/components/section-title";
import { processSteps } from "@/lib/site";

export function ProcessSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionTitle
          eyebrow="How we work"
          title="A staged support model shaped around the client's market goals."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {processSteps.map((item) => (
            <article key={item.step} className="overflow-hidden rounded-3xl border border-line/70 bg-white shadow-soft">
              <div className="h-1.5 w-full bg-gradient-to-r from-accent via-panel to-gold" />
              <div className="p-7">
                <p className="eyebrow">{item.step}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink">{item.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
