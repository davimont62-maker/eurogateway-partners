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

  return (
    <svg viewBox="0 0 106 106" aria-hidden="true" className="h-[58px] w-[58px] sm:h-[66px] sm:w-[66px]">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M38 28L23 43c-9 9-9 24 0 33s24 9 33 0l12-12"
          stroke={navy}
          strokeWidth="14"
        />
        <path
          d="M68 78l15-15c9-9 9-24 0-33s-24-9-33 0L38 42"
          stroke={gold}
          strokeWidth="14"
        />
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
          className={`mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.28em] sm:text-[0.68rem] ${strapClass}`}
        >
          {companyDetails.tagline}
        </span>
      </span>
    </Link>
  );
}
