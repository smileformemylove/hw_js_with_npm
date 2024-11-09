import Book from "./Book.js"

class Ebook extends Book {
    _fileSize = null;

    constructor({title, author, year, fileSize}) {
        super({
            title,
            author,
            year,
        });
        this.fileSize = fileSize;
    };

    get info(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this._year}, File Size: ${this._fileSize} MB.`
    };

    getDescription() {
        return super.getDescription(`File size is ${this._fileSize} MB.`);
    };

    get fileSize() {
        return this._fileSize;
    }

    set fileSize(_fileSize){
        if (typeof _fileSize !== 'number' || Number(_fileSize) < 0) throw new Error(`This _fileSize < 0 MB or typeof _fileSize it is string`)
        this._fileSize = _fileSize;
    };
}


const myEbook1 = new Ebook({
    title: 'Christine',
    author: 'Stephen King',
    year: 1983,
    fileSize: 123,
});

console.log(myEbook1)
console.log(myEbook1.info)
console.log(myEbook1.getDescription())
console.log(myEbook1.author)
console.log(myEbook1.year)
console.log(myEbook1.fileSize)

console.log("------------------------");

const myEbook2 = new Ebook({
    title: '1408',
    author: 'Stephen King',
    year: 1999,
    fileSize: 240,
});

console.log(myEbook2)
console.log(myEbook2.info)
console.log(myEbook2.getDescription())
console.log(myEbook2.author)
console.log(myEbook2.year)
console.log(myEbook2.fileSize)






