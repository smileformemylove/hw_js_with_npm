'use strict'

const sum = () => {
    let total = 0;
    return (num) => {
        total += num;
        return total
    }
}

const myNum = sum();

console.log(myNum(3));
console.log(myNum(5));
console.log(myNum(20));