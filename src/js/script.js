'use strict';

function myBind(fn, context, ...args) {
    return function(...newArgs) {
        const boundFunction = function() {
            return fn.apply(context, [...args, ...newArgs]);
        };

        if (this instanceof myBind) {
            const instance = Object.create(fn.prototype);
            const result = boundFunction();
            return (result !== null && typeof result === 'object') ? result : instance;
        }

        return boundFunction();
    };
}

function add(y) {
    return this.x + y;
}

const obj = { x: 2 };

const boundAdd = myBind(add, obj);
console.log(boundAdd(3));



