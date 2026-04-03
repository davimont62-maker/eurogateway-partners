import Link from "next/link";
import { companyDetails, mainNavigation, services } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
            {companyDetails.name}
          </Link>
          <span className="hidden rounded-full bg-accentSoft px-3 py-1 text-xs font-medium text-accent md:inline-flex">
            {companyDetails.tagline}
          </span>
        </div>

        <nav aria-label="Primary" className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate">
          {mainNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
          <div className="hidden items-center gap-5 xl:flex">
            {services.slice(0, 3).map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="hover:text-ink">
                {service.shortTitle ?? service.title}
              </Link>
            ))}
          </div>
        </nav>

        <Link href="/contact" className="button-primary">
          Speak with us
        </Link>
      </div>
    </header>
  );
}
