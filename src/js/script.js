'use strict';

class Book {
    title = null;
    author = null;
    _year = null;

    constructor({title, author, year}) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get info(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this._year}`
    };

    getDescription(){
        return `This is a book titled ${this.title} by ${this.author}.`
    }

    set year(_year){
        if (typeof _year !== 'number') throw new Error('This typeof number is not a number');
        this._year = _year;
    }
}

class PrintedBook extends Book {
    _pageCount = 0;

    constructor({title, author, year, pageCount}) {
        super({
            title,
            author,
            year,
            pageCount,
        });
        this.pageCount = pageCount;
    };

    get info(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this._year}, Pages: ${this._pageCount}`
    }

    getDescription() {
        return super.getDescription(`It has ${this._pageCount} pages.`);
    }

    set pageCount(_pageCount){
        if (Number(_pageCount) < 0 || typeof _pageCount !== 'number') throw new Error("This pageCount < 0 or pageCount it is string")
        this._pageCount = _pageCount;
    }
}

const printBook1 = new PrintedBook({
    title: 'bible',
    author: 'people',
    year: 2012,
    pageCount: 3000,
});














// console.log(printBook1._year)
// console.log(printBook1.info)
// console.log(printBook1.getDescription())
// console.log(printBook1._pageCount)















