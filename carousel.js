/* =============================================
   carousel.js
   Auto-sliding inspirational quotes carousel
   with clickable dot navigation
   ============================================= */

const slides        = document.querySelectorAll('.quote-slide');
const dotsContainer = document.getElementById('carousel-dots');
let currentSlide    = 0;

/* ── Build dot indicators ── */
slides.forEach((_, i) => {
  const dot       = document.createElement('div');
  dot.className   = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

/* ── Navigate to a specific slide ── */
function goToSlide(index) {
  // Deactivate current
  slides[currentSlide].classList.remove('active');
  dotsContainer.children[currentSlide].classList.remove('active');

  // Advance
  currentSlide = (index + slides.length) % slides.length;

  // Activate next
  slides[currentSlide].classList.add('active');
  dotsContainer.children[currentSlide].classList.add('active');
}

/* ── Auto-advance every 4 seconds ── */
setInterval(() => goToSlide(currentSlide + 1), 4000);
