/* =============================================
   gallery.js
   Renders the filterable art gallery grid
   and handles the modal popup preview.
   Depends on: data.js, animations.js (revealObserver)
   ============================================= */

const galleryGrid  = document.getElementById('gallery-grid');
const galleryModal = document.getElementById('gallery-modal');
const modalClose   = document.getElementById('modal-close');
const modalVisual  = document.getElementById('modal-visual');
const modalTitle   = document.getElementById('modal-title');
const modalDesc    = document.getElementById('modal-desc');

/* ── Build a single gallery card ── */
function buildGalleryItem(item) {
  const el = document.createElement('div');
  el.className = 'gallery-item reveal';
  el.style.background = item.bg;

  el.innerHTML = `
    <div class="gallery-item-inner">
      <div class="gallery-placeholder">
        <div class="icon">${item.icon}</div>
        <div class="label">${item.cat}</div>
      </div>
      <div class="gallery-overlay">
        <div class="gallery-overlay-content">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    </div>`;

  el.addEventListener('click', () => openModal(item));
  return el;
}

/* ── Render gallery with optional filter ── */
function renderGallery(filter = 'all') {
  galleryGrid.innerHTML = '';

  const filtered = filter === 'all'
    ? galleryData
    : galleryData.filter((d) => d.cat === filter);

  filtered.forEach((item, i) => {
    const el = buildGalleryItem(item);
    el.style.animationDelay = (i * 0.05) + 's';
    galleryGrid.appendChild(el);
    revealObserver.observe(el);
  });
}

/* ── Modal open / close ── */
function openModal(item) {
  modalVisual.innerHTML        = `<div style="font-size:5rem">${item.icon}</div>`;
  modalVisual.style.background = item.bg;
  modalTitle.textContent       = item.title;
  modalDesc.textContent        = item.desc;
  galleryModal.classList.add('open');
}

function closeModal() {
  galleryModal.classList.remove('open');
}

modalClose.addEventListener('click', closeModal);
galleryModal.addEventListener('click', (e) => {
  if (e.target === galleryModal) closeModal();
});

/* ── Filter buttons ── */
document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.filter);
  });
});

/* ── Initial render ── */
renderGallery();
