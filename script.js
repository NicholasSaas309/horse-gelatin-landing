document.documentElement.classList.add('js');

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

// Reveal sections as they scroll into view.
const revealTargets = document.querySelectorAll(
  '.section-heading, .benefit-grid article, .video-frame, .quote-grid figure, .results-note, .guarantee > *, .offer, .offer-note, .faq-list details, .final-cta > *'
);
revealTargets.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.setProperty('--d', `${(i % 3) * 0.1}s`);
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('in'));
}
