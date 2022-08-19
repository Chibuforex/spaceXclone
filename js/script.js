const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const overlayShow = document.querySelector('.overlay-show')

btn.addEventListener('click', navToggle);

// Toggle for Hamburger open and close & and overlay show and hide.
function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
}



