//* №1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

// const valuePlus = 5;
// const valueMinus = -10;

// function checkValue(value) {
//   return value < 0 ? "Value is negative" : "Value is positive";
// }

// console.log(checkValue(valuePlus));
// console.log(checkValue(valueMinus));

//* №2 Дана строка. Выведите в консоль длину этой строки.

// const stringCheck1 = "Hello how are you?";
// const stringCheck2 = "I love pizza";

// function stringLengthCheker(string) {
//   return string.length;
// }

// console.log(stringLengthCheker(stringCheck1));
// console.log(stringLengthCheker(stringCheck2));

//* №3 Дана строка. Выведите в консоль последний символ строки.

// const stringCheck1 = "Hello how are you?";
// const stringCheck2 = "I love pizza";

// function lastWord(string) {
//   const length = string.length;
//   return string.slice(length - 1, length);
// }

// console.log(lastWord(stringCheck1));
// console.log(lastWord(stringCheck2));

//* №4 Дано число. Проверьте, четное оно или нет.

// const value1 = 5;
// const value2 = 8;

// function checkValue(value) {
//   return value % 2 === 0 ? "number is even" : "number is odd";
// }

// console.log(checkValue(value1));
// console.log(checkValue(value2));

//* №5 Даны два слова. Проверьте, что первые буквы этих слов совпадают

// const word1 = "Pizza";
// const word2 = "Pitsa";
// const word3 = "Burger";

// function wordCheker(word1, word2) {
//   return word1[0] === word2[0]
//     ? "first letters the same"
//     : "first letters not the same";
// }

// console.log(wordCheker(word1, word2));
// console.log(wordCheker(word1, word3));

//* №6 Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

// const word1 = "Питца";
// const word2 = "Дождь";
// const word3 = "Ложь";

// function wordCheker(word) {
//   const lettersCount = word.length;
//   const lastSymbol = word.slice(lettersCount - 1, lettersCount);

//   return lastSymbol === "ь" ? word[lettersCount - 2] : word[lettersCount - 1];
// }

// console.log(wordCheker(word1));
// console.log(wordCheker(word2));
// console.log(wordCheker(word3));
