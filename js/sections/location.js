/**
 * ========================================================
 * LOCATION SECTION CONFIGURATION & DATA
 * ========================================================
 * Edit this file to update the Location Advantages section!
 */

window.LOCATION_DATA = {
  // Heading
  title: "Location Advantages",

  // Button Name
  buttonText: "Schedule Free Site Visit",

  // Google Map Embed URL
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.136423985392!2d77.65256247598926!3d13.064506987258384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1727771ea001%3A0x6bce5092a1cb8ec4!2sBricks%20%26%20Milestones%20Solcrest!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",

  // Key Landmarks
  landmarks: [
    {
      name: "Hennur Main Road & ORR",
      distance: "3.5 km",
      icon: "fa-solid fa-road"
    },
    {
      name: "Ryan International School",
      distance: "7.8 km",
      icon: "fa-solid fa-graduation-cap"
    },
    {
      name: "Kempegowda International Airport (KIA)",
      distance: "28 km",
      icon: "fa-solid fa-plane-departure"
    },
    {
      name: "Manyata Tech Park",
      distance: "12 km",
      icon: "fa-solid fa-building"
    },
    {
      name: "Outer Ring Road (ORR) Junction",
      distance: "9.5 km",
      icon: "fa-solid fa-route"
    },
    {
      name: "Kalyan Nagar / HRBR Layout",
      distance: "11 km",
      icon: "fa-solid fa-city"
    },
    {
      name: "Delhi Public School (DPS) Bangalore North",
      distance: "4.2 km",
      icon: "fa-solid fa-school"
    },
    {
      name: "Manipal Hospital Hebbal",
      distance: "6.0 km",
      icon: "fa-solid fa-hospital"
    }
  ]
};

window.renderLocationSection = function () {
  const data = window.LOCATION_DATA;
  if (!data) return;

  // 1. Heading
  const titleEl = document.querySelector("#location h3");
  if (titleEl && data.title) titleEl.textContent = data.title;

  // 2. Button Text
  const btnSpan = document.querySelector(
    "#location button span, #location .orbit-btn span, #location a.orbit-btn span"
  );
  if (btnSpan && data.buttonText) {
    btnSpan.innerHTML = `<i class="bounce-arrow fa-solid text-white fa-download"></i> ${data.buttonText}`;
  }

  // 3. Map URL
  const iframe = document.querySelector("#location iframe");
  if (iframe && data.mapUrl) iframe.src = data.mapUrl;

  // 4. Landmarks List
  const leftContainer = document.querySelector(
    "#location .col-lg-6:first-child .circuit-col > div[style*='flex-direction: column']"
  );
  const rightContainer = document.querySelector(
    "#location .col-lg-6:last-child .circuit-col > div[style*='flex-direction: column']"
  );

  if (!leftContainer || !rightContainer || !data.landmarks) return;

  const half = Math.ceil(data.landmarks.length / 2);
  const leftItems = data.landmarks.slice(0, half);
  const rightItems = data.landmarks.slice(half);

  const renderCircuitItem = (item) => `
    <div class="circuit-row" style="position: relative">
      <div
        class="circuit-btn"
        data-bs-toggle="modal"
        data-bs-target="#leadModal"
        style="
          display: flex;
          align-items: center;
          width: 100%;
          padding: 14px 16px 14px 0;
          border-radius: 12px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        "
      >
        <div style="width: 35px; flex-shrink: 0; display: flex; align-items: center; justify-content: flex-end;">
          <div style="height: 2px; width: 16px; background-color: #b95734; border-radius: 999px;"></div>
        </div>
        <div class="circuit-hex" style="position: relative; width: 44px; height: 44px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease;">
          <svg viewBox="0 0 44 44" style="position: absolute; inset: 0; width: 100%; height: 100%; filter: drop-shadow(0 2px 5px rgba(185, 87, 52, 0.2));">
            <polygon points="22,3 38.5,12.5 38.5,31.5 22,41 5.5,31.5 5.5,12.5" fill="#fdfbf7" stroke="#B95734" stroke-width="2.2" stroke-linejoin="round" />
          </svg>
          <i class="${item.icon}" style="position: relative; z-index: 10; font-size: 14px; color: #b95734;"></i>
        </div>
        <div style="margin-left: 16px; flex-grow: 1; display: flex; align-items: center; justify-content: space-between;">
          <h4 class="circuit-title" style="font-size: 15px; font-weight: 700; margin: 0; letter-spacing: -0.2px;">
            ${item.name}
          </h4>
          <span class="circuit-distance-badge">${item.distance}</span>
        </div>
      </div>
    </div>
  `;

  leftContainer.innerHTML = leftItems.map(renderCircuitItem).join("");
  rightContainer.innerHTML = rightItems.map(renderCircuitItem).join("");
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.renderLocationSection);
} else {
  window.renderLocationSection();
}
