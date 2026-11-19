export const industries = [
  {
    slug: "real-estate-developers",
    title: "Real estate developers",
    label: "Property & real estate",
    need: "Help buyers understand a development before they request a visit.",
    journey:
      "A buyer compares location, unit types, floor plans and project details, then asks about a suitable unit or site visit.",
    features: [
      "Development overview and unit information",
      "Approved floor plans and project gallery",
      "Site visit enquiry with project context",
      "Enquiry assignment and follow-up pipeline",
    ],
    inputs:
      "Approved project information, available units, location details, floor plans and the disclosures your business needs to publish.",
    services: ["websites", "paid-advertising", "crm"],
  },
  {
    slug: "real-estate-agents",
    title: "Real estate agents & brokers",
    label: "Agents & brokers",
    need: "Turn property interest into a clear conversation with the right agent.",
    journey:
      "A visitor narrows listings by location and property type, reviews details and sends an enquiry about a specific property.",
    features: [
      "Searchable property catalogue",
      "Listing details and viewing requests",
      "Agent contact and service area information",
      "Lead ownership and follow-up reminders",
    ],
    inputs:
      "Current listings, permission to use property photos, service areas and rules for keeping availability accurate.",
    services: ["websites", "whatsapp-ai-agents", "crm"],
  },
  {
    slug: "law-firms",
    title: "Lawyers & law firms",
    label: "Law & professional services",
    need: "Present your practice clearly and make consultation enquiries straightforward.",
    journey:
      "A potential client finds a relevant practice area, reviews professional profiles and requests an initial conversation.",
    features: [
      "Practice area pages in plain English",
      "Approved professional profiles",
      "Consultation request with minimal personal information",
      "Clear contact and office information",
    ],
    inputs:
      "Approved practice descriptions, professional details and your requirements for confidentiality and published content.",
    services: ["websites", "seo", "ai-automation"],
  },
  {
    slug: "clinics",
    title: "Doctors, clinics & diagnostic centres",
    label: "Healthcare & clinics",
    need: "Help patients find the right service and request an appointment.",
    journey:
      "A visitor checks clinic services, doctor information and opening hours, then requests a suitable appointment time.",
    features: [
      "Doctor profiles and service information",
      "Location, hours and contact details",
      "Appointment requests with clear confirmation expectations",
      "Staff notifications for new requests",
    ],
    inputs:
      "Approved clinician details, clinic hours, services and appointment rules. A general enquiry form should not request medical histories.",
    services: ["ai-voice-agents", "whatsapp-ai-agents", "websites"],
  },
  {
    slug: "dentists",
    title: "Dentists",
    label: "Dental practices",
    need: "Explain available dental services and reduce uncertainty before a first visit.",
    journey:
      "A prospective patient reads about a service, learns what to expect and asks the practice about an appointment.",
    features: [
      "Treatment information approved by the practice",
      "Dentist profiles and clinic gallery",
      "First-visit information",
      "Appointment request routing",
    ],
    inputs:
      "Accurate service descriptions, professional profiles, approved images and booking procedures.",
    services: ["websites", "seo", "ai-automation"],
  },
  {
    slug: "restaurants",
    title: "Restaurants & cafés",
    label: "Restaurants & cafés",
    need: "Make the menu, atmosphere and visit details easy to find.",
    journey:
      "A diner checks the menu, opening hours and location, then makes a reservation enquiry or contacts the restaurant.",
    features: [
      "Mobile-friendly menu with clear categories",
      "Food and venue photography",
      "Location and opening hours",
      "Reservation enquiries with staff confirmation",
    ],
    inputs:
      "Current menu, dietary information you can verify, opening hours, venue photos and reservation policies.",
    services: ["websites", "social-media", "seo"],
  },
  {
    slug: "hotels",
    title: "Hotels & guest houses",
    label: "Hotels & stays",
    need: "Help guests understand the stay and ask about availability.",
    journey:
      "A traveller compares rooms, amenities and local information before sending dates and guest numbers for an availability enquiry.",
    features: [
      "Room and amenity information",
      "Property and local area gallery",
      "Date-based availability enquiries",
      "Booking-platform links or agreed integrations",
    ],
    inputs:
      "Room details, approved photographs, booking policies and the system used to manage availability.",
    services: ["websites", "seo", "ai-automation"],
  },
  {
    slug: "interior-designers",
    title: "Interior designers & architects",
    label: "Design & architecture",
    need: "Let relevant projects explain your approach before a consultation.",
    journey:
      "A visitor explores project types, reads about the design process and starts a conversation about a space.",
    features: [
      "Project gallery organised by space or style",
      "Project scope and design context",
      "Services and process information",
      "Consultation brief and enquiry routing",
    ],
    inputs:
      "Permission to publish project photography, confirmed project contributions and an outline of your process.",
    services: ["websites", "social-media", "crm"],
  },
  {
    slug: "salons",
    title: "Salons & spas",
    label: "Salons & spas",
    need: "Make services and appointment options easy to understand.",
    journey:
      "A visitor browses services, checks the location and asks about a suitable appointment.",
    features: [
      "Service menu and approved prices",
      "Team and space gallery",
      "Booking links or appointment requests",
      "Local business information",
    ],
    inputs:
      "Your service list, current prices, opening hours and booking or cancellation arrangements.",
    services: ["websites", "seo", "social-media"],
  },
  {
    slug: "fitness",
    title: "Gyms & fitness studios",
    label: "Fitness & wellbeing",
    need: "Help prospective members find a class or programme that suits them.",
    journey:
      "A visitor checks class types, schedules and membership information, then requests a trial or introduction.",
    features: [
      "Class schedule and programme details",
      "Trainer profiles",
      "Membership information",
      "Trial enquiries and follow-up tasks",
    ],
    inputs:
      "Timetables, approved programme descriptions, trainer details and membership terms.",
    services: ["websites", "paid-advertising", "crm"],
  },
  {
    slug: "home-services",
    title: "Home services & contractors",
    label: "Home services",
    need: "Connect a local service need with a useful quotation request.",
    journey:
      "A customer checks service coverage and relevant work, then shares the job type and area for a quotation.",
    features: [
      "Services and coverage areas",
      "Approved work photographs",
      "Structured quotation requests",
      "Job assignment and status tracking",
    ],
    inputs:
      "Service coverage, work categories, confirmed project examples and the information needed to estimate a job.",
    services: ["websites", "seo", "custom-software"],
  },
  {
    slug: "consultants",
    title: "Accountants & consultants",
    label: "Accounting & consulting",
    need: "Explain specialist services without making the first conversation complicated.",
    journey:
      "A business owner identifies a relevant service, reviews your approach and requests an introductory conversation.",
    features: [
      "Audience-specific service descriptions",
      "Approved expertise and profiles",
      "Useful resources and FAQs",
      "Enquiry capture and follow-up pipeline",
    ],
    inputs:
      "Service scope, verifiable qualifications and an outline of the information needed for an initial discussion.",
    services: ["websites", "ai-search", "crm"],
  },
  {
    slug: "education",
    title: "Education & coaching centres",
    label: "Education & coaching",
    need: "Help learners and families compare programmes and enquire with confidence.",
    journey:
      "A visitor checks courses, eligibility and schedules, then requests course information or an admissions conversation.",
    features: [
      "Course catalogue and schedules",
      "Eligibility and admissions information",
      "Approved faculty profiles",
      "Course-specific enquiries and routing",
    ],
    inputs:
      "Current course details, admissions procedures, approved faculty information and accurate schedules.",
    services: ["ai-voice-agents", "whatsapp-ai-agents", "websites"],
  },
  {
    slug: "retail",
    title: "Retail & jewellery",
    label: "Retail, jewellery & ecommerce",
    need: "Make products easy to discover and buying information easy to understand.",
    journey:
      "A shopper finds a product, compares variants and delivery information, then checks out or asks a product question.",
    features: [
      "Product categories and filters",
      "Product and variant details",
      "Checkout and order notifications",
      "Stock and business-tool integrations",
    ],
    inputs:
      "Product catalogue, images, inventory rules, delivery information and approved returns policies.",
    services: ["custom-software", "ecommerce", "whatsapp-ai-agents"],
  },
  {
    slug: "manufacturers",
    title: "Manufacturers & B2B suppliers",
    label: "Manufacturing & B2B",
    need: "Help buyers assess capabilities and send a useful quotation request.",
    journey:
      "A procurement contact checks specifications, production capabilities and relevant documents, then sends quantities and requirements.",
    features: [
      "Product catalogue and specifications",
      "Verified capability information",
      "Downloadable product documents",
      "Structured quotation requests and CRM routing",
    ],
    inputs:
      "Accurate specifications, approved capabilities and certifications, product assets and quotation requirements.",
    services: ["websites", "crm", "dashboards"],
  },
  {
    slug: "finance",
    title: "Banking & finance",
    label: "Banking & finance",
    need: "Remind customers about payments and answer their questions without tying up your team.",
    journey:
      "A customer gets a payment reminder call or message, asks about the amount or due date, and is handed to a person if they need one.",
    features: [
      "Payment reminder calls and WhatsApp messages",
      "Answers to common questions from your records",
      "Follow-up and callback requests for your team",
      "Call summaries and a record of every reminder",
    ],
    inputs:
      "Approved reminder scripts, the data each reminder may use, your rules for consent and calling hours, and who handles hand-overs.",
    services: ["ai-voice-agents", "whatsapp-ai-agents", "crm"],
  },
] as const;
export type IndustrySlug = (typeof industries)[number]["slug"];

