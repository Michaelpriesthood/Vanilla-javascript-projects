// Selectors
const modalContainer = document.getElementById('modal-container');
const openBtn = document.getElementById('open-modal');
const closeBtn = document.getElementById('close-modal');

// Events
openBtn.addEventListener('click', () => {
  modalContainer.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});

window.addEventListener('click', event => {
  if (event.target === modalContainer) {
    modalContainer.classList.remove('show');
  }
});
