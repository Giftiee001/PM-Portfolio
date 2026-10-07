export const site = {
  name: "Don-Emmanuel Gift Ayomide",
  role: "Associate Product Manager",
  email: "dgiftayomide@gmail.com",
  linkedin: "https://www.linkedin.com/in/gift-don-emmanuel-0722392a0?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/Giftiee001",
  cvPath: "/cv.pdf",
  location: "Kigali, Rwanda",
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Strategy & Discovery",
    description: "How I get to the right problem before reaching for a solution.",
    skills: ["User Research", "Problem Framing", "User Personas", "User Journey Mapping", "Jobs-to-be-Done", "Product Discovery", "Opportunity Identification"],
  },
  {
    title: "Product Execution",
    description: "How I turn a validated problem into a scoped, sequenced plan.",
    skills: ["PRDs", "User Stories", "Acceptance Criteria", "Backlog Management", "Feature Prioritization", "RICE", "MoSCoW", "Value vs. Effort", "Agile / Scrum", "Sprint Planning", "Stakeholder Mapping"],
  },
  {
    title: "Metrics",
    description: "How I think about whether a product decision actually worked.",
    skills: ["Product KPIs", "North Star Metrics", "AARRR Funnel", "Success Metrics", "Leading & Lagging Indicators"],
  },
  {
    title: "Tools",
    description: "What I use day to day to plan, design, and track product work.",
    skills: ["Jira", "Trello", "Notion", "Figma", "FigJam", "Miro", "Google Sheets / Excel"],
  },
];

