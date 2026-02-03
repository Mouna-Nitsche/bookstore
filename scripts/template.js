function generateBook(Booksindex) {
    // to display the currency symbol
    return `
            <div class="content-styling">
                <div class="content-position">
                        <p>${books[Booksindex].name}</p>
                        <img id="bookImages" class="bookImages-styling" src="./img/book_cover.png"
                        alt="This is the Cover of the Book ${books[Booksindex].name}."/>
                        <p>Author : ${books[Booksindex].author}</p>
                        <p id="likes_counter-${Booksindex}">${books[Booksindex].likes}</p>
                        <p>${books[Booksindex].liked}</p>
                        <div id="svg_div" class="svg_location"><svg id="heart_svg-${Booksindex}" onclick="toggleLiked(${Booksindex})" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"> <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                        </div>
                        <p>Price ${books[Booksindex].price} &#8364</p>
                        <div>
                            <div id="comments-${Booksindex}" class="scrollbar"></div>
                            <input id="inputComment-${Booksindex}" type="text" placeholder="Schreib dein Kommentar ..."/>
                            <button id="submit-comment-btn" onclick="saveUserComments(${Booksindex})">
                            <img class="icons" src="./img/paper_airplane_1.png"
                                alt="This is a send Button with an paper airplane Symbol."/>
                            </button>
                            <p id="writtenComments"></p>
                        </div>
                </div>
            </div>
    `;
}

// <svg id="heart_svg-${Booksindex}" onclick="toggleLiked(${Booksindex})" viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc/><path class="svg_styling" d="M28.343,17.48L16,29  L3.657,17.48C1.962,15.898,1,13.684,1,11.365v0C1,6.745,4.745,3,9.365,3h0.17c2.219,0,4.346,0.881,5.915,2.45L16,6l0.55-0.55  C18.119,3.881,20.246,3,22.465,3h0.17C27.255,3,31,6.745,31,11.365v0C31,13.684,30.038,15.898,28.343,17.48z" fill="red" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></svg>
// <svg id="heart_svg-${Booksindex}" onclick="toggleLiked(${Booksindex})" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>

//What if one object does not have an comment?
//comments needs its own index
// adding comment name/comment with push()

//second template for objects without comments?
//could change

//   == [""] , > 0

function addComment(Booksindex, Commentsindex) {
    //if there is 1 or more coment
    if (books[Booksindex].comments.length > 0) {
        // console.log(`${Booksindex}-${Commentsindex}`);
        return `
                <p>[${books[Booksindex].comments[Commentsindex].name}]</p>
                <p>${books[Booksindex].comments[Commentsindex].comment}</p>
            `;
    }
}

{
    /* <button onclick="myFunction(${Commentsindex})">Read more</button> 
        <button onclick="myFunction(${Booksindex})">Read more</button>
*/
}

// Toggle
// function myFunction(Booksindex) {
//     let elementButton = document.getElementById(
//         `showMorecomments-${Booksindex}`,
//     );
//     elementButton.classList.toggle("more");
// }

// !=
//     if ( comments.length > 0) {
//     }
