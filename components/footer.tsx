import Link from "next/link";
import { Logo } from "@/components/logo";
import { companyDetails, mainNavigation, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-panel text-white">
      <div className="container-shell grid gap-12 py-14 lg:grid-cols-[1.3fr_0.8fr_1fr]">
        <div className="space-y-5">
          <Logo dark />
          <p className="max-w-xl text-sm leading-7 text-white/70">{companyDetails.description}</p>
          <div className="space-y-1 text-sm leading-7 text-white/65">
            <p>{companyDetails.registeredOffice}</p>
            <p>{companyDetails.companyNumber}</p>
            <p>{companyDetails.email}</p>
            <p>{companyDetails.phone}</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">Navigation</p>
          <div className="space-y-3 text-sm text-white/70">
            {mainNavigation.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">Core Services</p>
          <div className="space-y-3 text-sm text-white/70">
            {services.map((service) => (
              <div key={service.slug}>
                <Link href={`/${service.slug}`} className="hover:text-white">
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
