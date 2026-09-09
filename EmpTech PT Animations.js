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

let leaving = false;
let upwardScrollAmount = 0;
const THRESHOLD = 150;

window.addEventListener('wheel', (e) => {
  if (leaving) return;

  const atTop = window.scrollY <= 20;

  if (atTop && e.deltaY < 0) {
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