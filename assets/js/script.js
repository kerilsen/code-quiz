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
}

function clearScores() {

}

function startQuiz() {
let welcome = document.getElementById('#welcome');
livePage(welcome);
countdown();
}

function livePage(x) {
    x.classList.add("hidden");
    let next = x.nextSibling;
    next.classList.remove("hidden");
}

function nextQuestion() {

}

// add "" to ul class
function createHighscores() {
    let scoreList = document.createElement('ul');
    scoreList.className = "list-group list-group-flush list-group-numbered";
    let scores = document.createElement('li');
    let scoresText = document.createTextNode('21');
    let initialsEl = document.getElementById('#initials');
    initialsEl.value = localStorage.getItem('#initials')
    initialsEl.addEventListener('input', function () {
        localStorage.setItem('#initials', initialsEl.value);
    })
    let scoreBoard = document.getElementById('#highscores');
    scores.appendChild(scoresText);
    scoreList.appendChild(scores);
    scoreBoard.appendChild(scoreList);
    return;
}