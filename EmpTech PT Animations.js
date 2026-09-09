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

const header = document.querySelector('#site-header');
let headerVisible = false;

const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    headerVisible = entry.isIntersecting;
  });
}, { threshold: 0.5 }); // triggers once 50% of the header is on screen

headerObserver.observe(header);

let leaving = false;
let upwardScrollAmount = 0;
const THRESHOLD = 150;

window.addEventListener('wheel', (e) => {
  if (leaving) return;

  if (headerVisible && e.deltaY < 0) {
    upwardScrollAmount += Math.abs(e.deltaY);
    if (upwardScrollAmount >= THRESHOLD) {
      goToCover();
    }
  } else {
    upwardScrollAmount = 0;
  }
});

function goToCover() {
  leaving = true;
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 500);
}
