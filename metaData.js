/**
 * ========================================================
 * DYNAMIC METADATA CONFIGURATION & ENGINE
 * ========================================================
 * Edit this file to update the site title, description,
 * keywords, social sharing preview (OG & Twitter) & favicon!
 */

window.META_DATA = {
  // 1. Primary Page Title & Description
  title: "Prestige Sector 92 Gurgaon | Luxury Residences",
  description:
    "Discover Prestige Sector 92 Gurgaon, offering premium 2, 3 & 4 BHK luxury residences with modern architecture, 20+ lifestyle amenities, landscaped green spaces, and prime connectivity to Dwarka Expressway.",
  keywords:
    "Prestige Sector 92, Prestige Sector 92 Gurgaon, Luxury Apartments in Gurgaon, Dwarka Expressway projects",

  // 2. Social Media Sharing Card (WhatsApp, Facebook, Twitter, LinkedIn)
  shareImage: "images/hero/banner1.webp",
  ogType: "website",

  // 3. Favicon & Web Icons
  favicon: "images/favicon/fav.webp",
  appleTouchIcon: "images/favicon/fav.webp"
};

// ========================================================
// AUTOMATED METADATA RENDERING ENGINE
// ========================================================
window.renderMetaData = function () {
  const data = window.META_DATA;
  if (!data) return;
  if (typeof document === "undefined") return;

  const isPrivacyPage = window.location.pathname.indexOf("privacy") !== -1;
  const projectName = window.PROJECT_NAME ? window.PROJECT_NAME : "Prestige Sector 92";
  const city = window.CITY_DISPLAY
    ? " " + window.CITY_DISPLAY.charAt(0).toUpperCase() + window.CITY_DISPLAY.slice(1)
    : "";

  // 1. Page Title
  let pageTitle = data.title ? data.title : projectName + city + " | Luxury Residences";
  if (isPrivacyPage) {
    pageTitle = "Privacy Policy | " + projectName;
  }
  document.title = pageTitle;

  // 2. Helper to set or create <meta> tags
  function setMetaTag(attrName, attrVal, contentVal) {
    if (!contentVal) return;
    let meta = document.querySelector("meta[" + attrName + "='" + attrVal + "']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attrName, attrVal);
      if (document.head) {
        document.head.appendChild(meta);
      }
    }
    meta.setAttribute("content", contentVal);
  }

  // 3. Helper to set or create <link> tags
  function setLinkTag(relVal, hrefVal, typeVal) {
    if (!hrefVal) return;
    let link = document.querySelector("link[rel='" + relVal + "']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", relVal);
      if (document.head) {
        document.head.appendChild(link);
      }
    }
    link.setAttribute("href", hrefVal);
    if (typeVal) {
      link.setAttribute("type", typeVal);
    }
  }

  // 4. Meta Description & Keywords
  let pageDesc = data.description ? data.description : "";
  if (isPrivacyPage) {
    pageDesc = "Privacy Policy for " + projectName + (city ? city : "") + ".";
  }
  if (pageDesc) {
    setMetaTag("name", "description", pageDesc);
  }
  if (data.keywords) {
    setMetaTag("name", "keywords", data.keywords);
  }

  // 5. Canonical URL & Social URLs (Derived dynamically from window.DOMAIN_NAME)
  const baseDomain = window.DOMAIN_NAME ? window.DOMAIN_NAME.replace(/\/+$/, "") : "";
  if (baseDomain) {
    const pagePath = isPrivacyPage ? "/privacy-policy.html" : "/";
    const fullUrl = baseDomain + pagePath;
    setLinkTag("canonical", fullUrl);
    setMetaTag("property", "og:url", fullUrl);
    setMetaTag("name", "twitter:url", fullUrl);
  }

  // 6. Open Graph (OG) Tags for Social Previews (WhatsApp, Facebook, LinkedIn)
  setMetaTag("property", "og:title", pageTitle);
  if (pageDesc) {
    setMetaTag("property", "og:description", pageDesc);
  }
  setMetaTag("property", "og:type", data.ogType ? data.ogType : "website");
  if (data.shareImage) {
    let fullShareImg = data.shareImage;
    if (baseDomain) {
      if (data.shareImage.indexOf("http") !== 0) {
        fullShareImg = baseDomain + "/" + data.shareImage.replace(/^\/+/, "");
      }
    }
    setMetaTag("property", "og:image", fullShareImg);
    setMetaTag("name", "twitter:image", fullShareImg);
  }

  // 7. Twitter Card Tags
  setMetaTag("name", "twitter:card", "summary_large_image");
  setMetaTag("name", "twitter:title", pageTitle);
  if (pageDesc) {
    setMetaTag("name", "twitter:description", pageDesc);
  }

  // 8. Favicon & Apple Touch Icons
  if (data.favicon) {
    setLinkTag("icon", data.favicon, "image/webp");
    setLinkTag("shortcut icon", data.favicon);
  }
  if (data.appleTouchIcon) {
    setLinkTag("apple-touch-icon", data.appleTouchIcon);
  }
};

// Execute immediately when script loads so <head> is updated with zero delay
if (typeof document !== "undefined") {
  if (document.head) {
    window.renderMetaData();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.renderMetaData);
  } else {
    window.renderMetaData();
  }
}