export type CaseStudySection = {
  id: string;
  label: string;
  heading: string;
  body: string[];
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  role: string;
  productArea: string;
  skills: string[];
  github?: string;
  liveUrl?: string;
  status: "live" | "coming-soon";
  caseStudy?: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: "safeher",
    name: "SafeHer",
    category: "Women's Safety Product",
    description: "SafeHer is a women's safety product concept focused on helping women access safety support and respond to potentially dangerous situations.",
    role: "Product Lead & Builder",
    productArea: "Safety & Access",
    skills: ["Problem Framing", "Product Discovery", "PRDs", "Prioritization", "UI Build"],
    github: "https://github.com/Giftiee001/SafeHer-web-app.git",
    liveUrl: "https://safeher-web.netlify.app/",
    status: "live",
    caseStudy: [
      {
        id: "context",
        label: "01",
        heading: "Context & Overview",
        body: [
          "I built SafeHer because I'm passionate about women's empowerment. Women and girls often don't feel safe, and I wanted to build something practical to help.",
          "The idea started as a location-sharing app, and grew into a broader safety toolkit as I kept building. SafeHer is still a work in progress.",
        ],
      },
      {
        id: "problem",
        label: "02",
        heading: "Problem Statement",
        body: [
          "Women and girls frequently face safety concerns, especially when moving around alone, and often lack a simple way to let trusted people know where they are or get help quickly.",
        ],
      },
      {
        id: "research",
        label: "03",
        heading: "User Research & Insights",
        body: [
          "[ADD USER RESEARCH DETAILS: any conversations, observations, or personal experiences that shaped this problem for you]",
        ],
      },
      {
        id: "solution",
        label: "04",
        heading: "Solution & What's Built",
        body: [
          "Starting from the original location-sharing idea, SafeHer has grown into: account creation and login, a home screen with live location awareness, a press-and-hold SOS emergency alert button, an emergency contacts manager (add a contact's name, phone number, and relationship), a healthcare directory, a profile screen, and settings for auto-sharing location during an emergency, background location access, and notifications.",
        ],
      },
      {
        id: "metrics",
        label: "05",
        heading: "Learnings & Next Steps",
        body: [
          "SafeHer is still in progress.",
          "[ADD WHAT YOU'VE LEARNED so far, and what you plan to improve or add next]",
        ],
      },
    ],
  },
  {
    slug: "consent-starts-with-us",
    name: "Consent Starts With Us",
    category: "Youth Advocacy Project",
    description: "A youth-led awareness and education project helping young people understand consent, respect boundaries, and build healthy relationships to help prevent sexual and gender-based violence.",
    role: "Project Lead",
    productArea: "Advocacy, Education and GBV Prevention",
    skills: ["Problem Framing", "Stakeholder Mapping", "SMART Goal Setting", "Risk Planning", "Evaluation Design"],
    status: "live",
    caseStudy: [
      {
        id: "context",
        label: "01",
        heading: "Context & Overview",
        body: [
          "Consent Starts With Us is a youth-led project I designed as part of the GCED Online Campus course From Awareness to Action, running over one month starting August 2026.",
          "The project focuses on consent education and prevention of sexual and gender-based violence among young people.",
        ],
      },
      {
        id: "problem",
        label: "02",
        heading: "Problem Statement",
        body: [
          "Many young people lack a clear understanding of consent, personal boundaries, and healthy relationships, a gap that contributes to sexual and gender-based violence in communities.",
        ],
      },
      {
        id: "research",
        label: "03",
        heading: "Research & Insights",
        body: [
          "[ADD RESEARCH DETAILS: any conversations, observations, or reading that shaped how you defined this problem]",
        ],
      },
      {
        id: "prioritization",
        label: "04",
        heading: "Goals, Objectives & Planning",
        body: [
          "Goal: to empower young people with the knowledge and confidence to understand consent, respect boundaries, challenge harmful attitudes, and contribute to preventing sexual and gender-based violence in their communities.",
          "Specific: organize two interactive consent education sessions focused on consent, boundaries, healthy relationships, and prevention of sexual violence.",
          "Measurable: reach at least 100 young people through workshops and online awareness activities during the project period.",
          "Achievable: work with youth organizations, schools, universities, women's rights organizations, and community advocates.",
          "Realistic: use existing community spaces and social media platforms to keep the project affordable and accessible.",
          "Time-bound: implement over one month, including planning, educational sessions, social media activities, feedback collection, and evaluation.",
        ],
      },
      {
        id: "solution",
        label: "05",
        heading: "Activities & Execution",
        body: [
          "1. Planning and preparation: identify target participants and partners, develop the timeline and materials.",
          "2. Develop awareness materials: educational content on consent, boundaries, healthy relationships, and prevention.",
          "3. Launch the campaign: introduce Consent Starts With Us through social media and partner networks.",
          "4. Conduct interactive education sessions: discuss what consent means, boundaries, communication, peer pressure, and healthy relationships.",
          "5. Social media awareness campaign: educational posts, myth versus fact content, short videos, and key messages.",
          "6. Collect feedback: a before and after questionnaire to measure changes in participants' knowledge.",
          "7. Evaluate and share results: review participation and engagement, summarize lessons, and share findings with partners.",
        ],
      },
      {
        id: "metrics",
        label: "06",
        heading: "Metrics, Learnings & Next Steps",
        body: [
          "Success will be measured through: number of young people reached via workshops and online activities, social media reach and engagement, and before and after questionnaire results showing change in understanding of consent.",
          "[ADD LEARNINGS AND NEXT STEPS: once the project wraps up, add what you learned and what you'd improve]",
        ],
      },
    ],
  },
  {
    slug: "flatfund",
    name: "FlatFund",
    category: "Product Sprint Prototype",
    description: "A single-screen prototype that helps three flatmates split a prepaid electricity bill, track who has paid, and unlock the meter token once everyone has paid.",
    role: "Product Builder",
    productArea: "Shared Living & Utilities",
    skills: ["Problem Framing", "Stakeholder Trade-offs", "Rapid Prototyping", "Scope Definition"],
    liveUrl: "https://flatfund.vercel.app/",
    status: "live",
    caseStudy: [
      {
        id: "context",
        label: "01",
        heading: "Context & Overview",
        body: [
          "FlatFund is a prototype I built for a product sprint assignment, using Lovable. It is a shared-flat utility tracker designed for one specific, simple use case: buying prepaid electricity meter units in a 3-person flat.",
          "The problem and stakeholder scenario were provided by my mentor as a sprint brief. I built the prototype to that brief.",
        ],
      },
      {
        id: "problem",
        label: "02",
        heading: "Problem Statement",
        body: [
          "In a 3-person flat, one person pays for the monthly power units, and roommates forget whether they have sent their share or what the recharge token is.",
        ],
      },
      {
        id: "tradeoffs",
        label: "03",
        heading: "Stakeholder Input & Trade-offs",
        body: [
          "The brief gave three stakeholder positions to weigh.",
          "Engineering Lead: keep storage strictly local, so when one flatmate opens the link, the paid/unpaid status persists on their device.",
          "Design Lead: show three prominent cards, one per roommate, where clicking a card toggles a status badge between Owing and Paid.",
          "Growth/Data Lead: add an automated SMS trigger button that costs $0.05 per text to notify the owing flatmate.",
          "My decisions: I built all three requests, with one change. Following the Engineering Lead, all data is stored locally on the device, so the paid/unpaid status persists without a backend. Following the Design Lead, each flatmate has a prominent card that toggles between Pending and Paid.",
          "For the Growth/Data Lead's SMS request, I built a simulated Remind popup instead of a real text, because real SMS would cost about $0.05 per message and a prototype doesn't need that cost.",
          "I also added a few things the brief didn't ask for: a bill input that accepts any amount, real flatmate names, a reset, and input validation.",
        ],
      },
      {
        id: "solution",
        label: "04",
        heading: "Solution & Prototype Flow",
        body: [
          "The prototype is a single screen.",
          "1. Input: the target monthly bill amount (for example, NGN 15,000 for electricity).",
          "2. Interface: three flatmate cards, each showing that person's calculated share (NGN 5,000 each).",
          "3. Interaction: clicking a member's card switches their status from Pending to Paid. Once all three are marked Paid, the screen unmasks the 20-digit prepaid meter token.",
          "[ADD SCREENSHOTS or confirm that the live prototype matches this flow]",
        ],
      },
      {
        id: "learnings",
        label: "05",
        heading: "Learnings & Next Steps",
        body: [
          "What I learned from building and scoping FlatFund",
          "1. The prompt decides the result, so specific prompts win. My first Lovable build looked right but pre-filled the bill with 15,000 and didn't update the cards until Save. Writing rules like start empty, update live, and strip non-numeric characters fixed it. Each follow-up prompt changed one thing and said do not change anything else, which stopped the tool from breaking features that already worked.",
          "2. Screenshots find problems that reading the code can't. Testing step by step caught a visible token in the input field, a setup section so tall that the cards sat below the fold, and a Remind message that asked for NGN 0 when the bill was empty.",
          "3. Each stakeholder's request pulled in a different direction, and I resolved them separately.",
          "Engineering Lead (local storage only): done, but statuses don't sync between flatmates' phones.",
          "Design Lead (three cards with a toggle): done, but I used Pending instead of Owing to match the prototype flow.",
          "Growth Lead (SMS at about $0.05 per text): I built a simulated reminder with a copy button and a cost note, because a real SMS integration needs a backend and a paid provider.",
          "4. Paid is a trust-based tap. The app can't verify a transfer, and the person who types in the token can see it. For a group of flatmates this is acceptable, but it limits the product.",
          "5. Shipping has its own problems. My first deployed link returned Unauthorized because the deployment wasn't public. I only found out by testing in an Incognito window, and it was fixed by making it public.",
          "What I would improve next",
          "Sync between phones: add a small backend (for example Firebase or Supabase) with a shared flat code, so everyone sees the same statuses. This is the biggest gap.",
          "A buyer role: only the buyer can mark others as Paid, and the token is hidden from everyone else until all three have paid.",
          "Safer token storage: it currently sits in the browser's local storage as plain text, so it should be stored server-side, or at least encrypted.",
          "Real payment confirmation: use a payment provider or a bank-transfer webhook to confirm payments instead of a manual tap.",
          "Real SMS with a cost cap: send through a provider, with a monthly limit so the $0.05 per text doesn't add up.",
          "More flexibility: a variable number of flatmates, unequal shares, and a history of past months.",
        ],
      },
    ],
  },
  {
    slug: "case-study-2",
    name: "Product Improvement Case Study",
    category: "Case Study 02",
    description: "A teardown-and-rebuild exercise on an existing product's experience.",
    role: "[ADD ROLE]",
    productArea: "[ADD PRODUCT AREA]",
    skills: [],
    status: "coming-soon",
  },
  {
    slug: "case-study-3",
    name: "Product Strategy Case",
    category: "Case Study 03",
    description: "A strategic case exploring positioning, sequencing, and trade-offs.",
    role: "[ADD ROLE]",
    productArea: "[ADD PRODUCT AREA]",
    skills: [],
    status: "coming-soon",
  },
];

