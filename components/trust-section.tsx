import { trustNarrative } from "@/lib/site";

type TrustSectionProps = {
  eyebrow?: string;
  narrative?: typeof trustNarrative;
};

export function TrustSection({
  eyebrow = "Why Eurolinq",
  narrative = trustNarrative
}: TrustSectionProps = {}) {
  return (
    <section className="section-space border-y border-line/70 bg-[linear-gradient(135deg,rgba(16,40,70,0.98),rgba(22,55,102,0.94))]">
      <div className="container-shell grid gap-14 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9e4f2]">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {narrative.title}
          </h2>
          <div className="mt-8 space-y-6">
            {narrative.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl text-base leading-8 text-[#e7eef8]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {narrative.points.map((point) => (
            <div
              key={point}
              className="rounded-3xl border border-white/12 bg-white/8 p-6 text-white/84 backdrop-blur"
            >
              <p className="text-xl font-medium tracking-[-0.03em] text-white">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
