// main.js

// This file handles micro-interactions and dynamic UI behaviors for Kirna.dev
// All scripts are modular and use vanilla JS for maximum compatibility and performance.

document.addEventListener("DOMContentLoaded", () => {
  // Button click feedback (micro-interaction)
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', () => {
      button.style.transform = 'scale(0.97)';
    });
    button.addEventListener('mouseup', () => {
      button.style.transform = 'scale(1)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });

  // Lazy load images with data-src attribute
  const lazyImages = document.querySelectorAll("img[data-src]");
  if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => imgObserver.observe(img));
  } else {
    // Fallback for older browsers
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
    });
  }

  // Animate elements on scroll (fade-in)
  const fadeEls = document.querySelectorAll(".fade-in-on-scroll");
  if ("IntersectionObserver" in window) {
    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => fadeObserver.observe(el));
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add more micro-interactions as needed below
  // ...
  // Optional: Any other micro animations or event listeners can be added here
});
