// Questions list
const questions = [
    {
        id: '1',
        text: 'Logical AND (&&) returns true if:',
        answers: 'If both operands are true',
        options: ['If both operands are true', 'If only one of the operands is true', 'If one of the operands is true, but not both', 'If both are false']
    },
    {
        id: '2',
        text: 'To create a string, we need to put the text inside...',
        answers: 'Quotation marks',
        options: ['/ symbols', '<string> </string> tag', 'Quotation marks', 'Inside their own tags, "<###></###>"']
    },
    {
        id: '3',
        text: 'What value will be returned from the following? "console.log(Math.floor(10.64))"',
        answers: '10',
        options: ['11', '1', '10', 'undefined']
    },
    {
        id: '4',
        text: 'Select the correct method to transform all the characters of a string to lower case',
        answers: 'text.toLowerCase();',
        options: ['text.toLower();', 'text.toLowerCase();', 'text.toUpperCase();', 'toLowerCase(text);']
    },
    {
        id: '5',
        text: 'In the following code, what will X evaluate to? "let x = 14 % 2;',
        answers: 'x = 0',
        options: ['x = 2', 'x = 28', 'x = 0', 'x = 7']
    }
];

var currentIndex = 0

let seconds = 60;
// Selectors
var timerEl = document.getElementById("countdown");
var startBtn = document.getElementById("startBtn");
var secondsEl = document.getElementById("seconds");
var quizIntro = document.getElementsByClassName('quiz-intro');
var questionScreen = document.getElementsByClassName("question-screen");
var questionsList = document.getElementById("questions");
var scoreEl = document.getElementById("score");
var finishScreen = document.getElementsByClassName("finish-screen");
var submitScore = document.getElementById('submitScore');
var scoreScreen = document.getElementsByClassName('score-screen');
var goBackBtn = document.getElementsByClassName('go-back');
var clearScoreBtn = document.getElementById("clearScores");
var enterInitials = document.getElementById("enterInitials");
var viewScoresBtn = document.getElementById("viewScores")
var scoreEls = [
    document.getElementById("score1"),
    document.getElementById("score2"),
    document.getElementById("score3"),
    document.getElementById("score4"),
    document.getElementById("score5")
];

var myInterval = null;

startBtn.addEventListener('click', startQuiz);

submitScore.addEventListener('click', scoreSubmit);

goBackBtn[0].addEventListener('click', goBack);

// functions
function startQuiz() {
    currentIndex = 0;
    seconds = 60;
    quizIntro[0].style.display = 'none';
    questionScreen[0].style.display = "block"

    newQuestion()



    // Timer
    myInterval = setInterval(function() {
        if (seconds === 1) {
            questionScreen[0].style.display = "none";
            finishScreen[0].style.display = "block";
            scoreEl.innerText = seconds;
            secondsEl.innerText = '00';
            clearInterval(myInterval);
        }
        seconds--;
        secondsEl.innerText = seconds;
    }, 1000);
}

function clickAnswer(event) {
    console.log(event.target.textContent)
    var userAnswer = event.target.textContent
    if (userAnswer === questions[currentIndex].answers) {
        
    }
    else {
        seconds -= 5
    }
    currentIndex ++
    if (currentIndex < questions.length) {
        newQuestion()
    }
    else {
        questionScreen[0].style.display = "none"
        finishScreen[0].style.display = "block"
        clearInterval(myInterval)
        scoreEl.textContent = seconds
    }
    
}

function newQuestion() {
    questionScreen[0].innerHTML = ''
    var h4El = document.createElement('h4');
    var btn1 = document.createElement('button');
    var btn2 = document.createElement('button');
    var btn3 = document.createElement('button');
    var btn4 = document.createElement('button');
    
    h4El.textContent = questions[currentIndex].text
    btn1.textContent = questions[currentIndex].options[0]
    btn2.textContent = questions[currentIndex].options[1]
    btn3.textContent = questions[currentIndex].options[2]
    btn4.textContent = questions[currentIndex].options[3]

    btn1.addEventListener('click', clickAnswer)
    btn2.addEventListener('click', clickAnswer)
    btn3.addEventListener('click', clickAnswer)
    btn4.addEventListener('click', clickAnswer)

    questionScreen[0].append(h4El, btn1, btn2, btn3, btn4)
}

function scoreSubmit() {
    finishScreen[0].style.display = "none"
    scoreScreen[0].style.display = "block"

    let scores = localStorage.getItem("scores");
    if (scores == null) {
        scores = [];
    } else {
        scores = JSON.parse(scores);
    }

    let userInitials = enterInitials.value;
    let userScore = seconds;
    let newIndex = scores.findIndex(entry => entry.score < userScore);
    if (newIndex == -1) {
        scores.push({ initials: userInitials, score: userScore });
    } else {
        scores.splice(newIndex, 0, { initials: userInitials, score: userScore });
    }

    while (scores.length > 5) {
        scores.pop();
    }

    localStorage.setItem("scores", JSON.stringify(scores));

    displayScores(scores);
}

function displayScores(scores) {
    for (let i = 0; i < 5; ++i) {
        if (scores[i] != null) {
            scoreEls[i].textContent = `${scores[i].initials} : ${scores[i].score}`;
        } else {
            scoreEls[i].textContent = '--';
        }
    }
}

// goback will bring user back to quiz intro
function goBack() {
    scoreScreen[0].style.display = "none"
    quizIntro[0].style.display = "block"
}

// clear scores function displays user scores screen
clearScoreBtn.addEventListener("click", clearScores);
function clearScores() {
    localStorage.removeItem("scores");
    displayScores([]);
}

viewScoresBtn.addEventListener("click", function(){
    finishScreen[0].style.display = "none"
    questionScreen[0].style.display = "none"
    quizIntro[0].style.display = "none"
    scoreScreen[0].style.display = "block"
    clearInterval(myInterval);

})