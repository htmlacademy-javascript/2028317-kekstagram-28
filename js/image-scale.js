const SCALE_CHANGE_STEP = 25;
const scaleValue = document.querySelector('.scale__control--value');
const decreaseButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const scalableImage = document.querySelector('.img-upload__preview img');

function applyScaleToImage(scale) {
  scalableImage.setAttribute('style', `transform: scale(${scale});`);
}

function decreaseScaleValue() {
  const currentValue = parseFloat(scaleValue.value);

  if (currentValue - SCALE_CHANGE_STEP < 25) {
    scaleValue.value = '25%';
  } else {
    scaleValue.value = `${currentValue - SCALE_CHANGE_STEP}%`;
  }

  applyScaleToImage(parseFloat(scaleValue.value) / 100);
}

function increaseScaleValue() {
  const currentValue = parseFloat(scaleValue.value);

  if (currentValue + SCALE_CHANGE_STEP > 100) {
    scaleValue.value = '100%';
  } else {
    scaleValue.value = `${currentValue + SCALE_CHANGE_STEP}%`;
  }

  applyScaleToImage(parseFloat(scaleValue.value) / 100);
}

decreaseButton.addEventListener('click', decreaseScaleValue);
increaseButton.addEventListener('click', increaseScaleValue);
