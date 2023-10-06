const myLibrary = [];
const newBookDialog = document.querySelector("dialog")
const newBookButton = document.querySelector("#newBookButton")
const closeButton = document.querySelector("#cancel")
const submitButton = document.querySelector("#submit")
const checkRead = document.querySelector("#read")
const booksDisplay = document.querySelector(".books")
const bookForm = document.querySelector("#bookForm")

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
    display(book)
    newBookDialog.close()
    bookForm.reset()
}

function removeBook(index) {
    myLibrary.splice(index, 1)
    display()
}

function display() { // loop through book objects in array and add html element for each
    booksDisplay.innerHTML = ""
    myLibrary.forEach(book => {
        let displayBook = document.createElement("div")
        displayBook.classList.add("bookCard")
        displayBook.innerHTML = `
            <div class="card-header">
                <p class="title">${book.title}</p>
                <p class="author">by ${book.author}</p>
            </div>
            <div class="card-body">
                <p>${book.pages} pages</p>
                <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
                <button class="remove-btn" onclick="removeBook(${myLibrary.indexOf(book)})">Remove</button>
            </div>
        `
        booksDisplay.appendChild(displayBook)
    })
}