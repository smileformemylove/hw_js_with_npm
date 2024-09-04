'use strict'

const length = +prompt("enter lenght")
const arr = []

for (let i = 0; i < length; i++){
    let element = prompt(`enter element ${i + 1}:`)
    arr.push(element)
}



console.log(arr);
console.log(arr.sort((a, b) =>{
    return a - b;
}));
arr.splice(1, 3);
console.log(arr);


