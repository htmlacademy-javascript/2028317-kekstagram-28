const PHOTO_DESCRIPTIONS = [
  'Завтрак у моря',
  'Кардиотренировка в спортзале',
  'Работа из дома',
  'Отдыхаю с друзьями',
  'Новогоднее настроение',
  'Купил новый телефон',
  'Нереальные закаты',
  'Читаю новую книгу'
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артём',
  'Юлия',
  'Алина',
  'Валерия',
  'Мария',
  'Денис',
  'София',
  'Даниил',
  'Павел',
  'Вадим',
  'Галина',
  'Елена'
]

function getRandomNumberFromInterval(start, end) {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min) + min);
}

function getComments(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    avatar: `img/avatar-${getRandomNumberFromInterval(0, 6)}.svg`,
    message: COMMENT_MESSAGES[getRandomNumberFromInterval(0, COMMENT_MESSAGES.length - 1)],
    name: NAMES[getRandomNumberFromInterval(0, NAMES.length - 1)]
  }));
}

function photoDescriptions(index) {
  return {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: PHOTO_DESCRIPTIONS[getRandomNumberFromInterval(0, PHOTO_DESCRIPTIONS.length - 1)],
    likes: getRandomNumberFromInterval(15, 200),
    comments: getComments(getRandomNumberFromInterval(0, 5))
  }
}

const descriptions = Array.from({ length: 25 }, (_, index) => photoDescriptions(index));

console.log(descriptions)


