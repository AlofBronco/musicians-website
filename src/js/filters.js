import axios from 'axios';
const genreElement = document.querySelector('.btns-genre');
function createSelectMarkup(genres) {
  const markup = genres
    .map(genr => `<button class="btn-filter-modal">${genr.genre}</button>`)
    .join('');
genreElement.insertAdjacentHTML('beforeend', markup);
}


async function init(){
const genre = await getGenres();
createSelectMarkup(genre);
};
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
genreElement.addEventListener('click', genreClick);
function genreClick(event){
if(event.target.className !== "btn-filter-modal"){
  return;
}
const genre = event.target.textContent; 
console.dir(genre);
}