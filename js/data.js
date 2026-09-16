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
      "Replace this paragraph with your presentation: where you're from, what you're studying precisely (e.g. Bachelor in Computer Science at Hochschule Darmstadt), and since when.",
      "Add a second paragraph about what interests you in computer science and a project or experience that stood out to you."
    ],
    de: [
      "Ersetze diesen Absatz durch deine Vorstellung: woher du kommst, was genau du studierst (z. B. Bachelor Informatik an der Hochschule Darmstadt), und seit wann.",
      "Füge einen zweiten Absatz hinzu über das, was dich an der Informatik interessiert, und ein Projekt oder eine Erfahrung, die dich geprägt hat."
    ]
  },

  facts: {
    location: { en: "Germany", de: "Deutschland" },
    formation: "Hochschule Darmstadt",
    level: { en: "Just completed my 4th semester", de: "4. Semester gerade abgeschlossen" },
    languages: { en: "German (C2), English (C1), French (native)", de: "Deutsch (C2), Englisch (C1), Französisch (Muttersprache)" }
  }
};

// ---- Projects ----
// codeUrl: put the real GitHub repo link here (e.g. "https://github.com/arthurmbougeka/repo-name")
// demoUrl: optional, only if the project has a live demo/deployment
export const projects = [
  {
    title: { en: "Project name 1", de: "Projektname 1" },
    tags: [{ label: "C++", type: "blue" }, { label: "School", type: "" }],
    description: {
      en: "Describe in 2-3 sentences the goal of the project, the problem it solved, and what you learned or your contribution.",
      de: "Beschreibe in 2-3 Sätzen das Ziel des Projekts, das gelöste Problem und was du gelernt hast oder dein Beitrag war."
    },
    codeUrl: "#",
    demoUrl: ""
  },
  {
    title: { en: "gr03_Referee", de: "gr03_Referee" },
    tags: [{ label: "Flutter", type: "red" }, { label: "School project", type: "" }],
    description: {
      en: "The goal of this project was to create a mobile application that allows referees to manage and track hockey matches. I contributed by implementing the user interface and integrating the backend services, which enhanced my skills in Flutter development. During this project I learned that building an App that actually meet the expectations of the target individuals group requires many steps such as: find a problem, define the purposes and the success criteria, carry out Interviews and user resesarch, create a prototype and test it with the target group, and finally implement the final version of the App.",
      de: "Das Ziel dieses Projekts war es, eine mobile Anwendung zu erstellen, die es Schiedsrichtern ermöglicht, Hockeyspiele zu verwalten und zu verfolgen. Ich habe zur Implementierung der Benutzeroberfläche und zur Integration der Backend-Dienste beigetragen, was meine Fähigkeiten in der Flutter-Entwicklung verbessert hat. Während dieses Projekts habe ich gelernt, dass die Erstellung einer App, die tatsächlich den Erwartungen der Zielgruppe entspricht, viele Schritte erfordert, wie z. B.: ein Problem finden, die Ziele und Erfolgskriterien definieren, Interviews und Benutzerforschung durchführen, einen Prototyp erstellen und ihn mit der Zielgruppe testen und schließlich die endgültige Version der App implementieren."
    },
    codeUrl: "https://code.fbi.h-da.de/zander/hci/projects/2025_ws/gr03_referee",
    demoUrl: ""
  },
  {
    title: { en: "Project name 3", de: "Projektname 3" },
    tags: [{ label: "SQL", type: "yellow" }, { label: "Group project", type: "" }],
    description: {
      en: "Describe in 2-3 sentences the goal of the project, the problem it solved, and what you learned or your contribution.",
      de: "Beschreibe in 2-3 Sätzen das Ziel des Projekts, das gelöste Problem und was du gelernt hast oder dein Beitrag war."
    },
    codeUrl: "#",
    demoUrl: ""
  },
  {
    title: { en: "Project name 4", de: "Projektname 4" },
    tags: [{ label: "Python", type: "blue" }, { label: "School", type: "" }],
    description: {
      en: "Describe in 2-3 sentences the goal of the project, the problem it solved, and what you learned or your contribution.",
      de: "Beschreibe in 2-3 Sätzen das Ziel des Projekts, das gelöste Problem und was du gelernt hast oder dein Beitrag war."
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