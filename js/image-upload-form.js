import { resetFilterToDefault } from './image-effect.js';
import { resetScaleToDefault } from './image-scale.js';
import { validateHashtag, validateHashtagByContent, validateHashtagByLength, validateHashtagByUnique, validateHashtagsByCount, validateHashtagsByRegex } from './validation.js';

const uploadInput = document.querySelector('#upload-file');
const uploadedImageFormWrapper = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const uploadedImageForm = document.getElementById('upload-select-image');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const successModalTemplate = document.querySelector('#success').content;
const successModal = successModalTemplate.querySelector('.success');
const successModalButton = successModal.querySelector('.success__button');

const errorModalTemplate = document.querySelector('#error').content;
const errorModal = errorModalTemplate.querySelector('.error');
const errorModalButton = errorModal.querySelector('.error__button');

window.addEventListener('load', () => {

  const pristineConfig = {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper'
  };

  const pristine = new Pristine(uploadedImageForm, pristineConfig, false);

  pristine.addValidator(hashtagsInput, validateHashtag, 'Хештег должен начинаться с символа #');
  pristine.addValidator(hashtagsInput, validateHashtagsByRegex, 'Хештег должен состоять только из букв и цифр');
  pristine.addValidator(hashtagsInput, validateHashtagByContent, 'Хештег не может состоять только из #');
  pristine.addValidator(hashtagsInput, validateHashtagByLength, 'Длина одного хештега не может превышать 20 символов');
  pristine.addValidator(hashtagsInput, validateHashtagByUnique, 'Каждый хештег должен быть уникальным');
  pristine.addValidator(hashtagsInput, validateHashtagsByCount, 'Максимальное кол-во хештегов: 5');

  pristine.addValidator(commentField, (value) => value.length <= 140, 'Длинна комментария не может составлять больше 140 символов');

  uploadedImageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('https://28.javascript.pages.academy/kekstagram', {
      method: 'POST',
      body: new FormData(uploadedImageForm)
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }

      return Promise.reject();
    })
    .then(() => {
      resetScaleToDefault();
      resetFilterToDefault();
      handleModalClose();
      resetFields();
      document.body.appendChild(successModal);
      successModalButton.addEventListener('click', closeSuccessModal);
      document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          closeSuccessModal();
        }
      });
    })
    .catch(() => {
      document.body.appendChild(errorModal);
      errorModal.classList.remove('hidden');
      errorModalButton.addEventListener('click', closeErrorModal);
      document.addEventListener('keydown', closeErrorModalOnEscape);
    })
  });
});

function closeOnEscape(evt) {
  const fieldsIsFocused = hashtagsInput === document.activeElement || commentField === document.activeElement;

  if (evt.key === 'Escape' && !fieldsIsFocused) {
    evt.preventDefault();
    handleModalClose();
  }
}

function handleImageLoad() {
  uploadedImageFormWrapper.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnEscape);
  closeButton.addEventListener('click', handleModalClose);
}

function handleModalClose() {
  uploadedImageFormWrapper.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetScaleToDefault();
  resetFilterToDefault();
  handleModalClose();
  resetFields();
}

function closeSuccessModal() {
  successModal.classList.add('hidden');
}

function closeErrorModalOnEscape(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorModal();
  }
}

function closeErrorModal() {
  errorModal.classList.add('hidden');
  document.removeEventListener('keydown', closeErrorModalOnEscape);
}

function resetFields() {
  hashtagsInput.value = '';
  commentField.value = '';
  uploadInput.value = '';
}

uploadInput.addEventListener('change', handleImageLoad);
