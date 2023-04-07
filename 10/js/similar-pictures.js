import { handlePictureClick } from './big-pictures.js';

const container = document.querySelector('.pictures.container');
const template = document.querySelector('#picture').content.querySelector('.picture');
const errorModal = document.querySelector('.load-error');
const errorModalButton = document.querySelector('.load-error__button');

function onErrorModalButtonClick() {
  document.body.classList.remove('modal-open');
  errorModal.classList.add('hidden');
}

function prepareImages(images) {
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
    .then(prepareImages)
    .catch(() => {
      document.body.classList.add('modal-open');
      errorModal.classList.remove('hidden');
      errorModalButton.addEventListener('click', onErrorModalButtonClick);
    });
}, false);
