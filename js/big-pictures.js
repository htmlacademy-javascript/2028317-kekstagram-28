const NUMBER_TO_INCREASE_COMMENTS = 5;
let currentCommentsCount = 0;
let allComments = [];

const commentExample = document.querySelector('.social__comment');
const commentsContainer = document.querySelector('.social__comments');
const loadMoreButton = document.querySelector('.comments-loader');
const showedComments = document.querySelector('.showed-comments-count');

window.onload = function() {
  loadMoreButton.addEventListener('click', loadMore);
};

function handleModalClose() {
  document.querySelector('.big-picture').classList.add('hidden');
  document.body.classList.remove('modal-open');
  currentCommentsCount = 0;
  showedComments.textContent = 0;
  loadMoreButton.classList.remove('hidden');
}

function applyComments(comments) {
  comments.forEach((comment) => {
    currentCommentsCount++;
    showedComments.textContent = Number(showedComments.textContent) + 1;
    commentsContainer.appendChild(comment);
  });
}

function handlePictureClick(imageInfo) {
  document.body.classList.add('modal-open');

  const bigPicture = document.querySelector('.big-picture');

  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img > img').src = imageInfo.url;
  bigPicture.querySelector('.likes-count').textContent = imageInfo.likes;
  bigPicture.querySelector('.comments-count').textContent = imageInfo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = imageInfo.description;
  commentsContainer.innerHTML = '';

  allComments = imageInfo.comments.map((comment) => {
    const element = commentExample.cloneNode(true);
    element.querySelector('.social__picture').src = comment.avatar;
    element.querySelector('.social__picture').alt = comment.name;
    element.querySelector('.social__text').textContent = comment.message;
    return element;
  });

  if (allComments.length < NUMBER_TO_INCREASE_COMMENTS) {
    loadMoreButton.classList.add('hidden');
  }

  applyComments(allComments.slice(0, NUMBER_TO_INCREASE_COMMENTS));


  document.querySelector('.big-picture__cancel').addEventListener('click', handleModalClose);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      handleModalClose();
    }
  });
}

function loadMore() {
  const newComments = allComments.slice(currentCommentsCount, currentCommentsCount + NUMBER_TO_INCREASE_COMMENTS);

  if (newComments.length < NUMBER_TO_INCREASE_COMMENTS || currentCommentsCount + NUMBER_TO_INCREASE_COMMENTS >= allComments.length) {
    loadMoreButton.classList.add('hidden');
  }

  applyComments(newComments);
}

export { handlePictureClick };
