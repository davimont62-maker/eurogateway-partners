export function ContactForm() {
  return (
    <form className="card-surface grid gap-5 p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Full name
          <input
            type="text"
            name="name"
            className="mt-2 w-full rounded-2xl border border-line px-4 py-3 text-base text-ink outline-none focus:border-accent"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Company
          <input
            type="text"
            name="company"
            className="mt-2 w-full rounded-2xl border border-line px-4 py-3 text-base text-ink outline-none focus:border-accent"
            placeholder="Company name"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Email address
          <input
            type="email"
            name="email"
            className="mt-2 w-full rounded-2xl border border-line px-4 py-3 text-base text-ink outline-none focus:border-accent"
            placeholder="name@company.com"
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Phone number
          <input
            type="tel"
            name="phone"
            className="mt-2 w-full rounded-2xl border border-line px-4 py-3 text-base text-ink outline-none focus:border-accent"
            placeholder="+86 ... or +44 ..."
          />
        </label>
      </div>

      <label className="text-sm font-medium text-ink">
        Service of interest
        <select
          name="service"
          className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink outline-none focus:border-accent"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          <option>Exhibition Representation</option>
          <option>EU Commercial Representation</option>
          <option>EU Contact Point / Service Address</option>
          <option>Sales & Distribution Support</option>
          <option>Logistics & Operational Coordination</option>
          <option>Compliance & Documentation Support</option>
        </select>
      </label>

      <label className="text-sm font-medium text-ink">
        Your enquiry
        <textarea
          name="message"
          rows={6}
          className="mt-2 w-full rounded-2xl border border-line px-4 py-3 text-base text-ink outline-none focus:border-accent"
          placeholder="Tell us about your products, your current stage of market entry, and the support you need."
        />
      </label>

      <div className="rounded-3xl bg-mist p-5 text-sm leading-7 text-slate">
        This form is frontend-only in the current build.
        {/* Future backend integration can be connected here via CRM, email automation, or form handling endpoint. */}
      </div>

      <button type="submit" className="button-primary w-full sm:w-auto">
        Send enquiry
      </button>
    </form>
  );
}
