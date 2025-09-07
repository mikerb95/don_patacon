// Main shared behaviors and page transitions
import { initHome } from './pages/home.js';

const qs = (s, el = document) => el.querySelector(s);
const qsa = (s, el = document) => [...el.querySelectorAll(s)];

function setYear() {
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = String(y);
}

function mobileNav() {
  const toggle = qs('[data-nav-toggle]');
  const nav = qs('[data-nav]');
  if (!toggle || !nav) return;
  const set = (expanded) => nav.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  set(false);
  toggle.addEventListener('click', () => set(nav.getAttribute('aria-expanded') !== 'true'));
  qsa('a', nav).forEach(a => a.addEventListener('click', () => set(false)));
}

function initSwipers(container) {
  if (window.Swiper) {
    const hero = container.querySelector('.hero-swiper');
    if (hero) {
      // eslint-disable-next-line no-undef
      new Swiper(hero, { loop: true, autoplay: { delay: 4500 }, pagination: { el: '.swiper-pagination', clickable: true }, effect: 'fade', speed: 700 });
    }
  }
}

function initLightbox(container) {
  if (window.GLightbox) {
    // eslint-disable-next-line no-undef
    GLightbox({ selector: '.glightbox' });
  }
}

function pageEnterAnimation(data) {
  const tl = gsap.timeline();
  tl.from(data.next.container, { opacity: 0, y: 20, duration: 0.45, ease: 'power2.out' });
  return tl;
}

function pageLeaveAnimation(data) {
  const tl = gsap.timeline();
  tl.to(data.current.container, { opacity: 0, y: -10, duration: 0.3, ease: 'power1.in' });
  return tl;
}

function initPage(container) {
  if (window.gsap && window.ScrollTrigger) {
    // eslint-disable-next-line no-undef
    gsap.registerPlugin(ScrollTrigger);
  }
  setYear();
  mobileNav();
  initSwipers(container);
  initLightbox(container);
}

// Barba transitions
barba.init({
  transitions: [
    {
      name: 'fade-slide',
      async leave(data) {
        await pageLeaveAnimation(data);
      },
      async enter(data) {
        initPage(data.next.container);
        await pageEnterAnimation(data);
      },
      async once(data) {
        initPage(data.next.container);
      },
    },
  ],
});

// Page-specific enhancements via namespace
barba.hooks.afterEnter((data) => {
  const ns = data.next.namespace;
  if (ns === 'home') {
    initHome?.();
  }
});

// Accessibility: focus outline only by keyboard
let hadKeyboardEvent = false;
document.addEventListener('keydown', (e) => { hadKeyboardEvent = true; if (e.key === 'Tab') document.documentElement.classList.add('focus-visible'); });
document.addEventListener('mousedown', () => { if (hadKeyboardEvent) { document.documentElement.classList.remove('focus-visible'); hadKeyboardEvent = false; } });

// Expose for console debugging
window.DP = { initPage };
