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

/* ------------------------------------------------------------------------
   Public repository list.

   The markup already holds a snapshot of the repos, so the section renders
   with or without JavaScript. On load we ask the GitHub API for the current
   set and swap it in. If that fails (offline, rate limited, API down) the
   snapshot stays put and the status line says so.
   ------------------------------------------------------------------------ */

const REPO_OWNER = "curtisdarst";
/* Repos to keep out of the list. Add a name here to hide it. */
const REPO_EXCLUDE = new Set(["curtisdarst.github.io", "github-for-developers-7"]);

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function repoMonth(iso) {
  const d = new Date(iso);
  return Number.isNaN(d.valueOf()) ? "" : `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

function repoRow(repo) {
  const li = document.createElement("li");

  const head = document.createElement("div");
  head.className = "repo-row-head";

  const link = document.createElement("a");
  link.className = "repo-link";
  link.href = repo.html_url;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = repo.name;
  head.appendChild(link);

  if (repo.language) {
    const lang = document.createElement("span");
    lang.className = "repo-lang";
    lang.textContent = repo.language;
    head.appendChild(lang);
  }

  if (repo.stargazers_count) {
    const stars = document.createElement("span");
    stars.className = "repo-stars";
    stars.textContent = `★ ${repo.stargazers_count}`;
    head.appendChild(stars);
  }

  const updated = document.createElement("span");
  updated.className = "repo-updated";
  updated.textContent = `Updated ${repoMonth(repo.pushed_at)}`;
  head.appendChild(updated);

  li.appendChild(head);

  if (repo.description) {
    const desc = document.createElement("p");
    desc.textContent = repo.description;
    li.appendChild(desc);
  }

  return li;
}

async function refreshRepos() {
  const list = document.getElementById("repo-list");
  const status = document.getElementById("repo-status");
  if (!list) return;

  try {
    const response = await fetch(
      `https://api.github.com/users/${REPO_OWNER}/repos?per_page=100&sort=pushed`,
      { headers: { Accept: "application/vnd.github+json" } }
    );
    if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);

    const repos = (await response.json())
      .filter((r) => !r.fork && !r.archived && !r.private && !REPO_EXCLUDE.has(r.name))
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

    if (!repos.length) throw new Error("No public repositories came back.");

    list.replaceChildren(...repos.map(repoRow));
    if (status) {
      status.textContent = `${repos.length} public repositories, live from GitHub`;
      status.classList.add("is-live");
    }
  } catch (error) {
    console.warn("Repository list update failed:", error);
    if (status) status.textContent = "Showing the last saved snapshot · GitHub is temporarily unavailable";
  }
}

refreshRepos();
