const questions = [
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed ?",
        answers: [
            { text: "title", correct: false },
            { text: "except", correct: false },
            { text: "alt", correct: true },
            { text: "src", correct: false }
        ]
    },

    {  
        question: "Which attribute is used to specify that an input field must be filled out before submitting the form?",
        answers: [
            { text: "validate", correct: false },
            { text: "required", correct: true },
            { text: "placeholder", correct: false },
            { text: "formvalidate", correct: false }
        ]
    },
    {
        question: "What is the purpose of the target=\"_blank\" attribute in an anchor tag <a> ?",
        answers: [
            { text: "It specifies that the link should open in a new frame", correct: false },
            { text: " It specifies that the link should open in a popup", correct: false },
            { text: "It specifies that the link should open in the same window/tab", correct: false },
            { text: "It specifies that the link should open in a new window/tab", correct: true }
        ]
    },
    {
        question: "How do you add a shadow to an element's text using CSS?",
        answers: [
            { text: "text-shadow", correct: true },
            { text: "font-shadow", correct: false },
            { text: "shadow-text", correct: false },
            { text: "text-glow", correct: false }
        ]
    },
    {
        question: "Which property is used to change the space between the content and the border of an element?",
        answers: [
            { text: "spacing", correct: false },
            { text: "margin", correct: false },
            { text: "padding", correct: true },
            { text: "border-spacing", correct: false }
        ]
    },
    {
        question: "Which property is used to control the order of flexible items within a flex container?",
        answers: [
            { text: "flex-order", correct: false },
            { text: "order", correct: true },
            { text: "item-order", correct: false },
            { text: "position-order", correct: false }
        ]
    },
    {
        question: "Which built-in method combines the text of two strings and returns a new string?",
        answers: [
            { text: "append()", correct: false },
            { text: "combine()", correct: false },
            { text: "join()", correct: false },
            { text: "concat()", correct: true }
        ]
    },
    {
        question: "Which method will be used to round off a=3.7638673 to 2 decimal places ?",
        answers: [
            { text: "a.toFixed(2)", correct: true },
            { text: "Math.round(a,2)", correct: false },
            { text: "Math.floor(a)", correct: false },
            { text: "Math.pow(a,2)", correct: false }
        ]
    },
    {
        question: "Which of the following function of Array object removes the last element from an array and returns that element?",
        answers: [
            { text: "push()", correct: false },
            { text: "pop()", correct: true },
            { text: "map()", correct: false },
            { text: "join()", correct: false }
        ]
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        answers: [
            { text: "It refers to the current HTML element.", correct:false },
            { text: " It refers to the previous object.", correct: false },
            { text: " It refers to the current object", correct: true },
            { text: "It refers to the parent object.", correct: false }
        ]
    }



];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById(
    "buttons");
const nextButton = document.getElementById("next")
let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }

}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = "Q " + questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {    //check isCorrect
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;

    });

    nextButton.style.display = "block";

}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} `;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});

startQuiz();

