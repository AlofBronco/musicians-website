import axios from 'axios';
import 'css-star-rating/css/star-rating.min.css';

const modalBackdrop = document.querySelector('[data-modal]');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = modalBackdrop.querySelector('[data-modal-close]');
const form = modalBackdrop.querySelector('.modal-form');
const nameInput = document.getElementById('user-name');
const textInput = document.getElementById('user-comment');
const ratingInput = document.getElementById('rating-value');

let escHandler = null;

openModalBtn.addEventListener('click', openModal);
function openModal() {
  modalBackdrop.classList.add('is-open');
  modalBackdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  escHandler = e => {
    if (e.key === 'Escape') closeModal();
  };
  window.addEventListener('keydown', escHandler);
}

closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', onBackdropClick);

function closeModal() {
  modalBackdrop.classList.remove('is-open');
  modalBackdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', escHandler);
  form.reset();
  clearErrors();
}

function onBackdropClick(e) {
  if (e.target === modalBackdrop) closeModal();
}

form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const descr = textInput.value.trim();
  const ratingVal = parseFloat(ratingInput.value);

  let isValid = true;
  clearErrors();

  if (name.length < 2 || name.length > 16) {
    markInvalid(nameInput);
    isValid = false;
  }

  if (isNaN(ratingVal) || ratingVal < 1 || ratingVal > 5) {
    markInvalid(ratingInput.closest('.modal-stars'));
    isValid = false;
  }

  if (descr.length < 10 || descr.length > 512) {
    markInvalid(textInput);
    isValid = false;
  }

  if (!isValid) return;

  try {
    const payload = { name, rating: ratingVal, descr };
    await axios.post('https://sound-wave.b.goit.study/api/feedbacks', payload);
    closeModal();
  } catch (error) {
    console.error('Submit error:', error);
  }
}

function markInvalid(input) {
  input.classList.add('error');
}

function clearErrors() {
  const inputs = form.querySelectorAll(
    '.modal-input, .modal-textarea, .star-rating'
  );
  inputs.forEach(input => {
    input.classList.remove('error');
  });
}
