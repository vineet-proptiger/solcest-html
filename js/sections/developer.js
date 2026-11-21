/**
 * ========================================================
 * ABOUT DEVELOPER SECTION CONFIGURATION & DATA
 * ========================================================
 * Edit this file to update the About Developer section!
 */

// window.DEVELOPER_NAME = "Bricks & Milestones";

window.DEVELOPER_DATA = {
  // Heading
  title: "About Bricks & Milestones",

  // Developer Description
  description:
    "Bricks & Milestone presents Solcrest, a thoughtfully envisioned residential development focused on contemporary architecture, refined living, and everyday comfort. The project brings together well-designed residences, premium lifestyle amenities, landscaped surroundings, and a sophisticated community environment. With an emphasis on quality, functionality, and modern urban living, Solcrest is designed to offer residents an elevated lifestyle in a well-connected and desirable location.",

  // Right Side Touch Card
  cardHeading: "GET IN TOUCH",
  cardDescription:
    "Let’s connect and bring your ideas to life. Reach out today for expert guidance, quick responses, and solutions tailored perfectly to your needs.",
};

window.renderDeveloperSection = function () {
  const data = window.DEVELOPER_DATA;
  if (!data) return;

  // 1. Heading
  const titleEl = document.querySelector("#about-us h3");
  if (titleEl && data.title) titleEl.textContent = data.title;

  // 2. Developer Description
  const descEl = document.querySelector("#about-us .col-lg-6:first-child p");
  if (descEl && data.description) descEl.textContent = data.description;

  // 3. Card Heading
  const cardHeading = document.querySelector("#about-us .get-in-touch-card h3");
  if (cardHeading && data.cardHeading) cardHeading.textContent = data.cardHeading;

  // 4. Card Description
  const cardDesc = document.querySelector("#about-us .get-in-touch-card p");
  if (cardDesc && data.cardDescription) cardDesc.textContent = data.cardDescription;

  // 5. Card Button (if any)
  const cardBtn = document.querySelector("#about-us .get-in-touch-card .orbit-btn span, #about-us .get-in-touch-card button span");
  if (cardBtn && data.buttonText) {
    cardBtn.textContent = data.buttonText;
  }

  // 6. Card Background (Clean gradient, image removed)
  const touchCard = document.querySelector("#about-us .get-in-touch-card");
  if (touchCard) {
    if (data.cardBgImage) {
      touchCard.style.backgroundImage = `linear-gradient(135deg, rgba(32, 22, 18, 0.84) 0%, rgba(48, 26, 18, 0.88) 100%), url("${data.cardBgImage}")`;
    } else {
      touchCard.style.backgroundImage = "none";
      touchCard.style.background = "linear-gradient(135deg, #201612 0%, #301a12 100%)";
    }
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.renderDeveloperSection);
} else {
  window.renderDeveloperSection();
}
