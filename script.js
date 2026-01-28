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

function toggleLiked(Booksindex) {
    let heartRef = document.getElementById(`heart_svg-${Booksindex}`);
    heartRef.classList.toggle("toggle");
}

// let userComments = [];
//push statt add

// function saveUserComments() {
//     let inputCommentRef = document.getElementById(input_comment);
//     inputCommentRef += push(books[Booksindex].comments[Commentsindex].comment);

//     let writtenCommentsRef = document.getElementById(writtenComments);
//     writtenCommentsRef.innerHTML += inputCommentRef;
// }
// saveUserComments();

console.log(books);
