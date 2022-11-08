/* Need to do; Create timer. Create start page. Create series of questions. When correct, move on, when incorrect move on and subtract time. When quiz is finished, store scores on screen. */
// Questions list
const questions = [
    {
        id: '1',
        text: 'question number 1',
        answers: 'yes',
        options: ['yes', 'no']
    },
    {
        id: '2',
        text: 'question number 2',
        answers: 'yes',
        options: ['yes', 'no']
    },
    {
        id: '3',
        text: 'question number 3',
        answers: 'yes',
        options: ['yes', 'no']
    },
    {
        id: '4',
        text: 'question number 4',
        answers: 'yes',
        options: ['yes', 'no']
    },
    {
        id: '5',
        text: 'question number 5',
        answers: 'yes',
        options: ['yes', 'no']
    }
];
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
// Create on click listener to begin the quiz and timer

var myInterval = null;

startBtn.addEventListener('click', startQuiz);

// functions
function startQuiz() {
    quizIntro[0].style.display = 'none';
    questionScreen[0].style.display = "block"

    // Timer
    myInterval = setInterval(function() {
        seconds--;
        secondsEl.innerText = seconds;
    }, 1000);
}