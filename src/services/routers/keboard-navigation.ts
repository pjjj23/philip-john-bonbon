document.addEventListener("DOMContentLoaded", () => {
  // Keyboard Navigation
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();

      const sections = document.querySelectorAll<HTMLElement>(".section");

      const currentSection = Array.from(sections).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
      });

      if (currentSection) {
        const currentIndex = Array.from(sections).indexOf(currentSection);
        let nextIndex: number;

        if (e.key === "ArrowDown") {
          nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else {
          nextIndex = Math.max(currentIndex - 1, 0);
        }

        const targetSection = sections[nextIndex];
        if (targetSection instanceof HTMLElement) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  });
});
