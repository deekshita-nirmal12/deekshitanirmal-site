var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Deekshita",
    score: 4,
  },

  {
    name: "Krisha",
    score: 3,
  },
]

// array of objects
var questions = [{
  question: "1.What is Deekshita's favourite hobby reading or painting  ",
  answer: "Painting"
}, {
  question: "2.Which dessert does Deekshita likes the most nutella pancake or red velvet cheese cake? ",
  answer:"Nutella pancake"
},
{
  question: "3.What does Deekshita prefer to do in a holiday prefer to stay indoors and watch something or go out? ",
  answer: "Indoors"},

{
  question: "4.Which is Deekshita's favourite sport to play? ",
  answer: "Badminton"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " let's see that do you really know Deekshita");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);ll
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


