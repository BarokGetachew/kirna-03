// advanced-animations.js
// Adds advanced GSAP-powered scroll, parallax, and micro-interactions for Kirna.dev

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  // Scroll progress bar
  let progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress-bar';
  progressBar.style.position = 'fixed';
  progressBar.style.top = '0';
  progressBar.style.left = '0';
  progressBar.style.height = '4px';
  progressBar.style.width = '0';
  progressBar.style.background = 'linear-gradient(90deg, #2563eb, #60a5fa)';
  progressBar.style.zIndex = '9999';
  progressBar.style.transition = 'width 0.2s cubic-bezier(.4,0,.2,1)';
  document.body.appendChild(progressBar);
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${(scroll / height) * 100}%`;
  });

  // Navbar hide/reveal on scroll
  let lastScrollY = window.scrollY;
  const nav = document.getElementById('main-navbar');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
      lastScrollY = window.scrollY;
    });
    nav.style.transition = 'transform 0.4s cubic-bezier(.4,0,.2,1)';
  }

  // Hero parallax and reveal
  const hero = document.querySelector('.hero-section');
  if (hero) {
    gsap.from(hero, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: 'power3.out',
    });
    gsap.from(hero.querySelectorAll('h1, p, a'), {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    });
    gsap.to(hero, {
      y: 0,
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }

  // Project grid parallax and stagger
  const gridItems = document.querySelectorAll('.project-grid .project-card');
  if (gridItems.length) {
    gsap.from(gridItems, {
      opacity: 0,
      y: 60,
      scale: 0.95,
      stagger: 0.12,
      duration: 1,
      delay: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.project-grid',
        start: 'top 80%',
      },
    });
    gridItems.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.transform = `rotateY(${(x - rect.width/2)/20}deg) rotateX(${(rect.height/2 - y)/20}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // Button micro-interactions (glow)
  document.querySelectorAll('button, .btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.boxShadow = '0 0 16px 2px #2563eb55, 0 2px 8px 0 rgba(37,99,235,0.08)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.boxShadow = '';
    });
  });
});
