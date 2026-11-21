/**
 * ========================================================
 * HERO SECTION CONFIGURATION & DATA
 * ========================================================
 * Edit this file to update the Hero section!
 * Updates both Desktop and Mobile automatically.
 */

window.HERO_DATA = {
  // Headings & Labels
  statusBadge: "Pre Launch",
  projectName: "Prestige Sector 92",
  location: "Sector 92, New Gurgaon",
  pricePrefix: "Price Starts at",
  priceValue: "On Request",

  // CTA Button Text
  buttonText: "Enquire Now",

  // Banners
  banners: [
    { src: "images/hero/banner1.webp", alt: "An Iconic Architectural Elevation" },
    { src: "images/hero/banner2.webp", alt: "A Landmark in Modern Architecture" }
  ],

  // USPs
  usps: [
    {
      title: "2,3 & 4 BHK",
      sub: "Apartments",
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B95734" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4v18M13 10l6 3v8M9 9v.01M9 13v.01M9 17v.01M17 15v.01M17 18v.01"/></svg>'
    },
    {
      title: "Vastu",
      sub: "Oriented Homes",
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B95734" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#B95734" fill-opacity="0.22" /></svg>'
    },
    {
      title: "17.2-Acre",
      sub: "Project Area",
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B95734" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16" /><path d="M7 22V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v18" /><path d="M11 6h2" /><path d="M11 10h2" /><path d="M11 14h2" /><path d="M11 18h2" /></svg>'
    },
    {
      title: "Panoramic",
      sub: "Views",
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B95734" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z" /></svg>'
    }
  ]
};

window.renderHeroSection = function () {
  const data = window.HERO_DATA;
  if (!data) return;

  const btnText = data.buttonText;

  // 0. Dynamic Hero Banners & Slider
  const heroLeft = document.querySelector(".hero-left");
  if (heroLeft && data.banners && data.banners.length > 0) {
    const existingImgs = heroLeft.querySelectorAll(":scope > img");
    existingImgs.forEach(img => img.remove());

    let bannersHtml = "";
    data.banners.forEach((b, idx) => {
      const activeClass = idx === 0 ? "active" : "";
      bannersHtml += `<img src="${b.src}" class="${activeClass}" alt="${b.alt}" />\n`;
    });
    heroLeft.insertAdjacentHTML("afterbegin", bannersHtml);

    // Dynamic slideshow
    if (window.heroSliderInterval) {
      clearInterval(window.heroSliderInterval);
    }
    const slides = heroLeft.querySelectorAll(":scope > img");
    if (slides.length > 1) {
      let currentSlide = 0;
      window.heroSliderInterval = setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
      }, 4000);
    }
  }

  // 1. Status Badge
  const statusEl = document.querySelector(".hero-status-badge .badge-value");
  if (statusEl && data.statusBadge) statusEl.textContent = data.statusBadge;

  // 2. Project Title / Heading (Desktop & Mobile)
  const dTitle = document.querySelector(".hero-brand-title");
  if (dTitle && data.projectName) dTitle.textContent = data.projectName;
  const mTitle = document.querySelector(".mobile-hero-title");
  if (mTitle && data.projectName) mTitle.textContent = data.projectName;

  // 3. Location / Sub-Heading (Desktop & Mobile)
  const dLoc = document.querySelector(".hero-brand-text");
  if (dLoc && data.location) dLoc.textContent = data.location;
  const mLoc = document.querySelector(".mobile-hero-location");
  if (mLoc && data.location) mLoc.textContent = data.location;

  // 4. Price (Desktop & Mobile)
  const dPill = document.querySelector(".hero-badge-pill");
  if (dPill && data.priceValue) {
    dPill.innerHTML = `<span class="hero-price-prefix">${data.pricePrefix}</span> <span class="blinking-price price-bling-anim">${data.priceValue}</span>`;
  }
  const mPrice = document.querySelector(".hero-cta.mobile .price");
  if (mPrice && data.priceValue) {
    mPrice.innerHTML = `<span class="price-prefix">${data.pricePrefix}</span> <span class="price-bling-anim-mobile">${data.priceValue}</span>`;
  }

  // 5. Desktop Bottom Bar USPs & Button
  const dBar = document.querySelector(".hero-bottom-bar");
  if (dBar && data.usps && data.usps.length > 0) {
    let dHtml = "";
    data.usps.forEach((item, idx) => {
      if (idx > 0) dHtml += '<div class="hero-bar-divider"></div>';
      dHtml += `
        <div class="hero-bar-item">
          <div class="hero-bar-icon">${item.icon}</div>
          <div class="hero-bar-info">
            <span class="hero-bar-title" style="white-space: nowrap">${item.title}</span>
            <span class="hero-bar-sub">${item.sub}</span>
          </div>
        </div>
      `;
    });
    dHtml += `
      <button type="button" class="hero-bar-btn" data-bs-toggle="modal" data-bs-target="#leadModal">
        <span>${btnText}</span>
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    `;
    dBar.innerHTML = dHtml;
  } else {
    const dBtn = document.querySelector(".hero-bar-btn span");
    if (dBtn && btnText) dBtn.textContent = btnText;
  }

  // 6. Mobile 4-USP Grid
  const mGrid = document.querySelector(".mobile-usp-grid");
  if (mGrid && data.usps && data.usps.length > 0) {
    let mHtml = "";
    data.usps.forEach((item) => {
      mHtml += `
        <div class="mobile-usp-item">
          <div class="mobile-usp-icon">${item.icon}</div>
          <div class="mobile-usp-info">
            <strong class="mobile-usp-title">${item.title}</strong>
            <span class="mobile-usp-sub">${item.sub}</span>
          </div>
        </div>
      `;
    });
    mGrid.innerHTML = mHtml;
  }

  // 7. Mobile CTA Button Text
  const mBtnSpan = document.querySelector(".hero-cta.mobile .orbit-btn span, .hero-cta.mobile button span");
  if (mBtnSpan && btnText) {
    mBtnSpan.innerHTML = `<i class="fa-solid fa-download"></i> ${btnText}`;
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.renderHeroSection);
} else {
  window.renderHeroSection();
}
