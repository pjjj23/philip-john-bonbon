document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for General Animations
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.style.opacity = "1";
        target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all elements with .section class
  document.querySelectorAll<HTMLElement>(".section").forEach((section) => {
    // Optional: set initial state here if needed
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  // Timeline Animation for .experience-item
  const timelineItems = document.querySelectorAll<HTMLElement>(".experience-item");

  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = "1";
          target.style.transform = "translateX(0)";
        }
      });
    },
    { threshold: 0.5 }
  );

  timelineItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-30px)";
    item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    timelineObserver.observe(item);
  });
});
