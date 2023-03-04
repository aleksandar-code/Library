let myLibrary = [];

class Book {
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(e) {
    myLibrary.push(createBook());
    e.preventDefault();
}

function createBook() {
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    return new Book(author, title, pages, read);
}

function showForm() {
    form.style.display = "block";
    newBook.style.display = "none";
}

let newBook = document.getElementById("new-book");

let form = document.getElementsByTagName("form")[0];

let submitButton = document.querySelector('button[type=submit]');


form.style.display = "none";

submitButton.onclick = (e) => addBookToLibrary(e);

newBook.onclick = () => showForm();
