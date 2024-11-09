import Book from "./Book.js"

class PrintedBook extends Book {

    constructor({title, author, year, pageCount}) {
        super({
            title,
            author,
            year,
        });
        this.pageCount = pageCount;
    };

    get info(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this._year}, Pages: ${this._pageCount}`
    }

    getDescription() {
        return super.getDescription(`It has ${this._pageCount} pages.`);
    }

    get pageCount() {
        return this._pageCount;
    }

    set pageCount(_pageCount){
        if ( typeof _pageCount !== 'number' || Number(_pageCount) < 0) throw new Error("This pageCount < 0 or pageCount it is string")
        this._pageCount = _pageCount;
    }
}

const myBook1 = new PrintedBook({
    title: 'Tracks on the road',
    author: 'Valerii Markus',
    year: 2018,
    pageCount: 375,
});

console.log(myBook1)
console.log(myBook1.info)
console.log(myBook1.getDescription())
console.log(myBook1.author)
console.log(myBook1.year)
console.log(myBook1.pageCount)







