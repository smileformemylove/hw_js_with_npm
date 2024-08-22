'use strict'

// TASK 1

// let num = 20;
// let step = 0.5;
//
// for (let i = num; i <=30; i += step){
//     console.log(i)
// }
//
//
// // TASK 2
//
// let dollar = 27
//
// for (let i = 10; i <= 100; i += 10){
//     console.log(`${i} доллаів буде: `, dollar * i , `гривень`);
// }


// TASK 3

// let input = prompt("Введіть число:");
// let number = parseInt(input, 10);
// let divisors = [];
// let divisorsCount = 0;
//
// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         divisors.push(i);
//
//         if (number % 2 === 0) {
//             divisorsCount++;
//             }
//         }
//
// }
// console.log('Дільники числа' , number , ': ' , divisors.join(', '));
// console.log('Кількість парних дільників числа ' + number + ': ' + divisorsCount);
//
// if (divisors.length <= 2) {
//     console.log("Ваше число є простим")}
// else {
//     console.log("Ваше число є складним")
// }

// TASK 4

let num = +prompt("Введіть число:")
let current = num;

if (current <= 0) {
    console.log(`${num} не можна отримати шляхом зведення 3 у деякий ступінь.`);
} else {
    while (current % 3 === 0) {
        current /= 3;
    }

    if (current === 1) {
        console.log(`${num} можна отримати шляхом зведення 3 у деякий ступінь.`);
    } else {
        console.log(`${num} не можна отримати шляхом зведення 3 у деякий ступінь.`);
    }
}


