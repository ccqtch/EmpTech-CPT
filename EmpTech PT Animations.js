const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

const header = document.querySelector('#header, #site-header');
const stickyNav = document.querySelector('#sticky-nav');
const heroSection = header;

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      stickyNav.classList.add('visible');
    } else {
      stickyNav.classList.remove('visible');
    }
  });
}, { threshold: 0 });

if (stickyNav && heroSection) {
  heroObserver.observe(heroSection);
}