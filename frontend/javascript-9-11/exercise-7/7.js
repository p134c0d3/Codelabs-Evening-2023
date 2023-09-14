class Book {
	#isbn;
	constructor(isbn, title, author, yearPublished) {
		this.#isbn = isbn;
		this.title = title;
		this.author = author;
		this.yearPublished = yearPublished;
	}

	get isbn() {
		return this.#isbn;
	}
}

class Library {
	constructor() {
		this.books = [];
	}

	addBook(book) {
		this.books.push(book);
	}

	removeBook(isbn) {
		this.books = this.books.filter((book) => book.isbn !== isbn);
	}

	listBooks() {
		this.books.forEach((book) => {
			console.log(`Title: ${book.title}`);
			console.log(`Author: ${book.author}`);
			console.log(`Year Published: ${book.yearPublished}`);
			console.log(`ISBN: ${book.isbn}`);
		});
	}
}

const book1 = new Book(
	"12345",
	"How to Program for Dummies",
	"Jeff Johnson",
	2023
);
const book2 = new Book("54321", "Kingdom Dawn", "Chuck Black", 2010);

const library = new Library();

library.addBook(book1);
library.addBook(book2);

console.log("All of the books in the library: ");
library.listBooks();

library.removeBook("12345");

console.log("Books in the library after removal: ");
library.listBooks();
