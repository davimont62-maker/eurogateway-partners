type ContactFormLabels = {
  eyebrow: string;
  description: string;
  fullName: string;
  fullNamePlaceholder: string;
  company: string;
  companyPlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  service: string;
  servicePlaceholder: string;
  enquiry: string;
  enquiryPlaceholder: string;
  frontendNote: string;
  submit: string;
  options: string[];
};

const defaultLabels: ContactFormLabels = {
  eyebrow: "Enquiry form",
  description: "Tell us about your market priorities and the kind of European support model you are considering.",
  fullName: "Full name",
  fullNamePlaceholder: "Your name",
  company: "Company",
  companyPlaceholder: "Company name",
  email: "Email address",
  emailPlaceholder: "name@company.com",
  phone: "Phone number",
  phonePlaceholder: "+86 ... or +44 ...",
  service: "Service of interest",
  servicePlaceholder: "Select a service",
  enquiry: "Your enquiry",
  enquiryPlaceholder: "Tell us about your products, target market, and the support you are considering.",
  frontendNote: "This form is frontend-only in the current build.",
  submit: "Send enquiry",
  options: [
    "Exhibition Representation",
    "EU Commercial Representation",
    "EU Contact Point / Service Address",
    "Sales & Distribution Support",
    "Logistics & Operational Coordination",
    "Compliance & Documentation Support"
  ]
};

export function ContactForm({ labels = defaultLabels }: { labels?: ContactFormLabels }) {
  return (
    <form className="grid gap-6 rounded-[2rem] border border-white/60 bg-[linear-gradient(160deg,rgba(16,40,70,0.98),rgba(29,76,152,0.92))] p-8 text-white shadow-glow">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">{labels.eyebrow}</p>
        <p className="max-w-2xl text-base leading-7 text-white/75">
          {labels.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="text-sm font-medium text-white">
          {labels.fullName}
          <input
            type="text"
            name="name"
            className="mt-2 w-full rounded-2xl border border-white/16 bg-white/8 px-4 py-3 text-base text-white outline-none placeholder:text-white/45 focus:border-white/35"
            placeholder={labels.fullNamePlaceholder}
          />
        </label>
        <label className="text-sm font-medium text-white">
          {labels.company}
          <input
            type="text"
            name="company"
            className="mt-2 w-full rounded-2xl border border-white/16 bg-white/8 px-4 py-3 text-base text-white outline-none placeholder:text-white/45 focus:border-white/35"
            placeholder={labels.companyPlaceholder}
          />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="text-sm font-medium text-white">
          {labels.email}
          <input
            type="email"
            name="email"
            className="mt-2 w-full rounded-2xl border border-white/16 bg-white/8 px-4 py-3 text-base text-white outline-none placeholder:text-white/45 focus:border-white/35"
            placeholder={labels.emailPlaceholder}
          />
        </label>
        <label className="text-sm font-medium text-white">
          {labels.phone}
          <input
            type="tel"
            name="phone"
            className="mt-2 w-full rounded-2xl border border-white/16 bg-white/8 px-4 py-3 text-base text-white outline-none placeholder:text-white/45 focus:border-white/35"
            placeholder={labels.phonePlaceholder}
          />
        </label>
      </div>

      <label className="text-sm font-medium text-white">
        {labels.service}
        <select
          name="service"
          className="mt-2 w-full rounded-2xl border border-white/16 bg-white/8 px-4 py-3 text-base text-white outline-none focus:border-white/35"
          defaultValue=""
        >
          <option value="" disabled>
            {labels.servicePlaceholder}
          </option>
          {labels.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label className="text-sm font-medium text-white">
        {labels.enquiry}
        <textarea
          name="message"
          rows={6}
          className="mt-2 w-full rounded-2xl border border-white/16 bg-white/8 px-4 py-3 text-base text-white outline-none placeholder:text-white/45 focus:border-white/35"
          placeholder={labels.enquiryPlaceholder}
        />
      </label>

      <div className="rounded-3xl border border-white/10 bg-white/8 p-5 text-sm leading-7 text-white/68">
        {labels.frontendNote}
        {/* Future backend integration can be connected here via CRM, email automation, or form handling endpoint. */}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-goldSoft"
      >
        {labels.submit}
      </button>
    </form>
  );
}
