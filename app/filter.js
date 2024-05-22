const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
    const elementBtn = document.getElementById(this.id)
    const categoria = elementBtn.value
    let filteredBooks = books.filter(book => book.categoria == categoria)
    displayBooksOnScreen(filteredBooks)
}


