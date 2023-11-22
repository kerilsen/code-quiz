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

// function startQuiz() {
let question = {};
function welcomePage() {

}
// function submitAnswer() {

function createHighscores() {
    let scoreList = document.createElement('ol');
    let scores = document.createElement('li');
    let scoresText = document.createTextNode('21');
    let scoreBoard = document.getElementById('#highscores');
    scores.appendChild(scoresText);
    scoreList.appendChild(scores);
    scoreBoard.appendChild(scoreList);
    return;
}