'use strict';

const deepFreeze = (obj) => {
    Object.freeze(obj);

    Object.getOwnPropertyNames(obj).forEach((prop) => {
        const value = obj[prop];

        if (value && typeof value === 'object' && !Object.isFrozen(value)) {
            deepFreeze(value);
        }
    })
    return obj;
}

let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}

deepFreeze(user);

// console.log(user.data.b)
// console.log(user.data.d.d1.a2)

user.data.c = 5
user.data.d.d1.a2 = 5;


console.log(user.data.c)
console.log(user.data.d.d1.a2)

