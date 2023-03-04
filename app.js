let myLibrary = [];
let author = document.getElementById("author");
let title = document.getElementById("title");
let pages = document.getElementById("pages");
let read = document.getElementById("read");

let newBook = document.getElementById("new-book");

let form = document.getElementsByTagName("form")[0];

let submitButton = document.querySelector('button[type=submit]');

newBook.onclick = () => showForm();

form.style.display = "none";

submitButton.addEventListener("click", (e) => {
    if (isFormComplete() == true) {
        addBookToLibrary(e);
        resetForm();
        hideForm();
    }
});


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
    const a = author.value
    const b = title.value
    const c = pages.value
    const d = read.checked
    return new Book(a, b, c, d);
}

function isFormComplete() {
    arr = [author, title, pages]

    for(x of arr) {
        if (x.value === '')  {
            return false
        }
    }
    return true
}

function resetForm() {
    author.value = "";
    title.value = "";
    pages.value = "";
    read.checked = false;
}

function hideForm() {
    form.style.display = "none";
    newBook.style.display = "block";
}

function showForm() {
    form.style.display = "block";
    newBook.style.display = "none";
}
