var timer = 4;
var intervalId;
var score = document.getElementById("score")

// window.onload = function run() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
// }


var start = document.getElementById("start");
var oscarQuiz = document.getElementById("oscarquiz");
var question = document.getElementById("question");
var quizImage = document.getElementById("qimage");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var choiceE = document.getElementById("E");


// creates questions
var questions = [
    {
        question: "Which film won best picture for the year 2000?",
        imgSrc: "",
        choiceA: "Gladiator",
        choiceB: "Crouching Tiger, Hidden Dragon",
        choiceC: "Erin Brockovich",
        choiceD: "Traffic",
        choiceE: "Chocolat",

    },
    {
        question: "Which film won best picture for the year 2001?",
        imgSrc: "",
        choiceA: "In the Bedroom",
        choiceB: "A Beautiful Mind",
        choiceC: "The Lord of the Rings: The Fellowship of the Ring",
        choiceD: "Moulin Rouge!",
        choiceE: "Godsford Park",
    },

    {
        question: "Which film won best picture for the year 2002?",
        imgSrc: "",
        choiceA: "Gangs of New York",
        choiceB: "Chicago",
        choiceC: "The Hours",
        choiceD: "The Lord of the Rings: The Two Towers",
        choiceE: "",
    },
    {
        question: "Which film won best picture for the year 2003?",
        imgSrc: "",
        choiceA: "Lost in Translation",
        choiceB: "Master and Commander: The Far Side of the World",
        choiceC: "Mystic River",
        choiceD: "The Lord of the Rings: The Return of the King!",
        choiceE: "",
    },
    {
        question: "Which film won best picture for the year 2004?",
        imgSrc: "",
        choiceA: "Million Dollar Baby",
        choiceB: "The Aviator",
        choiceC: "Finding Neverland",
        choiceD: "Ray",
        choiceE: "",
    },
    {
        question: "Which film won best picture for the year 2005?",
        imgSrc: "",
        choiceA: "Crash",
        choiceB: "Brokeback Mountain",
        choiceC: "Capote",
        choiceD: "Good Night, and Good Luck",
        choiceE: "",
    },
    {
        question: "Which film won best picture for the year 2006?",
        imgSrc: "",
        choiceA: "Babel",
        choiceB: "Letters from Iwo Jima",
        choiceC: "Little Miss Sunshine",
        choiceD: "The Departed",
        choiceE: "",
    },
    {
        question: "Which film won best picture for the year 2007?",
        imgSrc: "",
        choiceA: "Atonement",
        choiceB: "No Country for Old Men",
        choiceC: "Juno",
        choiceD: "Michael Clayton",
        choiceE: "",
    },
]

var lastQuestionNum = questions.length - 1;
var questionNum = 0;

// var correct = document.getElementById ("#correct");

// function to set up 30 second timer
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {

    timer--;
    $("#timer").html("<div>" + timer + "</div>");

    if (timer === 0){
        stop();
        checkAnswer ();
      

        
    }
}

function stop (){
    clearInterval(intervalId);
}



start.addEventListener("click", startQuiz);

// function to start the quiz. It calls the function run
function startQuiz() {
    start.style.display = "none";
    oscarQuiz.style.display = "block";
    run();
    renderQuestion();
    
    




}










// renders questions

function renderQuestion() {
    var q = questions[questionNum];
    questionNum = 0;
    // quizImage.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;

    console.log(q.question);


}






// questionNum = 0;
// renderQuestion()

// questionNum++
// renderQuestion()

function checkAnswer(answer) {
    if (answer == questions[questionNum].correct) {
        score++
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    if (questionNum < lastQuestionNum) {
        questionNum++;
        questionRender();


    } else {
        clearInterval(Timer);
        scoreRender();

    }


}

function answerIsCorrect() {
    document.getElementById("qImage").scr = "";
}

function answerIsWrong() {
    document.getElementById("qImage").scr = "";
}

// score render
function scoreRender() {
    score.style.display = "block";

    var scorePercent = Math.round(100 * score / questions.length);

    score.innerHTML += "<p>" + scorePercent + "</p>";
}






// $(".dynamic").on("click", function() {

//     if (correct.clicked == true) {
//         alert("you're correct")
    //   var  youCorrect = document.getElementsById('correct');
    //   correct = youCorrect;
    //     youCorrect[0,1,2,3,4,5].textContent = "You're correct!";


//     }

// });

// }


// }

// {/* <h3 class = "dynamic">Which film won best picture for the year 2000?</h3>
// <p id = "correct" class = "dynamic">Gladiator</p>
// <p class = "dynamic">Crouching Tiger, Hidden Dragon</p>
// <p class = "dynamic">Erin Brockovich</p>
// <p class = "dynamic">Traffic</p>
// <p class = "dynamic">Chocolat</p> */}

// gameOne = document.getElementsByClassName('dynamic');
// gameOne[0].textContent = "Which film won best picture for the year 2001?"
// gameOne[1].textContent = "In the Bedroom"
// gameOne[2].textContent = "A Beautiful Mind"
// gameOne[3].textContent = "The Fellowship of the Ring"
// gameOne[4].textContent = "Moulin Rouge!"
// gameOne[5].textContent = "Godsford Park"

// gameTwo = document.getElementsByClassName('dynamic');
// gameTwo[1].textContent = "Which film won best picture for the year 2002?"
// gameTwo[2].textContent = "Gangs of New York"
// gameTwo[3].textContent = "Chicago"
// gameTwo[4].textContent = "The Hours"
// gameTwo[5].textContent = "The Lord of the Rings: The Two Towers"

// gameThree = document.getElementsByClassName('dynamic');
// gameThree[1].textContent = "Which film won best picture for the year 2003?"
// gameThree[2].textContent = "Lost in Translation"
// gameThree[3].textContent = "Master and Commander: The Far Side of the World"
// gameThree[4].textContent = "Mystic River"
// gameThree[5].textContent = "The Lord of the Rings: The Return of the King!"

// gameFour = document.getElementsByClassName('dynamic');
// gameFour[1].textContent = "Which film won best picture for the year 2004?"
// gameFour[2].textContent = "Million Dollar Baby"
// gameFour[3].textContent = "The Aviator"
// gameFour[4].textContent = "Finding Neverland"
// gameFour[5].textContent = "Ray"

// gameFive = document.getElementsByClassName('dynamic');
// gameFive[1].textContent = "Which film won best picture for the year 2005?"
// gameFive[2].textContent = "Crash"
// gameFive[3].textContent = "Brokeback Mountain"
// gameFive[4].textContent = "Capote"
// gameFive[5].textContent = "Good Night, and Good Luck"

// gameSix = document.getElementsByClassName('dynamic');
// gameSix[1].textContent = "Which film won best picture for the year 2006?"
// gameSix[2].textContent = "Babel"
// gameSix[3].textContent = "Letters from Iwo Jima"
// gameSix[4].textContent = "Little Miss Sunshin"
// gameSix[5].textContent = "The Departed"

// gameSeven = document.getElementsByClassName('dynamic');
// gameSeven [1].textContent = "Which film won best picture for the year 2007?"
// gameSeven [2].textContent = "Atonement"
// gameSeven [3].textContent = "No Country for Old Men"
// gameSeven [4].textContent = "Juno"
// gameSeven [5].textContent = "Michael Clayton"


// run ();