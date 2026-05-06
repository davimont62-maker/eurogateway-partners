"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { companyDetails } from "@/lib/site";
import { getLocaleFromPathname, localizeHref } from "@/lib/i18n";

const WHATSAPP_NUMBER = "+4407506865690";
const WECHAT_ID = "wxid_ol2ss2ydsmih22";

function normaliseWhatsAppNumber(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.startsWith("440") ? `44${digits.slice(3)}` : digits;
}

const widgetCopy = {
  en: {
    launcher: "WhatsApp / WeChat",
    eyebrow: "Direct contact",
    title: "Contact EuroLinq",
    intro:
      "Choose the channel that suits you best. You can message us on WhatsApp, add us on WeChat, or use the contact form for a fuller enquiry.",
    whatsappLabel: "Chat on WhatsApp",
    whatsappSubtext: "Fastest for a quick first message",
    wechatLabel: "WeChat ID",
    copyLabel: "Copy ID",
    copiedLabel: "Copied",
    formLabel: "Open contact form",
    note: "We use WhatsApp and WeChat for quick contact, and email for fuller business follow-up."
  },
  zh: {
    launcher: "WhatsApp / 微信",
    eyebrow: "直接联系",
    title: "联系 EuroLinq",
    intro:
      "请选择您方便的沟通方式。您可以通过 WhatsApp 联系我们、添加微信，或使用联系表单提交更完整的业务咨询。",
    whatsappLabel: "通过 WhatsApp 联系",
    whatsappSubtext: "适合先快速沟通",
    wechatLabel: "微信号",
    copyLabel: "复制微信号",
    copiedLabel: "已复制",
    formLabel: "打开联系表单",
    note: "适合快速沟通可使用 WhatsApp 或微信；如需更完整说明，我们会通过邮件继续跟进。"
  }
} as const;

export function ChatWidget() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = widgetCopy[locale];
  const [isOpen, setIsOpen] = useState(false);
  const [wechatCopied, setWechatCopied] = useState(false);

  const contactHref = useMemo(() => localizeHref("/contact", locale), [locale]);
  const whatsappHref = useMemo(() => {
    const message =
      locale === "zh"
        ? "您好，我想了解贵司在欧洲市场进入、经销商沟通或展会后跟进方面的支持。"
        : "Hello, I would like to discuss EuroLinq support for European market entry, distributor communication, or exhibition follow-up.";

    return `https://wa.me/${normaliseWhatsAppNumber(WHATSAPP_NUMBER)}?text=${encodeURIComponent(message)}`;
  }, [locale]);

  async function handleCopyWeChat() {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);
      setWechatCopied(true);
      window.setTimeout(() => setWechatCopied(false), 1800);
    } catch {
      setWechatCopied(false);
    }
  }

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
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.5rem] border border-[#d8eadf] bg-[#f2fbf5] px-4 py-4 text-left shadow-sm transition hover:border-[#9fd2af] hover:bg-[#ebfaf0]"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-ink">{copy.whatsappLabel}</p>
                  <p className="mt-1 text-xs leading-6 text-slate">{copy.whatsappSubtext}</p>
                </div>
                <span className="rounded-full bg-[#25D366] px-3 py-1 text-xs font-semibold text-white">WhatsApp</span>
              </div>
            </a>

            <div className="rounded-[1.5rem] border border-line/80 bg-mist/55 px-4 py-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-ink">{copy.wechatLabel}</p>
                  <p className="mt-2 font-mono text-sm text-slate">{WECHAT_ID}</p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyWeChat}
                  className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink hover:border-ink"
                >
                  {wechatCopied ? copy.copiedLabel : copy.copyLabel}
                </button>
              </div>
            </div>

            <Link
              href={contactHref}
              className="button-secondary w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
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
        <span className="flex items-center gap-1.5">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-current">
              <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1.01C5.57.01.25 5.28.25 11.74c0 2.06.54 4.07 1.56 5.84L.09 23.99l6.57-1.68a11.97 11.97 0 0 0 5.44 1.3h.01c6.53 0 11.85-5.27 11.85-11.74 0-3.13-1.23-6.08-3.44-8.39Zm-8.42 18.15h-.01a9.95 9.95 0 0 1-5.07-1.39l-.36-.21-3.9 1 .99-3.8-.24-.39a9.8 9.8 0 0 1-1.52-5.12c0-5.37 4.45-9.75 9.92-9.75 2.65 0 5.14 1.02 7.01 2.88a9.65 9.65 0 0 1 2.91 6.88c0 5.38-4.45 9.76-9.73 9.76Zm5.35-7.33c-.29-.14-1.72-.84-1.99-.94-.27-.1-.46-.14-.66.14-.19.29-.75.94-.91 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.44-2.32-1.4-.86-.76-1.43-1.69-1.6-1.98-.17-.29-.02-.44.12-.58.12-.12.29-.31.43-.46.14-.14.19-.24.29-.41.1-.17.05-.31-.02-.46-.07-.14-.66-1.57-.9-2.15-.24-.57-.49-.49-.66-.5h-.56c-.19 0-.49.07-.74.34-.26.29-.98.95-.98 2.32s1 2.69 1.14 2.88c.15.19 1.95 3.08 4.83 4.19.68.29 1.22.46 1.63.58.68.22 1.3.19 1.79.12.54-.08 1.72-.7 1.97-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.19-.56-.34Z" />
            </svg>
          </span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#07C160] text-white shadow-sm">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-current">
              <path d="M9.18 5.1c-4 0-7.24 2.57-7.24 5.73 0 1.83 1.07 3.45 2.74 4.5l-.7 2.66 2.98-1.54c.7.15 1.45.24 2.22.24 4 0 7.24-2.56 7.24-5.72S13.18 5.1 9.18 5.1Zm-2.9 4.56a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Zm2.9 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Zm2.9 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Zm3.2 6.77c-.58 0-1.15-.07-1.68-.2l-2.24 1.16.52-1.96c-1.25-.79-2.06-1.97-2.06-3.3 0-.19.02-.38.06-.56.98 1.95 3.37 3.31 6.18 3.31.56 0 1.1-.05 1.62-.16-.45 1.65-2.27 2.9-4.4 2.9Zm1.77-6.3a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Zm2.38 0a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Z" />
            </svg>
          </span>
        </span>
        {copy.launcher}
      </button>
    </div>
  );
}
