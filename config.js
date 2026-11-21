/* ===============================================================
   PROJECT & BACKEND MASTER CONFIGURATION (config.js)
   ---------------------------------------------------------------
   All project details, numbers, GTM, API & Google Sheet settings.
=============================================================== */

// 1. Backend API & Google Sheet Settings

window.PROJECT_ID = "3528118";
window.PROJECT_NAME = "Solcrest";
window.CITY_ID = "2";
window.CITY_DISPLAY = "Bengalore";
window.CITY_SLUG = "bengalore";
window.SHEET_NAME = "bangalore";
window.SECRET_KEY = "6c7f9ad8b2a1e0f4d5a8c0b9f6e2a4d190";

window.SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbw2MGrCI0lVGZZD049RrqM52ubNIHHZLzuk7mIg9KMVacJREV9sw05jnPMvT5OeNtWt/exec";
window.PROPTIGER_URL = "https://www.proptiger.com/data/v1/entity/enquiry";

// 2. Domain & URLs (Change only DOMAIN_NAME - automatically applies everywhere)
window.DOMAIN_NAME = "https://solcrestbybricks.in/";
window.SITE_URL = window.DOMAIN_NAME;
window.BASE_URL = window.DOMAIN_NAME.replace(/\/+$/, "");

// 3. Logo Image
window.LOGO_IMAGE = "images/logo/logo.webp";

// 4. Calling & WhatsApp Details
window.CALL_NO = "919718344024";
window.CALL_DISPLAY = "+91 9718344024";
window.WHATSAPP_NO = "919560582493";
window.WHATSAPP_URL = "https://wa.me/" + window.WHATSAPP_NO + "?text=" + encodeURIComponent("Hi I am interested in " + window.PROJECT_NAME);
window._cLink = window.WHATSAPP_URL;

// 5. Google Tag Manager (GTM)
window.GTM_ID = "GTM-575H8R87";

// 6. Global Buttons (Mobile Sticky Bar)
window.GLOBAL_BUTTONS = {
  mobileCall: "Call Us",
  mobileEnquire: "ENQUIRE",
  mobileWhatsApp: "WhatsApp"
};

// 7. Auto-bind Call, WhatsApp, RERA & Global Buttons across UI
window.applyProjectConfig = function () {
  // Update WhatsApp links
  const waUrl = "https://wa.me/" + window.WHATSAPP_NO + "?text=" + encodeURIComponent("Hi I am interested in " + window.PROJECT_NAME);
  const waBtns = document.querySelectorAll(
    "#mobile-whatsapp, .whatsapp-link, a[href*='wa.me']"
  );
  waBtns.forEach((btn) => {
    btn.href = waUrl;
  });

  // Update Calling links
  const callTel = "tel:+" + String(window.CALL_NO).replace(/^\+/, "");
  const callBtns = document.querySelectorAll(
    "#mobile-call, .call-link, a[href^='tel:']"
  );
  callBtns.forEach((btn) => {
    btn.href = callTel;
  });

  // Update Call display text
  const callDisplays = document.querySelectorAll(
    ".call-display, .header-phone-display"
  );
  callDisplays.forEach((el) => {
    if (window.CALL_DISPLAY) el.textContent = window.CALL_DISPLAY;
  });

  // Update Project Name across UI
  if (window.PROJECT_NAME) {
    const nameEls = document.querySelectorAll(".project-name");
    nameEls.forEach((el) => {
      el.textContent = window.PROJECT_NAME;
    });
  }

  // Update Logo across UI (Header, Lead Modal)
  if (window.LOGO_IMAGE) {
    const logoEls = document.querySelectorAll(".header-wrap img, #leadModal .logo img");
    logoEls.forEach((img) => {
      img.src = window.LOGO_IMAGE;
    });
  }

  // Update Canonical & OG tags dynamically from DOMAIN_NAME
  if (window.DOMAIN_NAME) {
    const canonicalLink = document.querySelector("link[rel='canonical']");
    if (canonicalLink) canonicalLink.href = window.DOMAIN_NAME;

    const ogUrl = document.querySelector("meta[property='og:url']");
    if (ogUrl) ogUrl.content = window.DOMAIN_NAME;
  }

  // Update Global Buttons
  const btns = window.GLOBAL_BUTTONS;
  if (btns) {
    // 1. Mobile Call Button
    const mCallSpan = document.querySelector("#mobile-call span");
    if (mCallSpan && btns.mobileCall) {
      mCallSpan.textContent = btns.mobileCall;
    }

    // 3. Mobile Enquire Button
    const mEnquireSpan = document.querySelector(".mobile-cta .enquire span");
    if (mEnquireSpan && btns.mobileEnquire) {
      mEnquireSpan.textContent = btns.mobileEnquire;
    }

    // 4. Mobile WhatsApp Button
    const mWaSpan = document.querySelector(".mobile-cta .whatsapp span");
    if (mWaSpan && btns.mobileWhatsApp) {
      mWaSpan.textContent = btns.mobileWhatsApp;
    }
  }

  // Equalize desktop top-cta-bar height with header
  function syncTopCtaBarHeight() {
    const headerEl = document.querySelector("header");
    const ctaBarEl = document.querySelector(".top-cta-bar");
    if (headerEl && ctaBarEl && window.innerWidth >= 992) {
      const hHeight = headerEl.offsetHeight;
      if (hHeight > 0) {
        ctaBarEl.style.height = hHeight + "px";
        ctaBarEl.style.minHeight = hHeight + "px";
      }
    }
  }
  syncTopCtaBarHeight();
  window.addEventListener("resize", syncTopCtaBarHeight);

  // Sync hidden form inputs dynamically from config
  if (typeof window.autoPopulateTrackingForms === "function") {
    window.autoPopulateTrackingForms();
  }
};

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.applyProjectConfig);
  } else {
    window.applyProjectConfig();
  }
}
