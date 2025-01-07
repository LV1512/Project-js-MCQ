const questions = [
    {
     question : "What is the default access modifier for a class in C#?",
     answers:[
            {text: "public" , correct:false},
            {text: "private" , correct:false},
            {text: "internal" , correct:true},
            {text: "protected" , correct:false}, 
     ]
},
{
    question : "Which of the following is NOT a value type in C#?",
    answers:[
           {text: "float" , correct:false},
           {text: "string" , correct:true},
           {text: "int" , correct:false},
           {text: "double" , correct:false}, 
    ]

},
{
    question : "What is the purpose of the finally block in C#??",
    answers:[
           {text: "To execute code after an exception is handled" , correct:false},
           {text: "To ensure that resources are released" , correct:true},
           {text: "To skip exception handling" , correct:false},
           {text: "To retry a block of code" , correct:false}, 
    ]
    
},
{
    question : "Which of the following is used to handle runtime errors in C#?",
    answers:[
           {text: "if-else" , correct:false},
           {text: "try-catch" , correct:true},
           {text: "switch" , correct:false},
           {text: "goto" , correct:false}, 
    ]
    
},
{
    question : "Which of the following statements about the sealed keyword is true",
    answers:[
           {text: "A sealed class can be inherited." , correct:false},
           {text: "A sealed method can be overridden." , correct:false},
           {text: "A sealed class cannot be inherited." , correct:true},
           {text: " A sealed class cannot have methods." , correct:false}, 
    ]
    
},

  {
       question : "Which collection in C# is suitable for key-value pairs?",
       answers:[
              {text: "Dictionary" , correct:true},
              {text: "List" , correct:false},
              {text: "Array" , correct:false},
              {text: "Queqe" , correct:false}, 
       ]
  },
  
  {
       question : "Which of the following correctly describes async and await in C#?",
       answers:[
              {text: "Used for multithreading" , correct:false},
              {text: "Used for asynchronous programming" , correct:false},
              {text: "Used to pause threads" , correct:false},
              {text: "Used for synchronous programming" , correct:true}, 
       ]
  },
  {
       question : "Which of the following is NOT a type of delegate in C#?",
       answers:[
              {text: "Action" , correct:false},
              {text: "Func" , correct:false},
              {text: "Event" , correct:true},
              {text: "Predicate" , correct:false}, 
       ]
  },
  
  {
       question : "The capability of an object in Csharp to take number of different forms and hence display behaviour as according is known as____",
       answers:[
              {text: "Encapsulation" , correct:false},
              {text: "Polymorphism" , correct:true},
              {text: "Abstraction" , correct:false},
              {text: "None of the Mentioned" , correct:false}, 
       ]
  },
  {
       question : "Correct way to overload +operator?",
       answers:[
              {text: "public sample operator + (sample a, sample b)" , correct:false},
              {text: "public abstract operator + (sample a,sample b)" , correct:false},
              {text: "public static sample operator + (sample a, sample b)" , correct:false},
              {text: "all of the mentioned" , correct:true}, 
       ]
  },
  {
    question : "The operator used to access member function of a class?",
    answers:[
           {text: "." , correct:true},
           {text: "::" , correct:false},
           {text: ":" , correct:false},
           {text: "#" , correct:false}, 
    ]
},
{
    question : "What is the most specified using class declaration?",
    answers:[
           {text: "type" , correct:true},
           {text: "scope" , correct:false},
           {text: "type & scope" , correct:false},
           {text: "none of the above" , correct:false}, 
    ]
},
{
    question : "Which of the following statements about objects in “C#” is correct?",
    answers:[
           {text: "Everything you use in C# is an object, including Windows Forms and controls" , correct:false},
           {text: "Objects have methods and events that allow them to perform actions" , correct:false},
           {text: "All objects created from a class will occupy equal number of bytes in memory" , correct:false},
           {text: "All of the mentioned" , correct:true}, 
    ]
},
{
    question : "The data members of a class by default are?",
    answers:[
           {text: "Public" , correct:false},
           {text: "Private" , correct:true},
           {text: "Protected public" , correct:false},
           {text: "private public" , correct:false}, 
    ]
},
{
    question : "Correct way to overload +operator?",
    answers:[
           {text: " public sample operator + (sample a, sample b)" , correct:false},
           {text: "public abstract operator + (sample a,sample b)" , correct:false},
           {text: " public static sample operator + (sample a, sample b)" , correct:false},
           {text: "all of the mentioned" , correct:true}, 
    ]
},
{
    question : " Which keyword is used to refer baseclass constructor to subclass constructor?",
    answers:[
           {text: "this" , correct:false},
           {text: "static" , correct:false},
           {text: "base" , correct:true},
           {text: "Extend" , correct:false}, 
    ]
},
{
    question : "Which keyword is used to declare a base class method while performing overriding of base class methods?",
    answers:[
           {text: "This" , correct:false},
           {text: "Virtual" , correct:true},
           {text: "Override" , correct:false},
           {text: "Extend" , correct:false}, 
    ]
},
{
    question : "Which of the given modifiers can be used to prevent Method overriding?",
    answers:[
           {text: "seald" , correct:true},
           {text: "constant" , correct:false},
           {text: "staic" , correct:false},
           {text: "final" , correct:false}, 
    ]
},
{
    question : "Which of the following cannot be used to declare a class as a virtual?",
    answers:[
           {text: "Method" , correct:false},
           {text: "Properties" , correct:false},
           {text: "Events" , correct:false},
           {text: "Fields" , correct:true}, 
    ]
},
{
    question : "What is Recursion in CSharp defined as?",
    answers:[
           {text: "Recursion is another form of class" , correct:false},
           {text: "Recursion is another process of defining a method that calls other methods repeatedly" , correct:false},
           {text: "Recursion is a process of defining a method that calls itself repeatedly" , correct:true},
           {text: "Recursion is a process of defining a method that calls other methods which in turn calls this method" , correct:false}, 
    ]
},
 


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
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
    } else {
        startQuiz();
    }
});

