'use strict';

const myName = "Kolya";
const addConsoleLi = document.querySelectorAll('li');

addConsoleLi.forEach((item) => {
    console.log(item.textContent);
});


const ulAttributes= document.querySelector('ul');
const ulAttributesArray = [];
const ulAttributesArrayName = [];

for(let attr of ulAttributes.attributes){
    ulAttributesArray.push(attr.value);
    ulAttributesArrayName.push(attr.name)
}

console.log(ulAttributesArray);
console.log(ulAttributesArrayName);


const lastLi = ulAttributes.lastElementChild;
lastLi.textContent = `Привіт, мене звати ${myName}`;

const firstLi = ulAttributes.firstElementChild;
firstLi.setAttribute('data-my-name', myName);

ulAttributes.removeAttribute('data-dog-tail');




