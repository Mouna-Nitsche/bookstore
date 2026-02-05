function generateBook(Booksindex) {
    return `
            <div class="content-styling">
                <div class="content-position">
                    <div>
                        <div class="bookName-bookImage divider-line">
                            <h3 class="margin_bottom_general">${books[Booksindex].name}</h3>
                            <img id="bookImages" class="bookImages-styling margin_bottom_general" src="./img/book_cover.png"
                            alt="This is the Cover of the Book ${books[Booksindex].name}."/>
                        </div>
                            <div class="price-position">
                                <p><strong>Price: ${books[Booksindex].price} &#8364 </strong></p>
                                <div class="likeNumber-likeButton">   
                                    <p id="likes_counter-${Booksindex}">${books[Booksindex].likes}</p>            
                                    <div id="svg_div" class="svg_location pointer"><svg id="heart_svg-${Booksindex}" onclick="toggleLiked(${Booksindex})" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"> <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="book-details divider-line">
                                <p>Author : ${books[Booksindex].author}</p>
                                <p>Erscheinungsdatum: ${books[Booksindex].publishedYear}</p>
                                <p>Genre: ${books[Booksindex].genre}</p>
                            </div>
                            <p class="margin_bottom_general"><strong>Kommentare:</strong></p>
                        </div>
                        <div>
                            <div id="comments-${Booksindex}" class="comments-scrollbar"></div>
                            <div class="comments-section">
                                <input id="inputComment-${Booksindex}" type="text" placeholder="Schreib dein Kommentar ..."/>
                                <a id="submit-comment-btn" class="pointer a-style" onclick="saveUserComments(${Booksindex})">
                                    <img class="icons" src="./img/paper_airplane_1.png"
                                    alt="This is a send Button with an paper airplane Symbol."/>
                                </a>
                            </div>
                            <p id="writtenComments"></p>
                        </div>
                </div>
            </div>
    `;
}

function addComment(Booksindex, Commentsindex) {
    //if there is 1 or more coment
    return `
                <p>[${books[Booksindex].comments[Commentsindex].name}]</p>
                <p class="margin_bottom_general">${books[Booksindex].comments[Commentsindex].comment}</p>
            `;
}
