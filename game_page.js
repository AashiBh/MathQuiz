var Player_1_name=localStorage.getItem("player_1");
var Player_2_name=localStorage.getItem("player_2");
document.getElementById("player1_name").innerHTML=Player_1_name + ":"
document.getElementById("player2_name").innerHTML=Player_2_name + ":" ;
var score1=0;
var score2=0;
document.getElementById("player1_score").innerHTML=score1;
document.getElementById("player2_score").innerHTML=score2;
document.getElementById("Qs&Ps").innerHTML="Question Turn -" + Player_1_name;
document.getElementById("Ans").innerHTML="Answer Turn -" + Player_2_name;
function Send(){
    QuestionP1=document.getElementById("number1").value;
   QuestionP2=document.getElementById("number2").value;
   Ans=parseInt(QuestionP1)*parseInt(QuestionP2);
 questionnumber = "<h4>" + QuestionP1 + "X" + QuestionP2 + "</h4>";
 input_box = "<br>Answer:<input type='text' id='input_check_box' placeholder='Enter your answer here'>";
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
 row = questionnumber + input_box + check_button;
 document.getElementById("output").innerHTML=row;
 document.getElementById("number1").value="";
 document.getElementById("number2").value="";
}
var Q_TurnAbout="player_1";
var AnsyPansyTurn="player_2";
function check(){
    answer=document.getElementById("input_check_box");
    if(answer==Ans){
        if(AnsyPansyTurn=="player_1"){
        score1=score1+2;
        document.getElementById("player1_score").innerHTML=score1;
        }
        else{
            score2=score2+2;
            document.getElementById("player2_score").innerHTML=score2;
        }
        if(Q_TurnAbout=="player_1"){
        Q_TurnAbout="player_2";
        document.getElementById("Qs&Ps").innerHTML="Question Turn -" + Player_2_name;
        }
        else{
            Q_TurnAbout="player_1";
            document.getElementById("Qs&Ps").innerHTML="Question Turn -" + Player_1_name;  
        }
        if(AnsyPansyTurn=="player_1"){
            AnsyPansyTurn="player_2";
            document.getElementById("Ans").innerHTML="Answer Turn -" + Player_2_name;
            }
            else{
              AnsyPansyTurn="player_1";
                document.getElementById("Ans").innerHTML="Answer Turn -" + Player_1_name;
            }
         }
         //document.getElementById("result").innerHTML="";
        }