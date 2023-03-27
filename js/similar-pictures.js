import { createPhotoDescriptions } from './data.js';

const photoDescriptions = createPhotoDescriptions();

const container = document.querySelector('.pictures.container');
const template = document.querySelector('#picture').content.querySelector('.picture');

photoDescriptions.forEach((description) => {
  const element = template.cloneNode(true);
  element.querySelector('.picture__img').src = description.url;
  element.querySelector('.picture__comments').textContent = description.comments.length;
  element.querySelector('.picture__likes').textContent = description.likes;
  container.appendChild(element);
});
