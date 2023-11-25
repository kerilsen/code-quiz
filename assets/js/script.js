function importData() {
    fetch("assets/js/javascriptQuiz.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => console.log(data));
}
// Loading JSON with AJAX from Javascript & JQuery by Jon Duckett
var xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
    }
}
let quizObject = {};

function createCard() {
    let card = document.getElementById(quiz);
    
}
/*for (var i=0; i < responseObject.events.length; i++) {
    let quizObject.number[i]
}*/
xhr.open('GET', 'assets/js/javascriptQuiz.json', true);
xhr.send(null);

// let inputQuiz = JSON.parse(importData());;
//for (var i = 0; i<)
// console.log(inputQuiz);
/* const input = JSON.parse(importData());
console.log(input);
let quizCard = {};
for (let i = 0; i < input.questions.length; i++) {
    inputString +=
        input.questions[i].number;
    input.questions[i].question;
    input.questions[i].answers;
    input.question[i].correct_answer;
}*/

// console.log("input is " + input);

let timerEl = document.getElementById('countdown');
let welcomeCard = document.getElementById('welcome');
// let quiz Card = document.getElementById('quiz');
let resultsCard = document.getElementById('results');
addEventListener
function countdown() {
    let timeLeft = 90;
    let timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
}

// ul or li or both?
function clearScores() {
    let scores = document.createElement('ul');
    scores.value = "";

}

function startQuiz() {
    // let cards = Array.from(document.querySelectorAll(div.card));
    // livePage(cards[0]);
    countdown();
}

function cardObject() {
    let cards = Array.from(document.querySelectorAll(div.card));
    for (let i = 0; i < input.questions.length; i++) {

    }
}

function livePage(x) {
    x.classList.add("hidden");
    let next = x.nextSibling;
    next.classList.remove("hidden");
}

// Event listener function from Web Dev Simplified "Learn JavaScript Event Listeners in 18 Minutes"
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e);
    })
}

addGlobalEventListener("click", "div", e => {
    console.log("hi")
})

function nextQuestion() {

}

/* const highscoresCard = document.getElementById("#highscores");
highscoresCard.addEventListener("click", e => {
    console.log(e.target);
});*/

// add "" to ul class
function createHighscores() {
    let scoreBoard = document.getElementById('highscores');
    console.dir(scoreBoard);
    let scoreList = document.createElement('ul');
    console.dir(scoreList);
    scoreList.className = "list-group list-group-flush list-group-numbered";
    console.log("scoreList = " + scoreList);
    let scores = document.createElement('li');
    console.dir(scores);
    console.log("scores = " + scores);
    let scoresText = document.createTextNode('21');
    console.dir(scoresText);
    console.log("scoresText = " + scoresText);
    let initials = document.createElement('input');

    /*let initialsEl = document.getElementById('#initials');
    initialsEl.value = localStorage.getItem('#initials');
    initialsEl.addEventListener('input', function () {
        localStorage.setItem('#initials', initialsEl.value);
        console.log("initialsEl.value = " + initialsEl.value);})*/

    // let scoreBoard = document.getElementById('highscores');
    // console.dir(scoreBoard);
    scores.appendChild(scoresText);
    scoreList.appendChild(scores);
    scoreBoard.appendChild(scoreList);
    console.dir(scoreBoard);
}
createHighscores();