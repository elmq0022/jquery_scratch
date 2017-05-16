$(document).ready(main());

function setQuestion(n, questions, answers){
    var questionDiv = $("#question");
    var answerDiv = $("#answers");

    questionDiv.empty();
    answerDiv.empty();

    questionDiv.append("</p>" + questions[n] + "</p>");

    var answerList = []; 
    for(var i=0; i < answers[n].length; i++){
        answerList.push("<p>" + answers[n][i] + "</p>");
    }

   answerDiv.append(answerList.join(""));
}

function main(){
    /* // need a server to get this working... ugh...
    var url = "localhost:8000/quiz.json";
    $.getJSON(url, function(data) {
        var items = [];
        $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'>" + val + "</li>" );
        });
        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( "body" );
    });
    */

    var questions = ["q1", "q2", "q3" ];
    var answers = [["a11", "a12", "a13"], ["a21", "a22", "a23"], ["a31", "a32", "a33"]];
    var n = 0

    setQuestion(n, questions, answers);

   $("#next").click(function(){
       setQuestion(n+1, questions, answers);
       n = n + 1;
   });
   $("#prev").click(function(){
       setQuestion(n-1, questions, answers);
       n = n - 1;
   });
}