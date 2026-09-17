// ============================================
// RENDER
// Reads data.js + the current language, writes HTML into the page.
// ============================================
import { i18n, profile, projects, skills, education } from "./data.js";

// Pick the right string for the current language; falls back to a plain string if not bilingual.
function t(field, lang) {
  return typeof field === "object" ? field[lang] : field;
}

export function renderAll(lang) {
  const s = i18n[lang];

  // NAV
  document.getElementById("brand").textContent = profile.name.toUpperCase();
  document.querySelectorAll("[data-nav]").forEach(el => {
    el.textContent = s.nav[el.dataset.nav];
  });

  // HERO
  document.getElementById("eyebrow").textContent = s.eyebrow;
  document.getElementById("hero-title").innerHTML =
    `${profile.name}<br><span>${t(profile.taglineHighlight, lang)}</span> ${t(profile.taglineRest, lang)}`;
  document.getElementById("hero-lead").textContent = s.heroLead;
  document.getElementById("btn-projects").textContent = s.btnProjects;
  document.getElementById("btn-contact").textContent = s.btnContact;

  // ABOUT
  document.getElementById("about-heading").textContent = s.aboutTitle;
  document.getElementById("about-text").innerHTML =
    t(profile.about, lang).map(p => `<p>${p}</p>`).join("");

  const facts = [
    [s.factLabels.location, t(profile.facts.location, lang)],
    [s.factLabels.formation, profile.facts.formation],
    [s.factLabels.level, t(profile.facts.level, lang)],
    [s.factLabels.languages, t(profile.facts.languages, lang)]
  ];
  document.getElementById("about-facts").innerHTML = facts.map(([label, value]) =>
    `<li><span class="label mono">${label}</span><span>${value}</span></li>`
  ).join("");

  // PROJECTS
  document.getElementById("projects-heading").textContent = s.projectsTitle;
  document.getElementById("project-grid").innerHTML = projects.map(p => `
    <div class="project">
      <div class="tag-row">
        ${p.tags.map(tag => `<span class="tag ${tag.type}">${tag.label}</span>`).join("")}
      </div>
      <h3>${t(p.title, lang)}</h3>
      ${p.period ? `<div class="project-period mono">${p.period}</div>` : ""}
      <p>${t(p.description, lang)}</p>
      <div class="links">
        <a href="${p.codeUrl}" target="_blank">${s.sourceCode}</a>
        ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank">${s.demo}</a>` : ""}
      </div>
    </div>
  `).join("");

  // SKILLS
  document.getElementById("skills-heading").textContent = s.skillsTitle;
  const skillGroups = [
    [s.skillGroups.core, skills.core],
    [s.skillGroups.fundamentals, skills.fundamentals],
    [s.skillGroups.specializations, skills.specializations]
  ];
  document.getElementById("skills-cols").innerHTML = skillGroups.map(([title, items]) => `
    <div>
      <h3>${title}</h3>
      <ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
  `).join("");

  // EDUCATION
  document.getElementById("education-heading").textContent = s.educationTitle;
  document.getElementById("education-note").textContent = s.educationNote;
  document.getElementById("edu-timeline").innerHTML = education.map(e => `
    <div class="edu-sem">
      <div class="sem-label mono">${s.semester} ${e.semester}</div>
      <div class="edu-modules">${e.modules.map(m => `<span>${m}</span>`).join("")}</div>
    </div>
  `).join("");

  // CONTACT
  document.getElementById("contact-heading-small").textContent = s.contactTitle;
  document.getElementById("contact-heading").textContent = s.contactHeading;
  const links = [`<a href="mailto:${profile.email}">Email</a>`];
  if (profile.github) links.push(`<a href="${profile.github}" target="_blank">GitHub</a>`);
  if (profile.linkedin) links.push(`<a href="${profile.linkedin}" target="_blank">LinkedIn</a>`);
  document.getElementById("contact-links").innerHTML = links.join("");
  document.getElementById("foot-note").textContent =
    `© ${new Date().getFullYear()} ${profile.name} — Portfolio`;
}