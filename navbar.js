/* =============================================
   navbar.js
   Navbar scroll effect, hamburger menu,
   dark / light theme toggle
   ============================================= */

const navbar     = document.getElementById('navbar');
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const themeBtn   = document.getElementById('theme-toggle');

/* ── Glassmorphic navbar on scroll ── */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ── Hamburger / Mobile Menu ── */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-link').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ── Dark / Light Theme Toggle ── */
themeBtn.addEventListener('click', () => {
  const html   = document.documentElement;
  const isDark = html.dataset.theme === 'dark';

  html.dataset.theme   = isDark ? 'light' : 'dark';
  themeBtn.textContent = isDark ? '🌙' : '☀️';
});
