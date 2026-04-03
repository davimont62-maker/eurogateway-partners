import Link from "next/link";
import { Logo } from "@/components/logo";
import { companyDetails, mainNavigation } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl">
      <div className="container-shell flex flex-col gap-5 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <span className="hidden rounded-full border border-gold/30 bg-goldSoft px-5 py-2.5 text-sm font-semibold text-gold lg:inline-flex">
            {companyDetails.tagline}
          </span>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-line/80 bg-white/88 px-3 py-2 shadow-soft"
          >
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-base font-semibold text-slate hover:bg-accentSoft hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="button-primary px-7 py-3.5 text-base lg:min-w-[170px]">
            Speak with us
          </Link>
        </div>
      </div>
    </header>
  );
}
