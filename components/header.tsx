"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { getLocaleFromPathname, localizeHref, navLabels } from "@/lib/i18n";
import { mainNavigation } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const labels = navLabels[locale];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/94 backdrop-blur-xl">
      <div className="container-shell py-4 lg:py-5">
        <div className="flex items-center justify-between gap-4 lg:gap-6">
          <Logo locale={locale} />

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-line/80 bg-white shadow-soft lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-ink transition ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-ink transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-ink transition ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
          <div className="hidden items-center gap-3 xl:gap-4 lg:flex">
            <nav
              aria-label="Primary"
              className="flex items-center gap-1.5 rounded-full border border-line/80 bg-white/88 px-3 py-2 shadow-soft xl:gap-2"
            >
              {mainNavigation.map((item) => {
                const isActive = pathname === item.href;
                const localizedHref = localizeHref(item.href, locale);
                const localizedActive = pathname === localizedHref;
                const label =
                  item.label === "Home"
                    ? labels.home
                    : item.label === "About"
                      ? labels.about
                      : item.label === "Services"
                        ? labels.services
                        : labels.contact;

                return (
                  <Link
                    key={item.href}
                    href={localizedHref}
                    className={`rounded-full px-3.5 py-2 text-[0.96rem] font-semibold transition xl:px-4 xl:text-base ${
                      localizedActive || isActive
                        ? "bg-accentSoft text-ink"
                        : "text-slate hover:bg-accentSoft hover:text-ink"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <Link href={localizeHref("/contact", locale)} className="button-primary px-6 py-3.5 text-base lg:min-w-[160px] xl:px-7 xl:min-w-[170px]">
              {labels.speak}
            </Link>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[420px] pt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[2rem] border border-line/80 bg-white/96 p-5 shadow-soft">
            <nav aria-label="Mobile primary" className="mt-5 grid gap-2">
              {mainNavigation.map((item) => {
                const localizedHref = localizeHref(item.href, locale);
                const isActive = pathname === localizedHref;
                const label =
                  item.label === "Home"
                    ? labels.home
                    : item.label === "About"
                      ? labels.about
                      : item.label === "Services"
                        ? labels.services
                        : labels.contact;

                return (
                  <Link
                    key={item.href}
                    href={localizedHref}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
                      isActive
                        ? "bg-accentSoft text-ink"
                        : "bg-mist/60 text-slate hover:bg-accentSoft hover:text-ink"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href={localizeHref("/contact", locale)}
              onClick={() => setIsOpen(false)}
              className="button-primary mt-5 w-full px-7 py-3.5 text-base"
            >
              {labels.speak}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
