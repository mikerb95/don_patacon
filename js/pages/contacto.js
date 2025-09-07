const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    if (status) {
      status.classList.remove('sr-only');
      status.textContent = '¡Gracias! Hemos recibido tu mensaje.';
      setTimeout(() => status.classList.add('sr-only'), 4000);
    }
    form.reset();
  });
}
