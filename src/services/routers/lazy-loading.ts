document.addEventListener('DOMContentLoaded', () => {
  // Performance Optimization - Lazy Load Images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const dataSrc = img.dataset.src;

            if (dataSrc) {
                img.src = dataSrc;
                img.classList.remove('lazy');
                observer.unobserve(img); // <-- using observer here
            }
            }
        });
    });


    document.querySelectorAll<HTMLImageElement>('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
});
