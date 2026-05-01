import Image from "next/image";
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
  const markWrapClass = dark
    ? "rounded-[1.2rem] border border-white/10 bg-white px-2 py-1.5 shadow-soft"
    : "rounded-[1.15rem] border border-line/70 bg-white px-2 py-1.5 shadow-soft";

  return (
    <Link href={href} className={`inline-flex items-center gap-1.5 sm:gap-2 ${className}`}>
      <span className={markWrapClass}>
        <Image
          src="/eurolinq-mark.png"
          alt=""
          aria-hidden="true"
          width={220}
          height={220}
          priority
          className={dark ? "h-auto w-[62px] sm:w-[68px]" : "h-auto w-[58px] sm:w-[64px]"}
        />
      </span>
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
