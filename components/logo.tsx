import Link from "next/link";
import { companyDetails } from "@/lib/site";

type LogoProps = {
  href?: string;
  dark?: boolean;
  className?: string;
};

export function Logo({ href = "/", dark = false, className = "" }: LogoProps) {
  const titleClass = dark ? "text-white" : "text-ink";
  const strapClass = dark ? "text-white/62" : "text-slate";
  const navy = dark ? "#f7fafc" : "#1f2430";
  const gold = "#d4a24f";

  return (
    <Link href={href} className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <svg
        viewBox="0 0 120 120"
        aria-hidden="true"
        className="h-[64px] w-[64px] sm:h-[72px] sm:w-[72px]"
      >
        <rect
          x="16"
          y="34"
          width="54"
          height="30"
          rx="15"
          transform="rotate(-45 43 49)"
          fill="none"
          stroke={navy}
          strokeWidth="12"
        />
        <rect
          x="50"
          y="34"
          width="54"
          height="30"
          rx="15"
          transform="rotate(-45 77 49)"
          fill="none"
          stroke={gold}
          strokeWidth="12"
        />
        <path
          d="M49 70L62 57"
          stroke={navy}
          strokeWidth="13"
          strokeLinecap="round"
        />
        <path
          d="M58 52L71 39"
          stroke={gold}
          strokeWidth="13"
          strokeLinecap="round"
        />
      </svg>
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
