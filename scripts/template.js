function generateBook(Booksindex) {
    // to display the currency symbol
    return `<p>${books[Booksindex].name}</p>
    <p>Author : ${books[Booksindex].author}</p>
    <p>${books[Booksindex].likes}</p>
        <img
        class="icons"
            src="./img/heart_symbol.png"
            alt="This is an heart Icon, to click if you liked this Book"
        />
    <p>${books[Booksindex].liked}</p>
    <p>Price ${books[Booksindex].price} &#8364</p>    `;
    // <p>[${books[Booksindex].comments[Commentsindex].name}]</p>
    // <p>${books[Booksindex].comments[Commentsindex].comment}</p>
}
//What if one object does not have an comment?
//comments needs its own index
// adding comment name/comment with push()

//second template for objects without comments?
//could change

//   == [""] , > 0

function addComment(Booksindex, Commentsindex) {
    if (books[Booksindex].comments.length > 0) {
        return `<p>[${books[Booksindex].comments[Commentsindex].name}]</p>`;
    }
}

console.log(comments.length);
// !=
//     if ( comments.length > 0) {
//     }
