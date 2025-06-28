// gsap-animations.js
// Adds GSAP-powered hero and grid animations for Kirna.dev

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") return;

  // Hero section animation
  const hero = document.querySelector(".hero-section");
  if (hero) {
    gsap.from(hero, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power3.out"
    });
    gsap.from(hero.querySelectorAll("h1, p, a"), {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1,
      delay: 0.3,
      ease: "power3.out"
    });
  }

  // Project grid animation
  const gridItems = document.querySelectorAll(".project-grid .project-card");
  if (gridItems.length) {
    gsap.from(gridItems, {
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 0.9,
      delay: 0.2,
      ease: "power2.out"
    });
  }
});
