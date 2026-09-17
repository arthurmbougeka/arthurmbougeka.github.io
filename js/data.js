// ============================================
// DATA
// All editable content lives here.
// - Add a project: add an object to `projects`
// - Add/change a skill: edit `skills`
// - Fix your bio: edit `profile.about`
// - UI labels (nav, buttons, headings) live in `i18n`, per language
// ============================================

// ---- UI strings, per language ----
export const i18n = {
  en: {
    nav: { about: "About", projects: "Projects", skills: "Skills", education: "Education", contact: "Contact" },
    eyebrow: "// computer science student — germany",
    heroLead: "I'm a student passionate about web development and AI engineering.",
    btnProjects: "See my projects",
    btnContact: "Contact me",
    aboutTitle: "About",
    projectsTitle: "Projects",
    skillsTitle: "Skills",
    educationTitle: "Education",
    educationNote: "Modules validated at Hochschule Darmstadt, official German course titles kept as-is.",
    contactTitle: "Contact",
    contactHeading: "A question, an opportunity? Write me.",
    sourceCode: "Source code",
    demo: "Demo",
    semester: "Semester",
    factLabels: { location: "LOCATION", formation: "FORMATION", level: "LEVEL", languages: "LANGUAGES" },
    skillGroups: { core: "LANGUAGES & FRAMEWORKS", fundamentals: "CORE CS", specializations: "SPECIALIZATIONS & TOOLS" }
  },
  de: {
    nav: { about: "Über mich", projects: "Projekte", skills: "Fähigkeiten", education: "Studium", contact: "Kontakt" },
    eyebrow: "// informatikstudent — deutschland",
    heroLead: "Ich bin ein Student mit Leidenschaft für Webentwicklung und KI-Engineering.",
    btnProjects: "Meine Projekte ansehen",
    btnContact: "Kontaktiere mich",
    aboutTitle: "Über mich",
    projectsTitle: "Projekte",
    skillsTitle: "Fähigkeiten",
    educationTitle: "Studium",
    educationNote: "Module, die an der Hochschule Darmstadt bestanden wurden — offizielle deutsche Modulnamen beibehalten.",
    contactTitle: "Kontakt",
    contactHeading: "Eine Frage, eine Gelegenheit? Schreib mir.",
    sourceCode: "Quellcode",
    demo: "Demo",
    semester: "Semester",
    factLabels: { location: "STANDORT", formation: "AUSBILDUNG", level: "NIVEAU", languages: "SPRACHEN" },
    skillGroups: { core: "SPRACHEN & FRAMEWORKS", fundamentals: "INFORMATIK-GRUNDLAGEN", specializations: "SCHWERPUNKTE & TOOLS" }
  }
};

// ---- Profile ----
export const profile = {
  name: "Arthur Mbougeka",
  email: "mbougekaarthur@gmail.com",
  github: "https://github.com/arthurmbougeka",
  linkedin: "", // Add your LinkedIn URL here

  taglineHighlight: { en: "build things", de: "baue Dinge" },
  taglineRest: { en: "with code.", de: "mit Code." },

  about: {
    en: [
      "Computer science student pursuing a B.Sc. at Hochschule Darmstadt, currently in my 5th semester, with a focus on software development, cybersecurity and modern web technologies.",
      "I like solving complex problems in a structured way, learning fast, and taking my own projects from idea to real implementation — from backend/DevOps pipelines to mobile apps built around real user research."
    ],
    de: [
      "Informatikstudent im B.Sc. an der Hochschule Darmstadt, aktuell im 5. Semester, mit Schwerpunkt auf Softwareentwicklung, Cybersicherheit und modernen Web-Technologien.",
      "Ich löse komplexe Probleme gerne strukturiert, lerne schnell und bringe eigene Projekte von der Idee bis zur echten Umsetzung — von Backend-/DevOps-Pipelines bis zu mobilen Apps, die auf echter Nutzerforschung basieren."
    ]
  },

  facts: {
    location: { en: "Darmstadt, Germany", de: "Darmstadt, Deutschland" },
    formation: "Hochschule Darmstadt",
    level: { en: "5th semester", de: "5. Semester" },
    languages: { en: "German (C1), English (C1), French (native)", de: "Deutsch (C1), Englisch (C1), Französisch (Muttersprache)" }
  }
};

