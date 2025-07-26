document.addEventListener('DOMContentLoaded', () => {
  // Loading Screen
  window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const downloadBtn = document.getElementById('downloadBtn');

    if (loadingScreen && downloadBtn) {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        downloadBtn.classList.add('hidden');
      }, 1500);
    }
  });
});
