document.addEventListener('DOMContentLoaded', () => {
  // Mobile Toggle Functionality
  const mobileToggle = document.getElementById("mobileToggle") as HTMLElement | null;
  const idPanel = document.querySelector(".id-panel") as HTMLElement | null;

  if (!mobileToggle || !idPanel) return;

  // Toggle ID panel visibility on mobile
  mobileToggle.addEventListener("click", function () {
    idPanel.classList.toggle("active");

    const icon = this.querySelector("i") as HTMLElement | null;
    if (!icon) return;

    icon.className = idPanel.classList.contains("active") ? "fas fa-times" : "fas fa-id-card";
  });

  // Hide panel when scrolling on mobile
  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    if (window.innerWidth <= 1200 && idPanel && mobileToggle) {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (Math.abs(lastScrollTop - st) > 50) {
        idPanel.classList.remove("active");
        const icon = mobileToggle.querySelector("i") as HTMLElement | null;
        if (icon) icon.className = "fas fa-id-card";
      }

      lastScrollTop = st <= 0 ? 0 : st;
    }
  });

  // Adjust layout when window is resized
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1200 && idPanel) {
      idPanel.classList.remove("active");
    }
  });
});
