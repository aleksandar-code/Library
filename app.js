let myLibrary = [1, 2, 3, 4];
let author = document.getElementById("author");
let title = document.getElementById("title");
let pages = document.getElementById("pages");
let read = document.getElementById("read");

let newBook = document.getElementById("new-book");

let form = document.getElementsByTagName("form")[0];

let submitButton = document.querySelector('button[type=submit]');

let books = document.getElementById("books");

let booksDisplay = document.getElementById("books-display");

let menu = document.getElementById("menu");

let cancelForm = document.getElementById("cancel-form");

books.onclick = () => displayBooks();

form.style.display = "none";

newBook.addEventListener("click", () => {
    hideMenu();
    hideBooks();
    showForm();
});

cancelForm.addEventListener("click", () => {
    hideForm();
    showMenu();
})


submitButton.addEventListener("click", (e) => {
    if (isFormComplete() == true) {
        addBookToLibrary(e);
        resetForm();
        hideForm();
        showMenu();
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

function displayBooks() {
    if (myLibrary.length < 1) return
    books.style.display = "none";
    for (x of myLibrary) {
        let bookCard = document.createElement("div")
        bookCard.classList.add("card")
        booksDisplay.appendChild(bookCard)
    }
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

function hideMenu() {
    menu.style.display = "none";
}

function showMenu() {
    menu.style.display = "flex";
}

function hideBooks() {
    booksDisplay.style.display = "none";
}

