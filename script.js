//global variables
let bookName = books[0].name;
let bookAuthor = books[0].author;
let bookLikes = books[0].likes;
let bookLiked = books[0].liked;
let bookPrice = books[0].price;
let bookCommentUsername = books[0].comments[0].name;
let bookComment = books[0].commemts[0].commemt;

// name: "Die Geheimnisse des Ozeans",
// author: "Clara Meer",
// likes: 1250,
// liked: true,
// price: 19.99,

const contentRef = document.getElementById("content");

// to display the currency symbol

contentRef.innerHTML = `<p>${bookName}</p>
<p>Author : ${bookAuthor}</p>
<p>${bookLikes}</p>
<p>${bookLiked}</p>
<p>Price ${bookPrice} &#8364</p>
<p>[${bookCommentUsername}]</p>
<p>${bookComment}</p>`;
