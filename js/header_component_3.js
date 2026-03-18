(() => {
  var __webpack_exports__ = {};
  document.addEventListener("DOMContentLoaded", () => {
    const burderButton = document.getElementById("burger-button");
    const burderButtonClose = document.getElementById("burger-close");
    const burgerMenu = document.querySelector(".burger-menu");
    if (burderButton && burderButtonClose && burgerMenu) {
      burderButton.addEventListener("click", () => {
        burgerMenu.classList.add("active");
      });
      burderButtonClose.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
      });
    }
    const hoursEl = document.getElementById("header-hours");
    const minEl = document.getElementById("header-min");
    const secEl = document.getElementById("header-sec");
    if (!hoursEl || !minEl || !secEl) return;
    const TIMER_KEY = "timer24h_end";
    let endTime = localStorage.getItem(TIMER_KEY);
    if (!endTime) {
      endTime = Date.now() + 24 * 60 * 60 * 1e3;
      localStorage.setItem(TIMER_KEY, endTime);
    } else {
      endTime = parseInt(endTime);
    }
    function updateTimer() {
      const now = Date.now();
      let diff = endTime - now;
      if (diff <= 0) {
        endTime = Date.now() + 24 * 60 * 60 * 1e3;
        localStorage.setItem(TIMER_KEY, endTime);
        diff = endTime - now;
      }
      const hours = Math.floor(diff / (1e3 * 60 * 60));
      const minutes = Math.floor(diff % (1e3 * 60 * 60) / (1e3 * 60));
      const seconds = Math.floor(diff % (1e3 * 60) / 1e3);
      hoursEl.textContent = String(hours).padStart(2, "0");
      minEl.textContent = String(minutes).padStart(2, "0");
      secEl.textContent = String(seconds).padStart(2, "0");
    }
    updateTimer();
    setInterval(updateTimer, 1e3);
  });
  var __webpack_export_target__ = window;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
})();