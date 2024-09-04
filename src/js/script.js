'use strict'

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

const positivEl = arr.filter(num => num > 0);
const numberPositivEl = positivEl.length
let result = positivEl.reduce((sum, current) => sum + current, 0);

console.log("Кількість позитивних елементів:",numberPositivEl);
console.log("Сума позитивних елементів :",result);

//task 2

const minEl = Math.min(...arr);
const minIndex = arr.indexOf(minEl);

console.log("Мінімальний елемент:",minEl);
console.log("Порядковий номер мінімального елементу:",minIndex);

//task 3

const maxEl = Math.max(...arr);
const maxIndex = arr.indexOf(maxEl);

console.log("Максимальний елемент:",maxEl);
console.log("Порядковий номер максимального елементу:",maxIndex);

//task 4

const negativEl = arr.filter(num => num < 0)
const negativEl2 = negativEl.length

console.log("Кількість негативних елементів:",negativEl2);

//task 5

const oddPositiveEl = arr.filter(num => num > 0 && num % 2 !== 0)
const lengthOddPositiveEl = oddPositiveEl.length

console.log("Кількість непарних позитивних елементів:",lengthOddPositiveEl);

// task 6

const pairPositiveEl = arr.filter(num => num > 0 && num % 2 === 0)
const lengthPairPositiveEl = pairPositiveEl.length

console.log("Кількість парних позитивних елементів:",lengthPairPositiveEl);

// task 7

const sumPairPositiveEl = pairPositiveEl.reduce((sum , current) => sum + current, 0);

console.log("Сума парних позитивних елементів:",sumPairPositiveEl);

// task 8

const sumOddPositiveEl = oddPositiveEl.reduce((sum , current) => sum + current, 0);

console.log("Сума непарних позитивних елементів:",sumOddPositiveEl);

// task 9

const dobutPositivEl = positivEl.reduce((dobut , current) => dobut * current);

console.log("Добуток позитивних елементів:",dobutPositivEl)

// task 10

const deletetArr = arr.map(num => num === maxEl ? maxEl : 0);

console.log(deletetArr)

