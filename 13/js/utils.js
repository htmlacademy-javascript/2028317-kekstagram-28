import { COMMENT_MESSAGES, PHOTO_DESCRIPTIONS, NAMES } from './data.js';

function getRandomNumberFromInterval(start, end) {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min) + min);
}

function getComments(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    avatar: `img/avatar-${getRandomNumberFromInterval(1, 6)}.svg`,
    message: COMMENT_MESSAGES[getRandomNumberFromInterval(0, COMMENT_MESSAGES.length - 1)],
    name: NAMES[getRandomNumberFromInterval(0, NAMES.length - 1)]
  }));
}

export function photoDescriptions(index) {
  return {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: PHOTO_DESCRIPTIONS[getRandomNumberFromInterval(0, PHOTO_DESCRIPTIONS.length - 1)],
    likes: getRandomNumberFromInterval(15, 200),
    comments: getComments(getRandomNumberFromInterval(0, 5))
  };
}

export function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}
