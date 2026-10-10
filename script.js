document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const video = document.querySelector('video');
if (video) {
  video.addEventListener('play', () => video.closest('.video-frame').classList.add('is-playing'));
}
