import Image from "next/image";
import Link from "next/link";
import { companyDetails } from "@/lib/site";

type LogoProps = {
  href?: string;
  dark?: boolean;
  className?: string;
};

export function Logo({ href = "/", dark = false, className = "" }: LogoProps) {
  const imageClass = dark ? "brightness-0 invert" : "";

  return (
    <Link href={href} className={`inline-flex items-center ${className}`}>
      <Image
        src="/eurolinq-logo.png"
        alt={`${companyDetails.name} logo`}
        width={420}
        height={120}
        className={`h-auto w-[240px] object-contain sm:w-[280px] ${imageClass}`}
        priority
      />
    </Link>
  );
}
