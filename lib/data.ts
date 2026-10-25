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
    skills: ["Product KPIs", "Success Metrics", "North Star Metrics"],
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
  image?: { src: string; alt: string };
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
        heading: "User Research & Problem Discovery",
        body: [
          "The idea for SafeHer was inspired by the safety concerns women face in their everyday lives. Women may experience harassment, feel unsafe while travelling alone, or struggle to find reliable support when they need help. These concerns made me think about how technology could help women access safety resources and support more easily.",
          "As I developed the idea, I considered the challenges women might face when trying to seek help, access relevant information, or find support in uncomfortable or potentially dangerous situations. This led me to explore how a web application could make safety resources more accessible and provide women with a platform designed around their needs.",
          "SafeHer was developed as a school project, to explore how technology could contribute to women's safety and empowerment.",
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
          "What I've learned",
          "Working on SafeHer has helped me understand the importance of designing products that address real problems and put users' needs first. Although I have already built the initial version of the web app, I recognize that there is still room for improvement.",
          "What's next",
          "My next step is to review the existing features, improve the user interface and overall user experience, and identify areas where the product can be more useful and accessible to women. I also want to gather feedback from potential users to understand what works well, what needs improvement, and what additional features would make SafeHer more valuable.",
          "Rather than adding features without a clear purpose, I want to focus on making the existing product better, validating my assumptions through user research, and prioritizing improvements based on users' needs.",
        ],
      },
    ],
  },
  {
    slug: "billbell",
    name: "BillBell",
    category: "Product Sprint Prototype",
    description: "A free-trial tracker that helps users cancel before they are charged for a subscription they forgot about.",
    role: "Product Lead & Builder",
    productArea: "Subscriptions & Personal Finance",
    skills: ["Problem Framing", "Stakeholder Trade-offs", "Rapid Prototyping", "Scope Definition"],
    liveUrl: "https://billbell-snowy.vercel.app",
    status: "live",
    caseStudy: [
      {
        id: "context",
        label: "01",
        heading: "Context & Overview",
        body: [
          "BillBell is a prototype I built for a product sprint assignment. It is a reminder tracker for recurring free trials and promo subscriptions, such as Canva, Netflix, and Apple TV.",
          "The problem and stakeholder scenario were provided by my mentor as a sprint brief. The product was called FreeTrial Watchdog in the brief, and I renamed it BillBell.",
          "Built with v0 (AI prototyping), Next.js, Tailwind, and localStorage. The login is a mock.",
        ],
      },
      {
        id: "problem",
        label: "02",
        heading: "Problem Statement",
        body: [
          "People sign up for 7-day or 30-day free software trials, forget to cancel 24 hours before the trial ends, and get charged the full recurring subscription price.",
        ],
      },
      {
        id: "tradeoffs",
        label: "03",
        heading: "Stakeholder Input & Trade-offs",
        body: [
          "The brief gave three stakeholder positions to weigh.",
          "Engineering Lead: build direct browser calendar integrations (.ics download buttons), so users can save the reminder straight to Google or Apple Calendar without the team managing email servers.",
          "Design Lead: make the countdown visual, with a clean urgency card using color codes (Green = Safe, Orange = 2 Days Left, Red = Cancel Today) and a direct link to the platform's cancellation page.",
          "Growth/Data Lead: require users to enter their debit card's last 4 digits, so the app can remind them which card will be debited.",
          "My decisions:",
          "Calendar (Engineering Lead): I used Google Calendar links and .ics downloads, with no email server needed.",
          "Countdown (Design Lead): I built green, orange, red, and gray states with text badges.",
          "Card digits (Growth/Data Lead): I made the last 4 digits optional instead of forced, because demanding card data on a free tool would hurt sign-ups and trust.",
        ],
      },
      {
        id: "solution",
        label: "04",
        heading: "Solution & Prototype Flow",
        body: [
          "After a mock sign-in, the app opens a single-screen tracker.",
          "Sign-in: the login is a mock. It accepts any valid email and a password of 6 or more characters, with no real account behind it. The user's email shows in the header next to Log out.",
          "Track a new trial: a form with the service name, the trial end date (date picker), and an optional Add card reminder for the last 4 digits.",
          "Live countdown cards: one card per trial, showing the service name and end date, the days left, a color-coded badge (green Safe at 3 or more days, orange 2 Days Left, red Cancel Today at 1 day or less, gray Trial Ended), and a progress bar showing how much of the trial has elapsed.",
          "Actions on each card: Cancel Guide opens the service's cancellation page. Google Calendar opens a pre-filled all-day event on the day before the trial ends. Download .ics saves the same event as a calendar file that works in Outlook or Apple Calendar. Mark as Canceled turns the card green and says the user is safe, and Undo brings it back. A trash icon removes a card.",
          "Demo data: three sample cards (Apple TV+, Canva, Netflix) always show red, orange, and green, because their dates are calculated from today. Trials are saved in the visitor's own browser, and Reset demo data in the footer restores the samples.",
        ],
        image: {
          src: "/billbell-tracker.png",
          alt: "BillBell tracker screen with countdown cards for Apple TV+ (1 day left, red Cancel Today badge) and Canva (2 days left, orange badge), each with Cancel Guide, Google Calendar, Download .ics, and Mark as Canceled buttons",
        },
      },
      {
        id: "learnings",
        label: "05",
        heading: "Learnings & Next Steps",
        body: [
          "What I learned",
          "Small, specific prompts worked better than big ones. I also tested every 'fixed' claim from the AI myself, including calendar dates in Google Calendar and Outlook, before shipping.",
          "What I would improve next",
          "Add real accounts with Firebase Auth, send push or email reminders before a trial ends, and test with five real users.",
        ],
      },
    ],
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