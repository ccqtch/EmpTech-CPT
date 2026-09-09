let scrolled = false;

function goToMain() {
  if (scrolled) return;
  scrolled = true;
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = 'content.html';
  }, 500); // matches the CSS transition duration below
}

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) goToMain();
});

window.addEventListener('touchmove', goToMain);

let leaving = false;
let upwardScrollAmount = 0;
const THRESHOLD = 150; // total pixels of upward scroll needed before triggering

window.addEventListener('wheel', (e) => {
  if (leaving) return;

  const atTop = window.scrollY === 0;

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