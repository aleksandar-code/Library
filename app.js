let myLibrary = [];
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

let booksDisplay;

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
    showForm();
});

cancelForm.addEventListener("click", (e) => {
    resetForm();
    hideForm();
    showMenu();
    e.preventDefault();
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

function initialBooks() {
    let book1 = new Book("J. K. Rowling", "Harry Potter", "500", false)
    let book2 = new Book("Plato", "The Republic", "300", false)
    let book3 = new Book("Marcus Aurelius", "Meditations", "500", false)

    myLibrary.push(book1)
    myLibrary.push(book2)
    myLibrary.push(book3)
}

initialBooks();

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

function showBooks() {
    if (myLibrary.length < 1) return

    booksDisplay = document.createElement("div");

    booksDisplay.setAttribute("id", "books-display");

    library.appendChild(booksDisplay);

    let i = 0;
    for (x of myLibrary) {
        let bookCard = document.createElement("div")
        bookCard.classList.add("card")
        fillBookCard(bookCard, i)
        booksDisplay.appendChild(bookCard)
        i++;
    }
}

function fillBookCard(bookCard, i) {
    let authorText = document.createElement("div")
    authorText.textContent = myLibrary[i].author;
    bookCard.appendChild(authorText)
}

function showBooksMenu() {
    menuOnBooksPage.style.display = "block";
    booksBtn.style.display = "none";
    newBook.style.display = "none";
}

function hideBooksMenu() {
    menuOnBooksPage.style.display = "none";
    booksBtn.style.display = "block";
    newBook.style.display = "block";
}
