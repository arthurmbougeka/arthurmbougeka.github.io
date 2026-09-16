// ============================================
// MAIN
// App state (theme + language) and event wiring.
// ============================================
import { renderAll } from "./render.js";

const THEME_KEY = "portfolio-theme";
const LANG_KEY = "portfolio-lang";

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved) return saved;
  return navigator.language.startsWith("de") ? "de" : "en";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("theme-toggle").textContent = theme === "dark" ? "☀" : "☾";
  localStorage.setItem(THEME_KEY, theme);
}

function applyLang(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.getElementById("lang-toggle").textContent = lang === "en" ? "DE" : "EN";
  localStorage.setItem(LANG_KEY, lang);
  renderAll(lang);
}

function init() {
  let theme = getInitialTheme();
  let lang = getInitialLang();

  applyTheme(theme);
  applyLang(lang);

  document.getElementById("theme-toggle").addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme(theme);
  });

  document.getElementById("lang-toggle").addEventListener("click", () => {
    lang = lang === "en" ? "de" : "en";
    applyLang(lang);
  });

  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("navlinks");
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}

document.addEventListener("DOMContentLoaded", init);