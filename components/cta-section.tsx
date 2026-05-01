import Link from "next/link";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  eyebrow = "Next step",
  title,
  description,
  primaryLabel = "Contact us",
  primaryHref = "/contact",
  secondaryLabel = "View services",
  secondaryHref = "/services"
}: CTASectionProps) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="card-surface bg-[linear-gradient(135deg,#102846,#153766_60%,#1d4c98)] px-8 py-10 text-white shadow-glow lg:px-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">{eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/75">{description}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-goldSoft"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
