export type Service = {
  slug: string;
  title: string;
  group: "build" | "grow" | "automate";
  summary: string;
  audience: string;
  problem: string;
  deliverables: string[];
  example: string;
  inputs: string;
  faq: [string, string][];
};
export const groups = [
  {
    slug: "build",
    title: "Build",
    headline: "A better digital home.",
    description:
      "Give customers a clear, useful place to discover your business, buy from you, and get in touch.",
  },
  {
    slug: "grow",
    title: "Grow",
    headline: "Get found. Start conversations.",
    description:
      "Connect with the right people through clearer content, better search visibility, and focused campaigns.",
  },
  {
    slug: "automate",
    title: "Automate",
    headline: "Less admin. More clarity.",
    description:
      "Connect your tools, organise your enquiries, and make everyday work easier to manage.",
  },
] as const;
export const services: Service[] = [
  {
    slug: "social-media-automation",
    title: "Instagram & social media automation",
    group: "automate",
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
    slug: "websites",
    title: "Website design & development",
    group: "build",
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
    group: "build",
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
    slug: "mobile-apps",
    title: "Mobile application development",
    group: "build",
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
    slug: "custom-software",
    title: "Custom business software",
    group: "build",
    summary: "Tools that fit how your business actually operates.",
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
      "An operations portal could connect job intake, assignment, progress updates and management reporting in one shared workflow.",
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
    slug: "workflow-automation",
    title: "Workflow automation & integrations",
    group: "automate",
    summary: "Connect the repetitive steps that slow your team down.",
    audience:
      "Teams moving information manually between forms, inboxes, spreadsheets and business tools.",
    problem:
      "Manual copying creates delays and missed follow-ups, especially when no one owns the next step.",
    deliverables: [
      "Workflow mapping and trigger definitions",
      "Connections between agreed tools",
      "Notifications, follow-up tasks and routing",
      "Error handling and exception paths",
      "Testing, documentation and handover",
    ],
    example:
      "A website enquiry can create a CRM record, notify the assigned person and add a follow-up task. Failed steps can be flagged for manual review.",
    inputs:
      "Tool access, sample records, assignment rules, exception scenarios and the person responsible for maintaining each workflow.",
    faq: [
      [
        "Can every tool be connected?",
        "It depends on API access, plan limitations and the data available. We check feasibility before agreeing the integration.",
      ],
      [
        "What happens if an automation fails?",
        "We agree error reporting, retry behaviour and a manual fallback as part of the workflow design.",
      ],
    ],
  },
  {
    slug: "crm",
    title: "CRM setup & lead management",
    group: "automate",
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
    group: "automate",
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
