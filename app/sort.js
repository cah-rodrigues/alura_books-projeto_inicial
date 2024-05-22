let btnSortByPrice = document.getElementById('btnOrdenarPorPreco')
btnSortByPrice.addEventListener('click', sortBooksByPrice)

function sortBooksByPrice() {
   let orderedBooks = books.sort((a, b) => a.preco - b.preco)
   displayBooksOnScreen(orderedBooks)
}