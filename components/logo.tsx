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
          d="M40 27L23 44c-10 10-10 27 0 37s27 10 37 0l11-11"
          stroke={navy}
          strokeWidth="13"
        />
        <path
          d="M66 79l17-17c10-10 10-27 0-37s-27-10-37 0L35 36"
          stroke={gold}
          strokeWidth="13"
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
