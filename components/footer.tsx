"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { getLocaleFromPathname, localizeHref, navLabels } from "@/lib/i18n";
import { companyDetails, mainNavigation, services } from "@/lib/site";
import { companyDescriptionZh, servicesListZh } from "@/lib/site-zh";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const labels = navLabels[locale];
  const footerServices =
    locale === "zh"
      ? servicesListZh.map((service) => ({ title: service.title, href: `/zh/${service.slug}` }))
      : services.map((service) => ({ title: service.title, href: `/${service.slug}` }));

  return (
    <footer className="mt-20 border-t border-white/10 bg-panel text-white">
      <div className="container-shell grid gap-12 py-14 lg:grid-cols-[1.3fr_0.8fr_1fr]">
        <div className="space-y-5">
          <Logo dark locale={locale} />
          <p className="max-w-xl text-sm leading-7 text-white/70">
            {locale === "zh" ? companyDescriptionZh : companyDetails.description}
          </p>
          <div className="space-y-1 text-sm leading-7 text-white/65">
            <p>{companyDetails.registeredOffice}</p>
            <p>{companyDetails.email}</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            {locale === "zh" ? "网站导航" : "Navigation"}
          </p>
          <div className="space-y-3 text-sm text-white/70">
            {mainNavigation.map((item) => (
              <div key={item.href}>
                <Link href={localizeHref(item.href, locale)} className="hover:text-white">
                  {item.label === "Home"
                    ? labels.home
                    : item.label === "About"
                      ? labels.about
                      : item.label === "Services"
                        ? labels.services
                        : labels.contact}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            {locale === "zh" ? "核心服务" : "Core Services"}
          </p>
          <div className="space-y-3 text-sm text-white/70">
            {footerServices.map((service) => (
              <div key={service.href}>
                <Link href={service.href} className="hover:text-white">
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
