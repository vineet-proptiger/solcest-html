/**
 * ========================================================
 * ABOUT SECTION CONFIGURATION & DATA
 * ========================================================
 * Edit this file to update the Overview / About Solcrest section!
 */

window.ABOUT_DATA = {
  // Heading
  title: "About Solcrest",

  // Button Name (if button exists)
  buttonText: "Download Brochure",

  // Content
  description: `Prestige Sector 92 Gurgaon is presented here as an upcoming / coming-soon residential development. Buyers searching for Prestige City Gurgaon, Prestige 92 Gurgaon or Prestige Gurgaon can register here for verified project updates.
The final project name, land area, apartment sizes, tower details, pricing, floor plans, amenities, launch date, possession schedule and HRERA registration are subject to official release. This page separates expected information from confirmed information, so you can register for updates without speculative details being presented as final.`,
  
    stats: [
    { value: "20+", label: "MODERN AMENITIES" },
    { value: "74", label: "LUXURY VILLAS" }
  ],
  image: "images/about/about.webp"
};

window.renderAboutSection = function () {
  const data = window.ABOUT_DATA;
  if (!data) return;

  // 1. Heading
  const titleEl = document.querySelector("#overview .section-title");
  if (titleEl && data.title) titleEl.textContent = data.title;

  // 2. Button (if any button exists inside #overview)
  const btnEl = document.querySelector("#overview .orbit-btn, #overview button, #overview .btn");
  if (btnEl && data.buttonText) {
    const span = btnEl.querySelector("span");
    if (span) span.textContent = data.buttonText;
    else btnEl.textContent = data.buttonText;
  }

  // 3. Description
  const descEl = document.querySelector("#overview .section-text");
  if (descEl && data.description) {
    descEl.style.whiteSpace = "pre-line";
    descEl.textContent = data.description;
  }

  // 4. Image (Show if defined, Hide if commented out)
  const imgWrapper = document.querySelector("#overview .image-wrapper");
  if (imgWrapper) {
    if (data.image) {
      imgWrapper.style.display = "";
      const imgEl = imgWrapper.querySelector("img");
      if (imgEl) imgEl.src = data.image;
    } else {
      imgWrapper.style.display = "none";
    }
  }

  // 5. Stats
  const statsContainer = document.querySelector("#overview .overview-stats-strip .d-flex");
  if (statsContainer && data.stats && data.stats.length > 0) {
    let html = "";
    data.stats.forEach((stat, idx) => {
      const isFirst = idx === 0;
      html += `
        <div class="${isFirst ? 'pe-4 pe-lg-5' : ''}" style="${isFirst ? 'border-right: 1.5px solid #d5cec5' : ''}">
          <h3 style="color: #0b2d52; font-size: 30px; font-weight: 800; margin: 0 0 3px; font-family: 'Poppins', sans-serif; letter-spacing: -0.5px;">
            ${stat.value}
          </h3>
          <span style="color: #6c757d; font-size: 11.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; font-family: 'Poppins', sans-serif; display: block;">
            ${stat.label}
          </span>
        </div>
      `;
    });
    statsContainer.innerHTML = html;
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.renderAboutSection);
} else {
  window.renderAboutSection();
}
