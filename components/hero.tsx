import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { companyDetails, homeStats } from "@/lib/site";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-line bg-[linear-gradient(to_bottom,rgba(243,246,251,0.72),rgba(255,255,255,0))]">
      <div className="container-shell grid gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate">
            European market access support for non-EU manufacturers
          </div>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Your trusted route to a credible commercial presence in Europe.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate">
              {companyDetails.name} helps overseas manufacturers, particularly Chinese companies,
              establish a professional front-office presence, coordinate market-entry activity, and
              engage European buyers with greater confidence.
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
        </div>

        <div className="card-surface relative overflow-hidden p-8">
          <div className="absolute inset-0 -z-10 bg-grid bg-[length:38px_38px] opacity-60" />
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Positioning</p>
              <p className="text-3xl font-semibold tracking-tight text-ink">{companyDetails.tagline}</p>
              <p className="text-base leading-7 text-slate">{companyDetails.description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {homeStats.map((item) => (
                <div key={item.value} className="rounded-3xl border border-line bg-mist p-5">
                  <p className="text-2xl font-semibold tracking-tight text-ink">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate">{item.label}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-ink">
              Learn how we support overseas manufacturers
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
