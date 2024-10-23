'use strict';


const user = {
    name: 'kolya',
    age: '12',

    get getName(){
        return this.name;
    },

    set setName(newName){
        if(typeof newName === 'string' && newName.length > 0){
            this.name = newName;
        }
        else throw new Error('name is not valid');
    },

    get getAge(){
        return this.age;
    },

    set setAge(newAge){
        if(typeof newAge === 'number' && newAge > 0 && newAge < 120){
            this.age = newAge;
        }
        else throw new Error('age is not valid');
    }
}

console.log(user.getName);
user.setName = 'vanya';
console.log(user.getName);

console.log(user.getAge);
user.setAge = 119;
console.log(user.getAge);






