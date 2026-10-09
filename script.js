
const root = document.documentElement;
const body = document.body;

let scale = Number(localStorage.getItem("znp-scale")) || 1;
const applyScale = () => {
  root.style.setProperty("--font-scale", scale.toFixed(2));
  localStorage.setItem("znp-scale", scale.toFixed(2));
};
applyScale();

document.getElementById("fontUp").addEventListener("click", () => {
  scale = Math.min(1.28, scale + .08);
  applyScale();
});
document.getElementById("fontDown").addEventListener("click", () => {
  scale = Math.max(.92, scale - .08);
  applyScale();
});

const contrast = document.getElementById("contrast");
const savedContrast = localStorage.getItem("znp-contrast") === "1";
if (savedContrast) {
  body.classList.add("high-contrast");
  contrast.setAttribute("aria-pressed","true");
}
contrast.addEventListener("click", () => {
  const active = body.classList.toggle("high-contrast");
  contrast.setAttribute("aria-pressed", String(active));
  localStorage.setItem("znp-contrast", active ? "1" : "0");
});

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("mainNav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded","false");
}));
