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
    // }

    let clicksRef = document.getElementById(`likes_counter-${Booksindex}`);
    let increaseCounter = Number(clicksRef.innerHTML) + 1;

    // function counter(Booksindex) {
    if (heartRef.classList.contains("toggle")) {
        clicksRef.innerHTML = increaseCounter;
    } else {
        clicksRef = document.getElementById(`likes_counter-${Booksindex}`);
        increaseCounter = Number(clicksRef.innerHTML) - 1;

        clicksRef.innerHTML = increaseCounter;
    }
}

// Counter erstellen ++
// Zahl erstellen und hochzählen mit onclick

// if heart_svg-0 class="lucide lucide-heart-icon lucide-heart toggle”
// dann zähle einen Hoch.

// let userComments = [];
//push statt add

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

    // let writtenCommentsRef = document.getElementById(writtenComments);
    // writtenCommentsRef.innerHTML += inputCommentRef;
}

// console.log(books[Booksindex].comments);

//Add notes
// function addNote() {
//     //Save input / Add to notes
//     //Display input
//     const noteInputRef = document.getElementById("note_input");
//     const noteInput = noteInputRef.value;

//     notes.push(noteInput);
//     renderNotes();

//     noteInputRef.value = "";
// }

console.log(books);
