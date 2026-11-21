
window.FOOTER_DATA = {
  logo: "images/logo/logo.webp",
  reraNumber: "Comming Soon",
  // salesName: "Team",
  copyright: "© 2026 . All Rights Reserved."
};

window.renderFooterSection = function () {
  const data = window.FOOTER_DATA;
  if (!data) return;

  // 1. Logo (Show if defined, Hide if commented out)
  const brandContainer = document.querySelector(".footer-brand");
  if (brandContainer) {
    if (data.logo) {
      brandContainer.style.setProperty("display", "flex", "important");
      brandContainer.classList.remove("d-none");
      brandContainer.classList.add("d-flex");
      brandContainer.innerHTML = `<img src="${data.logo}" alt="Logo" />`;
    } else {
      brandContainer.style.setProperty("display", "none", "important");
      brandContainer.classList.remove("d-flex");
      brandContainer.classList.add("d-none");
      brandContainer.innerHTML = "";
    }
  }

  // 2. RERA (Show if defined, Hide if commented out)
  const reraContainer = document.querySelector(".footer-rera");
  if (reraContainer) {
    if (data.reraNumber) {
      reraContainer.style.setProperty("display", "block", "important");
      reraContainer.classList.remove("d-none");
      const reraStrong = reraContainer.querySelector("strong");
      if (reraStrong) {
        reraStrong.textContent = data.reraNumber;
      }
    } else {
      reraContainer.style.setProperty("display", "none", "important");
      reraContainer.classList.add("d-none");
    }
  }

  // 3. Copyright (Show if defined, Hide if commented out)
  const copyEl = document.querySelector(".footer-bottom p");
  if (copyEl) {
    if (data.copyright) {
      copyEl.style.setProperty("display", "block", "important");
      copyEl.classList.remove("d-none");
      copyEl.textContent = data.copyright;
    } else {
      copyEl.style.setProperty("display", "none", "important");
      copyEl.classList.add("d-none");
    }
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.renderFooterSection);
} else {
  window.renderFooterSection();
}
