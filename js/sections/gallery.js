/**
 * ========================================================
 * GALLERY SECTION CONFIGURATION & DATA
 * ========================================================
 * Edit this file to update the Project Gallery!
 */

window.GALLERY_DATA = {
  // Heading
  title: "Project Gallery",

  // Button Name (if button exists)
  buttonText: "View Gallery",

  // Images (Updated to accurately match the project gallery photos)
  images: [
    { src: "images/gallery/g1.webp", title: "Designer Kids Bedroom" },
    { src: "images/gallery/g2.webp", title: "Clubhouse & Central Plaza" },
    { src: "images/gallery/g3.webp", title: "Master Bedroom Suite" },
    { src: "images/gallery/g4.webp", title: "Luxury Reception & Wellness Lounge" },
    { src: "images/gallery/g5.webp", title: "Panoramic Balcony Deck" }
  ]
};

window.renderGallerySection = function () {
  const data = window.GALLERY_DATA;
  if (!data) return;
  if (!data.images) return;

  // 1. Heading
  const titleEl = document.querySelector("#gallery .section-title");
  if (titleEl && data.title) titleEl.textContent = data.title;

  // 2. Button (if any)
  const btnEl = document.querySelector("#gallery .orbit-btn, #gallery button");
  if (btnEl && data.buttonText) {
    const span = btnEl.querySelector("span");
    if (span) span.textContent = data.buttonText;
    else btnEl.textContent = data.buttonText;
  }

  // 3. Grid
  const grid = document.querySelector("#gallery .bento-gallery-grid");
  if (!grid) return;

  let html = "";
  data.images.forEach((img, idx) => {
    const isHero = idx === 0 ? "bento-hero" : "";
    html += `
      <div class="bento-card ${isHero}" data-index="${idx}">
        <img src="${img.src}" alt="${img.title}" loading="lazy" />
        <div class="bento-overlay">
          <div class="bento-zoom-btn">
            <i class="fa-solid fa-expand"></i>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;

  // Rebind lightbox listeners dynamically
  window.initGalleryLightbox();
};

window.initGalleryLightbox = function () {
  const data = window.GALLERY_DATA;
  const galleryItems = (data && data.images) ? data.images : [];
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxCounter = document.getElementById("lightboxCounter");

  let currentIndex = 0;

  function showImage(index) {
    if (galleryItems.length === 0) return;
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    currentIndex = index;

    if (!lightboxImg) return;
    lightboxImg.style.opacity = "0.2";
    setTimeout(() => {
      lightboxImg.src = galleryItems[currentIndex].src;
      if (lightboxCaption) {
        lightboxCaption.textContent = galleryItems[currentIndex].title ? galleryItems[currentIndex].title : "";
      }
      if (lightboxCounter) {
        lightboxCounter.textContent = (currentIndex + 1) + " / " + galleryItems.length;
      }
      lightboxImg.style.opacity = "1";
    }, 120);
  }

  // Attach click to all dynamic cards
  document.querySelectorAll(".bento-card").forEach((card) => {
    card.onclick = function (e) {
      if (e) e.preventDefault();
      const parsedIdx = parseInt(this.getAttribute("data-index"), 10);
      const idx = isNaN(parsedIdx) ? 0 : parsedIdx;
      if (typeof window.openCustomLightbox === "function") {
        window.openCustomLightbox(galleryItems, idx);
      } else {
        showImage(idx);
        if (lightbox) lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    };
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.renderGallerySection);
} else {
  window.renderGallerySection();
}
