type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-slate">{description}</p> : null}
    </div>
  );
}
