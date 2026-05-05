"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type ContactFormLabels = {
  eyebrow: string;
  description: string;
  fullName: string;
  fullNamePlaceholder: string;
  company: string;
  companyPlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  service: string;
  servicePlaceholder: string;
  enquiry: string;
  enquiryPlaceholder: string;
  frontendNote: string;
  submit: string;
  options: string[];
};

type ContactFormMessages = {
  sending: string;
  success: string;
  error: string;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove?: (widgetId?: string) => void;
    };
  }
}

const defaultLabels: ContactFormLabels = {
  eyebrow: "Enquiry form",
  description: "Tell us about your market priorities and the kind of European support model you are considering.",
  fullName: "Full name",
  fullNamePlaceholder: "Your name",
  company: "Company",
  companyPlaceholder: "Company name",
  email: "Email address",
  emailPlaceholder: "name@company.com",
  phone: "Phone number",
  phonePlaceholder: "+86 ... or +44 ...",
  service: "Service of interest",
  servicePlaceholder: "Select a service",
  enquiry: "Your enquiry",
  enquiryPlaceholder: "Tell us about your products, target market, and the support you are considering.",
  frontendNote: "Enquiries are sent securely to our team inbox once mail delivery is configured.",
  submit: "Send enquiry",
  options: [
    "Exhibition Representation",
    "EU Commercial Representation",
    "EU Contact Point / Service Address",
    "Sales & Distribution Support",
    "Logistics & Operational Coordination",
    "Compliance & Documentation Support"
  ]
};

const defaultMessages: ContactFormMessages = {
  sending: "Sending...",
  success: "Thank you. Your enquiry has been sent and we will respond as soon as possible.",
  error: "We could not send your enquiry just now. Please try again or email us directly."
};

export function ContactForm({
  labels = defaultLabels,
  messages = defaultMessages
}: {
  labels?: ContactFormLabels;
  messages?: ContactFormMessages;
}) {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileContainerRef.current) {
      return;
    }

    const siteKey = turnstileSiteKey;

    function renderWidget() {
      if (!window.turnstile || !turnstileContainerRef.current || turnstileWidgetIdRef.current) {
        return;
      }

      turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: siteKey,
        theme: "light",
        callback: (token) => {
          setTurnstileToken(token);
        },
        "expired-callback": () => {
          setTurnstileToken("");
        },
        "error-callback": () => {
          setTurnstileToken("");
        }
      });
    }

    if (window.turnstile) {
      renderWidget();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", renderWidget);
      return () => {
        existingScript.removeEventListener("load", renderWidget);
      };
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", renderWidget);
    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", renderWidget);
    };
  }, [turnstileSiteKey]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    if (turnstileSiteKey && !turnstileToken) {
      setStatus({
        type: "error",
        message: "Please complete the verification check before sending your enquiry."
      });
      return;
    }

    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          company: String(formData.get("company") ?? ""),
          email: String(formData.get("email") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          service: String(formData.get("service") ?? ""),
          message: String(formData.get("message") ?? ""),
          website: String(formData.get("website") ?? ""),
          turnstileToken
        })
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Unable to send enquiry");
      }

      form.reset();
      setTurnstileToken("");
      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetIdRef.current);
      }
      setStatus({
        type: "success",
        message: messages.success
      });
    } catch {
      setStatus({
        type: "error",
        message: messages.error
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-[2rem] border border-white/60 bg-[linear-gradient(160deg,rgba(16,40,70,0.98),rgba(29,76,152,0.92))] p-8 text-white shadow-glow"
    >
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">{labels.eyebrow}</p>
        <p className="max-w-2xl text-base leading-7 text-white/75">
          {labels.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="text-sm font-medium text-white">
          {labels.fullName}
          <input
            type="text"
            name="name"
            required
            className="mt-2 w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-base text-ink outline-none placeholder:text-slate/70 focus:border-gold focus:ring-2 focus:ring-gold/25"
            placeholder={labels.fullNamePlaceholder}
          />
        </label>
        <label className="text-sm font-medium text-white">
          {labels.company}
          <input
            type="text"
            name="company"
            className="mt-2 w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-base text-ink outline-none placeholder:text-slate/70 focus:border-gold focus:ring-2 focus:ring-gold/25"
            placeholder={labels.companyPlaceholder}
          />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="text-sm font-medium text-white">
          {labels.email}
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-base text-ink outline-none placeholder:text-slate/70 focus:border-gold focus:ring-2 focus:ring-gold/25"
            placeholder={labels.emailPlaceholder}
          />
        </label>
        <label className="text-sm font-medium text-white">
          {labels.phone}
          <input
            type="tel"
            name="phone"
            className="mt-2 w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-base text-ink outline-none placeholder:text-slate/70 focus:border-gold focus:ring-2 focus:ring-gold/25"
            placeholder={labels.phonePlaceholder}
          />
        </label>
      </div>

      <label className="text-sm font-medium text-white">
        {labels.service}
        <select
          name="service"
          required
          className="mt-2 w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-base text-ink outline-none focus:border-gold focus:ring-2 focus:ring-gold/25"
          defaultValue=""
        >
          <option value="" disabled>
            {labels.servicePlaceholder}
          </option>
          {labels.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label className="text-sm font-medium text-white">
        {labels.enquiry}
        <textarea
          name="message"
          rows={6}
          required
          className="mt-2 w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-base text-ink outline-none placeholder:text-slate/70 focus:border-gold focus:ring-2 focus:ring-gold/25"
          placeholder={labels.enquiryPlaceholder}
        />
      </label>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {turnstileSiteKey ? (
        <div className="space-y-3">
          <div ref={turnstileContainerRef} className="min-h-[65px]" />
          <p className="text-xs leading-6 text-white/65">
            This form is protected by Cloudflare Turnstile to reduce spam enquiries.
          </p>
        </div>
      ) : null}

      <div className="rounded-3xl border border-white/10 bg-white/8 p-5 text-sm leading-7 text-white/68">
        {labels.frontendNote}
      </div>

      {status ? (
        <div
          className={`rounded-3xl border p-4 text-sm leading-7 ${
            status.type === "success"
              ? "border-emerald-300/30 bg-emerald-400/10 text-emerald-100"
              : "border-rose-300/30 bg-rose-400/10 text-rose-100"
          }`}
        >
          {status.message}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-goldSoft"
      >
        {isSubmitting ? messages.sending : labels.submit}
      </button>
    </form>
  );
}
