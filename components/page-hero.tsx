type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="overflow-hidden border-b border-line/60 bg-[linear-gradient(180deg,rgba(236,242,249,0.72),rgba(255,255,255,0.96)_55%,rgba(244,235,215,0.26))]">
      <div className="container-shell relative py-16 md:py-20">
        <div className="pointer-events-none absolute left-[-48px] top-10 h-40 w-40 rounded-full bg-accent/8 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-8 h-32 w-32 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">{description}</p>
        </div>
      </div>
    </section>
  );
}