// ---- Projects ----
// codeUrl: put the real GitHub repo link here (e.g. "https://github.com/arthurmbougeka/repo-name")
// demoUrl: optional, only if the project has a live demo/deployment
export const projects = [
  {
    title: {
      en: "Backend Development & DevOps Integration for a Production Web App",
      de: "Backend-Entwicklung & DevOps-Integration einer produktiven Webanwendung"
    },
    period: "Oct 2025 – Feb 2026",
    tags: [
      { label: "Python", type: "blue" }, { label: "FastAPI", type: "" }, { label: "Docker", type: "" },
      { label: "Kubernetes", type: "red" }, { label: "CI/CD", type: "" }
    ],
    description: {
      en: "Implemented REST endpoints, database migrations and automated test suites (unit, integration, service). Built the CI/CD pipeline with containerized deployment and centralized logging via Graylog.",
      de: "Implementierung von REST-Endpunkten, Datenbankmigrationen und automatisierten Testsuiten (Unit, Integration, Service). Aufbau der CI/CD-Pipeline mit containerisiertem Deployment und zentralisiertem Logging via Graylog."
    },
    codeUrl: "#",
    demoUrl: ""
  },
  {
    title: {
      en: "Field Hockey Referee Mobile App",
      de: "Mobile Schiedsrichter-Applikation für Feldhockey"
    },
    period: "Nov 2025 – Mar 2026",
    tags: [
      { label: "Flutter", type: "yellow" }, { label: "Dart", type: "" }, { label: "UI Design", type: "" }, { label: "User Research", type: "" }
    ],
    description: {
      en: "Full product cycle: user research, structured interviews, prototyping and UI design through to native implementation — focused on user-friendly game management and real-time tracking.",
      de: "Gesamter Produktzyklus: Nutzerforschung, strukturierte Interviews, Prototyping und UI-Design bis zur nativen Implementierung — mit Fokus auf benutzerfreundliche Spielverwaltung und Echtzeit-Verfolgung."
    },
    codeUrl: "#",
    demoUrl: ""
  },
  {
    title: {
      en: "Web-Based Pizza Ordering System (LAMP Stack)",
      de: "Webbasiertes Pizzaservice-Bestellsystem (LAMP-Stack)"
    },
    period: "Apr 2026 – Jul 2026",
    tags: [
      { label: "PHP", type: "blue" }, { label: "MySQL", type: "" }, { label: "JavaScript", type: "" }, { label: "Apache", type: "" }
    ],
    description: {
      en: "Managed the full order process — from order placement through processing to delivery. Custom framework architecture built with PHP, MySQL and Apache.",
      de: "Verwaltung des vollständigen Bestellprozesses — von der Auftragsannahme über die Bearbeitung bis zur Lieferung. Eigenständige Framework-Architektur mit PHP, MySQL und Apache."
    },
    codeUrl: "#",
    demoUrl: ""
  }
];

// ---- Skills (grouped from your validated coursework) ----
export const skills = {
  core: ["C++", "Python", "Java", "C", "SQL", "Dart", "Qt"],
  fundamentals: [
    "Algorithms & Data Structures", "Object-Oriented Programming", "Operating Systems",
    "Computer Architecture", "Databases", "Computer Networks", "Theoretical Computer Science", "IT Security"
  ],
  specializations: [
    "Human-Computer Interaction", "Visual Computing", "Artificial Intelligence", "Embedded Systems",
    "Software Engineering", "Web Development", "Project Management", "Git / GitHub", "Linux"
  ]
};

// ---- Education timeline (from your validated semesters) ----
export const education = [
  { semester: 1, modules: ["Algorithmen und Datenstrukturen", "C++", "Grundlagen IT-Sicherheit", "Technische Grundlagen der Informatik", "Mathematik"] },
  { semester: 2, modules: ["C++ (fortgeschritten)", "OOP", "GUI / Qt", "Mathematik", "Objektorientierte Analyse und Datenstrukturen", "Betriebssysteme", "Rechnerarchitektur"] },
  { semester: 3, modules: ["Human Computer Interaction (Flutter, Dart, Prototyping)", "Datenbanken", "Software Engineering", "Rechnernetze", "Theoretische Informatik", "Informatik und Gesellschaft"] },
  { semester: 4, modules: ["Visual Computing", "Künstliche Intelligenz", "Eingebettete Systeme", "Projektmanagement", "Wirtschaftsinformatik", "Entwicklung Webbasierter Anwendungen", "Wissenschaftliches Arbeiten in der Informatik"] }
];