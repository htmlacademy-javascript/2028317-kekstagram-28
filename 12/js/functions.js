function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

function checkIfStringIsPalindrome(string) {
  let isPalindrome = true;
  const preparedString = string.toLowerCase().replaceAll(' ', '');

  for (let i = 0; i < preparedString.length / 2; i = i + 1) {
    if (preparedString[i] === preparedString[preparedString.length - 1 - i] && isPalindrome) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
  }

  return isPalindrome;
}

checkIfStringIsPalindrome('топот');
checkIfStringIsPalindrome('ДовОд');
checkIfStringIsPalindrome('Кекс');
checkIfStringIsPalindrome('Лёша на полке клопа нашёл ');

function getAllNumbersFromString(string) {
  let numbers = '';
  const preparedString = String(string).toLowerCase().replaceAll(' ', '');

  for (let i = 0; i < preparedString.length; i = i + 1) {
    if (!isNaN(Number(preparedString[i]))) {
      numbers = numbers + preparedString[i];
    }
  }

  return numbers.length ? Number(numbers) : NaN;
}

getAllNumbersFromString('2023 год');
getAllNumbersFromString('ECMAScript 2022');
getAllNumbersFromString('1 кефир, 0.5 батона');
getAllNumbersFromString('агент 007');
getAllNumbersFromString('а я томат');
getAllNumbersFromString(2023);
getAllNumbersFromString(-1);
getAllNumbersFromString(1.5);

function prepareString(initialString, minLength, additionalSymbol) {
  if (initialString.length >= minLength) {
    return initialString;
  }

  let preparedString = initialString;

  for (let i = preparedString.length; i < minLength; i = i + additionalSymbol.length) {
    if (preparedString.length + additionalSymbol.length <= minLength) {
      preparedString = String(additionalSymbol) + String(preparedString);
    } else {
      const numberToSlice = minLength - preparedString.length;
      preparedString = String(additionalSymbol.slice(0, numberToSlice)) + String(preparedString);
    }
  }

  return preparedString;
}

prepareString('1', 2, '0');
prepareString('1', 4, '0');
prepareString('q', 4, 'werty');
prepareString('q', 4, 'we');
prepareString('qwerty', 4, '0');
