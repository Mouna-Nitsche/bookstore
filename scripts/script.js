//

function iterateBooks() {
    const contentRef = document.getElementById("content");

    for (let Booksindex = 0; Booksindex < books.length; Booksindex++) {
        contentRef.innerHTML += generateBook(Booksindex);
        iterateComments(Booksindex);
        isliked(Booksindex);
    }
}

function iterateComments(Booksindex) {
    //This Div displays all comments
    const commentsRef = document.getElementById(`comments-${Booksindex}`);
    commentsRef.innerHTML = "";

    for (
        let Commentsindex = 0;
        Commentsindex < books[Booksindex].comments.length;
        Commentsindex++
    ) {
        //if the is at least one comment add it to the comment section
        if (books[Booksindex].comments.length > 0) {
            commentsRef.innerHTML += addComment(Booksindex, Commentsindex);
        }
    }
}

function toggleLiked(Booksindex) {
    let heartRef = document.getElementById(`heart_svg-${Booksindex}`);
    let clicksRef = document.getElementById(`likes_counter-${Booksindex}`);
    let increaseCounter = Number(clicksRef.innerHTML) + 1;
    heartRef.classList.toggle("toggle");

    if (heartRef.classList.contains("toggle")) {
        clicksRef.innerHTML = increaseCounter;
    } else {
        clicksRef = document.getElementById(`likes_counter-${Booksindex}`);
        increaseCounter = Number(clicksRef.innerHTML) - 1;

        clicksRef.innerHTML = increaseCounter;
    }
}

function isliked(Booksindex) {
    let heartRef = document.getElementById(`heart_svg-${Booksindex}`);
    if (books[Booksindex].liked) {
        heartRef.classList.toggle("toggle");
    }
}

function saveUserComments(Booksindex) {
    const inputCommentRef = document.getElementById(
        `inputComment-${Booksindex}`,
    );

    const inputComment = inputCommentRef.value;

    let CommentsArrayRef = books[Booksindex].comments;

    CommentsArrayRef.push({
        name: "Gast",
        comment: inputComment,
    });

    iterateComments(Booksindex);
    inputCommentRef.value = "";
}
