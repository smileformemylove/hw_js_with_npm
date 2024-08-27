'use strict'

const padString = function(str, num, symb, bool = false) {
    if (str === undefined || num === undefined || symb === undefined || bool === undefined) {
        return 'Missing arguments';
    }

    if (typeof str !== 'string') {
        return 'The first argument must be a string';
    }
    if (typeof num !== 'number') {
        return 'The second argument must be a number';
    }
    if (typeof symb !== 'string') {
        return 'The third argument must be a string';
    }
    if (typeof bool !== 'boolean') {
        return 'The fourth argument must be a boolean';
    }

    if (symb.length !== 1) {
        return 'The padding character must be a single character string';
    }

    if (num < 0) {
        return 'Length must be a non-negative number';
    }

    if (str.length > num) {
        str = str.substr(0, num);
    }

    if (str.length >= num) {
        return str;
    }

    const paddingLength = num - str.length;
    const padding = symb.repeat(paddingLength);

    if (bool) {
        return padding + str;
    } else {
        return str + padding;
    }
};

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', true));
console.log(padString('hello', 10, '-', true));
console.log(padString('hello', 3, '*'));
console.log(padString('hello', 2));



