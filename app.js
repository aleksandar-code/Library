let myLibrary = [1, 2, 3, 4];
let author = document.getElementById("author");
let title = document.getElementById("title");
let pages = document.getElementById("pages");
let read = document.getElementById("read");

let newBook = document.getElementById("new-book");

let form = document.getElementsByTagName("form")[0];

let submitButton = document.querySelector('button[type=submit]');

let booksBtn = document.getElementById("books");

let menu = document.getElementById("menu");

let cancelForm = document.getElementById("cancel-form");

let library = document.getElementById("library");

let menuOnBooksPage = document.getElementById("books-menu");

form.style.display = "none";
menuOnBooksPage.style.display = "none";

booksBtn.addEventListener("click", () => {
    showBooks();
    showBooksMenu();
});

menuOnBooksPage.addEventListener("click", () => {
    hideBooks();
    hideBooksMenu()
});


newBook.addEventListener("click", () => {
    hideMenu();
    hideBooks();
    showForm();
});

cancelForm.addEventListener("click", () => {
    hideForm();
    showMenu();
});


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
let booksDisplay;
function showBooks() {
    if (myLibrary.length < 1) return

    booksDisplay = document.createElement("div");

    booksDisplay.setAttribute("id", "books-display");

    library.appendChild(booksDisplay);
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
}

function showForm() {
    form.style.display = "block";
}

function hideMenu() {
    menu.style.display = "none";
}

function showMenu() {
    menu.style.display = "flex";
}

function hideBooks() {
    booksDisplay.remove();
}

function showBooksMenu() {
    menuOnBooksPage.style.display = "block";
    booksBtn.style.display = "none";
    newBook.style.display = "none";
}

function hideBooksMenu() {
    menuOnBooksPage.style.display = "none";
    booksBtn.style.display = "flex";
    newBook.style.display = "flex";
}
