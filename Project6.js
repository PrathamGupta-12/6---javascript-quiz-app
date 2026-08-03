let quizList = [
    {
        question: "Capital of India?",
        options: ["Delhi","Mumbai","Lucknow","Jaipur"],
        answer: "Delhi"
    },

    {
        question: "5 + 7 = ?",
        options: ["10","11","12","13"],
        answer: "12"
    },

    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Machine Tool Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "Which language runs in browser?",
        options: [
            "Python",
            "Java",
            "JavaScript",
            "C++"
        ],
        answer: "JavaScript"
    },

    {
        question: "CSS is used for?",
        options: [
            "Styling",
            "Database",
            "Server",
            "Networking"
        ],
        answer: "Styling"
    }
];

let CurrentQuestion = 0
let correctAnswer = 0;
let inCorrectAnswer = 0;
let continueGame = true;

generateQuestions(CurrentQuestion);

function generateQuestions(index) {

    let questionArea = document.getElementById('question')

    questionArea.innerHTML = "";

    questionArea.innerHTML = `
    ${quizList[index].question}`

    generateOptions(index)

}

function generateOptions(index) {

    let optionArea = document.getElementById('options');

    optionArea.innerHTML = "";

    for (let j = 0 ; j < quizList[index].options.length ; j++) {

        optionArea.innerHTML += `

        <label><input type = "radio" name = "answers" value = "${quizList[index].options[j]}">${quizList[index].options[j]}</label>

        <br><br>`
    }
}

let nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener("click" , (e) => {

    e.preventDefault();

    let selectedOption = document.querySelector('input[name="answers"]:checked');

    let inputAnswer = null;

    if (selectedOption === null) {

        alert("---> Please select an option first.");

        return
    } else {
        inputAnswer = selectedOption.value;
    }

    generateOptions(CurrentQuestion)

    if (inputAnswer === quizList[CurrentQuestion].answer) {

        CurrentQuestion++;

        correctAnswer++;

    } else {

        inCorrectAnswer++;

        CurrentQuestion++;
    }


    if (isQuizEnded(CurrentQuestion)) {

        generateQuestions(CurrentQuestion);
        
    } 
})


function isQuizEnded(questionCount) {
    
    if (questionCount >= quizList.length) {

        continueGame = false;

        nextBtn.disabled = true;

    } else {

        statistics();
    }

    return continueGame;

}

function statistics(){

    document.getElementById('currentQuestion').innerText = CurrentQuestion + 1;
    document.getElementById('correctAnswers').innerText = correctAnswer;
    document.getElementById('wrongAnswers').innerText = inCorrectAnswer;
    document.getElementById('score').innerText = `${correctAnswer}/${correctAnswer + inCorrectAnswer}`;

}