function applySale(books){
    const sale = 0.3;
    booksSale = books.map(book => {
        return {...book, preco: book.preco - (book.preco * sale)}
    })
    return booksSale;
}