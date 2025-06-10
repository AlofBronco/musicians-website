import axios from 'axios';
// import 'css-star-rating/css/star-rating.min.css';

// =================== ЗМІННІ ============
const modalBackdrop = document.querySelector('[data-modal]');
const modal = modalBackdrop.querySelector('.modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = modalBackdrop.querySelector('[data-modal-close]');
const form = modalBackdrop.querySelector('.modal-form');
const nameInput = document.getElementById('user-name');
const textInput = document.getElementById('user-comment');
const ratingInput = document.getElementById('rating-value');
const stars = modalBackdrop.querySelectorAll('.star');


let rating = 0;
let escHandler = null;

// =================== ВІДКРИТТЯ ============
openModalBtn.addEventListener('click', openModal);

function openModal() {
  modalBackdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  escHandler = e => {
    if (e.key === 'Escape') closeModal();
  };
  window.addEventListener('keydown', escHandler);
}

// =================== ЗАКРИТТЯ ===========
closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', onBackdropClick);

function closeModal() {
  modalBackdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', escHandler);
  form.reset();
  clearErrors();
  resetStars();
}

function onBackdropClick(e) {
  if (e.target === modalBackdrop) closeModal();
}

// =================== РЕЙТИНГ =============
stars.forEach(star => {
  star.addEventListener('click', () => {
    rating = parseInt(star.dataset.value);
    ratingInput.value = rating;
    updateStars(rating);
  });
});

function updateStars(value) {
  stars.forEach(star => {
    const starValue = parseInt(star.dataset.value);
    star.classList.toggle('active', starValue <= value);
  });
}

function resetStars() {
  rating = 0;
  ratingInput.value = '0';
  updateStars(0);
}

// =================== ВАЛІДАЦІЯ ТА ВІДПРАВКА ===================
form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const descr = textInput.value.trim();
  const ratingVal = parseFloat(ratingInput.value);

  let isValid = true;
  clearErrors();

  if (name.length < 2 || name.length > 16) {
    showError(nameInput, 'Text error');
    isValid = false;
  }

  if (isNaN(ratingVal) || ratingVal < 1 || ratingVal > 5) {
    showError(ratingInput, 'Choose a rating from 1 to 5');
    isValid = false;
  }

  if (descr.length < 10 || descr.length > 512) {
    showError(textInput, 'Text error');
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

// =================== ПОМИЛКИ ===================
function showError(input, message) {
  input.classList.add('error');
  const parent = input.closest('div');
  const msg = parent.querySelector('.error-message');
  if (msg) {
    msg.textContent = message;
    msg.hidden = false;
  }
}

function clearErrors() {
  const inputs = form.querySelectorAll('.modal-input, .modal-textarea');
  inputs.forEach(input => {
    input.classList.remove('error');
    const msg = input.closest('div')?.querySelector('.error-message');
    if (msg) msg.hidden = true;
  });
}












// /*------логіка зірок------*/

// const stars = document.querySelectorAll('.star');
// const ratingInput = document.getElementById('rating-value');

// stars.forEach(star => {
//   star.addEventListener('click', () => {
//     const rating = star.dataset.value;
//     ratingInput.value = rating;

//     // оновлення стилю зірок
//     stars.forEach(s => {
//       s.classList.toggle('active', s.dataset.value <= rating);
//     });
//   });
// });