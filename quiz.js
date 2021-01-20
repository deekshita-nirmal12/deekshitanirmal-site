
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
  question: "1.Who won the first World Cup,1975? ",
  answer: "Westindes"
}, {
  question: "2.How many times Chennai Super Kings won the IPL? ",
  answer:"3"
},
{
  question: "3.India achieved its First Test victory against Australia in which city? ",
  answer: "Kanpur"},

{
  question: "4.What is AB de villiers full name? ",
  answer: "Abraham Benjamin de Villiers"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " let's see if you a real crciket fan");
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

  console.log("current score: ", score);
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


