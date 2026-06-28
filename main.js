/* =============================================
   main.js
   Entry point — loader dismissal, typing
   animation, and any top-level initialisation
   ============================================= */

/* ── Loading Screen ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2000);
});

/* ── Typing Animation ── */
const phrases  = ['Artist', 'Creative Developer', 'BCA Student', 'Visual Storyteller'];
let phraseIndex = 0;
let charIndex   = 0;
let isDeleting  = false;

const typedEl = document.getElementById('typed-text');

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    // Typing forward
    typedEl.textContent = currentPhrase.slice(0, ++charIndex);

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1800); // pause before deleting
      return;
    }
  } else {
    // Deleting
    typedEl.textContent = currentPhrase.slice(0, --charIndex);

    if (charIndex === 0) {
      isDeleting  = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 90);
}

// Delay start slightly so the page has settled
setTimeout(type, 1000);
