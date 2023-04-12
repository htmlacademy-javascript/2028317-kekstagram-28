import { handlePictureClick } from './big-pictures.js';
import { setFilterButtonClick } from './image-list-filters.js';
import { debounce } from './utils.js';

const RANDOM_IMAGES_COUNT = 10;
const FILTER_DEBOUNCE_DELAY = 500;

const container = document.querySelector('.pictures.container');
const template = document.querySelector('#picture').content.querySelector('.picture');
const errorModal = document.querySelector('.load-error');
const errorModalButton = document.querySelector('.load-error__button');

const imageListFilters = document.querySelector('.img-filters');
const defaultFilterButton = document.getElementById('filter-default');
const randomFilterButton = document.getElementById('filter-random');
const discussedFilterButton = document.getElementById('filter-discussed');

function onErrorModalButtonClick() {
  document.body.classList.remove('modal-open');
  errorModal.classList.add('hidden');
}

const filterImages = debounce((filterType, images) => {
  switch (filterType) {
    case 'default':
      prepareImages(images);
      break;
    case 'random':
      prepareImages([...images].sort(() => 0.5 - Math.random()).slice(0, RANDOM_IMAGES_COUNT));
      break;
    case 'discussed':
      prepareImages([...images].sort((a, b) => b.comments.length - a.comments.length));
      break;
  }
}, FILTER_DEBOUNCE_DELAY);

function prepareImages(images) {
  container.querySelectorAll('.picture').forEach((el) => el.remove());
  images.forEach((description) => {
    const element = template.cloneNode(true);
    element.querySelector('.picture__img').src = description.url;
    element.querySelector('.picture__comments').textContent = description.comments.length;
    element.querySelector('.picture__likes').textContent = description.likes;
    element.addEventListener('click', () => handlePictureClick(description));
    container.appendChild(element);
  });
}

window.addEventListener('load', () => {
  fetch('https://28.javascript.pages.academy/kekstagram/data', {
    method: 'GET'
  })
    .then((data) => data.json())
    .then((images) => {
      prepareImages(images);
      imageListFilters.classList.remove('img-filters--inactive');
      setFilterButtonClick(defaultFilterButton, () => filterImages('default', images));
      setFilterButtonClick(randomFilterButton, () => filterImages('random', images));
      setFilterButtonClick(discussedFilterButton, () => filterImages('discussed', images));
    })
    .catch(() => {
      document.body.classList.add('modal-open');
      errorModal.classList.remove('hidden');
      errorModalButton.addEventListener('click', onErrorModalButtonClick);
    });
}, false);

export { prepareImages };
