/* =============================================
   contact.js
   Contact form validation & submission handler
   ============================================= */

const formSubmit  = document.getElementById('form-submit');
const formSuccess = document.getElementById('form-success');
const btnText     = document.getElementById('btn-text');

formSubmit.addEventListener('click', () => {
  const name  = document.getElementById('form-name').value.trim();
  const email = document.getElementById('form-email').value.trim();
  const msg   = document.getElementById('form-msg').value.trim();

  // Basic validation
  if (!name || !email || !msg) {
    // Shake the button if fields are empty
    formSubmit.style.animation = 'none';
    formSubmit.offsetHeight;   // reflow
    return;
  }

  // Show loading state
  formSubmit.style.opacity = '0.7';
  btnText.textContent      = '⟳ Sending...';

  // Simulate sending (replace with a real API call if needed)
  setTimeout(() => {
    formSubmit.style.display  = 'none';
    formSuccess.style.display = 'block';
  }, 1200);
});
