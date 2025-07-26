document.addEventListener('DOMContentLoaded', () => {
  // Project Card Interactions
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", function (this: HTMLElement) {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function (this: HTMLElement) {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Skill Items Hover Effect
  document.querySelectorAll(".skill-item").forEach((item) => {
    item.addEventListener("mouseenter", function (this: HTMLElement) {
      this.style.transform = "translateY(-5px) scale(1.05)";
    });

    item.addEventListener("mouseleave", function (this: HTMLElement) {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Contact Items Hover Effect
  document.querySelectorAll(".contact-item").forEach((item) => {
    item.addEventListener("mouseenter", function (this: HTMLElement) {
      this.style.transform = "translateX(10px)";
      this.style.background = "rgba(255, 107, 53, 0.1)";
    });

    item.addEventListener("mouseleave", function (this: HTMLElement) {
      this.style.transform = "translateX(0)";
      this.style.background = "var(--glass-bg)";
    });
  });
});
