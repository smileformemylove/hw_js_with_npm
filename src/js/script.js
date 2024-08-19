'use strict'

// TASK 1

let result = []

for (let i = 10; i <= 20; i++) {
    result.push(i)
}
console.log(result.join(', '));


// TASK 2

// let i = 10;
//
// while (i <= 20) {
//     console.log(i**2);
//     ++i;
// }


// TASK 3

// let i = 1
//
// while (i <= 10) {
//     console.log(`${i} * 7 =`, i*7);
//     ++i;
// }


// TASK 4

// let sum = 0;
// for (let i = 1; i <= 15; i++) {
//     sum += i;
// }
// console.log("сума всіх чисел буде: ", sum);


// TASK 5

// let dobut = 15;
// for (let i = 1; i <= 35; i++) {
//     dobut *= i;
// }
// console.log("добуток всіх чисел буде: ", dobut);


// TASK 6

// let sum = 0;
// const numbers = 500;
// for (let i = 1; i <= 500; i++){
//      sum += i;
// }
// let middleArithmetic = sum / numbers;
// console.log(middleArithmetic);


// TASK 7

// let sum = 0;
// for (let i = 30; i <= 80; i++){
//     if (i % 2 === 0){
//         sum += i;
//     }
// }
// console.log(sum);


// TASK 8

// let i = 100
// while (i <= 200){
//     if (i % 3 === 0){
//         console.log(i);
//     }
//     ++i;
// }


// TASK 9, 10, 11

// let input = prompt("Введіть число:");
// let number = parseInt(input, 10);
// let divisors = [];
// let divisorsCount = 0;
// let divisorsSum = 0;
//
// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         divisors.push(i);
//
//         if (number % 2 === 0){
//             divisorsCount++;
//             divisorsSum += i;
//             }
//         }
// }
// console.log('Дільники числа' , number , ': ' , divisors.join(', '));
// console.log('Кількість парних дільників числа ' + number + ': ' + divisorsCount);
// console.log('Сума парних дільників числа ' + number + ': ' + divisorsSum);


// TASK 12

// let i = 1;
// while (i <= 10) {
//     let j = 1;
//     while (j <= 10) {
//         console.log(`${i} * ${j} = ${i * j}`);
//         j++;
//     }
//     i++;
// }



















