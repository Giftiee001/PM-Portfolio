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
    status: "live",
    caseStudy: [
      { id: "context", label: "01", heading: "Context & Overview", body: ["[ADD CONTEXT: what prompted this project, who it's for, and what \"done\" looked like]"] },
      { id: "problem", label: "02", heading: "Problem Statement", body: ["[ADD PROBLEM VALIDATION: the specific problem SafeHer addresses and why it matters]"] },
      { id: "research", label: "03", heading: "User Research & Insights", body: ["[ADD USER RESEARCH DETAILS: what you learned]"] },
      { id: "ideation", label: "04", heading: "Ideation & Prioritization", body: ["[ADD PRIORITIZATION FRAMEWORK: how you decided what to build]"] },
      { id: "solution", label: "05", heading: "Solution & Product Artifacts", body: ["[ADD FIGMA / UI ARTIFACTS: screenshots, flows, PRD excerpts]"] },
      { id: "metrics", label: "06", heading: "Metrics, Learnings & Next Steps", body: ["[ADD SUCCESS METRICS and what you learned]"] },
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