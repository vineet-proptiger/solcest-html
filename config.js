
// ===============================================================
// 1. MASTER THEME COLORS (1 place se poore project ke colors change karein)
// ===============================================================
window.THEME_COLORS = {
  primary: "#b95734",      // 🟠 Primary / Accent Color (Orange - Buttons, Badges, Borders, Accents)
  hover: "#152a42",        // 🔵 Button Hover Color (Navy Blue / Custom Blue on hover)
  btnText: "#ffffff",      // ⚪ Button & Badge Text Color (White text inside all buttons/badges)
  mainHeading: "#111111",  // ⚫ Main Headings Color (Black - Sabhi Section Headings & Mobile Hero Title)
  subHeading: "#666666",   // 🔘 Subheadings & Location Color (Grey - Hero Subtitle / Location)
  heading: "#111111",      // 🔷 Card Titles, Form Labels & Subtitles
  text: "#444444"          // 📝 Body Content & Paragraph Text Color
};

// ===============================================================
// 2. Backend API & Google Sheet Settings
// ===============================================================
window.PROJECT_ID = "3528514";
window.PROJECT_NAME = "Prestige Sector 92";
window.CITY_ID = "2";
window.CITY_DISPLAY = "gurgaon";
window.CITY_SLUG = "gurgaon";
window.SHEET_NAME = "gurgaon";
window.SECRET_KEY = "6c7f9ad8b2a1e0f4d5a8c0b9f6e2a4d190";

window.SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbw2MGrCI0lVGZZD049RrqM52ubNIHHZLzuk7mIg9KMVacJREV9sw05jnPMvT5OeNtWt/exec";
window.PROPTIGER_URL = "https://www.proptiger.com/data/v1/entity/enquiry";

// ===============================================================
// 3. Domain & URLs (Change only DOMAIN_NAME - automatically applies everywhere)
// ===============================================================
window.DOMAIN_NAME = "https://prestigesector92.co.in/";
window.SITE_URL = window.DOMAIN_NAME;
window.BASE_URL = window.DOMAIN_NAME.replace(/\/+$/, "");

// ===============================================================
// 4. Logo Image
// ===============================================================
window.LOGO_IMAGE = "images/logo/logo.webp";

// ===============================================================
// 5. Calling & WhatsApp Details
// ===============================================================
window.CALL_NO = "919718344024";
window.CALL_DISPLAY = "+91 9718344024";
window.WHATSAPP_NO = "919560582493";
window.WHATSAPP_URL = "https://wa.me/" + window.WHATSAPP_NO + "?text=" + encodeURIComponent("Hi I am interested in " + window.PROJECT_NAME);
window._cLink = window.WHATSAPP_URL;

// ===============================================================
// 6. Google Tag Manager (GTM)
// ===============================================================
window.GTM_ID = "GTM-575H8R87";   

// ===============================================================
// 7. Global Buttons (Mobile Sticky Bar)
// ===============================================================
window.GLOBAL_BUTTONS = {
  mobileCall: "Call Us",
  mobileEnquire: "ENQUIRE",
  mobileWhatsApp: "WhatsApp"
};



/* ===============================================================
   SYSTEM ENGINES & FUNCTIONS (DO NOT EDIT BELOW THIS LINE)
   ---------------------------------------------------------------
   All automation, theme applying & form binding runs automatically.
=============================================================== */

