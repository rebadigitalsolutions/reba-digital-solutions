export type Service = {
  slug: string;
  title: string;
  group: "ai" | "software" | "apps" | "grow";
  summary: string;
  audience: string;
  problem: string;
  deliverables: string[];
  example: string;
  inputs: string;
  faq: [string, string][];
  /** Optional search title and description; fall back to title and summary. */
  metaTitle?: string;
  metaDescription?: string;
  /** AI agent pages answer a fixed set of questions, in this order. */
  agent?: AgentDetails;
};
export type AgentDetails = {
  does: string;
  fits: [string, string][];
  correctness: string[];
  languages: string;
  data: string;
  // FILL: time to go live and pricing model, confirmed by Pritam.
  pricing: string;
};
export const groups = [
  {
    slug: "ai",
    more: "Explore AI agents",
    title: "AI agents",
    headline: "Calls and chats, handled.",
    description:
      "Voice agents that answer your calls and WhatsApp agents that reply and book, in Bengali, Hindi and English.",
  },
  {
    slug: "software",
    more: "Explore custom software",
    title: "Custom software",
    headline: "Software that fits how you work.",
    description:
      "ERP, CRM and dashboards built around your stock, billing, orders and team, not the other way round.",
  },
  {
    slug: "apps",
    more: "Explore apps & websites",
    title: "Apps & websites",
    headline: "A better digital home.",
    description:
      "Mobile apps, websites and online stores that give customers a clear place to find you, buy and get in touch.",
  },
  {
    slug: "grow",
    more: "Explore growth services",
    title: "Grow",
    headline: "Get found. Start conversations.",
    description:
      "Connect with the right people through clearer content, better search visibility and focused campaigns.",
  },
] as const;
const agentCorrectness = [
  "The AI handles the conversation. Answers like prices, availability and bookings come from your system, so it never makes them up.",
  "When it can’t help, it hands the conversation to your staff or takes a callback request.",
];
const agentLanguages =
  "Bengali, Hindi and English. It follows the customer when they switch languages mid-conversation.";
const agentData =
  "Built to India’s Digital Personal Data Protection Act, 2023. Your customers’ data belongs to you, not to us.";
// FILL: replace with the confirmed go-live time and pricing model.
const agentPricing =
  "We agree the setup and a monthly plan, based on usage, after a short call about your business.";
