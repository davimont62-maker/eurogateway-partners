export type ServiceItem = {
  slug: string;
  title: string;
  shortTitle?: string;
  excerpt: string;
  intro: string;
  included: string[];
  forWho: string[];
  howItWorks: string[];
  ctaTitle: string;
};

export type ServicePillar = {
  title: string;
  description: string;
  bullets: string[];
  href: string;
};

export const companyDetails = {
  name: "EuroLinq",
  tagline: "Your European Market Access Partner",
  description:
    "UK-based market access advisory and representation support for non-EU manufacturers developing business in Europe.",
  email: "enquiries@eurolinq-solutions.com",
  phone: "+44 (0)20 7123 4567",
  companyNumber: "Company No. 14876543",
  registeredOffice: "42-50 Hersham Rd, Walton-on-Thames KT12 1RZ, United Kingdom",
  domain: "www.eurolinq-solutions.com"
};

export const mainNavigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export const credibilityStrip = [
  "UK-based representation",
  "European commercial interface",
  "Scalable support model"
];

export const servicePillars: ServicePillar[] = [
  {
    title: "Market Entry & Representation",
    description:
      "Support for manufacturers that need a credible first European presence before or alongside direct market development.",
    bullets: [
      "Exhibition support and organiser liaison",
      "EU commercial representation",
      "EU contact point and service address"
    ],
    href: "/services"
  },
  {
    title: "Sales & Distribution Support",
    description:
      "Structured support around distributor communication, lead handling, and practical market coordination.",
    bullets: [
      "Distributor communication support",
      "Lead handling and first-response support",
      "Sales and market-entry coordination"
    ],
    href: "/sales-distribution-support"
  },
  {
    title: "Operations, Compliance & Coordination",
    description:
      "A practical European extension for operational follow-through, documentation organisation, and partner coordination.",
    bullets: [
      "Logistics and warehouse coordination",
      "Service address and returns support",
      "Documentation and compliance coordination"
    ],
    href: "/logistics-operational-coordination"
  }
];

