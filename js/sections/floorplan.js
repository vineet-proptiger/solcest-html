/**
 * ========================================================
 * FLOOR PLAN & MASTER PLAN CONFIGURATION & DATA
 * ========================================================
 * Edit this file to update the Floor Plan section!
 */

window.FLOORPLAN_DATA = {
  // Heading
  title: "Floor Plan",

  // Default Button Text
  buttonText: "Request Plan",

  // Plans
  plans: [
    {
      title: "Master Plan Layout",
      image: "images/masterplan/master-plan.webp",
      buttonText: "Master Plan"
    },
    {
      title: "Unit Plan Layout",
      image: "images/masterplan/floor-plan.webp",
      buttonText: "Floor Plan"
    }
  ]
};

window.renderFloorplanSection = function () {
  const data = window.FLOORPLAN_DATA;
  if (!data) return;
  if (!data.plans) return;

  // 1. Heading
  const titleEl = document.querySelector("#floor-plan h3");
  if (titleEl && data.title) titleEl.textContent = data.title;

  const row = document.querySelector("#floor-plan .row.g-4");
  if (!row) return;

  let html = `
    <div class="col-12 text-center mb-4">
      <h3 class="fw-semibold text-green">${data.title}</h3>
      <div
        class="mx-auto mt-2"
        style="width: 60px; height: 2.5px; background: var(--theme-primary, #b95734); border-radius: 2px;"
      ></div>
    </div>
  `;

  data.plans.forEach((plan) => {
    const btnLabel = plan.buttonText ? plan.buttonText : data.buttonText;
    html += `
      <div class="col-md-6">
        <div class="plan-card">
          <img src="${plan.image}" alt="${plan.title}" />
          <div class="plan-overlay-text">${plan.title}</div>
          <div class="plan-overlay">
            <button
              class="orbit-btn plan-btn w-25"
              data-bs-toggle="modal"
              data-bs-target="#leadModal"
            >
              ${btnLabel}
            </button>
          </div>
        </div>
      </div>
    `;
  });

  row.innerHTML = html;
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.renderFloorplanSection);
} else {
  window.renderFloorplanSection();
}
