//* №1 Дано число. Выведите в консоль первую цифру этого числа.

// function getFirstNumber(number) {
//   return String(number).split("")[0];
// }

// function getFirstNumber(number) {
//   return String(number)[0];
// }

// console.log(getFirstNumber(12));
// console.log(getFirstNumber(54));

//* №2 Дано число. Выведите в консоль последнюю цифру этого числа.

// function getLastNumber(number) {
//   return String(number).slice(-1);
// }

// console.log(getLastNumber(54));
// console.log(getLastNumber(991));

//* №3 Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// function numberSum(number) {
//   const firstNumber = String(number)[0];
//   const lastNumber = String(number).slice(-1);
//   return +firstNumber + +lastNumber;
// }

// function numberSum(number) {
//   const numberStr = String(number);
//   const firstNumber = numberStr[0];
//   const lastNumber = numberStr[numberStr.length - 1];
//   return +firstNumber + +lastNumber;
// }

// console.log(numberSum(991));
// console.log(numberSum(22));
