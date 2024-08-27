'use strict'


const generateKey = function (length, characters) {
    const charactersLength = characters.length;
    let result = '';
    let index = 0;

    for (let i = 0; i < length; i++) {
        result += characters[index % charactersLength];
        index++;
    }

    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key);






