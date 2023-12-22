let responseObject = {};

// Loading JSON with AJAX from Javascript & JQuery by Jon Duckett
var xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
    }
}

xhr.open('GET', 'assets/js/javascriptQuiz.json', true);
xhr.send(null);

let time = document.getElementById('time');
let timeLeft;
let clicker = 0;

let scoreEl = document.getElementById('score');

let tally = 0;

let line = document.getElementById('line');

function hide(x) {
    if (x.classList.contains("hidden"))
        return;
    else (x.classList.add("hidden"));
}

let newresults = document.getElementById('newresults');

function show(x) {
    if (x.classList.contains("hidden")) {
        x.classList.remove("hidden")
    };
    return;
}

function results(x) {
    scoreEl.textContent = x;
    let tallyEl = document.getElementById('tally');
    show(tallyEl);
    tallyEl.textContent = tally;
    show(line);
    hide(time);
    let quiz = document.getElementById('quiz');
    hide(quiz);
    show(newresults);
}

function countdown() {
    timeLeft = 150;
    let timerEl = document.getElementById('countdown');
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
            timeLeft--;
        }
        else if (timeLeft < 11 && timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second remaining";
            timeLeft--;
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            results(timeLeft);
        }
    }, 1000);
}

let clickHere = document.getElementById('clickHere');

// This is the first button click that starts the timer and the quiz
clickHere.addEventListener("click", function () {
    clickHere.textContent = "Submit";
    show(time);
    show(answerList);
    countdown();
    console.log("Hello this is the first event listener that runs only once");
},
    { once: true }
);

// This is the second event listener for the same button that starts counting "clicks" and
clickHere.addEventListener("click", function () {
    clicker++;
    console.log("The clicker is set at " + clicker);
    console.log("Hello this is the second event listener");
    let questionEl = document.getElementById('question');
    let answer1 = document.getElementById('1');
    let answer2 = document.getElementById('2');
    let answer3 = document.getElementById('3');
    let answer4 = document.getElementById('4');
    console.log(responseObject.questions.length);

    if (clicker < responseObject.questions.length + 1) {
        let numberEl = document.getElementById('number');
        show(numberEl);
        numberEl.textContent = responseObject.questions[clicker - 1].number;
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

    if (clicker > 1 && clicker <= responseObject.questions.length + 1) {
        let answers = [check1.checked, check2.checked, check3.checked, check4.checked];
        console.log("Array of user input is " + answers);
        let correct = document.getElementById('correct');
        let wrong = document.getElementById('wrong');
        let correctAnswer = responseObject.questions[clicker - 2].correct_answer;
        console.log("The correct answer is " + correctAnswer);
        console.log("The corresponding answer from user input is " + answers[correctAnswer - 1]);
        // if the answer index
        if (answers[correctAnswer - 1]) {
            show(correct);
            hide(wrong);
            tally++;
        }
        else {
            show(wrong);
            hide(correct);
            // deduct 10 seconds from timer for wrong answer
            timeLeft = timeLeft - 10;
        }
        if (clicker === responseObject.questions.length + 1) {
            results(timeLeft);
        }
    }
});

function clearScores() {
    localStorage.clear();
    listEl = document.querySelectorAll('li');
    listEl.textContent = "";
}

function refreshPage() {
    location.reload();
}

let initialsInput = document.querySelector("#initials");
let scores = [];
let storedScores = [];

function createHighscores() {
    let tallyEl = document.getElementById('tallyscore');
    hide(tallyEl);
    let correct = document.getElementById('correct');
    let wrong = document.getElementById('wrong');
    hide(correct);
    hide(wrong);
    hide(newresults);

    // pull any scores out of local storage if they are stored there
    let storedScores = JSON.parse(localStorage.getItem("scores")) || [];

    // append current score to storedScores
    scores.push({
        initials: initialsInput.value.trim(),
        score: scoreEl.textContent.trim()
    });
    storedScores.push(...scores);

    // show and create highscores list
    let scoreBoard = document.getElementById('highscores');
    show(scoreBoard);
    let scoreList = document.getElementById('scoreList');
    storedScores.forEach(scores => {
        let score = scores.score;
        let initials = scores.initials;
        let listItem = document.createElement('li');
        listItem.textContent = initials + " " + score;
        scoreList.appendChild(listItem);
    });

    // send all scores to local storage 
    localStorage.setItem("scores", JSON.stringify(storedScores));
}

let enterScore = document.getElementById('enterScore');
enterScore.addEventListener("click", function (event) {
    event.preventDefault();
    createHighscores();
});