/* Need to do; Create timer. Create start page. Create series of questions. When correct, move on, when incorrect move on and subtract time. When quiz is finished, store scores on screen. */

// Questions list
//  TODO add 1 extra answer option to 1st 2 q's
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

var myInterval = null;

startBtn.addEventListener('click', startQuiz);

// functions
function startQuiz() {
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
    if (userAnswer === questions[0].answers) {
        
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
    var h4El = document.createElement('h4')
    var btn1 = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')
    var btn4 = document.createElement('button')
    
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