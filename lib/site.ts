export type ServiceItem = {
  slug: string;
  title: string;
  shortTitle?: string;
  excerpt: string;
  intro: string;
  bullets: string[];
  outcomes: string[];
  icon: "events" | "representation" | "contact" | "sales" | "logistics" | "compliance";
};

export const companyDetails = {
  name: "EuroLinq",
  tagline: "Your European Market Access Partner",
  description:
    "Helping global manufacturers establish a trusted commercial presence in Europe.",
  email: "enquiries@eurolinq-solutions.com",
  phone: "+44 (0)20 7123 4567",
  companyNumber: "Company No. 14876543",
  registeredOffice: "125 Kingsway, London WC2B 6NH, United Kingdom",
  domain: "www.eurolinq-solutions.com"
};

export const mainNavigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export const services: ServiceItem[] = [
  {
    slug: "exhibition-representation",
    title: "Exhibition Representation",
    excerpt:
      "Support for trade fairs, organiser liaison, exhibitor administration, and a credible on-the-ground European presence.",
    intro:
      "For many overseas manufacturers, exhibitions are the first serious commercial step into Europe. We help ensure that opportunity is handled professionally, from booking discussions through to exhibitor coordination and lead follow-up.",
    bullets: [
      "Exhibition booking support and organiser liaison",
      "Review of exhibitor terms, practical requirements, and local coordination",
      "Representation support before, during, and after events",
      "Lead handling, first-response support, and post-event follow-up planning",
      "European-facing communication with visitors, buyers, and organisers"
    ],
    outcomes: [
      "A more credible first market impression",
      "Reduced friction when dealing with exhibition organisers",
      "Better conversion of event interest into structured follow-up"
    ],
    icon: "events"
  },
  {
    slug: "eu-commercial-representation",
    title: "EU Commercial Representation",
    excerpt:
      "A professional European commercial front office to help build trust with distributors, retailers, and counterparties.",
    intro:
      "European buyers often expect a recognisable regional presence before entering serious discussions. We provide practical commercial representation that helps overseas manufacturers establish credibility while they build their longer-term structure.",
    bullets: [
      "Acting as a UK or EU contracting entity where appropriate and agreed",
      "Commercial contact support for distributors, retailers, and procurement teams",
      "Assistance with enquiry handling and initial qualification",
      "European-facing presentation across email, documents, and customer communication",
      "Coordination between head office and European opportunities"
    ],
    outcomes: [
      "Improved trust in early-stage commercial discussions",
      "Clearer communication between overseas teams and European buyers",
      "A stronger foundation for structured market entry"
    ],
    icon: "representation"
  },
  {
    slug: "eu-contact-point",
    title: "EU Contact Point / Service Address",
    shortTitle: "EU Contact Point",
    excerpt:
      "A dependable European phone, email, and service address presence for day-to-day communications and practical support.",
    intro:
      "A local point of contact can materially improve responsiveness and confidence, especially during the early stages of European market establishment. We provide a front office layer that helps businesses appear accessible and organised.",
    bullets: [
      "Dedicated European phone and email contact point",
      "Front office handling for incoming enquiries and routine correspondence",
      "Service address support where appropriate",
      "Returns and service address coordination",
      "Clear escalation paths back to the manufacturer"
    ],
    outcomes: [
      "A more local and responsive customer experience",
      "Better handling of routine inbound communications",
      "Reduced strain on overseas teams operating across time zones"
    ],
    icon: "contact"
  },
  {
    slug: "sales-distribution-support",
    title: "Sales & Distribution Support",
    excerpt:
      "Practical assistance with distributor conversations, lead progression, and market-entry coordination across Europe.",
    intro:
      "Successful entry into Europe usually depends on disciplined follow-up, structured partner engagement, and consistent communication. We support the commercial process so opportunities are not lost through delay or cultural mismatch.",
    bullets: [
      "Distributor and retailer communication support",
      "Lead handling and first-response support",
      "Sales support for inbound opportunities and ongoing follow-up",
      "Market-entry coordination between commercial, operational, and documentation workstreams",
      "Localisation of website and sales presentation materials"
    ],
    outcomes: [
      "More consistent progression of new opportunities",
      "Better coordination between commercial and delivery teams",
      "A more market-ready presentation for European audiences"
    ],
    icon: "sales"
  },
  {
    slug: "logistics-operational-coordination",
    title: "Logistics & Operational Coordination",
    excerpt:
      "Cross-border coordination with warehouses, service partners, and 3PL providers to support smooth European operations.",
    intro:
      "Commercial success depends on operational follow-through. We help manufacturers coordinate practical delivery requirements so that European customers experience reliability, clarity, and continuity.",
    bullets: [
      "Coordination with warehouses and third-party logistics providers",
      "Support around shipment readiness and fulfilment communication",
      "Returns routing and service address coordination",
      "Operational liaison between European partners and overseas teams",
      "Practical support for launch and scaling phases"
    ],
    outcomes: [
      "Fewer delays caused by fragmented communication",
      "Clearer ownership across logistics and customer-facing teams",
      "A more dependable operating model for European customers"
    ],
    icon: "logistics"
  },
  {
    slug: "compliance-documentation-support",
    title: "Compliance & Documentation Support",
    excerpt:
      "Coordination support for market documentation, commercial paperwork, and European-facing compliance administration.",
    intro:
      "Manufacturers entering Europe often need better coordination around documentation, presentation, and local expectations. We help organise this workstream so that commercial activity is supported by the right documentation processes.",
    bullets: [
      "Documentation and compliance coordination",
      "Support preparing European-facing commercial and operational paperwork",
      "Liaison with specialist advisers where technical input is required",
      "Website localisation and European-facing presentation support",
      "Practical organisation of ongoing documentation flows"
    ],
    outcomes: [
      "More confidence when engaging buyers and partners",
      "Better internal organisation around required documentation",
      "Smoother collaboration with legal, compliance, and operational advisers"
    ],
    icon: "compliance"
  }
];

