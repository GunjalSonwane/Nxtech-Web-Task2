const questions=[
    {
        question:" Javascript is an _______ language?",
        answers:[
            {text: "Object oriented", correct: true},
            {text: "Object-Based", correct: false},
            {text: "Procedural", correct: false},
            {text: "None of the above", correct: false}

        ]
    },
    {
    question:"Which of the following keywords is used to define a variable in Javascript?",
        answers:[
            {text: "var", correct: false},
            {text: "let", correct: false},
            {text: "Both A and B", correct: true},
            {text: "None of the above", correct: false},
        ]

    },
     {
        question:"Inside which HTML element do we put the JavaScript? ",
        answers:[
            {text: "scripting", correct: false},
            {text: "js", correct: false},
            {text: "script", correct: true},
            {text: "javascript", correct: false},
        ]  
    },
    {
        question:"How do you create a function in JavaScript? ",
        answers:[
            {text: "function:myFunction()", correct: false},
            {text: "function=myFunction()", correct: false},
            {text: "function myFunction()", correct: true},    
        ]  

    },
    {
        question:"What does HTML stand for? ",
        answers:[
            {text: "Home Tool Markup Language", correct: false},
            {text: "Hyper Text Markup Language", correct: true},
            {text: "Hyperlinks and Text Markup Language", correct: false},
        ]  
    },
    {
        question:" Who is making the Web standards?",
        answers:[
            {text: "The World Wide Web Consortium", correct: true},
            {text: "Google", correct: false},
            {text: "Microsoft", correct: false},
            {text: "Mozilla", correct: false},
        ]  

    },
    {
        question:" Which HTML element defines the title of a document?",
        answers:[
            {text: "meta", correct: false},
            {text: "head", correct: false},
            {text: "title", correct: true},
     ]
    },
    {
        question:" Which HTML element is used to specify a footer for a document or section",
        answers:[
            {text: "section", correct: false},
            {text: "bottom", correct: false},
            {text: "footer", correct: true},
        ]
    },
    {
        question:"Where is the correct place to insert a Java script?",
        answers:[
            {text: "The head section", correct: false},
            {text: "The body section", correct: false},
            {text: "Both the head section and the body section are correct", correct: true},
        ]
    },
    {
        question:"Which operator is used to assign a value to a variable?",
        answers:[
            {text: "-", correct: false},
            {text: "x", correct: false},
            {text: "=", correct: true},
            {text: "*", correct: false},
        ]   
    },
    {
        question:"How do you declare a JavaScript variable?",
        answers:[
            {text: "variable carName", correct: false},
            {text: "v carName", correct: false},
            {text: "var carName", correct: true},
        ]      
    },

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
     currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHTML = "Next";
     showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.
    question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");  
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");            
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();