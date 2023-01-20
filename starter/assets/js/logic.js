var startScreen = document.getElementById("start-screen");
var questionElement = document.getElementById("questions");
var startbutton = document.getElementById("start");
var timer = document.getElementById("time");
var timecount = 76;
var score = 0;

// the screen change, start-screen hide, questions start
startbutton.addEventListener("click", function () {

  startScreen.setAttribute("class", "hide");
  questionElement.setAttribute("class", "start");
  var timerInterval = setInterval(function () {
    if (timecount > 0) {
      timecount--;
      //console.log(timecount);
      timer.textContent = timecount;
    } else {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
  retrieveQustion();
});

// retrieve the question
function retrieveQustion() {
  var questionTitle = document.getElementById("question-title");
  var questionChoices = document.getElementById("choices");
  var questionAnswer = document.getElementById("answer");
  var sfxRight = new Audio("assets/sfx/correct.wav");
  var sfxWrong = new Audio("assets/sfx/incorrect.wav");

  for (var i = 0; i < 5; i++) {
    questionTitle.textContent = question[i].title;
    var li = document.createElement("li");
    li.textContent = question[i].choice[i];
    questionChoices.appendChild(li);

    // check the answer
    questionChoices.addEventListener("click", function () {
      if (question[0].choice.values === question[0].answer) {
        questionAnswer.textContent = "Correctly";
        sfxRight.play();
        score++;
      } else {
        questionAnswer.textContent = "Incorrectly";
        sfxWrong.play();
        score--;
        var time=timer.textContent;
        timecount=time++;
      }
    });
  }
}

//function to end the quiz
function endQuiz(){
    
}


//function to handle saving the high score
function storScore(){

    localStorage.setItem("score",score);
}
