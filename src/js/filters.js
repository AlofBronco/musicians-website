import axios from 'axios';

const genreElement = document.querySelector('.btns-genre');
const btnGenre = document.querySelector('#btnDropgenre');
const btnsGenre = document.querySelector('#genreDropdown');
const btnSorting = document.querySelector('#sortingBtn');
const btnsSorting = document.querySelector('#sortingDropdown');
const lupaHeight = document.querySelector('#lupaH');
const btnHeight = document.querySelector('#btnDropgenre');
const btnSearch = document.querySelector('#btnSearch');
const searchInput = document.querySelector('#searchInput');
const resetBtn = document.querySelector('#resetBtn');
const paginationContainer = document.querySelector('#pagination');

let selectedGenre = null;
let selectedSorting = null;
let searchQuery = '';
let currentPage = 1;
let totalPages = 1;

function createSelectMarkup(genres) {
  genreElement.innerHTML = ''; 
  const markup = genres
    .map(genr => `<button class="btn-filter-modal" data-genre="${genr.genre}">${genr.genre}</button>`)
    .join('');
  genreElement.insertAdjacentHTML('beforeend', markup);

  genreElement.querySelectorAll('.btn-filter-modal').forEach(btn => {
    btn.addEventListener('click', genreClick);
  });
}

async function init() {
  const genre = await getGenres();
  createSelectMarkup(genre);
  fetchArtists({ genre: selectedGenre, sort: selectedSorting, query: searchQuery, page: currentPage });
}
init();

export async function getGenres() {
  try {
    const baseURL = 'https://sound-wave.b.goit.study/api';
    const endPoint = `/genres`;
    const url = baseURL + endPoint;
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    return null;
  }
}

function genreClick(event) {
  const allGenreBtns = genreElement.querySelectorAll('.btn-filter-modal');
  allGenreBtns.forEach(btn => btn.classList.remove('active'));

  const genre = event.target.textContent.trim();
  event.target.classList.add('active');
  selectedGenre = genre;
  currentPage = 1;
  fetchArtists({ genre: selectedGenre, sort: selectedSorting, query: searchQuery, page: currentPage });
}

btnGenre.addEventListener('click', () => {
  const isActive = btnGenre.classList.toggle('active');
  btnsGenre.classList.toggle('active', isActive);
  if (isActive) {
    btnSorting.classList.remove('active');
    btnsSorting.classList.remove('active');
  }
});

btnSorting.addEventListener('click', () => {
  const isActive = btnsSorting.classList.toggle('active');
  btnSorting.classList.toggle('active', isActive);
  if (isActive) {
    btnGenre.classList.remove('active');
    btnsGenre.classList.remove('active');
  }
});

const smallHeight = 343;
const largeHeight = 573;
let isExpanded = false;
btnHeight.addEventListener('click', () => {
  if (isExpanded) {
    lupaHeight.style.height = smallHeight + 'px';
  } else {
    lupaHeight.style.height = largeHeight + 'px';
  }
  isExpanded = !isExpanded;
});

btnSearch.addEventListener('click', () => {
  lupaHeight.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  const isInsideDropdown = e.target.closest('#btnDropgenre') || e.target.closest('#sortingBtnDrop');
  if (!isInsideDropdown) {
    btnGenre.classList.remove('active');
    btnsGenre.classList.remove('active');
    btnSorting.classList.remove('active');
    btnsSorting.classList.remove('active');
  }
});

searchInput.addEventListener('input', debounceSearch);
function debounceSearch() {
  clearTimeout(debounceSearch.timer);
  debounceSearch.timer = setTimeout(() => {
    searchQuery = searchInput.value.trim();
    currentPage = 1;
    fetchArtists({ genre: selectedGenre, sort: selectedSorting, query: searchQuery, page: currentPage });
  }, 400);
}

document.querySelectorAll('#sortingDropdown .btn-filter-modal').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const sortType = e.target.textContent;
    document.querySelectorAll('#sortingDropdown .btn-filter-modal').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    if (sortType === 'A-Z') selectedSorting = 'asc';
    else if (sortType === 'Z-A') selectedSorting = 'desc';
    else selectedSorting = null;
    currentPage = 1;
    fetchArtists({ genre: selectedGenre, sort: selectedSorting, query: searchQuery, page: currentPage });
  });
});

resetBtn.addEventListener('click', () => {
  genreElement.querySelectorAll('.btn-filter-modal').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('#sortingDropdown .btn-filter-modal').forEach(btn => btn.classList.remove('active'));
  if (searchInput) searchInput.value = '';
  selectedGenre = null;
  selectedSorting = null;
  searchQuery = '';
  currentPage = 1;
  fetchArtists({ genre: null, sort: null, query: '', page: 1 });
});

async function fetchArtists({ genre, sort, query, page = 1 }) {
  try {
    let url = `https://sound-wave.b.goit.study/api/artists?page=${page}&limit=8`;
    if (genre) url += `&genre=${encodeURIComponent(genre)}`;
    if (sort === 'asc') url += `&sort=asc`;
    if (sort === 'desc') url += `&sort=desc`;
    if (query) url += `&search=${encodeURIComponent(query)}`;
    const res = await axios.get(url);
    const artists = res.data.artists;
    totalPages = res.data.total_pages || 1;
    console.log('Artists:', artists); 
    renderPagination(totalPages);
  } catch (error) {
    // console.error('Error loading artists:', error);
  }
}

function renderPagination(total) {
  let buttons = '';
  for (let i = 1; i <= total; i++) {
    buttons += `<button class="pagination-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }
  paginationContainer.innerHTML = buttons;
  document.querySelectorAll('.pagination-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPage = Number(btn.dataset.page);
      fetchArtists({ genre: selectedGenre, sort: selectedSorting, query: searchQuery, page: currentPage });
    });
  });
}