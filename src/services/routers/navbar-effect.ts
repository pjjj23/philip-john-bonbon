document.addEventListener('DOMContentLoaded', () => {
  // Navbar Scroll Effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar") as HTMLElement | null;
    if (!navbar) return;

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});