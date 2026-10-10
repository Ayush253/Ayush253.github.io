const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element) || !event.target.closest("#theme-toggle")) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    const root = document.documentElement;
    const icon = document.getElementById("theme-icon");
    const newTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    const bounds = themeToggle.getBoundingClientRect();
    const x = event.detail > 0 ? event.clientX : bounds.left + bounds.width / 2;
    const y = event.detail > 0 ? event.clientY : bounds.top + bounds.height / 2;

    root.style.setProperty("--theme-transition-x", `${x}px`);
    root.style.setProperty("--theme-transition-y", `${y}px`);

    const updateTheme = () => {
      localStorage.setItem("theme", newTheme);
      if (newTheme === "dark") {
        root.setAttribute("data-theme", "dark");
        icon.classList.replace("fa-sun", "fa-moon");
      } else {
        root.removeAttribute("data-theme");
        icon.classList.replace("fa-moon", "fa-sun");
      }
    };

    if (document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.startViewTransition(updateTheme);
    } else {
      updateTheme();
    }
  }, true);
}