export const services: Service[] = [
  {
    slug: "ai-voice-agents",
    title: "AI voice agents",
    group: "ai",
    metaTitle: "AI voice agent for businesses in India",
    metaDescription:
      "An AI voice agent that answers your business calls, books appointments and sends reminders in Bengali, Hindi and English, day and night. Built in Kolkata.",
    summary:
      "Answers your calls, books appointments, sends reminders, in Bengali, Hindi and English, day and night.",
    audience:
      "Businesses that miss calls during busy hours, after closing time or when staff are with a customer.",
    problem:
      "Every missed call can be a missed booking. Staff spend hours repeating timings, fees and directions on the phone.",
    deliverables: [
      "Call flows for bookings, questions and reminders",
      "Connection to your schedule, prices or stock",
      "Hand-over to staff and callback requests",
      "Call summaries you can read on your phone",
      "Testing with real calls before going live",
    ],
    example:
      "ClinicVoice, our AI receptionist for doctors, answers a chamber’s phone, books serials from the real schedule and sends the patient a WhatsApp confirmation.",
    inputs:
      "Your common questions, timings, prices or schedule, how bookings work today and who should take calls the AI hands over.",
    faq: [
      [
        "Do I need a new phone number?",
        "No. You keep your number. Calls forward to the agent, or only the calls your staff miss.",
      ],
      [
        "Can I hear it before deciding?",
        "Yes. Call our AI receptionist demo line and book a serial yourself.",
      ],
    ],
    agent: {
      does: "Answers your calls, books appointments, sends reminders, in Bengali, Hindi and English, day and night.",
      fits: [
        ["Clinics", "Book serials and appointments, share timings and fees."],
        [
          "Real estate",
          "Book site visits and qualify leads before your team calls back.",
        ],
        ["Education", "Answer admission enquiries and take callback requests."],
        ["Finance", "Payment reminders, follow-ups and common questions."],
        ["Retail", "Tell customers their order status and shop timings."],
      ],
      correctness: agentCorrectness,
      languages: agentLanguages,
      data: agentData,
      pricing: agentPricing,
    },
  },
  {
    slug: "whatsapp-ai-agents",
    title: "WhatsApp AI agents",
    group: "ai",
    metaTitle: "WhatsApp AI agent for businesses in India",
    metaDescription:
      "A WhatsApp AI agent that replies to customers, answers questions, books and qualifies leads in Bengali, Hindi and English. Built in Kolkata.",
    summary:
      "Replies to customers on WhatsApp, answers questions, books and qualifies leads.",
    audience:
      "Businesses whose customers already message them on WhatsApp and wait too long for a reply.",
    problem:
      "WhatsApp messages pile up. The same questions get answered by hand, and leads go cold before anyone replies.",
    deliverables: [
      "Conversation flows for questions, bookings and leads",
      "Connection to your schedule, prices, stock or CRM",
      "Hand-over to a person when needed",
      "Set-up on the WhatsApp Business Platform",
      "Testing and a simple way to see every chat",
    ],
    example:
      "A property enquiry on WhatsApp can get an instant reply, a few qualifying questions and a booked site visit, with the lead passed to the right agent.",
    inputs:
      "Your WhatsApp Business number, common questions, prices or schedule, and who should take chats the AI hands over.",
    faq: [
      [
        "Are WhatsApp charges included?",
        "Meta charges for some WhatsApp conversations. We show you these costs before you start.",
      ],
      [
        "Can it send messages first?",
        "Yes, using message templates approved by Meta, such as booking confirmations and reminders.",
      ],
    ],
    agent: {
      does: "Replies to customers on WhatsApp, answers questions, books and qualifies leads.",
      fits: [
        ["Clinics", "Book appointments and send confirmations and reminders."],
        ["Real estate", "Qualify leads and book site visits."],
        ["Education", "Answer admission enquiries and share course details."],
        ["Finance", "Payment reminders and answers to common questions."],
        ["Retail", "Order status, product questions and shop timings."],
      ],
      correctness: agentCorrectness,
      languages: agentLanguages,
      data: agentData,
      pricing: agentPricing,
    },
  },
  {
    slug: "ai-automation",
    title: "AI & workflow automation",
    group: "ai",
    metaTitle: "AI and workflow automation",
    metaDescription:
      "Automations that cut the admin: connect your forms, inboxes, spreadsheets and business tools, with AI where it helps. Built in Kolkata.",
    summary:
      "Automations that cut the admin, with AI where it helps and clear rules where it doesn’t.",
    audience:
      "Teams moving information by hand between forms, inboxes, spreadsheets and business tools.",
    problem:
      "Manual copying creates delays and missed follow-ups, especially when no one owns the next step.",
    deliverables: [
      "Workflow mapping and trigger definitions",
      "Connections between agreed tools",
      "AI steps for sorting, summarising and drafting, where useful",
      "Notifications, follow-up tasks and routing",
      "Error handling, testing and handover",
    ],
    example:
      "A website enquiry can create a CRM record, get a short AI summary, notify the assigned person and add a follow-up task. Failed steps are flagged for manual review.",
    inputs:
      "Tool access, sample records, assignment rules, exception scenarios and the person responsible for each workflow.",
    faq: [
      [
        "Can every tool be connected?",
        "It depends on API access, plan limits and the data available. We check feasibility before agreeing the integration.",
      ],
      [
        "What happens if an automation fails?",
        "We agree error reporting, retry behaviour and a manual fallback as part of the workflow design.",
      ],
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile application development",
    group: "apps",
    summary: "A focused app for a useful, repeatable customer or team task.",
    audience:
      "Businesses whose customers or staff need a dedicated mobile experience beyond a website.",
    problem:
      "A mobile app should solve a recurring need, such as field updates or account access, rather than duplicate a brochure website.",
    deliverables: [
      "User journeys and an agreed first-release scope",
      "Mobile interface design",
      "Application and API integration",
      "Device and accessibility testing",
      "Release preparation and handover",
    ],
    example:
      "A field service app could let a team view assigned jobs, update progress and attach job records, with permissions appropriate to each role.",
    inputs:
      "Your user roles, essential workflows, existing API documentation, supported devices and app store accounts.",
    faq: [
      [
        "Do we need both iOS and Android?",
        "We choose supported platforms around your users, budget and operational needs during discovery.",
      ],
      [
        "Who handles store approval?",
        "Submission responsibilities are agreed in the scope. Store review decisions and account fees remain with the platform.",
      ],
    ],
  },
  {
    slug: "websites",
    title: "Website design & development",
    group: "apps",
    summary: "Clear, responsive websites that turn interest into a next step.",
    audience:
      "Businesses launching a first website or replacing a site that no longer reflects their services.",
    problem:
      "Visitors cannot enquire confidently when services are hard to understand, information is out of date, or mobile navigation gets in the way.",
    deliverables: [
      "Content structure and page planning",
      "Responsive design and frontend development",
      "Enquiry forms and agreed integrations",
      "Page metadata, accessibility and performance checks",
      "Launch checklist and editing guidance",
    ],
    example:
      "A service business website can connect service explanations, relevant work, FAQs and a short enquiry form. Our client portfolio includes hospitality and nonprofit websites.",
    inputs:
      "Your services, brand assets, approved copy and images, domain access, and one person to consolidate feedback.",
    faq: [
      [
        "Can you redesign an existing website?",
        "Yes. We review useful content, existing URLs and integrations before agreeing what to retain or replace.",
      ],
      [
        "Can you maintain the site after launch?",
        "Content updates, software updates and monitoring can be scoped in a separate support arrangement.",
      ],
    ],
  },
  {
    slug: "ecommerce",
    title: "Ecommerce websites",
    group: "apps",
    summary: "Make it easier to explore products and place an order.",
    audience:
      "Retailers and product businesses moving online or improving an existing store.",
    problem:
      "Unclear product details, confusing delivery information and unnecessary checkout steps can interrupt a purchase.",
    deliverables: [
      "Product catalogue, categories and search",
      "Product and variant page design",
      "Cart and payment provider integration",
      "Shipping, returns and tax setting configuration",
      "Order notification and store management guidance",
    ],
    example:
      "A retailer can let shoppers filter a catalogue, select a size, check delivery information and pay through an approved payment provider.",
    inputs:
      "Product data, photography, stock rules, delivery areas, approved store policies and your payment-provider account.",
    faq: [
      [
        "Are payment charges included?",
        "Payment processing, platform subscriptions and third-party apps are separate unless your proposal says otherwise.",
      ],
      [
        "Can you move my existing catalogue?",
        "We first assess the quality and format of your export, including images, variants and customer data.",
      ],
    ],
  },
  {
    slug: "custom-software",
    title: "Custom software & ERP",
    group: "software",
    metaTitle: "Custom software and ERP company in Kolkata",
    metaDescription:
      "Custom business software and ERP, from stock and billing to orders and reports, built around how your business works. Our work includes a custom jewellery ERP app.",
    summary:
      "ERP and business software that fit how your business actually operates.",
    audience:
      "Teams whose work no longer fits disconnected spreadsheets or off-the-shelf tools.",
    problem:
      "Repeated data entry and inconsistent records make it difficult to see who is doing what and what needs attention.",
    deliverables: [
      "Workflow and role mapping",
      "Business application and data model",
      "Role-based access and agreed reports",
      "Integrations with existing systems",
      "Testing, documentation and user training",
    ],
    example:
      "We built a custom ERP app for Biswas Jewellers, a jewellery retailer. An operations portal can likewise connect stock, billing, orders, progress updates and management reports in one shared system.",
    inputs:
      "Examples of current records, workflow rules, access requirements, reporting needs and sample data stripped of unnecessary personal information.",
    faq: [
      [
        "Should we buy software or build it?",
        "We review suitable existing tools first. Custom development is useful when the requirements justify its maintenance and cost.",
      ],
      [
        "Can the system expand later?",
        "We agree an initial scope and document future needs so later phases can be planned sensibly.",
      ],
    ],
  },
  {
    slug: "seo",
    title: "SEO & local SEO",
    group: "grow",
    summary: "Help people find and understand the services you provide.",
    audience:
      "Service businesses, local companies and websites that need a clearer presence in search.",
    problem:
      "Search engines and potential customers need accessible pages, accurate business information and useful answers to relevant questions.",
    deliverables: [
      "Technical and content review",
      "Search intent and page planning",
      "On-page titles, headings and internal links",
      "Local business profile review where relevant",
      "Measurement setup and agreed reporting",
    ],
    example:
      "A local service business could improve its service pages, clarify the areas it covers and keep its business profile details consistent.",
    inputs:
      "Website and analytics access, service areas, accurate business details and subject expertise to review content.",
    faq: [
      [
        "Can you guarantee a ranking?",
        "No. Search results depend on competition, search systems and other factors outside any agency’s control.",
      ],
      [
        "How soon will SEO show an effect?",
        "We establish a baseline and review progress over time. The starting condition, competition and scope affect timing.",
      ],
    ],
  },
  {
    slug: "ai-search",
    title: "AI search optimisation",
    group: "grow",
    summary:
      "Clearer content and technical accessibility for AI-powered search.",
    audience:
      "Businesses whose expertise and services need to be easy to interpret across traditional and AI-powered search.",
    problem:
      "Vague copy and inaccessible information make it difficult for people and search systems to understand what a business does.",
    deliverables: [
      "Content clarity and accessibility review",
      "Clear service, entity and expertise information",
      "Useful question-and-answer content",
      "Appropriate factual structured data",
      "Crawlability checks and a measurement plan",
    ],
    example:
      "A consultant’s service page can explain the audience, process, limitations and supporting expertise with clear, directly answerable information.",
    inputs:
      "Accurate business information, approved expertise claims, website access and subject-matter review.",
    faq: [
      [
        "What does GEO mean?",
        "Generative engine optimisation is a term for improving discoverability in AI-powered search through clear content and technical accessibility.",
      ],
      [
        "Will AI tools cite my website?",
        "Citations, inclusion and rankings cannot be promised. We focus on the content and technical factors we can improve.",
      ],
    ],
  },
  {
    slug: "social-media",
    title: "Social media & content",
    group: "grow",
    summary: "Consistent, useful content with a clear purpose.",
    audience:
      "Businesses that need a manageable publishing plan and a more coherent social presence.",
    problem:
      "Posting without a plan can make your channels feel disconnected from your services and your customers’ questions.",
    deliverables: [
      "Channel and audience review",
      "Content themes and a publishing calendar",
      "Agreed copy and visual content",
      "Approval and scheduling workflow",
      "Performance review against agreed goals",
    ],
    example:
      "A service business can use explainers, project updates and answers to common questions to support enquiries from its social channels.",
    inputs:
      "Brand assets, account access, approved photography, customer questions and a reliable content approval contact.",
    faq: [
      [
        "Do you create the content?",
        "Copy and visual content can be included in scope. Photography, filming and specialist production are agreed separately.",
      ],
      [
        "Do you handle all customer messages?",
        "Community management and response responsibilities must be explicitly agreed; they are not assumed.",
      ],
    ],
  },
  {
    slug: "paid-advertising",
    title: "Paid advertising & landing pages",
    group: "grow",
    summary: "Focused campaigns with a useful destination for every click.",
    audience:
      "Businesses with a clear offer, a defined audience and a budget for testing paid campaigns.",
    problem:
      "Advertising is hard to evaluate when the landing page is unclear or enquiries are not tracked through to a useful next step.",
    deliverables: [
      "Campaign goals and audience planning",
      "Campaign structure and approved ad creative",
      "Relevant landing pages",
      "Conversion measurement and lead routing",
      "Agreed reporting and optimisation reviews",
    ],
    example:
      "An offer-specific landing page can match an ad’s message, answer key questions and route a short enquiry to the right team.",
    inputs:
      "Your offer, audience, advertising accounts, budget, brand assets and a process for responding to enquiries.",
    faq: [
      [
        "Is advertising spend included?",
        "Platform advertising spend is separate from our service fees unless expressly included in the proposal.",
      ],
      [
        "Can you promise a number of leads?",
        "No. Demand, budget, competition, the offer and follow-up all influence results.",
      ],
    ],
  },
  {
    slug: "social-media-automation",
    title: "Instagram & social media automation",
    group: "grow",
    summary:
      "Connect social enquiries, approved replies and follow-up tasks to your business workflow.",
    audience:
      "Businesses handling recurring Instagram or social media enquiries about services, availability and next steps.",
    problem:
      "Repeated questions and scattered direct messages make it hard to keep track of enquiries and know when a person needs to respond.",
    deliverables: [
      "Review of connected accounts and supported platform features",
      "Approved replies for common enquiries and keyword-based journeys where supported",
      "Lead capture and CRM routing with agreed permissions",
      "Notifications and clear handover to a person",
      "Workflow testing, reporting and team guidance",
    ],
    example:
      "Where supported by the platform, an Instagram enquiry can receive an approved first reply, offer a relevant service link and create a follow-up task. Questions outside the agreed flow are handed to your team.",
    inputs:
      "Business account access through approved connections, frequently asked questions, approved response copy, lead routing rules and a person responsible for escalations.",
    faq: [
      [
        "Can you automate every Instagram message?",
        "No. Available features depend on your account, platform permissions, messaging rules and the tools selected. We check the supported journey before agreeing the scope.",
      ],
      [
        "Does this include content creation?",
        "Content planning and creation are available through our social media service. Automation focuses on the agreed enquiry and operational workflows.",
      ],
      [
        "Are platform or messaging costs separate?",
        "Automation tools, CRM licences and messaging-related charges may be separate. These are identified in the proposal.",
      ],
    ],
  },
  {
    slug: "crm",
    title: "CRM setup & lead management",
    group: "software",
    summary: "A clear home for enquiries, responsibilities and next steps.",
    audience:
      "Businesses that need to track enquiries and follow-ups across one person or a growing team.",
    problem:
      "Leads become hard to manage when conversations live in separate inboxes and the next action is not recorded.",
    deliverables: [
      "Pipeline stages and contact fields",
      "Lead capture and duplicate handling",
      "Lead assignment and routing rules",
      "Follow-up reminders and task workflows",
      "Reports, permissions and practical training",
    ],
    example:
      "A property enquiry can enter a new-enquiry stage, be assigned to an agent and generate a visit follow-up reminder. A dashboard can show overdue actions.",
    inputs:
      "Your sales stages, existing contact export, ownership rules, reporting questions and chosen CRM access.",
    faq: [
      [
        "Which CRM do you use?",
        "We assess your existing system or suitable options against your budget, workflow and integration needs. We do not claim platform partner status.",
      ],
      [
        "Are CRM licences included?",
        "CRM licences, messaging usage, integrations and other subscriptions may be separate. The proposal will identify them.",
      ],
    ],
  },
  {
    slug: "dashboards",
    title: "Dashboards & business reporting",
    group: "software",
    summary: "Make your operational information easier to use.",
    audience:
      "Business owners and teams assembling reports from spreadsheets, databases or multiple business tools.",
    problem:
      "A dashboard is only useful when its definitions, source data and refresh process are dependable.",
    deliverables: [
      "Reporting questions and metric definitions",
      "Data source assessment and preparation",
      "Excel, Power BI or custom dashboards as appropriate",
      "Refresh and access configuration",
      "Validation and user guidance",
    ],
    example:
      "A lead report can show sources, pipeline stages and overdue follow-ups, with filters that help a manager understand what needs attention.",
    inputs:
      "Sample data, definitions of each metric, source access and the frequency at which information needs updating.",
    faq: [
      [
        "Will a dashboard fix inconsistent data?",
        "Data issues must be identified and addressed. Cleaning and reconciliation work is scoped separately when needed.",
      ],
      [
        "Are software licences needed?",
        "Sharing or scheduled refresh may require paid platform licences. We identify these requirements before implementation.",
      ],
    ],
  },
];
