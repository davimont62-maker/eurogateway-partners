import Link from "next/link";
import { companyDetails, mainNavigation, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-mist">
      <div className="container-shell grid gap-12 py-14 lg:grid-cols-[1.3fr_0.8fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-ink">{companyDetails.name}</p>
          <p className="max-w-xl text-sm leading-7 text-slate">{companyDetails.description}</p>
          <div className="space-y-1 text-sm text-slate">
            <p>{companyDetails.registeredOffice}</p>
            <p>{companyDetails.companyNumber}</p>
            <p>{companyDetails.email}</p>
            <p>{companyDetails.phone}</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate">Navigation</p>
          <div className="space-y-3 text-sm text-slate">
            {mainNavigation.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate">Core Services</p>
          <div className="space-y-3 text-sm text-slate">
            {services.map((service) => (
              <div key={service.slug}>
                <Link href={`/${service.slug}`} className="hover:text-ink">
                  {service.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
