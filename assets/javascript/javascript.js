var timer = 30;
var intervalId;
var score = 0;
const scoreDiv = document.getElementById("scoreContainer");



var start = document.getElementById("start");
var oscarQuiz = document.getElementById("oscarquiz");
var question = document.getElementById("question");
var quizImage = document.getElementById("qimage");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var choiceE = document.getElementById("E");
var Answer = document.getElementById("progress");


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
        correct: "A",
        correctTwo: "Gladiator",

    },
    {
        question: "Which film won best picture for the year 2001?",
        imgSrc: "",
        choiceA: "In the Bedroom",
        choiceB: "A Beautiful Mind",
        choiceC: "The Lord of the Rings: The Fellowship of the Ring",
        choiceD: "Moulin Rouge!",
        choiceE: "Godsford Park",
        correct: "B",
        correctTwo: "A Beautiful Mind",
    },

    {
        question: "Which film won best picture for the year 2002?",
        imgSrc: "",
        choiceA: "Gangs of New York",
        choiceB: "Chicago",
        choiceC: "The Hours",
        choiceD: "The Lord of the Rings: The Two Towers",
        choiceE: "The Pianst",
        correct: "B",
        correctTwo: "Chicago",
    },
    {
        question: "Which film won best picture for the year 2003?",
        imgSrc: "",
        choiceA: "Lost in Translation",
        choiceB: "Master and Commander: The Far Side of the World",
        choiceC: "Mystic River",
        choiceD: "The Lord of the Rings: The Return of the King",
        choiceE: "Seabiscut",
        correct:"D",
        correctTwo: "The Lord of the Rings: The Return of the King",
    },
    {
        question: "Which film won best picture for the year 2004?",
        imgSrc: "",
        choiceA: "Million Dollar Baby",
        choiceB: "The Aviator",
        choiceC: "Finding Neverland",
        choiceD: "Ray",
        choiceE: "Sideways",
        correct: "A",
        correctTwo: "Million Dollar Baby"
    },
    {
        question: "Which film won best picture for the year 2005?",
        imgSrc: "",
        choiceA: "Crash",
        choiceB: "Brokeback Mountain",
        choiceC: "Capote",
        choiceD: "Good Night, and Good Luck",
        choiceE: "Munich",
        correct: "A",
        correctTwo: "Crash"
    },
    {
        question: "Which film won best picture for the year 2006?",
        imgSrc: "",
        choiceA: "Babel",
        choiceB: "Letters from Iwo Jima",
        choiceC: "Little Miss Sunshine",
        choiceD: "The Departed",
        choiceE: "The Queen",
        correct: "D",
        correctTwo: "The Departed"
    },
    {
        question: "Which film won best picture for the year 2007?",
        imgSrc: "",
        choiceA: "Atonement",
        choiceB: "No Country for Old Men",
        choiceC: "Juno",
        choiceD: "Michael Clayton",
        choiceE: "There Will Be Blood",
        correct: "B",
        correctTwo: "No Country for Old Men"
    },
]

var lastQuestionNum = questions.length - 1;
var questionNum = 0;



function checkAnswer(answer) {
    if (answer == questions[questionNum].correct) {
        // stop();
        score++
        renderAnswer();
        answerIsCorrect();
    } else {
        // stop();
        renderAnswer();
        answerIsWrong();
    } 

    
}

function answerIsCorrect() {
   
    
    if (questionNum < lastQuestionNum) {
        // gifImages();
        // score ++;
        // alert("You are correct! It was " + questions[questionNum].correctTwo)
       
        questionNum++;
        
        
        reset ();
        run();
        renderQuestion();

        // hideAnswer();
        
        // startQuiz (); 

    }
    else {
        clearInterval(timer);
        scoreRender();
    }
        
}

function answerIsWrong() {
    

    if (questionNum < lastQuestionNum) {
         
        questionNum++;
        
       
        reset ();
        run ();
        renderQuestion();

       

    }
    else {
        clearInterval(timer);
        scoreRender();
    }
}



function renderAnswer(){
        var a = questions[questionNum].correctTwo;

        Answer.innerHTML = "<h1>" + "The answer is " + a + "</h1>";
    }

   


  
    

// renders questions

function renderQuestion() {
    var q = questions[questionNum];
    // questionNum = 0;
    // quizImage.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;

    console.log(q.question);


}


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
        answerIsWrong ();
        

        
    }

  
}

function stop (){
    clearInterval(intervalId);
}

function reset (){
    timer = 30;
}


start.addEventListener("click", startQuiz);

// function to start the quiz. It calls the function run
function startQuiz() {
    start.style.display = "none";
    oscarQuiz.style.display = "block";
    run();
    renderQuestion();
   
    
    




}





// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    const scorePerCent = Math.round(100 * score/questions.length);

    scoreDiv.innerHTML += "<h1>" + "You scored " + scorePerCent + "% of 100%" + "</h1>";
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

