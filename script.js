/* ============================================================
   Script.js — minimal behaviour only:
   1. Mobile navigation toggle (hamburger)
   2. Close the mobile menu when a link is tapped
   3. Keep the footer copyright year current
   ============================================================ */

(function () {
  "use strict";

  // --- Mobile nav toggle ---------------------------------
  var toggle = document.getElementById("navToggle");
  var navList = document.getElementById("navList");

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var isOpen = navList.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the menu after tapping any link inside it
    navList.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        navList.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Footer year --------------------------------------
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();