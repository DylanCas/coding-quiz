/* Need to do; Create timer. Create start page. Create series of questions. When correct, move on, when incorrect move on and subtract time. When quiz is finished, store scores on screen. */
// Questions list
const questions = [
    {
        id: '1',
        text: 'Logical AND (&&) returns true if:',
        answers: 'If both operands are true',
        options: ['If both operands are true', 'If only one of the operands is true', 'If one of the operands is true, but not both']
    },
    {
        id: '2',
        text: 'To create a string, we need to put the text inside...',
        answers: 'Quotation marks',
        options: ['/ symbols', '<string> </string> tag', 'Quotation marks']
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