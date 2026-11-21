/**
 * ========================================================
 * AMENITIES SECTION CONFIGURATION & DATA
 * ========================================================
 * Edit this file to update the Amenities section!
 */

window.AMENITIES_DATA = {
  // Heading
  title: "Wellness Amenities",

  // Button Name
  buttonText: "Explore All Amenities",

  // Amenities Items
  items: [
    {
      title: "Gymnasium",
      image: "images/amenities/a1.webp"
    },
    {
      title: "Jacuzzi & Wellness Spa",
      image: "images/amenities/a2.webp"
    },
    {
      title: "Swimming Pool & Kids' Pool",
      image: "images/amenities/a3.webp"
    },
    {
      title: "Mini Theatre & Lounge",
      image: "images/amenities/a4.webp"
    },
    {
      title: "Virtual Golf Simulator",
      image: "images/amenities/a5.webp"
    },
    {
      title: "Yoga & Aerobics Studio",
      image: "images/amenities/a6.webp"
    }
  ]
};

window.renderAmenitiesSection = function () {
  const data = window.AMENITIES_DATA;
  if (!data || !data.items) return;

  // 1. Heading
  const titleEl = document.querySelector("#amenities h3");
  if (titleEl && data.title) titleEl.textContent = data.title;

  // 2. Carousel Items
  const scrollBox = document.getElementById("amenitiesScroll");
  if (scrollBox) {
    let colsHtml = "";
    for (let i = 0; i < data.items.length; i += 2) {
      const item1 = data.items[i];
      const item2 = data.items[i + 1];

      colsHtml += `
        <div class="amenity-col">
          ${
            item1
              ? `
            <div class="amenity-card" data-bs-toggle="modal" data-bs-target="#leadModal">
              <img src="${item1.image}" alt="${item1.title}" loading="lazy" />
              <span>${item1.title}</span>
            </div>
          `
              : ""
          }
          ${
            item2
              ? `
            <div class="amenity-card" data-bs-toggle="modal" data-bs-target="#leadModal">
              <img src="${item2.image}" alt="${item2.title}" loading="lazy" />
              <span>${item2.title}</span>
            </div>
          `
              : ""
          }
        </div>
      `;
    }
    scrollBox.innerHTML = colsHtml;
  }

  // 3. Button Text
  const btnSpan = document.querySelector("#amenities .orbit-btn span");
  if (btnSpan && data.buttonText) {
    btnSpan.innerHTML = `<i class="fa-solid fa-list-check me-2"></i> ${data.buttonText}`;
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.renderAmenitiesSection);
} else {
  window.renderAmenitiesSection();
}
