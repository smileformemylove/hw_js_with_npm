'use strict'

const mainFunction = function(callback){
    const userNumber = +prompt("input num");
    const userDegree = +prompt("input degree");

    callback(userNumber, userDegree);
};

const exponentiation = function(userNumber, userDegree){
    const result = Math.pow(userNumber, userDegree);
    alert(result);
};

const multiplay = function(userNumber, userDegree){
    const result = (userNumber * userDegree);
    alert(result);
};

const division = function(userNumber, userDegree){
    const result = (userNumber / userDegree);
    alert(result);
};

const modulo = function(userNumber, userDegree){
    const result = (userNumber % userDegree);
    alert(result);
}


mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);

