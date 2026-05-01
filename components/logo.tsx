import Link from "next/link";
import { companyDetails } from "@/lib/site";

type LogoProps = {
  href?: string;
  dark?: boolean;
  className?: string;
};

function BrandMark({ dark = false }: { dark?: boolean }) {
  const navy = dark ? "#f7fafc" : "#1f2430";
  const gold = "#d4a24f";
  const mid = dark ? "#dbe4ee" : "#415167";

  return (
    <svg viewBox="0 0 106 106" aria-hidden="true" className="h-[58px] w-[58px] sm:h-[66px] sm:w-[66px]">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M28 37c0-8.3 6.7-15 15-15h18"
          stroke={navy}
          strokeWidth="11"
        />
        <path
          d="M68 22h2c8.8 0 16 7.2 16 16v0c0 4.2-1.7 8.3-4.7 11.3L58 72.6c-3 3-7.1 4.7-11.3 4.7h0c-8.8 0-16-7.2-16-16v-2"
          stroke={navy}
          strokeWidth="11"
        />
        <path
          d="M78 69c0 8.3-6.7 15-15 15H45"
          stroke={gold}
          strokeWidth="11"
        />
        <path
          d="M38 84h-2c-8.8 0-16-7.2-16-16v0c0-4.2 1.7-8.3 4.7-11.3L48 33.4c3-3 7.1-4.7 11.3-4.7h0c8.8 0 16 7.2 16 16v2"
          stroke={gold}
          strokeWidth="11"
        />
        <path d="M41 65l24-24" stroke={mid} strokeWidth="8.5" />
      </g>
    </svg>
  );
}

export function Logo({ href = "/", dark = false, className = "" }: LogoProps) {
  const titleClass = dark ? "text-white" : "text-ink";
  const strapClass = dark ? "text-white/62" : "text-slate";

  return (
    <Link href={href} className={`inline-flex items-center gap-4 ${className}`}>
      <BrandMark dark={dark} />
      <span className="flex flex-col">
        <span className={`text-[2rem] font-semibold leading-none tracking-[-0.06em] sm:text-[2.3rem] ${titleClass}`}>
          EuroLinq
        </span>
        <span
          className={`mt-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.34em] sm:text-[0.64rem] ${strapClass}`}
        >
          {companyDetails.tagline}
        </span>
      </span>
    </Link>
  );
}
