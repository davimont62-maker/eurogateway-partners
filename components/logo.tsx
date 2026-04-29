import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href?: string;
  dark?: boolean;
  className?: string;
};

export function Logo({ href = "/", dark = false, className = "" }: LogoProps) {
  const wrapperClass = dark
    ? "rounded-[1.75rem] border border-white/10 bg-white px-4 py-3 shadow-soft"
    : "rounded-[1.4rem] border border-line/70 bg-white/98 px-3 py-2 shadow-soft";

  return (
    <Link href={href} className={`inline-flex items-center ${className}`}>
      <span className={wrapperClass}>
        <Image
          src="/eurolinq-logo.png"
          alt="EuroLinq"
          width={780}
          height={250}
          priority
          className={dark ? "h-auto w-[260px]" : "h-auto w-[228px] sm:w-[268px]"}
        />
      </span>
    </Link>
  );
}
