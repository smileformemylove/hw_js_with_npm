'use strict'

//task1
const getFactorial = (num) => {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * getFactorial(num - 1);

}
console.log(getFactorial(8))


//task2
const getDegree = (num, degree) => {
    if (degree === 0){
        return 1
    }
    return num * getDegree(num, degree - 1)
}
console.log(getDegree(3, 3))


//task3
const getSum = (a , b) => {
    if (b === 0){
        return a
    }
    return getSum(a + 1, b - 1);
}
console.log(getSum(25,25))
