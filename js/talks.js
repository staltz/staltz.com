(() => {
  const grid = document.querySelector(".talk-grid");
  const buttons = document.querySelectorAll(".talk-sort");

  if (!grid || buttons.length === 0) return;

  const cards = Array.from(grid.querySelectorAll(".talk-card"));

  function sortTalks(sortBy) {
    const sorted = cards.slice().sort((a, b) => {
      if (sortBy === "views") {
        const byViews = Number(b.dataset.views) - Number(a.dataset.views);
        if (byViews !== 0) return byViews;
      }

      return b.dataset.date.localeCompare(a.dataset.date);
    });

    grid.append(...sorted);

    buttons.forEach((button) => {
      const active = button.dataset.sort === sortBy;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => sortTalks(button.dataset.sort));
  });
})();
