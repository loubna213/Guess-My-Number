//guess my number!

const againElement = document.querySelector(".again");
const guessedNumberElement = document.querySelector(".geussed-number");
const inputElement = document.querySelector("#input");
const checkBtnElement = document.querySelector(".ckeck-btn");
const descElement = document.querySelector(".desc");
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".highscore");

againElement.addEventListener("click", () => {
    descElement.innerHTML = 'start guessing...';
    scoreElement.innerHTML = 20;
    highscoreElement.innerText = 0;
    guessedNumberElement.innerHTML = "?";
    localStorage.clear();
});

let score = 20;
saveInLocalStorage();
let highscore = 0;
let guessedNumber = Math.floor(Math.random() * 20);

checkBtnElement.addEventListener("click", () => {
    let number = Number(inputElement.value);
    guessTheNumber(number);
    inputElement.value = " ";
});

function guessTheNumber(number) {
    let result = "";
    if (number === guessedNumber) {
        result = "You Guessed The Number!";
        if (score > highscore) highscore = score;
        score = 20;
        guessedNumberElement.innerHTML = guessedNumber;
        guessedNumber = Math.floor(Math.random() * 20);
    } else if (number < guessedNumber) {
        result = "Too Low!";
        guessedNumberElement.innerHTML = "?";
        score--;
    } else if (number > guessedNumber) {
        result = "Too High!";
        guessedNumberElement.innerHTML = "?";
        score--;
    }
    saveInLocalStorage();
    descElement.innerHTML = result;
    scoreElement.innerHTML = score;
    highscoreElement.innerText = highscore;
}

function saveInLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score));
}

