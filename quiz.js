'''
JavaScript Intonation Quiz
'''

<script>

var score = 0
  
function checkAll() {
    questionOne();
    questionTwo();
    questionThree();
    questionFour();
    questionFive();
    questionSix();
    questionSeven();
    questionEight();
    questionNine();
    questionTen();
    questionEleven();
    questionTwelve();
    questionThirteen();
    finalScore();

  function questionOne() {
    var correctAnswer = document.getElementById("drones")
    if (correctAnswer.checked == true) {
      score++;
      document.getElementById("answerOne").className = "answerCorrect";
      document.getElementById("answerOne").innerHTML = "Correct!"
      
    }
    else {
  document.getElementById("answerOne").className = "answerIncorrect";
  document.getElementById("answerOne").innerHTML = "Incorrect.  Tuners allow us to see pitch discrepancies but do not allow us to hear them."
    }
  };

  function questionTwo() {
    var correctAnswer = document.getElementById("raises")
    if (correctAnswer.checked == true) {
      score++;
      document.getElementById("answerTwo").className = "answerCorrect";
      document.getElementById("answerTwo").innerHTML = "Correct!"
    }
    else {
      document.getElementById("answerTwo").className = "answerIncorrect";
      document.getElementById("answerTwo").innerHTML = "Incorrect.  Higher temperatures causes metal to shrink, resulting in a higher pitch."
    }
  };

  function questionThree() {
    var correctAnswer = document.getElementById("higher")
    if (correctAnswer.checked == true) {
      score++;
      document.getElementById("answerThree").className = "answerCorrect";
      document.getElementById("answerThree").innerHTML = "Correct!"
    }
    else {
      document.getElementById("answerThree").className = "answerIncorrect";
      document.getElementById("answerThree").innerHTML = "Incorrect.  Higher frequencies of sound vibrations result in higher pitch."      
    }
  };

function questionFour() {
    var correctAnswer = document.getElementById("increases")
    if (correctAnswer.checked == true) {
      score++;
      document.getElementById("answerFour").className = "answerCorrect";
      document.getElementById("answerFour").innerHTML = "Correct!"
    }
    else {
      document.getElementById("answerFour").className = "answerIncorrect";
      document.getElementById("answerFour").innerHTML = "Incorrect.  Higher temperatures causes metal to shrink, resulting in a higher pitch."      
    }
};

function questionFive() {
    var correctAnswer = document.getElementById("raisesFive")
    if (correctAnswer.checked == true) {
      score++;
      document.getElementById("answerFive").className = "answerCorrect";
      document.getElementById("answerFive").innerHTML = "Correct!"
    }
    else {
      document.getElementById("answerFive").className = "answerIncorrect";
      document.getElementById("answerFive").innerHTML = "Incorrect.  Higher temperatures causes metal to shrink, resulting in a higher pitch."      
    }
};

function questionSix() {
    var correctAnswer = document.getElementById("raised")
    if (correctAnswer.checked == true) {
      score++;
      document.getElementById("answerSix").className = "answerCorrect";
      document.getElementById("answerSix").innerHTML = "Correct!"
    }
    else {
      document.getElementById("answerSix").className = "answerIncorrect";
      document.getElementById("answerSix").innerHTML = "Incorrect.  Leading tones are typically raised."   
    }
};

function questionSeven() {
    var correctAnswer = document.getElementById("Faster")
    if (correctAnswer.checked == true) {
      score++;
      document.getElementById("answerSeven").className = "answerCorrect";
      document.getElementById("answerSeven").innerHTML = "Correct!"
    }
    else {
      document.getElementById("answerSeven").className = "answerIncorrect";
      document.getElementById("answerSeven").innerHTML = "Incorrect.  Metal instruments contract at higher temperatures, resulting in increased pitch."
    }
};

function questionEight() {
    var correctAnswer = document.getElementById("raisedEight")
    if (correctAnswer.checked == true) {
      score++;
      document.getElementById("answerEight").className = "answerCorrect";
      document.getElementById("answerEight").innerHTML = "Correct!"
    }
    else {
      document.getElementById("answerEight").className = "answerIncorrect";
      document.getElementById("answerEight").innerHTML = "Incorrect.  Minor thirds are raised to achieve just intonation."
    }
};

function questionNine() {
    var correctAnswer = document.getElementById("loweredNine")
    if (correctAnswer.checked == true) {
      score++;
      document.getElementById("answerNine").className = "answerCorrect";
      document.getElementById("answerNine").innerHTML = "Correct!"
    }
    else {
      document.getElementById("answerNine").className = "answerIncorrect";
      document.getElementById("answerNine").innerHTML = "Incorrect.  Major thirds are lowered to achieve just intonation."
    }
};

function questionTen() {
    var correctAnswer = document.getElementById("sharp")
    if (correctAnswer.checked == true) {
      score++;
      document.getElementById("answerTen").className = "answerCorrect";
      document.getElementById("answerTen").innerHTML = "Correct!"
    }
    else {
      document.getElementById("answerTen").className = "answerIncorrect";
      document.getElementById("answerTen").innerHTML = "Incorrect."
    }
};

function questionEleven() {
    var correctAnswer = document.getElementById("raiseEleven")
    if (correctAnswer.checked == true) {
      score++;
      document.getElementById("answerEleven").className = "answerCorrect";
      document.getElementById("answerEleven").innerHTML = "Correct!"
    }
    else {
      document.getElementById("answerEleven").className = "answerIncorrect";
      document.getElementById("answerEleven").innerHTML = "Incorrect."
    }
};

function questionTwelve() {
    var correctAnswer = document.getElementById("lowerTwelve")
    if (correctAnswer.checked == true) {
      score++;
      document.getElementById("answerTwelve").className = "answerCorrect";
      document.getElementById("answerTwelve").innerHTML = "Correct!"
    }
    else {
      document.getElementById("answerTwelve").className = "answerIncorrect";
      document.getElementById("answerTwelve").innerHTML = "Incorrect."
    }
};

function questionThirteen() {
    var correctAnswer = document.getElementById("louderThirteen")
    if (correctAnswer.checked == true) {
      score++;
      document.getElementById("answerThirteen").className = "answerCorrect";
      document.getElementById("answerThirteen").innerHTML = "Correct!"
    }
    else {
      document.getElementById("answerThirteen").className = "answerIncorrect";
      document.getElementById("answerThirteen").innerHTML = "Incorrect."
    }
};

function finalScore() {
  document.getElementById("finalScore").innerHTML = "You answered " + score + " of 13 questions correctly."
  score = 0
}

};

</script>

