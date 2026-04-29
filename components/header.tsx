"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { companyDetails, mainNavigation } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl">
      <div className="container-shell py-4 lg:py-5">
        <div className="flex items-center justify-between gap-4">
          <Logo />

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
        </div>

        <div className="mt-4 hidden items-center justify-between gap-6 lg:flex">
          <span className="inline-flex rounded-full border border-gold/30 bg-goldSoft px-5 py-2.5 text-sm font-semibold text-gold">
            {companyDetails.tagline}
          </span>

          <div className="flex items-center gap-4">
            <nav
              aria-label="Primary"
              className="flex items-center gap-2 rounded-full border border-line/80 bg-white/88 px-3 py-2 shadow-soft"
            >
              {mainNavigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-base font-semibold transition ${
                      isActive
                        ? "bg-accentSoft text-ink"
                        : "text-slate hover:bg-accentSoft hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link href="/contact" className="button-primary px-7 py-3.5 text-base lg:min-w-[170px]">
              Speak with us
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
            <div className="rounded-2xl border border-gold/30 bg-goldSoft px-4 py-3 text-sm font-semibold text-gold">
              {companyDetails.tagline}
            </div>
            <nav aria-label="Mobile primary" className="mt-5 grid gap-2">
              {mainNavigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
                      isActive
                        ? "bg-accentSoft text-ink"
                        : "bg-mist/60 text-slate hover:bg-accentSoft hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="button-primary mt-5 w-full px-7 py-3.5 text-base"
            >
              Speak with us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
