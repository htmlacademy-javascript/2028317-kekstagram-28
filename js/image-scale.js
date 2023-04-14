const SCALE_CHANGE_STEP = 25;
const MINIMUM_SCALE_VALUE = 25;
const MAXIMUM_SCALE_VALUE = 100;
const scaleValue = document.querySelector('.scale__control--value');
const decreaseButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const scalableImage = document.querySelector('.img-upload__preview img');

function resetScaleToDefault() {
  applyScaleToImage(1);
  scaleValue.value = `${MAXIMUM_SCALE_VALUE}%`;
}

function applyScaleToImage(scale) {
  scalableImage.style.transform = `scale(${scale})`;
}

function decreaseScaleValue() {
  const currentValue = parseFloat(scaleValue.value);

  scaleValue = currentValue - SCALE_CHANGE_STEP < MINIMUM_SCALE_VALUE ? `${MINIMUM_SCALE_VALUE}%` : `${currentValue - SCALE_CHANGE_STEP}%`;

  applyScaleToImage(parseFloat(scaleValue.value) / 100);
}

function increaseScaleValue() {
  const currentValue = parseFloat(scaleValue.value);

  scaleValue.value = currentValue + SCALE_CHANGE_STEP > MAXIMUM_SCALE_VALUE ? `${MAXIMUM_SCALE_VALUE}%` : `${currentValue + SCALE_CHANGE_STEP}%`;

  applyScaleToImage(parseFloat(scaleValue.value) / 100);
}

decreaseButton.addEventListener('click', decreaseScaleValue);
increaseButton.addEventListener('click', increaseScaleValue);

export { resetScaleToDefault };
