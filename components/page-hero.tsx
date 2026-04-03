type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-mist/70">
      <div className="container-shell py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">{description}</p>
      </div>
    </section>
  );
}
