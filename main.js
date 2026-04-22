/* ═══════════════════════════════════════════
   PORTAFOLIO — main.js
═══════════════════════════════════════════ */

// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Header con sombra al hacer scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Animación de entrada para secciones (Intersection Observer)
const revealEls = document.querySelectorAll(
  '.project-card, .about-grid, .contact-inner, .section-header'
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.6s ease both';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
revealEls.forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});
