function handleModalClose() {
  document.querySelector('.big-picture').classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const commentExample = document.querySelector('.social__comment');
const commentsContainer = document.querySelector('.social__comments');

function handlePictureClick(imageInfo) {
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');

  const bigPicture = document.querySelector('.big-picture');

  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img > img').src = imageInfo.url;
  bigPicture.querySelector('.likes-count').textContent = imageInfo.likes;
  bigPicture.querySelector('.comments-count').textContent = imageInfo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = imageInfo.description;
  commentsContainer.innerHTML = '';

  imageInfo.comments.forEach((comment) => {
    const element = commentExample.cloneNode(true);
    element.querySelector('.social__picture').src = comment.avatar;
    element.querySelector('.social__picture').alt = comment.name;
    element.querySelector('.social__text').textContent = comment.message;
    commentsContainer.appendChild(element);
  });

  document.querySelector('.big-picture__cancel').addEventListener('click', handleModalClose);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      handleModalClose();
    }
  });
}

export { handlePictureClick };
