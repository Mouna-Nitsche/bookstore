//global variables

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

    let clicksRef = document.getElementById(`likes_counter-${Booksindex}`);
    let increaseCounter = Number(clicksRef.innerHTML) + 1;

    if (heartRef.classList.contains("toggle")) {
        clicksRef.innerHTML = increaseCounter;
    } else {
        clicksRef = document.getElementById(`likes_counter-${Booksindex}`);
        increaseCounter = Number(clicksRef.innerHTML) - 1;

        clicksRef.innerHTML = increaseCounter;
    }
}

function saveUserComments(Booksindex) {
    const inputCommentRef = document.getElementById(
        `inputComment-${Booksindex}`,
    );

    const inputComment = inputCommentRef.value;
    const CommentsArrayRef = books[Booksindex].comments;

    CommentsArrayRef.push({
        name: "Gast",
        comment: inputComment,
    });

    iterateComments(Booksindex);
    inputCommentRef.value = "";
}
