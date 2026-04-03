import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { companyDetails, homeStats } from "@/lib/site";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-line/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(237,243,252,0.9)_50%,rgba(244,235,215,0.75))]">
      <div className="container-shell relative grid gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
        <div className="pointer-events-none absolute left-[-80px] top-12 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-[-40px] h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-gold/25 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            UK-based representation for overseas manufacturers
          </div>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Build a more credible, responsive European presence with EuroLinq.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate">
              We help overseas manufacturers, especially Chinese companies, establish a trusted
              commercial front office, strengthen buyer confidence, and coordinate the practical
              work required to enter Europe with clarity.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Arrange an introduction call
            </Link>
            <Link href="/services" className="button-secondary">
              Explore our services
            </Link>
          </div>
          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            <div className="rounded-3xl border border-line/70 bg-white/70 px-5 py-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">Representation</p>
              <p className="mt-2 text-sm leading-6 text-ink">European-facing contact, enquiry handling, and commercial continuity.</p>
            </div>
            <div className="rounded-3xl border border-line/70 bg-white/70 px-5 py-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">Coordination</p>
              <p className="mt-2 text-sm leading-6 text-ink">Support across buyers, exhibitions, logistics partners, and documentation.</p>
            </div>
            <div className="rounded-3xl border border-line/70 bg-white/70 px-5 py-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">Credibility</p>
              <p className="mt-2 text-sm leading-6 text-ink">A more established and trustworthy market presence for Europe.</p>
            </div>
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

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {homeStats.map((item) => (
                <div key={item.value} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-2xl font-semibold tracking-tight text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-gold/25 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-goldSoft">Why clients engage us</p>
              <p className="mt-3 text-lg font-medium leading-8 text-white/85">
                A European-facing brand presence, faster lead handling, and practical coordination
                across exhibitions, buyers, logistics partners, and documentation workstreams.
              </p>
              <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-goldSoft hover:text-white">
                Learn how we support overseas manufacturers
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