export const whoWeHelp = [
  "Chinese manufacturers seeking a credible route into European markets",
  "Non-EU product companies that need a practical commercial foothold before establishing a larger local entity",
  "Businesses exhibiting in Europe for the first time and needing professional coordination support",
  "Manufacturers that require a European contact layer for buyers, distributors, and service communications"
];

export const whyWorkWithUs = [
  {
    title: "Commercially grounded",
    description:
      "We focus on the practical work that helps market entry progress, not abstract advisory alone."
  },
  {
    title: "European-facing credibility",
    description:
      "We help overseas manufacturers present themselves in a way that feels established, responsive, and trustworthy to European counterparties."
  },
  {
    title: "Cross-border coordination",
    description:
      "We bridge communication between head office, commercial contacts, service partners, and operational providers."
  }
];

export const trustPoints = [
  "Professional UK-based company presence",
  "Structured communication with European buyers and organisers",
  "Practical support across commercial, operational, and administrative workstreams",
  "Designed for manufacturers that need execution support as well as strategic guidance"
];

export const faqs = [
  {
    question: "Do you replace a local subsidiary or full European team?",
    answer:
      "No. Our role is to help overseas manufacturers establish a practical and credible European-facing presence while they assess the scale and timing of their longer-term investment."
  },
  {
    question: "Do you work only with Chinese companies?",
    answer:
      "No. We support non-EU manufacturers more broadly, but we are particularly well suited to Chinese manufacturers seeking a structured route into the UK and wider European market."
  },
  {
    question: "Can you help with trade fairs and exhibitor communication?",
    answer:
      "Yes. Exhibition representation and organiser liaison are a core part of our offer, particularly where a manufacturer needs responsive local support before and after an event."
  },
  {
    question: "Do you provide legal or regulated compliance advice?",
    answer:
      "We provide coordination support rather than specialist legal or regulated advice. Where technical or legal expertise is required, we help organise the work with the appropriate professional advisers."
  }
];

export const homeStats = [
  { value: "UK-based", label: "presence designed for credible European-facing coordination" },
  { value: "6 service pillars", label: "covering representation, sales support, and operations" },
  { value: "Cross-border", label: "execution support between Europe and overseas head offices" }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
