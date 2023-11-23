function importData() {
    fetch("assets/js/javascriptQuiz.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => console.log(data));
}
importData();
// const input = JSON.parse(

// console.log("input is " + input);
let timerEl = document.getElementById('countdown');
let welcomeCard = document.getElementById('welcome');
let quizCard = document.getElementById('quiz');
let resultsCard = document.getElementById('results');

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
    return;
}

// ul or li or both?
function clearScores() {
    let scores = document.createElement('ul');
    scores.value = "";

}

function startQuiz() {
    let cards = document.querySelectorAll(div.card);
    livePage(cards[0]);
    countdown();
    return;
}

function livePage(x) {
    x.classList.add("hidden");
    let next = x.nextSibling;
    next.classList.remove("hidden");
    return;
}

function nextQuestion() {

}

// add "" to ul class
function createHighscores() {
    let scoreList = document.createElement('ul');
    scoreList.className = "list-group list-group-flush list-group-numbered";
    console.log("scoreList = " + scoreList);
    let scores = document.createElement('li');
    console.log("scores = " + scores);
    let scoresText = document.createTextNode('21');
    console.log("scoresText = " + scoresText);
    let initialsEl = document.getElementById('#initials');
    initialsEl.value = localStorage.getItem('#initials');
    initialsEl.addEventListener('input', function () {
        localStorage.setItem('#initials', initialsEl.value);
        console.log("initialsEl.value = " + initialsEl.value);
    })
    let scoreBoard = document.getElementById('#highscores');
    scores.appendChild(scoresText);
    scoreList.appendChild(scores);
    scoreBoard.appendChild(scoreList);
    return;
}