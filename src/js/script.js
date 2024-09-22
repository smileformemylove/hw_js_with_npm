'use strict'

const complexArray = [
    [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
    [5, [6, [7, [8, 9]]]],
    [[10, 11], 12, 13]
];

const result = [];

const flat = function(arr){
    if (arguments.length > 1) throw new Error('Function accepts only 1 argument, too much arguments provided');

    if (arr.every(item => !Array.isArray(item))) {
        return arr.slice();
    }

    for (const item of arr){
        if(Array.isArray(item)) flat(item);
         else result.push(item)
    }
    return result;

}

console.log(flat(complexArray));
console.log(flat([1, 2, 3]));