// A. Dynamic Brand Name Extractor Engine
window.getDomainBrand = function (domainInput) {
  var defaultFallback = "";
  if (window.PROJECT_SLUG) {
    defaultFallback = window.PROJECT_SLUG.toLowerCase().replace(/[^a-z0-9_-]/g, "");
  } else if (window.PROJECT_NAME) {
    defaultFallback = window.PROJECT_NAME.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "");
  }

  var raw = domainInput ? domainInput : (window.DOMAIN_NAME ? window.DOMAIN_NAME : (typeof window !== "undefined" && window.location ? window.location.hostname : ""));
  if (!raw) {
    return defaultFallback;
  } 
  var str = raw.replace(/^(?:https?:)?\/\//i, "");
  str = str.split("/")[0].split("?")[0].split("#")[0].split(":")[0].trim().toLowerCase();
  str = str.replace(/^(?:www|m|lp)\./i, "");

  var isLocal = false;
  if (str === "localhost") {
    isLocal = true;
  } else if (/^[0-9.]+$/.test(str)) {
    isLocal = true;
  }

  if (isLocal) {
    if (window.DOMAIN_NAME) {
      if (window.DOMAIN_NAME.indexOf("localhost") === -1 && window.DOMAIN_NAME.indexOf("127.0.0.1") === -1) {
        return window.getDomainBrand(window.DOMAIN_NAME);
      }
    }
    return defaultFallback;
  }

  var parts = str.split(".");
  if (parts.length >= 2) {
    return parts[0];
  }
  return str ? str : defaultFallback;
};
window.DOMAIN_BRAND = window.getDomainBrand();

