// GSAP Hero Title Animation
gsap.from(".hero-title", {
  scale: 0.6,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out"
});

// Show nav only after scroll
window.addEventListener("scroll", () => {
  const nav = document.getElementById("glassNav");
  if (window.scrollY > window.innerHeight - 100) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
});

// Toggle dark mode
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Toggle simplify mode
document.getElementById("simplifyToggle").addEventListener("click", () => {
  document.body.classList.toggle("simplify");
});