export type ExperienceItem = { title: string; org: string; period: string; bullets: string[] };

export const experience: ExperienceItem[] = [
  {
    title: "Product Management Mentee",
    org: "Tech4Dev",
    period: "2026 - Present",
    bullets: [
      "Learning and applying product discovery methods, including problem framing and opportunity identification.",
      "Practicing core execution artifacts: PRDs, user stories, and acceptance criteria.",
      "Working through prioritization frameworks (RICE, MoSCoW, Value vs. Effort) on practice cases.",
      "Building fluency in Agile/Scrum ceremonies and sprint planning.",
    ],
  },
  {
    title: "Advocacy Project Lead - Consent Starts With Us",
    org: "GCED Online Campus - From Awareness to Action",
    period: "August 2026 - Present",
    bullets: [
      "Designed a youth-led consent education project to prevent sexual and gender-based violence, with SMART objectives, a stakeholder and ally map, and a risk-mitigation plan.",
      "Planned interactive sessions reaching young people through schools, youth organizations, and social media, aiming to reach at least 100 participants.",
      "Built an evaluation plan using before and after questionnaires to measure change in participants' understanding of consent.",
    ],
  },
];

export type EducationItem = { institution: string; program: string; detail: string };

export const education: EducationItem[] = [
  { institution: "African Leadership University", program: "BSE Software Engineering", detail: "Expected 2027" },
  { institution: "Tech4Dev", program: "Product Management Program", detail: "" },
  { institution: "Women Techsters Fellowship", program: "Product Management Track", detail: "Class of 2026" },
];

export type WritingItem = { title: string; type: string; description: string; href?: string };

export const writing: WritingItem[] = [
  {
    title: "Consent Starts With Us",
    type: "Article",
    description: "A personal reflection on victim-blaming and consent, written for the GCED Online Campus course From Awareness to Action. Publishing at the end of the course.",
  },
  { title: "[ADD TEARDOWN TITLE]", type: "Product Teardown", description: "[ADD SHORT DESCRIPTION]" },
];