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
let listEl = document.getElementById('hideme');

// Helper function to clear input from https://toolsnull.com/code-solution/how-to-clear-all-radio-buttons-in-one-click-using-javascript
function clearInput() {
    let buttons = document.querySelectorAll("input[type=radio]");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].checked = false;
    }
}

function checkAnswer(x, y) {
    if (x === y) { return true; }
    else { return false; }
}

clickHere.addEventListener("click", function () {
    clickHere.textContent = "Submit";
    listEl.classList.remove("hidden");
    countdown();
    console.log("Hello this is the first event listener");
},
    { once: true }
);

clickHere.addEventListener("click", function () {
    clicker++;
    // clearInput();
    console.log("the clicker is set at " + clicker);
    console.log("Hello this is the second event listener");
    let questionEl = document.getElementById('question');
    let answer1 = document.getElementById('1');
    let answer2 = document.getElementById('2');
    let answer3 = document.getElementById('3');
    let answer4 = document.getElementById('4');
    let feedbackEl = document.getElementById('feedback');
    console.log(responseObject.questions.length);
    if (clicker < responseObject.questions.length + 1) {
        questionEl.textContent = responseObject.questions[clicker - 1].question;
        console.log("Question 1: " + questionEl.textContent);
        answer1.textContent = responseObject.questions[clicker - 1].answers[0];
        console.log("Answer 1: " + answer1.textContent);
        answer2.textContent = responseObject.questions[clicker - 1].answers[1];
        console.log("Answer 2: " + answer2.textContent);
        answer3.textContent = responseObject.questions[clicker - 1].answers[2];
        console.log("Answer 3: " + answer3.textContent);
        answer4.textContent = responseObject.questions[clicker - 1].answers[3];
        console.log("Answer 4: " + answer4.textContent);
    }
    /* if (clicker > 1 && clicker < responseObject.questions.length + 1)*/
    console.log("Answer 1.checked is " + check1.checked);
    console.log("Answer 2.checked is " + check2.checked);
    console.log("Answer 3.checked is " + check3.checked);
    console.log("Answer 4.checked is " + check4.checked);
    console.log("Correct answer is " + responseObject.questions[clicker - 1].correct_answer);
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