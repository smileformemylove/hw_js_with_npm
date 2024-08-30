'use strict'

// TASK 1

// const arr = [1, "str", true, null, 2, "3", false, 5, "6"];
//
// const midlArithmetic = function(arr){
//     let sum = 0;
//     let count = 0;
//
//     for (let item of arr){
//         let num = Number(item);
//         if (typeof item === "number") {
//             sum += num;
//             count++;
//         }
//     }
//     return count > 0 ? sum / count : 0;
// }
//
// const result = midlArithmetic(arr);
// console.log("Середнє арифметичне чисел:", result);


// TASK 2

// const doMath = function(x, znak, y){
//     if (znak === "+"){
//          return  x + y;
//     } else if (znak === "-"){
//         return x - y;
//     } else if (znak === "*"){
//         return x * y;
//     } else if (znak === "/"){
//         return x / y;
//     } else if (znak === "%"){
//         return x % y;
//     } else if (znak === "^"){
//         return x ** y;
//     }
// }
//
// const x = +prompt("Введіть перше число");
// const znak = prompt("введіть оператор");
// const y = +prompt("Введіть друге число");
// alert("Буде: " + doMath(x, znak, y));


// TASK 3

// function fill2DArray() {
//     const numRows = parseInt(prompt("Введіть кількість рядків:"));
//     const numCols = parseInt(prompt("Введіть кількість стовпців:"));
//
//
//     const array = [];
//
//     for (let i = 0; i < numRows; i++) {
//         const row = [];
//         for (let j = 0; j < numCols; j++) {
//             const value = prompt(`Введіть значення для рядка ${i + 1}, стовпця ${j + 1}:`);
//             row.push(value);
//         }
//         array.push(row);
//     }
//     console.log(array);
// }
//
// fill2DArray();

// TASK 4

// function removeLetters(str, letterRemove) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (letterRemove.indexOf(str[i]) === -1) {
//             result += str[i];
//         }
//     }
//     return result;
// }
//
// const userString = prompt("Введіть рядок:");
// const userLetter = prompt("Введіть символи для видалення (без пробілів і в лапках):").split('');
//
// const result = removeLetters(userString, userLetter);
// console.log(result);













