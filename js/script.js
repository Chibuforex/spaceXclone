const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
const nav = document.getElementById('header');

btn.addEventListener('click', navToggle);

// Toggle for Hamburger open and close, stop scrolling when overlay is open. & and overlay show and hide.
function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

// Count Up for Stats
function countUp() {
  counters.forEach((counter) => {
    counter.textContent = '0';

    const updateCounter = () => { 
      // Get count Target
      const target = Number(counter.getAttribute('data-target'));
      // Get Current Counter Value
      const c = Number(counter.textContent);

      // If counter is less than target, add target 
      if(c < target) {
        // Round Up and set the counter value
        counter.textContent = `${c + target}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.textContent = target;
      }
    }

    updateCounter();
  });
}

countUp();

// Hiding and Displaying Nav bar while scrolling
let lastScrollTop = 0;

document.addEventListener("scroll", function(){ // or 
   let st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
      nav.classList.add('main-header-toggle');
      btn.classList.add('main-header-toggle');
   } else {
      // upscroll code
      if(nav.classList.contains('main-header-toggle')) {
        nav.classList.remove('main-header-toggle');
        btn.classList.remove('main-header-toggle');
      };
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});

