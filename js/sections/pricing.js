/**
 * ========================================================
 * PRICING SECTION CONFIGURATION & DATA
 * ========================================================
 * Edit this file to update the Pricing section!
 * Updates both Desktop and Mobile automatically.
 */

window.PRICING_DATA = {
  // Heading
  title: "Pricing",

  // Global button text for all pricing cards (can also be customized per unit)
  buttonText: "Complete Costing Details",

  // Units
  units: [
    {
      type: "2 BHK",
      area: "On Request",
      price: "₹ 1.46 Cr* Onwards",
      buttonText: "Complete Costing Details"
    },
    {
      type: "3 BHK",
      area: "On Request",
      price: "₹ On Request",
      buttonText: "Complete Costing Details"
    },
    {
      type: "4 BHK",
      area: "On Request",
      price: "₹ On Request",
      buttonText: "Complete Costing Details"
    }
  ]
};

window.renderPricingSection = function () {
  const data = window.PRICING_DATA;
  if (!data) return;
  if (!data.units) return;

  // 1. Heading
  const titleEl = document.querySelector("#pricing h3");
  if (titleEl && data.title) titleEl.textContent = data.title;

  // 2. Pricing Box Rows & Buttons
  const pricingBox = document.querySelector("#pricing .pricing-box");
  if (!pricingBox) return;

  const head = `
    <div class="row g-0 pricing-head text-white fw-semibold">
      <div class="col-md-3">Type</div>
      <div class="col-md-3">Area</div>
      <div class="col-md-3">Price (Onwards)</div>
      <div class="col-md-3 text-center"></div>
    </div>
  `;

  let rowsHtml = "";
  data.units.forEach((unit) => {
    const btnLabel = unit.buttonText ? unit.buttonText : data.buttonText;
    rowsHtml += `
      <div class="row g-0 pricing-row align-items-center">
        <div class="col-md-3">
          <span class="d-inline d-md-none pricing-mobile-label">Type: </span>${unit.type}
        </div>
        <div class="col-md-3">
          <span class="d-inline d-md-none pricing-mobile-label">Area: </span>${unit.area}
        </div>
        <div class="col-md-3">
          <span class="d-inline d-md-none pricing-mobile-label">Price: </span>${unit.price}
        </div>
        <div class="col-md-3 text-center">
          <a
            href="#"
            class="btn btn-outline-light orbit-btn"
            data-bs-toggle="modal"
            data-bs-target="#leadModal"
          >
            ${btnLabel}
          </a>
        </div>
      </div>
    `;
  });

  pricingBox.innerHTML = head + rowsHtml;
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.renderPricingSection);
} else {
  window.renderPricingSection();
}
