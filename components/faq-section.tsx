type FAQItem = {
  question: string;
  answer: string;
};

export function FAQSection({
  eyebrow = "FAQ",
  title,
  description,
  items
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FAQItem[];
}) {
  return (
    <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(236,242,249,0.5),rgba(255,255,255,0.98))]">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate">{description}</p>
            ) : null}
          </div>
          <div className="space-y-4">
            {items.map((item) => (
              <details
                key={item.question}
                className="group rounded-[2rem] border border-line/70 bg-white px-6 py-5 shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-xl font-semibold tracking-[-0.03em] text-ink marker:content-none">
                  <span>{item.question}</span>
                  <span className="mt-1 text-lg text-slate transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl pr-8 text-base leading-8 text-slate">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
