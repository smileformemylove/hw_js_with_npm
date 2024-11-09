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
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
    };

    getDescription(){
        return `This is a book titled ${this.title} by ${this.author}.`
    }

    get year() {
        return this._year;
    }

    set year(_year){
        if (typeof _year !== 'number') throw new Error('This typeof number is not a number');
        this._year = _year;
    }
}

export default Book;



















