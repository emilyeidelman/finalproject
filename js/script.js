/* trivia */

var text2display = "";
var answers = new Array(3);
  answers[0] = "1. Blues\n";
  answers[1] = "2. Kanye West\n";
  answers[2] = "3. The Aragon Ballroom\n";
  answers[3] = "4. 2011\n";

  var questions = new Array(3);
    questions[0] = "q1";
    questions[1] = "q2";
    questions[2] = "q3";
    questions[3] = "q4";

function checkQs(s){
  var qs = document.getElementsByName(s);
  var noOfRadios = qs.length;

  for(var i = 0; i < noOfRadios; i++){
    if(qs[i].checked){
      if(qs[i].value=="correct")
        text2display = text2display + "You got that correct!\n";
        else text2display = text2display + answers[questions.indexOf(s)];

      break;

    }
  }


}

function checkAll(){
  for(var i = 0; i < questions.length; i++){
    checkQs(questions[i]);
  }
  quiz.answers.value = text2display;
}
