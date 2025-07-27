// Lenis smooth scroll
const lenis = new Lenis({ smooth: true, lerp: 0.1 });
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP scroll zoom
gsap.registerPlugin(ScrollTrigger);
gsap.to(".hero-bg", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// Banner animation
gsap.from(".banner-text span", {
  y: 40,
  opacity: 0,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".transition-banner",
    start: "top 85%",
    once: true
  }
});

// Nav toggle
const navToggle = document.querySelector('.mobile-nav-toggle');
const topNav = document.querySelector('.top-nav');
navToggle.addEventListener('click', () => {
  topNav.classList.toggle('open');
});

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Back-to-top
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Modal logic
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById(item.dataset.modal).style.display = 'flex';
  });
});
document.querySelectorAll('.modal .close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});
window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

// Lottie
const anim = lottie.loadAnimation({
  container: document.getElementById('lottie-code'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'https://assets4.lottiefiles.com/packages/lf20_tljjahaa.json'
});
const lottieBox = document.getElementById('lottie-code');
lottieBox.addEventListener('mouseenter', () => anim.play());
lottieBox.addEventListener('mouseleave', () => anim.stop());
