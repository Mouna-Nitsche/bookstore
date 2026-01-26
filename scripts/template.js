function generateBook(Booksindex) {
    // to display the currency symbol
    return `
            <div class="content-styling">
            <img id="bookImages" class="bookImages-styling" src="./img/book_cover.png"
                alt="This is the Cover of the Book x."/>
                <p>${books[Booksindex].name}</p>
                <p>Author : ${books[Booksindex].author}</p>
                <p>${books[Booksindex].likes}</p>
                <img class="icons" src="./img/heart_symbol.png"
                    alt="This is an heart Icon, to click if you liked this Book"/>
                <p>${books[Booksindex].liked}</p>
                <p>Price ${books[Booksindex].price} &#8364</p>
                <div id="comments-${Booksindex}">
                    <input id="input-comment" type="text" placeholder="Schreib dein Kommentar ..."/>
                    <button id="submit-comment-btn" onclick="addComment()">
                        Send comment
                        <img class="icons" src="./img/paper_airplane_1.png"
                            alt="This is a send Button with an paper aurplane Symbol."/>
                    </button>
                </div>
            </div>
    `;
}
//What if one object does not have an comment?
//comments needs its own index
// adding comment name/comment with push()

//second template for objects without comments?
//could change

//   == [""] , > 0

function addComment(Booksindex, Commentsindex) {
    if (books[Booksindex].comments.length > 0) {
        console.log(`${Booksindex}-${Commentsindex}`);
        return `
            <p>${books[Booksindex].comments[Commentsindex].name}</p>
            <p>${books[Booksindex].comments[Commentsindex].comment}</p>
            `;
    }
}

// !=
//     if ( comments.length > 0) {
//     }
