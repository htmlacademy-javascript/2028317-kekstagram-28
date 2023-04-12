const effectButtons = document.getElementsByName('effect');
const image = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.img-upload__effect-level');

sliderContainer.classList.add('hidden');

const sliderConfig = {
  range: {
    min: 0,
    max: 1
  },
  connect: 'lower',
  start: 1,
  step: 0.1
};
let selectedFilter = '';

noUiSlider.create(sliderElement, sliderConfig);

function resetFilterToDefault() {
  sliderContainer.classList.add('hidden');
  image.removeAttribute('class');
  image.style.filter = 'none';
}

function applyFilterToImage(filterValue) {
  image.style.filter = `${selectedFilter}(${filterValue})`;
}

function onSliderUpdate() {
  sliderValue.value = sliderElement.noUiSlider.get();
  applyFilterToImage(sliderElement.noUiSlider.get());
}

function onChangeEffect(event) {
  image.style.filter = 'none';

  if (event.target.value === 'none') {
    sliderContainer.classList.add('hidden');
    image.removeAttribute('class');
    return;
  }

  sliderContainer.classList.remove('hidden');
  image.setAttribute('class', `effects__preview--${event.target.value}`);

  switch (event.target.value) {
    case 'chrome':
      selectedFilter = 'grayscale';
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        connect: 'lower',
        start: 1,
        step: 0.1,
        format: {
          from: (value) => value,
          to: (value) => value
        }
      });
      break;
    case 'sepia':
      selectedFilter = 'sepia';
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        connect: 'lower',
        start: 1,
        step: 0.1,
        format: {
          from: (value) => value,
          to: (value) => value
        }
      });
      break;
    case 'marvin':
      selectedFilter = 'invert';
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100
        },
        connect: 'lower',
        start: 100,
        step: 1,
        format: {
          from: (value) => value,
          to: (value) => `${value}%`
        }
      });
      break;
    case 'phobos':
      selectedFilter = 'blur';
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3
        },
        connect: 'lower',
        start: 3,
        step: 0.1,
        format: {
          from: (value) => value,
          to: (value) => `${value}px`
        }
      });
      break;
    case 'heat':
      selectedFilter = 'brightness';
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3
        },
        connect: 'lower',
        start: 3,
        step: 0.1,
        format: {
          from: (value) => value,
          to: (value) => value
        }
      });
      break;
  }
}

sliderElement.noUiSlider.on('update', onSliderUpdate);

effectButtons.forEach((effect) => {
  effect.addEventListener('click', onChangeEffect);
});

export { resetFilterToDefault };
