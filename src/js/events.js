import events from "../data/events.json";

// aendre "2026-12-12" til "12 dec"
function formatDate(isoDate) {
  return new Date(isoDate)
    .toLocaleDateString("da-DK", { day: "numeric", month: "short" })
    .replace(/\./g, "");
}

//finder image - virker efter npm run build
function imageUrl(fileName) {
  return new URL(`../images/${fileName}`, import.meta.url).href;
}

function createCard(event) {
  return `
    <li class="event-card">
      <a class="event-card__link" href="event.html?id=${event.id}">
        <img class="event-card__image" src="${imageUrl(event.image)}" alt="" />
        <div class="event-card__body">
          <time class="event-card__date" datetime="${event.date}">${formatDate(event.date)}</time>
          <h3 class="event-card__title">${event.title}</h3>
        </div>
      </a>
    </li>`;
}

export function renderEvents() {
  const today = new Date().toISOString().slice(0, 10);

  const upcoming = events
    .filter((event) => event.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  document.querySelectorAll("[data-events]").forEach((list) => {
    const limit = Number(list.dataset.limit) || upcoming.length;
    list.innerHTML = upcoming.slice(0, limit).map(createCard).join("");
  });
}