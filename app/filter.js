const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => btn.addEventListener('click', filterOfBooks))

function filterOfBooks() {
    const elementBtn = document.getElementById(this.id)
    const categoria = elementBtn.value
    let filteredBooks = categoria == 'disponivel' ? availableFilter() : categoryFilter(categoria)
    displayBooksOnScreen(filteredBooks)
    if(categoria == 'disponivel'){
        const totalValue = calculateTotalValueAvailableBooks(filteredBooks)
        showValueAllAvailableBooks(totalValue)
    }
}

function availableFilter() {
    return books.filter(book => book.quantidade > 0)
}


function categoryFilter(categoria) {
    return books.filter(book => book.categoria == categoria)
}


function showValueAllAvailableBooks(totalValue) {
        elementAllBooksAvailable.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
        </div>
        `
    }
