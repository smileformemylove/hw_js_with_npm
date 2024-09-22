'use strict';


const user = {
    firstName : 'Sasha',
    lastName : 'Ddos'
}

const getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

const myApply = (func, context, ...args) => {
    let result = null
    context.func = func;
    result = context.func(...args);
    delete context.func;
    return result;
}

const bind = (func, context, args = []) => {
    if(!func) return undefined;

    return function(){
        return myApply(func, context, ...args)
    }
}

const bindGetFullName = bind(getFullName, user);
console.log(bindGetFullName);
console.log(bindGetFullName());

