function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

// console.log(checkStringLength('проверяемая строка', 20));
// console.log(checkStringLength('проверяемая строка', 18));
// console.log(checkStringLength('проверяемая строка', 10));

function checkIfStringIsPalindrome(string) {
  let isPalindrome = true;
  const preparedString = string.toLowerCase().replaceAll(' ', '');

  console.log(preparedString);

  for (let i = 0; i < preparedString.length / 2; i = i + 1) {
    if (preparedString[i] === preparedString[preparedString.length - 1 - i] && isPalindrome) {
     isPalindrome = true;
    } else {
      isPalindrome = false;
    }
  }

  return isPalindrome;
}

// console.log(checkIfStringIsPalindrome('топот'));
// console.log(checkIfStringIsPalindrome('ДовОд'));
// console.log(checkIfStringIsPalindrome('Кекс'));
// console.log(checkIfStringIsPalindrome('Лёша на полке клопа нашёл '));

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

// console.log(getAllNumbersFromString('2023 год'));
// console.log(getAllNumbersFromString('ECMAScript 2022'));
// console.log(getAllNumbersFromString('1 кефир, 0.5 батона'));
// console.log(getAllNumbersFromString('агент 007'));
// console.log(getAllNumbersFromString('а я томат'));
// console.log(getAllNumbersFromString(2023));
// console.log(getAllNumbersFromString(-1));
// console.log(getAllNumbersFromString(1.5));


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

// console.log(prepareString('1', 2, '0'));
// console.log(prepareString('1', 4, '0'));
// console.log(prepareString('q', 4, 'werty'));
// console.log(prepareString('q', 4, 'we'));
// console.log(prepareString('qwerty', 4, '0'));
