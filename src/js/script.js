'use strict'


function insertWordInto(initialStr) {
    let originalWords = initialStr.split(' ');
    let index = 1;

    return function(word) {
        let wordsCopy = [...originalWords];

        if (index === 1) {
            wordsCopy.splice(index, 0, word);
        } else if (index === 0) {
            wordsCopy.unshift(word);
        } else if (index === wordsCopy.length) {
            wordsCopy.push(word);
        }

        index = (index + 1) % 3;
        return wordsCopy.join(' ');
    };
}

const insert = insertWordInto('hello world');
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));

