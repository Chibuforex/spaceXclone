const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');

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



