const myLibrary = [];
const newBookDialog = document.querySelector("dialog")
const newBookButton = document.querySelector("#newBookButton")
const closeButton = document.querySelector("#cancel")
const submitButton = document.querySelector("#submit")
const bookTitle = document.querySelector("#title")
const bookAuthor = document.querySelector("#author")
const bookPages = document.querySelector("#pages")
const bookRead = document.querySelector("#read")

newBookButton.addEventListener("click", () => newBookDialog.showModal())
closeButton.addEventListener("click", () => newBookDialog.close())
submitButton.addEventListener("click", () => {
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
    newBookDialog.close()
    display()
})

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

function addBookToLibrary(title, author, pages, read = false) { // record values in form textboxes, generate new book object with values
    title = Book(title, author, pages, read)
    myLibrary.push(title)
}

function display() { // loop through book objects in array and add html element for each
    myLibrary.forEach(book => {
        console.log(book.info)
    })
}