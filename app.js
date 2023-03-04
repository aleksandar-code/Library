let myLibrary = [];

class Book {
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {
    
}

function showForm() {
    form.style.display = "block";
    newBook.style.display = "none";
}

let newBook = document.getElementById("new-book");

let form = document.getElementsByTagName("form")[0];

let submitButton = document.querySelector('button[type=submit]');


form.style.display = "none";

submitButton.onclick = () => addBookToLibrary();

newBook.onclick = () => showForm();
