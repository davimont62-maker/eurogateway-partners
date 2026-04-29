import { trustNarrative } from "@/lib/site";

export function TrustSection() {
  return (
    <section className="section-space border-y border-line/70 bg-[linear-gradient(135deg,rgba(16,40,70,0.98),rgba(22,55,102,0.94))]">
      <div className="container-shell grid gap-14 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Why Eurolinq</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {trustNarrative.title}
          </h2>
          <div className="mt-8 space-y-6">
            {trustNarrative.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl text-base leading-8 text-white/74">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {trustNarrative.points.map((point) => (
            <div key={point} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/78 backdrop-blur">
              <p className="text-xl font-medium tracking-[-0.03em] text-white">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
