const myLibrary = [];
const newBookDialog = document.querySelector("dialog")
const newBookButton = document.querySelector("#newBookButton")
const closeButton = document.querySelector("#cancel")
const submitButton = document.querySelector("#submit")
const checkRead = document.querySelector("#read")

newBookButton.addEventListener("click", () => newBookDialog.showModal())
closeButton.addEventListener("click", () => newBookDialog.close())
submitButton.addEventListener("click", addBookToLibrary)

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

function addBookToLibrary(ev) { // record values in form textboxes, generate new book object with values
    ev.preventDefault();
    const inputs = Array.from(document.querySelectorAll("#bookForm input")).reduce((acc, input) => 
    ({...acc, [input.id]: input.value }), {})
    let book = new Book(inputs["title"], inputs["author"], inputs["pages"], checkRead.checked)
    myLibrary.push(book)
    newBookDialog.close()
    display()
}

function display() { // loop through book objects in array and add html element for each
    myLibrary.forEach(book => {
        console.log(book.info())
    })
}