import Link from "next/link";
import { companyDetails } from "@/lib/site";

type LogoProps = {
  href?: string;
  dark?: boolean;
  className?: string;
};

function BrandMark({ dark = false }: { dark?: boolean }) {
  const stroke = dark ? "#ffffff" : "#1d4c98";
  const glow = dark ? "rgba(255,255,255,0.12)" : "rgba(29,76,152,0.12)";

  return (
    <span
      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
      style={{ background: glow }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" className="h-9 w-9">
        <path
          d="M25.5 22.5L18 30a8.5 8.5 0 0 0 12 12l7.5-7.5M38.5 41.5L46 34a8.5 8.5 0 1 0-12-12l-7.5 7.5M26 38l12-12"
          fill="none"
          stroke={stroke}
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Logo({ href = "/", dark = false, className = "" }: LogoProps) {
  const titleClass = dark ? "text-white" : "text-ink";
  const strapClass = dark ? "text-white/60" : "text-slate";

  return (
    <Link href={href} className={`inline-flex items-center gap-4 ${className}`}>
      <BrandMark dark={dark} />
      <span className="flex flex-col">
        <span className={`text-[1.9rem] font-semibold leading-none tracking-[-0.05em] ${titleClass}`}>
          EuroLinq
        </span>
        <span className={`mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] ${strapClass}`}>
          {companyDetails.tagline}
        </span>
      </span>
    </Link>
  );
}