startQuiz();

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");


// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//        currentQuestionIndex =0;
//        score=0;
//        nextButton.innerHTML="Next";
//        showQuestion();
// }

// function showQuestion(){
//           resetState();
//           let currentQuestion = questions[currentQuestionIndex];
//           let questionNo = currentQuestionIndex + 1;
//           questionElement.innerHTML = questionNo + ". "  + currentQuestion.
//           question;

//           currentQuestion.answers.forEach(answer => {
//                const button = document.createElement("button");
//                button.innerHTML = answer.text;
//               button.classList.add('btn');
//               answerButtons.appendChild(button);
//               if(answer.correct){
//                      button.dataset.correct=answer.correct;
//               }
//               button.addEventListener("click",selectAnswer);

//     });



//  }

//  function resetState(){
//        nextButton.style.display = "none";
//        while(answerButtons.firstChild){
//               answerButtons.removeChild(answerButtons.firstChild);
//        }
//  }

//  function selectAnswer(){
//        const selectedBtn = e.target;
//        const isCorrect = selectedBtn.dataset.correct == "true";
//      if(isCorrect){
//        selectedBtn.classList.add("correct");
//        score++;
//  }  else{
//        selectedBtn.classList.add("incorrect");

//  }
//        Array.from(answerButtons.children).forEach(button =>{
//               if(button.dataset.correct == "true"){
//                      button.classList.add("correct");
//               }
//               button.disabled=true;;

//        });
//        nextButton.style.display = "block";

//  }

//  function showScore(){
//        resetState();
//        questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
//        nextButton.innerHTML = "Play Again";
//        nextButton.style.display = "block";
//  }

//  function  handleNextButton(){
//        currentQuestionIndex++;
//        if(currentQuestionIndex  < questions.length){
//               showQuestion();
//        }
//        else{
//               showScore();
//        }
//  }


// nextButton.addEventListener("click",()=>{
//      if(currentQuestionIndex < questions.length){
//        handleNextButton();
//      }
//      else{
//        startQuiz();
//      }
// });
