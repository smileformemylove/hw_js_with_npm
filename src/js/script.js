'use strict';

const product = {
    quantity: "5"
};

Object.defineProperty(product, "name", {
    _name: "iphone",

    get(){
        return this._name;
    },
    set(value) {
        if(typeof value !== "string" || value.length < 1) {
            throw new Error("not invalid name")
        }
        this._name = value;
    },

    enumerable: true,
    configurable: true
});

product.name = "myPhone"
console.log(product.name);

Object.defineProperty(product, "price",{
    _price: "1200",

    get(){
        return this._price;
    },

    set(value){
        if (typeof value !== 'number' || value <= 0){
            throw new Error("not invalid price");
        }
        this._price = value
    },
    enumerable: true,
    configurable: true
});

product.price = 1100
console.log(product.price)


Object.defineProperty(product, "totalValue" ,{
    get() {
        return this.price * this.quantity
    },

    enumerable: true,
    configurable: false
});


console.log(product.totalValue)
