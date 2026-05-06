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
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/14 text-lg">
          💬
        </span>
        {copy.launcher}
      </button>
    </div>
  );
}
