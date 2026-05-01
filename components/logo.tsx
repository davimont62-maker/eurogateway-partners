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
    <svg viewBox="0 0 120 120" aria-hidden="true" className="h-[58px] w-[58px] sm:h-[66px] sm:w-[66px]">
      <g>
        <path
          d="M34 43L58 19c8-8 19-12 30-12 11 0 22 4 30 12l1 1-17 17-1-1c-8-8-21-8-29 0L48 60c-8 8-8 21 0 29l1 1-17 17-1-1c-8-8-12-19-12-30s4-22 12-30l3-3z"
          fill={navy}
        />
        <path
          d="M86 77L62 101c-8 8-19 12-30 12s-22-4-30-12l-1-1 17-17 1 1c8 8 21 8 29 0l24-24c8-8 8-21 0-29l-1-1 17-17 1 1c8 8 12 19 12 30s-4 22-12 30l-3 3z"
          fill={gold}
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
