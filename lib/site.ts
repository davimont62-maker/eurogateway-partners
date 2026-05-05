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
  email: "enquiries@eurolinq-partners.com",
  registeredOffice: "42-50 Hersham Rd, Walton-on-Thames KT12 1RZ, United Kingdom",
  domain: "www.eurolinq-partners.com"
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
    href: "/market-entry-representation"
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

export const homeFaqs = [
  {
    question: "What does EuroLinq actually do for manufacturers entering Europe?",
    answer:
      "EuroLinq acts as a European market-access partner rather than a commission-led sales agent. We help manufacturers establish a credible local commercial presence, support distributor and buyer communication, coordinate exhibition follow-up, and assist with practical European-side execution."
  },
  {
    question: "Is EuroLinq suitable if we do not want to set up a full European office yet?",
    answer:
      "Yes. Many clients use EuroLinq when they need a European-facing contact point, representation support, and local coordination before committing to a larger permanent setup."
  },
  {
    question: "Can EuroLinq help after European trade fairs and exhibitions?",
    answer:
      "Yes. EuroLinq can support organiser liaison, exhibitor administration, post-event lead handling, buyer follow-up, and the communication continuity that is often missing after a trade fair."
  },
  {
    question: "Do you support Chinese manufacturers entering Europe?",
    answer:
      "Yes. EuroLinq is particularly relevant for Chinese manufacturers and exporters that need a trusted European extension for market entry, distributor communication, and operational coordination."
  }
];

export const homeSeoFaqs = [
  {
    question: "Can EuroLinq help us enter Europe without opening a full European office first?",
    answer:
      "Yes. Many manufacturers use EuroLinq when they need a European-facing commercial presence, local contact handling, and buyer or distributor follow-up before committing to a full in-market setup."
  },
  {
    question: "Do you only provide advice, or do you also handle practical work in Europe?",
    answer:
      "EuroLinq supports practical European-side work as well as strategy. That can include exhibition follow-up, distributor communication, lead handling, first-response continuity, local contact-point support, and coordination with logistics or documentation partners."
  },
  {
    question: "Is EuroLinq relevant for Chinese manufacturers developing Europe?",
    answer:
      "Yes. EuroLinq is especially relevant for Chinese manufacturers and exporters that need a trusted European extension to support market entry, distributor communication, buyer follow-up, and practical local execution."
  },
  {
    question: "What outcomes does EuroLinq help clients achieve in Europe?",
    answer:
      "The goal is to help clients build a more credible European presence, respond more professionally to counterparties, keep opportunities moving after exhibitions or introductions, and coordinate the local work that often determines whether market entry actually progresses."
  }
];

export const servicesFaqs = [
  {
    question: "How should we choose between the different EuroLinq services?",
    answer:
      "The right mix depends on your target market, route to market, and internal resources. Some businesses start with exhibition representation and buyer follow-up, while others need a broader European commercial interface or ongoing operational coordination."
  },
  {
    question: "Can the services be combined as part of one market-entry model?",
    answer:
      "Yes. The services are designed to work together. EuroLinq can combine representation, distributor communication, logistics coordination, and documentation support into one practical European support model."
  },
  {
    question: "Are the services only for early-stage market entry?",
    answer:
      "No. Some clients use EuroLinq at the testing stage, while others use the support model to strengthen ongoing European communication, channel development, and operational follow-through."
  }
];

export const servicesSeoFaqs = [
  {
    question: "Which EuroLinq service is most useful at the start of European market entry?",
    answer:
      "That depends on the route to market. Some businesses begin with exhibition representation and follow-up, while others need European commercial representation or a local contact point first. The right starting point depends on your buyers, distributors, and internal capacity."
  },
  {
    question: "Can EuroLinq combine representation, distributor communication, and operational coordination?",
    answer:
      "Yes. EuroLinq is designed to combine market-entry representation, distributor and buyer communication, and practical operational follow-through where clients need one joined-up European support model."
  },
  {
    question: "Do your services include day-to-day European-side execution?",
    answer:
      "Yes. Depending on scope, EuroLinq can support enquiry handling, distributor follow-up, exhibition continuity, service-address coordination, and documentation-related communication with relevant counterparties."
  }
];

export const contactFaqs = [
  {
    question: "What should we prepare before contacting EuroLinq?",
    answer:
      "It is helpful to know your product category, target European countries, preferred route to market, and whether you mainly need representation, distributor communication, exhibition follow-up, or operational coordination."
  },
  {
    question: "Can we speak even if our European plan is still at an early stage?",
    answer:
      "Yes. Many discussions start before a company has fixed its final market-entry structure. EuroLinq can help define a staged support model that fits the current level of readiness."
  },
  {
    question: "Do you only work with large companies?",
    answer:
      "No. EuroLinq can support both established manufacturers and smaller exporters that need a practical European extension without building a full local team from day one."
  }
];

export const contactSeoFaqs = [
  {
    question: "What information should we send when contacting EuroLinq?",
    answer:
      "It is useful to share your product category, priority European countries, target customers or distributors, and whether you need representation, exhibition follow-up, buyer communication, or operational coordination."
  },
  {
    question: "Can we contact EuroLinq before we have finalised our European plan?",
    answer:
      "Yes. Many companies start the conversation before they have fixed their exact market-entry model. EuroLinq can help define a staged support approach that fits the current level of readiness and investment."
  },
  {
    question: "Can EuroLinq act as a European point of contact for our business?",
    answer:
      "Yes. Where appropriate, EuroLinq can help provide a more credible European-facing communication layer through local email, contact-point handling, and structured follow-up support."
  }
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