export const services: ServiceItem[] = [
  {
    slug: "exhibition-representation",
    title: "Exhibition Representation",
    excerpt:
      "Professional support around European exhibitions, organiser liaison, exhibitor administration, and follow-up coordination.",
    intro:
      "For many non-EU manufacturers, exhibitions are the first visible step into Europe. EuroLinq helps ensure that this step is handled in a credible and structured way, with local coordination before, during, and after the event.",
    included: [
      "Exhibition booking support and organiser liaison",
      "Coordination of exhibitor administration and practical requirements",
      "European-facing communication with organisers and relevant contacts",
      "Lead handling and post-event follow-up support"
    ],
    forWho: [
      "Manufacturers exhibiting in Europe for the first time",
      "Businesses that need local follow-up after a trade fair",
      "Companies seeking a more professional European-facing presence around events"
    ],
    howItWorks: [
      "We review the exhibition objective, commercial context, and expected follow-up process",
      "We define the level of local representation and communication support required",
      "We support coordination before the event and help maintain structure afterwards"
    ],
    ctaTitle: "Discuss exhibition support in Europe"
  },
  {
    slug: "eu-commercial-representation",
    title: "EU Commercial Representation",
    excerpt:
      "A practical European commercial interface for counterparties that expect local credibility, continuity, and structured communication.",
    intro:
      "European buyers and commercial partners often look for a recognisable regional presence before moving into serious discussion. EuroLinq acts as a local extension of the client company, helping create that presence in a way aligned with the client's goals and level of investment.",
    included: [
      "European-facing commercial representation where appropriate",
      "Structured communication with distributors, retailers, and counterparties",
      "Support for enquiry handling and first-response continuity",
      "A more established European-facing commercial presentation"
    ],
    forWho: [
      "Manufacturers entering Europe without a full local setup",
      "Companies needing a credible regional commercial interface",
      "Businesses wanting a staged market-entry model rather than immediate full establishment"
    ],
    howItWorks: [
      "We assess the client's target channels, countries, and commercial expectations",
      "We define the appropriate representation model and communication role",
      "We support local interaction in a way that complements the client's own team"
    ],
    ctaTitle: "Discuss commercial representation in Europe"
  },
  {
    slug: "eu-contact-point",
    title: "EU Contact Point / Service Address",
    shortTitle: "EU Contact Point",
    excerpt:
      "A dependable European point of contact for communication, front-office support, and service address requirements.",
    intro:
      "A local contact layer can materially improve confidence and responsiveness. EuroLinq provides a European-facing interface for enquiries, routine communication, and service address support where appropriate.",
    included: [
      "European phone and email contact point",
      "Front-office handling for relevant inbound communication",
      "Service address support where suitable",
      "Clear routing and escalation back to the client team"
    ],
    forWho: [
      "Manufacturers needing a European-facing communication presence",
      "Businesses that require a more accessible first contact in Europe",
      "Companies not ready for a full legal or operational setup"
    ],
    howItWorks: [
      "We define the communication scope and expected handling process",
      "We establish the relevant front-office and service-address arrangements",
      "We maintain a clear bridge between local communications and the client team"
    ],
    ctaTitle: "Discuss EU contact point support"
  },
  {
    slug: "sales-distribution-support",
    title: "Sales & Distribution Support",
    excerpt:
      "Practical support for distributor communication, lead progression, and the day-to-day coordination that helps market entry move forward.",
    intro:
      "European market development depends not only on introductions, but on disciplined follow-up, responsive communication, and continuity across multiple parties. EuroLinq supports this process without positioning itself as a commission-led sales intermediary.",
    included: [
      "Distributor and retailer communication support",
      "Lead handling and first-response support",
      "Structured follow-up around developing opportunities",
      "Coordination between local activity and the client's own team"
    ],
    forWho: [
      "Manufacturers testing the European market",
      "Businesses needing structured local communication support",
      "Companies seeking continuity without building a full local commercial team"
    ],
    howItWorks: [
      "We understand the target market, route to market, and internal client resources",
      "We define the communication and support model around leads and counterparties",
      "We maintain local continuity while keeping the client aligned and informed"
    ],
    ctaTitle: "Discuss sales and distribution support"
  },
  {
    slug: "logistics-operational-coordination",
    title: "Logistics & Operational Coordination",
    excerpt:
      "Support for practical European-side coordination with warehouses, logistics providers, service partners, and operational contacts.",
    intro:
      "A credible European market presence depends on operational reliability as much as commercial visibility. EuroLinq helps coordinate the practical work that sits between overseas teams and local European delivery requirements.",
    included: [
      "Coordination with warehouses and third-party logistics providers",
      "Support around service address and returns arrangements",
      "Operational communication with local partners where appropriate",
      "Continuity across practical implementation workstreams"
    ],
    forWho: [
      "Manufacturers building a staged European operating model",
      "Businesses needing support around local coordination rather than full operations outsourcing",
      "Companies that require a trusted local intermediary role"
    ],
    howItWorks: [
      "We review the operational requirements linked to the client's market-entry model",
      "We define where local coordination adds value and reduces friction",
      "We support communication and continuity across relevant operational partners"
    ],
    ctaTitle: "Discuss logistics and operational coordination"
  },
  {
    slug: "compliance-documentation-support",
    title: "Compliance & Documentation Support",
    excerpt:
      "Coordination support around European-facing documentation, compliance organisation, and structured communication with specialist advisers.",
    intro:
      "European market entry often involves a wide set of documentation and coordination requirements. EuroLinq helps organise this workstream so commercial progress is supported by clearer structure and practical continuity.",
    included: [
      "Documentation and compliance coordination",
      "Support around European-facing paperwork and presentation",
      "Liaison with specialist advisers where required",
      "Practical organisation of documentation-related workflows"
    ],
    forWho: [
      "Manufacturers preparing for European buyer and partner engagement",
      "Companies needing better coordination rather than standalone technical advice",
      "Businesses that want a more organised market-entry process"
    ],
    howItWorks: [
      "We identify the documentation and coordination requirements around the market-entry plan",
      "We support local organisation and communication across involved parties",
      "We help maintain continuity between documentation work and commercial progress"
    ],
    ctaTitle: "Discuss compliance and documentation support"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Understand your target market and goals",
    text: "We begin with the client's commercial objectives, target countries, route-to-market priorities, and intended level of investment."
  },
  {
    step: "02",
    title: "Define the right European support model",
    text: "We shape a practical support structure around representation, communication, coordination, and operational needs."
  },
  {
    step: "03",
    title: "Establish local presence and communication",
    text: "We create a more credible European-facing interface for relevant counterparties, buyers, organisers, and partners."
  },
  {
    step: "04",
    title: "Support ongoing commercial and operational activity",
    text: "We remain involved where needed to help maintain continuity, follow-up, and practical market-entry progression."
  }
];

export const trustNarrative = {
  title: "Europe requires more than a sales conversation.",
  paragraphs: [
    "For many manufacturers, European market entry is not only about finding buyers. It requires a structured local presence, a credible commercial interface, and practical coordination across multiple parties and workstreams.",
    "EuroLinq acts as a gateway, a communication interface, and a commercial bridge. We help clients establish an appropriate European presence without forcing a one-size-fits-all setup.",
    "Our role is designed to align with the client's own investment approach, market priorities, and pace of development."
  ],
  points: [
    "Local European presence",
    "Practical support",
    "Scalable involvement",
    "Aligned with client investment"
  ]
};

export const whoWeHelp = [
  "Non-EU manufacturers entering Europe",
  "Companies testing the market before larger investment",
  "Exhibitors needing structured follow-up support",
  "Businesses needing EU presence without full setup"
];

export const aboutPoints = [
  "A European extension of the client company",
  "Not a commission-based sales intermediary",
  "A support model shaped by target markets and investment approach",
  "A practical bridge between overseas manufacturers and Europe"
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
