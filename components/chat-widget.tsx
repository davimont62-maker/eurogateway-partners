"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { companyDetails } from "@/lib/site";
import { getLocaleFromPathname, localizeHref } from "@/lib/i18n";

const widgetCopy = {
  en: {
    launcher: "Chat with us",
    eyebrow: "Quick contact",
    title: "Speak with EuroLinq",
    intro:
      "Tell us your product focus, target market, and whether you need representation, exhibition follow-up, or distributor communication in Europe.",
    emailLabel: "Email us",
    formLabel: "Open contact form",
    note: "We usually reply by email and can then continue the discussion directly."
  },
  zh: {
    launcher: "在线咨询",
    eyebrow: "快速联系",
    title: "联系 EuroLinq",
    intro:
      "告诉我们您的产品方向、目标市场，以及您是否需要欧洲代表、展会客户跟进或经销商沟通支持。",
    emailLabel: "发送邮件",
    formLabel: "打开联系表单",
    note: "我们通常会先通过邮件回复，再与您继续沟通。"
  }
} as const;

export function ChatWidget() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = widgetCopy[locale];
  const [isOpen, setIsOpen] = useState(false);

  const contactHref = useMemo(() => localizeHref("/contact", locale), [locale]);
  const mailtoHref = useMemo(
    () =>
      `mailto:${companyDetails.email}?subject=${encodeURIComponent(
        locale === "zh" ? "咨询欧洲市场进入合作" : "Enquiry about European market entry support"
      )}`,
    [locale]
  );

  return (
    <div className="fixed bottom-5 right-5 z-50 flex max-w-[calc(100vw-2.5rem)] flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <div className="w-[min(24rem,calc(100vw-2.5rem))] rounded-[1.75rem] border border-line/80 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate">
                {copy.eyebrow}
              </p>
              <h3 className="font-[var(--font-manrope)] text-xl font-semibold text-ink">
                {copy.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat widget"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/80 text-slate hover:border-ink hover:text-ink"
            >
              ×
            </button>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate">{copy.intro}</p>

          <div className="mt-5 grid gap-3">
            <a href={mailtoHref} className="button-primary w-full justify-center">
              {copy.emailLabel}
            </a>
            <Link href={contactHref} className="button-secondary w-full justify-center" onClick={() => setIsOpen(false)}>
              {copy.formLabel}
            </Link>
          </div>

          <div className="mt-5 rounded-3xl border border-line/80 bg-mist/55 px-4 py-3 text-sm leading-6 text-slate">
            {copy.note}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(15,23,42,0.22)] hover:bg-accent"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/14 text-lg">
          💬
        </span>
        {copy.launcher}
      </button>
    </div>
  );
}
