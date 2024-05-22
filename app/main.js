let books = []

const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getSearchBooksAPI()

async function getSearchBooksAPI(){
    const reply = await fetch(endpointAPI)
    books = await reply.json()
    let booksSale = applySale(books)
    displayBooksOnScreen(booksSale)
}

