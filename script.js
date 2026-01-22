//global variables
let bookName = books[0].name;
let bookAuthor = books[0].author;
let bookLikes = books[0].likes;
let bookLiked = books[0].liked;
let bookPrice = books[0].price;
let bookCommentUsername = books[0].comments[0].name;
let bookComment = books[0].comments[0].comment;

// name: "Die Geheimnisse des Ozeans",
// author: "Clara Meer",
// likes: 1250,
// liked: true,
// price: 19.99,

function renderNotes() {
    const contentRef = document.getElementById("content");

    // to display the currency symbol

    contentRef.innerHTML = `<p>${bookName}</p>
    <p>Author : ${bookAuthor}</p>
    <p>${bookLikes}</p>
                    <img
                    class="icons"
                        src="./img/heart_symbol.png"
                        alt="This is an heart Icon, to click if you liked this Book"
                    />    <p>${bookLiked}</p>
    <p>Price ${bookPrice} &#8364</p>
    <p>[${bookCommentUsername}]</p>
    <p>${bookComment}</p>`;
}
