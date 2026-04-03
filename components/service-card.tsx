import Link from "next/link";
import { ArrowRightIcon, ServiceIcon } from "@/components/icons";
import type { ServiceItem } from "@/lib/site";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="card-surface flex h-full flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(237,243,252,0.72))] p-7">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-[linear-gradient(135deg,rgba(237,243,252,1),rgba(244,235,215,0.88))] text-accent">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="text-2xl font-semibold tracking-tight text-ink">{service.title}</h3>
      <p className="mt-4 flex-1 text-base leading-7 text-slate">{service.excerpt}</p>
      <Link
        href={`/${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-ink"
      >
        Learn more
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </article>
  );
}
