const question = document.querySelector("#question");
const choices= Array.from(document.querySelector(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What type of language is Javascript?",
        choice1: 'Object-Oriented' ,
        choice2: 'Object-Based' ,
        choice3: 'Procedural' ,
        choice4: 'None of the above' ,
        answer: 1,
    }
]
const score_points = 100
const max_questions = 1

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = (...questions)
    getNewQuesiton()
}

getNewQuesiton = () => {
    if(availableQuestions.length === 0 || quesitonsCounter > max_questions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
    quesitonCounter++
    progressText.innerText = "Question ${questionCounter} of ${max_questions}"
}