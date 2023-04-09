export function setFilterButtonClick(button, cb) {
  button.addEventListener('click', () => {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    button.classList.add('img-filters__button--active');
    document.querySelector('.pictures.container').querySelectorAll('.picture').forEach((el) => el.remove());
    cb();
  });
}
