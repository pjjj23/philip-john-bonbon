document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll for Navigation Links
  const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e: MouseEvent) {
      e.preventDefault();

      const href = this.getAttribute("href");
      if (!href) return;

      const target = document.querySelector<HTMLElement>(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
