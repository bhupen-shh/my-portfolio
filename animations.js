/* =============================================
   animations.js
   Scroll progress bar, scroll-triggered reveals,
   animated counters, skill bar fills, parallax.

   NOTE: revealObserver is exposed globally so
   gallery.js and projects.js can reuse it.
   ============================================= */

/* ── Scroll Progress Bar ── */
const progressBar = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
  const scrolled  = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${scrolled / maxScroll})`;
});

/* ── Scroll Reveal (shared) ── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ── Animated Counters ── */
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      let   count  = 0;
      const step   = target / 40;

      const timer = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = Math.floor(count) + '+';
        if (count >= target) clearInterval(timer);
      }, 40);

      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-target]').forEach((el) => counterObserver.observe(el));

/* ── Skill Bar Fill ── */
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.querySelectorAll('.skill-fill').forEach((bar) => {
        setTimeout(() => {
          bar.style.width = bar.dataset.width + '%';
        }, 200);
      });

      skillObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('#skills').forEach((el) => skillObserver.observe(el));

/* ── Subtle Parallax on Hero Shapes ── */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const speeds   = [0.08, 0.05, 0.12];

  document.querySelectorAll('.shape').forEach((shape, i) => {
    const speed = speeds[i] ?? 0.06;
    shape.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
