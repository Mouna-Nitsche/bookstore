//global variables

// name: "Die Geheimnisse des Ozeans",
// author: "Clara Meer",
// likes: 1250,
// liked: true,
// price: 19.99,

//wie bekomme ich den array Index?
//parameter Index übergeben
//wie function aufrufen zsm funktionieren
// books[0].name

function iterateBooks() {
    const contentRef = document.getElementById("content");

    for (let Booksindex = 0; Booksindex < books.length; Booksindex++) {
        contentRef.innerHTML += generateBook(Booksindex);
    }
}

console.log(books);

function generateBook(Booksindex) {
    // to display the currency symbol

    return `<p>${books[Booksindex].name}</p>
    <p>Author : ${books[0].author}</p>
    <p>${books[0].likes}</p>
        <img
        class="icons"
            src="./img/heart_symbol.png"
            alt="This is an heart Icon, to click if you liked this Book"
        />
    <p>${books[0].liked}</p>
    <p>Price ${books[0].price} &#8364</p>
    <p>[${books[0].comments[0].name}]</p>
    <p>${books[0].comments[0].comment}</p>`;
}
