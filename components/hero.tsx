import Link from "next/link";
import { companyDetails, credibilityStrip, servicePillars } from "@/lib/site";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-line/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(237,243,252,0.9)_50%,rgba(244,235,215,0.75))]">
      <div className="container-shell relative grid gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
        <div className="pointer-events-none absolute left-[-80px] top-12 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-[-40px] h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
        <div className="space-y-10">
          <div className="inline-flex rounded-full border border-gold/25 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            UK-based representation for overseas manufacturers
          </div>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {companyDetails.tagline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate">
              Eurolinq helps non-EU manufacturers establish a credible commercial presence in Europe through local representation, coordination, and structured support shaped around the client&apos;s market goals and investment approach.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Discuss your EU market entry
            </Link>
            <Link href="/services" className="button-secondary">
              Explore services
            </Link>
          </div>
          <div className="grid gap-4 pt-3 sm:grid-cols-3">
            {credibilityStrip.map((item) => (
              <div key={item} className="rounded-3xl border border-line/70 bg-white/70 px-5 py-4 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">{item}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[2rem] border border-line/70 bg-white/72 p-6 shadow-soft">
            <p className="eyebrow">How Eurolinq fits</p>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-slate">
              We support clients as a European extension of their own team, with the level of
              involvement shaped by commercial targets, internal capacity, and intended pace of
              investment.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-panel p-8 text-white shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(182,139,60,0.32),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 -z-10 bg-grid bg-[length:38px_38px] opacity-10" />
          <div className="relative space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Positioning</p>
              <p className="text-3xl font-semibold tracking-tight">{companyDetails.tagline}</p>
              <p className="max-w-lg text-base leading-7 text-white/70">{companyDetails.description}</p>
            </div>

            <div className="space-y-5">
              {servicePillars.map((pillar) => (
                <div key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-lg font-semibold tracking-tight text-white">{pillar.title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/68">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-gold/25 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-goldSoft">Why clients engage us</p>
              <p className="mt-3 text-lg font-medium leading-8 text-white/85">
                A European-facing presence, clearer local communication, and practical continuity across commercial and operational workstreams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
