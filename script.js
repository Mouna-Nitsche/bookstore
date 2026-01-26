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
        iterateComments(Booksindex);
    }
}

function iterateComments(Booksindex) {
    const commentsRef = document.getElementById(`comments-${Booksindex}`);

    for (
        let Commentsindex = 0;
        Commentsindex < books[Booksindex].comments.length;
        Commentsindex++
    ) {
        commentsRef.innerHTML += addComment(Booksindex, Commentsindex);
    }
}

console.log(books);
