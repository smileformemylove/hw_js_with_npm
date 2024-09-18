'use strict'

const users = [
    {
        name: "John",
        age: "18",
    },
    {
        name: "Mark",
        age: "28",
    },
    {
        name: "Nick",
        age: "25",
    },
    {
        name: "Sasha",
        age: "32",
    },
    {
        name: "Steve",
        age: "18",
    },
]

const getUsersInfo = function(){
    console.log(this.name + ` is ` + this.age + ` years old`)
}

// реалізуємо bind
for (const user of users){
    const bind = getUsersInfo.bind(user , user.name);
    bind();
}