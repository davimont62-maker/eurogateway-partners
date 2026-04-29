export function ContactForm() {
  return (
    <form className="grid gap-6 rounded-[2rem] border border-white/60 bg-[linear-gradient(160deg,rgba(16,40,70,0.98),rgba(29,76,152,0.92))] p-8 text-white shadow-glow">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Enquiry form</p>
        <p className="max-w-2xl text-base leading-7 text-white/75">
          Tell us about your market priorities and the kind of European support model you are
          considering.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="text-sm font-medium text-white">
          Full name
          <input
            type="text"
            name="name"
            className="mt-2 w-full rounded-2xl border border-white/16 bg-white/8 px-4 py-3 text-base text-white outline-none placeholder:text-white/45 focus:border-white/35"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm font-medium text-white">
          Company
          <input
            type="text"
            name="company"
            className="mt-2 w-full rounded-2xl border border-white/16 bg-white/8 px-4 py-3 text-base text-white outline-none placeholder:text-white/45 focus:border-white/35"
            placeholder="Company name"
          />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="text-sm font-medium text-white">
          Email address
          <input
            type="email"
            name="email"
            className="mt-2 w-full rounded-2xl border border-white/16 bg-white/8 px-4 py-3 text-base text-white outline-none placeholder:text-white/45 focus:border-white/35"
            placeholder="name@company.com"
          />
        </label>
        <label className="text-sm font-medium text-white">
          Phone number
          <input
            type="tel"
            name="phone"
            className="mt-2 w-full rounded-2xl border border-white/16 bg-white/8 px-4 py-3 text-base text-white outline-none placeholder:text-white/45 focus:border-white/35"
            placeholder="+86 ... or +44 ..."
          />
        </label>
      </div>

      <label className="text-sm font-medium text-white">
        Service of interest
        <select
          name="service"
          className="mt-2 w-full rounded-2xl border border-white/16 bg-white/8 px-4 py-3 text-base text-white outline-none focus:border-white/35"
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

      <label className="text-sm font-medium text-white">
        Your enquiry
        <textarea
          name="message"
          rows={6}
          className="mt-2 w-full rounded-2xl border border-white/16 bg-white/8 px-4 py-3 text-base text-white outline-none placeholder:text-white/45 focus:border-white/35"
          placeholder="Tell us about your products, target market, and the support you are considering."
        />
      </label>

      <div className="rounded-3xl border border-white/10 bg-white/8 p-5 text-sm leading-7 text-white/68">
        This form is frontend-only in the current build.
        {/* Future backend integration can be connected here via CRM, email automation, or form handling endpoint. */}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-goldSoft"
      >
        Send enquiry
      </button>
    </form>
  );
}
