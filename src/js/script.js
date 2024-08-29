'use strict'

const array = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10];

const removeElement = function(array, item){
    let index = array.indexOf(userNumber)
    if (index > -1){
        array.splice(index, 1)
    }
}

const userNumber = +prompt("Введіть число від 1 до 10, для того щоб його видалить")

removeElement(array, userNumber );
console.log(array);
