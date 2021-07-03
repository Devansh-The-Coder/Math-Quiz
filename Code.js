
//C 91
var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ";";

 document.getElementById("player_1_score").innerHTML = player1_score

document.getElementById("player2_name").innerHTML = player2_name + ";";

 document.getElementById("player_2_score").innerHTML = player2_score

document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;

document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name
function Enter() {
  getWord = document.getElementById("input_word").value
  word = getWord.toLowerCase(); console.log(word)
  char1 = word.charAt(1); console.log(char1); 
  char2 = word.charAt(3); 
  char3 = word.charAt(5);
  removeCarratOne = word.replace(char1, "_"); removeCarratTwo = removeCarratOne.replace(char2, "_"); removeCarratThree = removeCarratTwo.replace(char3, "_");
  question_word = "<h4 id='Word_Display'>q. " + removeCarratThree + "</h4>"
  input_box = "<br> answer; <input type='text'id = 'input_checkbox'>"
  check_button = "<br><br><button class='btn btn-info'onclick = Check()'>Check</button>"
  row = question_word + input_box + check_button;
  document.getElementById("output").innerHTML=row;
}
question_turn = "player1"
answer_turn = "player2"
function Check() {
  getAnswer = document.getElementById("input_checkbox").value
  answer = getAnswer.toLowerCase(); console.log(answer);
  if (answer == word) {
    if (answer_turn == "player1") {
      player1_score = player1_score + 1
      document.getElementById("player_1_score").innerHTML = player1_score;
    }
    else {
      player2_score = player2_score + 1
      document.getElementById("player_2_score").innerHTML = player2_score
    }
  }
  if (question_turn = "player1") {
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Question turn: " + player2_name
    console.log("player_question")
  }
  else {
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "Question turn: " + player1_name
    console.log("player_answer")
  }
  if (answer_turn = "player1") {
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "Answer turn" + player2_name
    console.log("player_answer")
  }
  else {
    answer_turn = "player1"
    document.getElementById("player_answer").innerHTML = "Answer turn" + player1_name
    console.log("player_answer")
  }
  document.getElementById("output").innerHTML=""
}