// B. Apply Theme Colors Engine
window.applyThemeColors = function () {
  const c = window.THEME_COLORS;
  if (!c) return;

  const primary = c.primary ? c.primary : "#b95734";
  const hover = c.hover ? c.hover : "#09223f";
  const btnText = c.btnText ? c.btnText : "#ffffff";
  const mainHeading = c.mainHeading ? c.mainHeading : (c.heading ? c.heading : "#111111");
  const subHeading = c.subHeading ? c.subHeading : "#666666";
  const heading = c.heading ? c.heading : "#111111";
  const text = c.text ? c.text : "#444444";

  // 1. Set CSS root variables
  const root = document.documentElement;
  if (root && root.style) {
    root.style.setProperty("--theme-primary", primary);
    root.style.setProperty("--theme-hover", hover);
    root.style.setProperty("--theme-btn-text", btnText);
    root.style.setProperty("--theme-main-heading", mainHeading);
    root.style.setProperty("--theme-sub-heading", subHeading);
    root.style.setProperty("--theme-heading", heading);
    root.style.setProperty("--theme-text", text);

    root.style.setProperty("--gold", primary);
    root.style.setProperty("--green", primary);
    root.style.setProperty("--brand-purple", primary);
    root.style.setProperty("--birla-blue", primary);
    root.style.setProperty("--blue", heading);
  }

  // 2. Inject or update dynamic stylesheet
  let styleEl = document.getElementById("dynamicThemeStyle");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "dynamicThemeStyle";
  }
  if (document.head) {
    document.head.appendChild(styleEl); 
  } else if (document.documentElement) {
    document.documentElement.appendChild(styleEl);
  }

  styleEl.textContent = `
    :root {
      --theme-primary: ${primary} !important;
      --theme-hover: ${hover} !important;
      --theme-btn-text: ${btnText} !important;
      --theme-main-heading: ${mainHeading} !important;
      --theme-sub-heading: ${subHeading} !important;
      --theme-heading: ${heading} !important;
      --theme-text: ${text} !important;
      --gold: ${primary} !important;
      --green: ${primary} !important;
      --brand-purple: ${primary} !important;
      --birla-blue: ${primary} !important;
      --blue: ${heading} !important;
    }

    /* Hero Banner Overlay Text (Always White over dark banner image) */
    .hero-brand-title,
    .hero-brand-text {
      color: #ffffff !important;
    }

    /* Main Section Headings & Mobile Hero Title (Globally Controlled via mainHeading in config.js) */
    .mobile-hero-title,
    .section-title,
    .text-green,
    #overview h2,
    #highlights h3,
    #highlights h3.text-green,
    #pricing h3,
    #pricing h3.text-green,
    #floor-plan h3,
    #floor-plan h3.text-green,
    #amenities h3,
    #amenities h3.text-green,
    #gallery .section-title,
    #gallery h3,
    #gallery h3.text-green,
    #location h3,
    #location h3.text-green,
    #about-us h3,
    #about-us h3.text-green,
    section h2,
    section h3.section-title {
      color: ${mainHeading} !important;
    }

    /* Hero Section Small Location Text (Globally Controlled via subHeading in config.js) */
    .mobile-hero-location {
      color: ${subHeading} !important;
    }

    /* Subheadings, Card Titles & Form Labels */
    .rs-lead-form .form-label,
    .overview-stats-strip h3 {
      color: ${heading} !important;
      font-weight: 600 !important;
    }

    /* General Body Text & Paragraphs (Controlled by 'text' in config.js) */
    body,
    p:not(.hero-badge-pill *):not(.orbit-btn *):not(.btn-primary *):not(.get-in-touch-card *):not(.footer-bottom *):not(.footer-bottom),
    .section-text,
    #overview p,
    #about-us .col-lg-6:first-child p,
    .hero-bar-sub,
    .mobile-usp-sub,
    .overview-stats-strip span,
    .pricing-row,
    .pricing-row div,
    .pricing-mobile-label,
    .faq-answer,
    .faq-answer p,
    .rs-lead-form .form-check-label,
    .rs-lead-form .small,
    .footer-desc,
    .footer-rera,
    .footer-rera p,
    .footer-disclaimer,
    .highlight-ribbon-text,
    .circuit-title,
    .circuit-btn h4 {
      color: ${text} !important;
    }

    .highlight-ribbon-text {
      font-weight: 400 !important;
    }

    /* All Body Text & Descriptions 16px (except Main Headings & Footer Disclaimer) */
    p:not(.hero-badge-pill *):not(.orbit-btn *):not(.btn-primary *):not(.footer-bottom *):not(.footer-bottom):not(.footer-disclaimer *):not(.footer-disclaimer),
    .section-text,
    #overview p,
    #overview .section-text,
    #about-us p,
    #about-us .col-lg-6:first-child p,
    .get-in-touch-card p,
    .highlight-ribbon-text,
    .circuit-title,
    .circuit-btn h4,
    .pricing-head,
    .pricing-head div,
    .pricing-row,
    .pricing-row div,
    .pricing-row span,
    .hero-bar-title,
    .footer-desc {
      font-size: 16px !important;
    }

    /* Footer Disclaimer (10px) */
    .footer-disclaimer,
    .footer-disclaimer p {
      font-size: 10px !important;
      line-height: 1.6 !important;
    }

    .pricing-box {
      border-radius: 8px !important;
    }

    .hero-bar-sub,
    .mobile-usp-sub {
      font-size: 14px !important;
    }

    /* Primary Brand Backgrounds */
    .top-cta-bar,
    .btn-brochure,
    .hero-bar-btn,
    .pricing-head,
    .highlight-ribbon-circle,
    .hero-status-badge .pulse-dot,
    .pulse-dot,
    .bento-card:hover .bento-zoom-btn,
    .bento-zoom-btn,
    .lightbox-close:hover,
    .lightbox-nav-btn:hover,
    div[style*="height: 2.5px"],
    div[style*="height: 2px"],
    div[style*="height:2.5px"],
    div[style*="height:2px"],
    .theme-accent-line {
      background: ${primary} !important;
      background-color: ${primary} !important;
    }

    .orbit-btn,
    .btn-primary,
    .rs-lead-form .btn-primary {
      background: ${primary} !important;
      background-size: 100% 100% !important;
    }

    /* All CTA Buttons, Badges, and Pill Texts (Ensuring clean white text) */
    .orbit-btn,
    .orbit-btn *,
    .btn-primary,
    .btn-primary *,
    .hero-bar-btn,
    .hero-bar-btn *,
    .btn-brochure,
    .btn-brochure *,
    .plan-btn,
    .plan-btn *,
    .pricing-box .orbit-btn,
    .pricing-box .orbit-btn *,
    .btn-outline-light.orbit-btn,
    .btn-outline-light.orbit-btn *,
    .top-cta-bar .cta-bar-btn,
    .top-cta-bar .cta-bar-btn *,
    .hero-badge-pill,
    .hero-badge-pill *,
    .hero-status-badge .badge-value,
    .footer-bottom,
    .footer-bottom *,
    .footer-bottom p,
    .footer-bottom a,
    .rs-lead-form .btn-primary,
    .rs-lead-form .btn-primary *,
    .rs-lead-form .btn-primary i,
    .rs-lead-form .btn-primary .bi {
      color: ${btnText} !important;
    }

    /* Footer Bottom (Pure White text & links on brand background) */
    .footer-bottom,
    .footer-bottom *,
    .footer-bottom p,
    .footer-bottom a,
    .footer-bottom span,
    footer .footer-bottom,
    footer .footer-bottom *,
    footer .footer-bottom p,
    footer .footer-bottom a,
    footer .footer-bottom span,
    .project-footer .footer-bottom,
    .project-footer .footer-bottom *,
    .project-footer .footer-bottom p,
    .project-footer .footer-bottom a {
      color: #ffffff !important;
    }

    /* Hero Price Label (Clean Text Floating - No Button Background) */
    .hero-badge-pill {
      background: transparent !important;
      border: none !important;
      border-radius: 0 !important;
      padding: 0 !important;
      margin-top: -6px !important;
      box-shadow: none !important;
      cursor: default !important;
      pointer-events: auto !important;
    }
    .hero-badge-pill:hover {
      box-shadow: none !important;
      transform: none !important;
    }
    .hero-badge-pill,
    .hero-badge-pill .hero-price-prefix {
      color: rgba(255, 255, 255, 0.95) !important;
      font-weight: 500 !important;
      font-size: 16px !important;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8) !important;
    }
    .hero-badge-pill .blinking-price,
    .hero-badge-pill .price-bling-anim {
      color: #ffffff !important;
      font-weight: 700 !important;
      font-size: 18px !important;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8) !important;
    }

    /* Header Navigation Links 15px */
    header nav a,
    .menu-wrapper a {
      font-size: 15px !important;
    }

    /* Accent Borders, Dots & Lines */
    .orbit-btn::before,
    .btn-primary::before,
    .rs-lead-form .btn-primary::before,
    .bento-card:hover .bento-zoom-btn,
    .lightbox-close:hover,
    .lightbox-nav-btn:hover,
    .highlight-ribbon-card,
    div[style*="border-top: 4px solid"],
    div[style*="border-left: 4px solid"] {
      border-color: ${primary} !important;
    }
    .highlight-ribbon-card {
      border-left-color: ${primary} !important;
    }
    .highlight-ribbon-card:hover {
      border-color: ${primary} !important;
    }
    .highlight-ribbon-card:hover .highlight-ribbon-text,
    .circuit-btn:hover .circuit-title {
      color: ${primary} !important;
    }

    /* Global Button Hover (except WhatsApp, bottom sticky bar, and plan buttons) */
    .orbit-btn:not(.whatsapp):not(.btn-success):not(.plan-btn):hover,
    .btn-primary:not(.whatsapp):not(.btn-success):hover,
    .hero-bar-btn:hover,
    .btn-brochure:hover,
    .pricing-box .orbit-btn:hover,
    .btn-outline-light.orbit-btn:hover,
    .rs-lead-form .btn-primary:hover {
      background: ${hover} !important;
      box-shadow: 0 14px 35px rgba(11, 45, 82, 0.45) !important;
      color: ${btnText} !important;
      border-color: ${hover} !important;
    }

    .orbit-btn:not(.whatsapp):not(.btn-success):not(.plan-btn):hover *,
    .btn-primary:not(.whatsapp):not(.btn-success):hover *,
    .hero-bar-btn:hover *,
    .btn-brochure:hover *,
    .pricing-box .orbit-btn:hover *,
    .btn-outline-light.orbit-btn:hover *,
    .rs-lead-form .btn-primary:hover * {
      color: ${btnText} !important;
    }

    /* Floor Plan & Master Plan Button (Wide, Brand Orange, Pure White Text on Card & Button Hover) */
    .plan-btn,
    .plan-card .plan-btn,
    .plan-card:hover .plan-btn,
    .plan-btn:hover {
      background: ${primary} !important;
      background-color: ${primary} !important;
      color: #ffffff !important;
      border-color: ${primary} !important;
      box-shadow: 0 10px 28px rgba(185, 87, 52, 0.45) !important;
      width: auto !important;
      min-width: 175px !important;
      padding: 10px 24px !important;
      font-size: 15px !important;
      font-weight: 600 !important;
      white-space: nowrap !important;
      border-radius: 6px !important;
    }
    .plan-btn::before {
      display: none !important;
    }
    .plan-btn *,
    .plan-card:hover .plan-btn *,
    .plan-btn:hover * {
      color: #ffffff !important;
    }
  `;
};

