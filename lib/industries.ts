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
    services: ["websites", "seo", "crm"],
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
    services: ["websites", "seo", "workflow-automation"],
  },
  {
    slug: "clinics",
    title: "Doctors & clinics",
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
    services: ["websites", "seo", "workflow-automation"],
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
    services: ["websites", "seo", "workflow-automation"],
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
    services: ["websites", "seo", "workflow-automation"],
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
    services: ["websites", "paid-advertising", "crm"],
  },
  {
    slug: "retail",
    title: "Retail & ecommerce",
    label: "Retail & ecommerce",
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
    services: ["ecommerce", "paid-advertising", "workflow-automation"],
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
] as const;
export type IndustrySlug = (typeof industries)[number]["slug"];
