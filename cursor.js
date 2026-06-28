/* =============================================
   cursor.js
   Custom glow cursor — dot, ring, and glow layer
   ============================================= */

const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
const cursorGlow = document.getElementById('cursor-glow');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;
let glowX  = 0, glowY  = 0;

// Snap dot to exact mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

// Linear-interpolation helper for smooth trailing
const lerp = (a, b, t) => a + (b - a) * t;

function animateCursor() {
  // Ring trails the mouse a little
  ringX = lerp(ringX, mouseX, 0.12);
  ringY = lerp(ringY, mouseY, 0.12);
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';

  // Glow trails even more slowly for atmosphere
  glowX = lerp(glowX, mouseX, 0.06);
  glowY = lerp(glowY, mouseY, 0.06);
  cursorGlow.style.left = glowX + 'px';
  cursorGlow.style.top  = glowY + 'px';

  requestAnimationFrame(animateCursor);
}

animateCursor();

// Expand ring on interactive elements
const interactiveSelectors = 'a, button, .gallery-item, .filter-btn, .dot, .project-link';

document.querySelectorAll(interactiveSelectors).forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursorRing.style.width       = '60px';
    cursorRing.style.height      = '60px';
    cursorRing.style.borderColor = 'var(--cyan)';
    cursorDot.style.width        = '4px';
    cursorDot.style.height       = '4px';
  });

  el.addEventListener('mouseleave', () => {
    cursorRing.style.width       = '36px';
    cursorRing.style.height      = '36px';
    cursorRing.style.borderColor = 'var(--purple2)';
    cursorDot.style.width        = '8px';
    cursorDot.style.height       = '8px';
  });
});