// Run immediately
if (typeof window.applyThemeColors === "function") {
  window.applyThemeColors();
}

// B. Auto-bind Call, WhatsApp, RERA & Global Buttons across UI
window.applyProjectConfig = function () {
  // Apply master theme colors
  if (typeof window.applyThemeColors === "function") {
    window.applyThemeColors();
  }

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

  // Update Canonical, OG & Twitter Meta Tags dynamically from DOMAIN_NAME
  if (window.DOMAIN_NAME) {
    const rawDomain = window.DOMAIN_NAME.replace(/\/+$/, "");
    const pagePath = window.location.pathname.indexOf("privacy") !== -1 ? "/privacy-policy.html" : "/";
    const fullPageUrl = rawDomain + pagePath;

    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      if (document.head) document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = fullPageUrl;

    let ogUrl = document.querySelector("meta[property='og:url']");
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      if (document.head) document.head.appendChild(ogUrl);
    }
    ogUrl.content = fullPageUrl;

    let twUrl = document.querySelector("meta[name='twitter:url']");
    if (!twUrl) {
      twUrl = document.createElement("meta");
      twUrl.setAttribute("name", "twitter:url");
      if (document.head) document.head.appendChild(twUrl);
    }
    twUrl.content = fullPageUrl;
  }

  // Update Dynamic Domain Brand across site & Privacy Policy
  const domainBrand = typeof window.getDomainBrand === "function" ? window.getDomainBrand() : (window.PROJECT_SLUG ? window.PROJECT_SLUG.toLowerCase().replace(/[^a-z0-9_-]/g, "") : "");
  const domainBrandEls = document.querySelectorAll(".dynamic-domain-brand");
  domainBrandEls.forEach((el) => {
    el.textContent = domainBrand;
  });

  if (window.location.pathname.indexOf("privacy") !== -1) {
    if (window.PROJECT_NAME) {
      document.title = "Privacy Policy | " + window.PROJECT_NAME;
    }
  } else {
    if (window.PROJECT_NAME) {
      const city = window.CITY_DISPLAY ? " " + window.CITY_DISPLAY.charAt(0).toUpperCase() + window.CITY_DISPLAY.slice(1) : "";
      document.title = window.PROJECT_NAME + city + " | Luxury Residences";
    }
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
    document.addEventListener("DOMContentLoaded", function () {
      if (typeof window.applyThemeColors === "function") {
        window.applyThemeColors();
      }
      window.applyProjectConfig();
    });
  } else {
    if (typeof window.applyThemeColors === "function") {
      window.applyThemeColors();
    }
    window.applyProjectConfig();
  }

  window.addEventListener("load", function () {
    if (typeof window.applyThemeColors === "function") {
      window.applyThemeColors();
    }
  });
}
