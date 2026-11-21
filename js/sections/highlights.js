/**
 * ========================================================
 * HIGHLIGHTS SECTION CONFIGURATION & DATA
 * ========================================================
 * Edit this file to update the Project Highlights section!
 */

window.HIGHLIGHTS_DATA = {
  // Heading
  title: "Project Highlights",

  // Button Name (if button added)
  buttonText: "Schedule Site Visit",

  // Highlights list
  items: [
    {
      icon: "fa-solid fa-route",
      text: "Premium residential address in a well-connected location"
    },
    {
      icon: "fa-solid fa-compass-drafting",
      text: "Contemporary architecture with thoughtfully designed residences"
    },
    {
      icon: "fa-solid fa-sun",
      text: "Spacious homes designed for natural light & ventilation"
    },
    {
      icon: "fa-solid fa-spa",
      text: "Premium lifestyle amenities for wellness & recreation"
    },
    {
      icon: "fa-solid fa-hotel",
      text: "Elegant arrival spaces & refined hospitality-inspired ambience"
    },
    {
      icon: "fa-solid fa-map-location-dot",
      text: "Landscaped surroundings designed for a peaceful community lifestyle"
    }
  ]
};

window.renderHighlightsSection = function () {
  const data = window.HIGHLIGHTS_DATA;
  if (!data || !data.items) return;

  // 1. Heading
  const titleEl = document.querySelector("#highlights h3");
  if (titleEl && data.title) titleEl.textContent = data.title;

  // 2. Button (if any)
  const btnEl = document.querySelector("#highlights .orbit-btn, #highlights button");
  if (btnEl && data.buttonText) {
    const span = btnEl.querySelector("span");
    if (span) span.textContent = data.buttonText;
    else btnEl.textContent = data.buttonText;
  }

  // 3. Highlights Cards
  const leftCol = document.querySelector("#highlights .col-lg-6:first-child .d-flex");
  const rightCol = document.querySelector("#highlights .col-lg-6:last-child .d-flex");
  if (!leftCol || !rightCol) return;

  const half = Math.ceil(data.items.length / 2);
  const leftItems = data.items.slice(0, half);
  const rightItems = data.items.slice(half);

  const renderList = (items) => {
    return items
      .map(
        (item) => `
        <div class="highlight-ribbon-card">
          <div class="highlight-ribbon-circle">
            <i class="${item.icon}"></i>
          </div>
          <span class="highlight-ribbon-text">${item.text}</span>
        </div>
      `
      )
      .join("");
  };

  leftCol.innerHTML = renderList(leftItems);
  rightCol.innerHTML = renderList(rightItems);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.renderHighlightsSection);
} else {
  window.renderHighlightsSection();
}
