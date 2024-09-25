
//todo: define the book class:

class Book{

  constructor(title,author,publisher,year,genre){
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.year = year;
    this.genre = genre;
  }

  //todo: add methods to the book class:
  describe(){
    return `${this.title} by ${this.author} in ${this.year}`
  }
  displayGenre(){
    return `Genre: ${this.genre}`
  }
}

//todo: create and log book objects:

let classicBook = new Book("Pride and Prejudice","Jane Austen","T.Egerton",1812,"Classic")

let sclFiBook = new Book("Dune","Frank Herbert","Chilton Books",1965,"Science Fiction")

console.log(classicBook);
console.log(sclFiBook);

//todo: Call methods on book objects:
console.log(classicBook.describe());
console.log(classicBook.displayGenre());

//* sclFi Book

console.log(sclFiBook.describe());
console.log(sclFiBook.displayGenre());
