'use strict';

function insertWordInto(initialStr) {
    let originalWords = initialStr.split(' ');
    let index = 0;

    return function(word) {
        let wordsCopy = [...originalWords];

        wordsCopy.splice(index, 0, word);

        index = (index + 1) % (wordsCopy.length);

        return wordsCopy.join(' ');
    };
}

const insert = insertWordInto('hello world good car apple dog apple dog');
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));


