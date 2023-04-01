function prepareHashtags(hashtags) {
  return hashtags.split(' ').map((it) => it.toLowerCase());
}

function validateHashtag(value) {
  const hashtags = prepareHashtags(value);
  return !hashtags.some((it) => it[0] !== '#');
}

function validateHashtagsByRegex(value) {
  const hashtags = prepareHashtags(value);

  return hashtags.some((it) => !!new RegExp(/[A-Za-zЁёА-я0-9]+$/i).test(it.substring(1)));
}

function validateHashtagByContent(value) {
  const hashtags = prepareHashtags(value);

  return !hashtags.some((it) => it === '#');
}

function validateHashtagByLength(value) {
  const hashtags = prepareHashtags(value);

  return !hashtags.some((it) => it.length > 20);
}

function validateHashtagByUnique(value) {
  const hashtags = prepareHashtags(value);

  return new Set(hashtags).size === hashtags.length;
}

function validateHashtagsByCount(value) {
  const hashtags = prepareHashtags(value);

  return hashtags.length <= 5;
}

export {
  validateHashtag,
  validateHashtagsByRegex,
  validateHashtagByContent,
  validateHashtagByLength,
  validateHashtagByUnique,
  validateHashtagsByCount
};
