let responseObject = {};

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
importData();
// console.log(responseObject.length);
// how to access array from object

// Event listener function from Web Dev Simplified "Learn JavaScript Event Listeners in 18 Minutes"
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e);
    })
}

addGlobalEventListener("click", "div", e => {
    console.log("hi")
})
let timerEl = document.getElementById('countdown');

function countdown() {
    let timeLeft = 300;
    let timeInterval = setInterval(function () {
        if (timeLeft > 119) {
            timerEl.textContent = Math.floor(timeLeft / 60) + " minutes and " + timeLeft % 60 + " seconds remaining";
            timeLeft--;
        }
        else if (timeLeft > 59 && timeLeft < 120) {
            timerEl.textContent = Math.floor(timeLeft / 60) + " minute and " + timeLeft % 60 + " seconds remaining"
            timeLeft--;
        }
        else if (timeLeft < 60 && timeLeft > 10) {
            timerEl.textContent = timeLeft + " seconds remaining";
            // timerEl.classList.add(warning);
            timeLeft--;
        }
        else if (timeLeft < 11 && timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds remaining";
            // timerEl.classList.add(danger);
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second remaining";
            timeLeft--;
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);

}

let quizObject = {};
let clicker = 0;
let clickHere = document.getElementById('clickHere');

clickHere.addEventListener("click", function () {
    countdown();
    clicker = 0;
    clickHere.textContent = "Submit";
    let questionEl = document.getElementById('question');
    questionEl.textContent = "What should we do today?"
    console.log("Question test is: " + questionEl.textContent);
    let answer1 = document.getElementById('1');
    let answer2 = document.getElementById('2');
    let answer3 = document.getElementById('3');
    let answer4 = document.getElementById('4');
    while (clicker < responseObject.questions.length + 1) {
        questionEl.textContent = responseObject.questions[clicker].question;
        console.log("Question 1: " + questionEl.textContent);
        answer1.textContent = responseObject.questions[clicker].answers[0];
        console.log("Answer 1: " + answer1.textContent);
        answer2.textContent = responseObject.questions[clicker].answers[1];
        console.log("Answer 2: " + answer2.textContent);
        answer3.textContent = responseObject.questions[clicker].answers[2];
        console.log("Answer 3: " + answer3.textContent);
        answer4.textContent = responseObject.questions[clicker].answers[3];
        console.log("Answer 4: " + answer4.textContent);
        clicker++;
    }
});

xhr.open('GET', 'assets/js/javascriptQuiz.json', true);
xhr.send(null);

// ul or li or both?
function clearScores() {
    let scores = document.createElement('ul');
    scores.value = "";
}

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
    return;
}

createHighscores();