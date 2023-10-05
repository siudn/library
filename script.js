const myLibrary = [];
const newBookDialog = document.querySelector("dialog")
const newBookButton = document.getElementById("newBookButton")
const closeButton = document.querySelector("dialog button")

newBookButton.addEventListener("click", () => newBookDialog.showModal())
closeButton.addEventListener("click", () => newBookDialog.close())

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        if (read) return `${title} by ${author}, ${pages} pages, read`
        return `${title} by ${author}, ${pages} pages, not read yet`
    }
}

function addBookToLibrary(title, author, pages, read = false) {
    title = Book(title, author, pages, read)
    myLibrary.push(title)
}

function display() {

}

function newBook() {

}