export type IndustryFocus = {
  /** One-line headline for the top of the industry page. */
  lead: string;
  points: string[];
  proof: { kind: "Our product" | "Client work" | "Use case"; text: string };
  cta?: { label: string; href: string };
};
// The five industries shown first on the homepage and /industries.
export const industryFocus: Partial<Record<IndustrySlug, IndustryFocus>> = {
  clinics: {
    lead: "HelloChamber, an AI receptionist that answers your chamber’s calls.",
    points: [
      "Answers in Bengali, Hindi or English, day and night.",
      "Books serials or time slots from your real schedule.",
      "Sends the patient a WhatsApp confirmation after every booking.",
    ],
    proof: {
      kind: "Our product",
      text: "HelloChamber is our own product, with a live demo line you can call.",
    },
    cta: { label: "Try it: call the demo line", href: "/hellochamber#try" },
  },
  "real-estate-agents": {
    lead: "Listings platforms, and an AI agent that books site visits and qualifies leads.",
    points: [
      "A listings website with an admin panel for your team.",
      "Replies to WhatsApp enquiries and books site visits.",
      "Asks qualifying questions before your agent calls back.",
    ],
    proof: {
      kind: "Client work",
      text: "We built Spacevyu, a real estate listings platform with an admin panel.",
    },
    cta: { label: "See our client work", href: "/work" },
  },
  retail: {
    lead: "Custom ERP, stock and billing apps for retail and jewellery businesses.",
    points: [
      "Stock, billing and orders in one system.",
      "Built around how your shop actually runs.",
      "WhatsApp replies for order status and product questions.",
    ],
    proof: {
      kind: "Client work",
      text: "We built a custom jewellery ERP app for Biswas Jewellers.",
    },
    cta: { label: "See our client work", href: "/work" },
  },
  education: {
    lead: "An AI agent for admission enquiries, on calls and WhatsApp.",
    points: [
      "Answers course, fee and schedule questions at any hour.",
      "Takes the student’s details and books a callback.",
      "Speaks Bengali, Hindi and English.",
    ],
    proof: {
      kind: "Use case",
      text: "This describes how our AI agents can work for education. It is not a client case study.",
    },
  },
  finance: {
    lead: "AI calls for payment reminders, follow-ups and common questions.",
    points: [
      "Reminds customers about payments by call or WhatsApp.",
      "Answers questions from your records, not from guesswork.",
      "Hands the call to your team when a person is needed.",
    ],
    proof: {
      kind: "Use case",
      text: "This describes how our AI agents can work for banking and finance. It is not a client case study.",
    },
  },
};
export const focusIndustries = Object.keys(industryFocus).map(
  (slug) => industries.find((i) => i.slug === slug)!,
);
