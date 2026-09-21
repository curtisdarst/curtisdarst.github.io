/* Current year in the footer. */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* Mobile navigation. */
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

function closeMenu() {
  links.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open navigation menu");
}

function openMenu() {
  links.classList.add("open");
  toggle.setAttribute("aria-expanded", "true");
  toggle.setAttribute("aria-label", "Close navigation menu");
}

toggle?.addEventListener("click", () => {
  links.classList.contains("open") ? closeMenu() : openMenu();
});

links?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && links?.classList.contains("open")) {
    closeMenu();
    toggle.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeMenu();
});

/* Assemble the mailto at runtime so the address isn't sitting in the
   raw HTML for scrapers. */
const emailEl = document.getElementById("contact-email");
if (emailEl) {
  const address = `${emailEl.dataset.user}@${emailEl.dataset.domain}`;
  emailEl.href = `mailto:${address}`;
  emailEl.setAttribute("aria-label", `Email ${address}`);
}
