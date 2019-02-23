//business (or back-end) logic:
$(document).ready(function() {
  $("button#submit").click(function() {
    $("input#submit").click(function(event){
      event.preventDefault();
});
});

var answerOne=document.Quiz.r1.value;
var answerTwo=document.Quiz.r2.value;
var answerThree=document.Quiz.r3.value;
var answerFour=document.Quiz.r4.value;
var answerFive=document.Quiz.r5.value;
var answerSix=document.Quiz.r6.value;
var answerSeven=document.Quiz.r7.value;
var answerEight=document.Quiz.r8.value;
var marks=0

if(answerOne==="B") {
  marks+=10;
} else {
  marks+=0;
};

if(answerTwo==="A") {
  marks+=10;
} else {
  marks+=0;
}

if(answerThree==="A") {
  marks+=10;
} else {
  marks +=0;
}

if (answerFour==="B") {
  marks+=10;
} else{
  marks+=0;
}

if (answerFive==="B") {
  marks+=10;
}else {
  marks+=0;
}

if(answerSix==="C") {
  marks+=10;
}else {
  marks+=0;
}

if(answerSeven==="C") {
  marks+=10
} else {
  marks+=0;
}

if(answerEight==="A") {
  marks+=10;
} else {
  marks+=0;
}
var results=[r1+r2+r3+r4+r5+r6+r7+r8+r9];
