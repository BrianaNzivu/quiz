$(document).ready(function(){
  $("form#Quiz").submit(function(event) {
  event.preventDefault();
  var answer1=parseInt($("input:radio[name=r1]:checked").val());
  var answer2=parseInt($("input:radio[name=r2]:checked").val());
  var answer3=parseInt($("input:radio[name=r3]:checked").val());
  var answer4=parseInt($("input:radio[name=r4]:checked").val());
  var answer5=parseInt($("input:radio[name=r5]:checked").val());
  var answer6=parseInt($("input:radio[name=r6]:checked").val());
  var answer7=parseInt($("input:radio[name=r7]:checked").val());
  var answer8=parseInt($("input:radio[name=r8]:checked").val());
  var answer9=parseInt($("input:radio[name=r9]:checked").val());
  var answer10=parseInt($("input:radio[name=r10]:checked").val());

var total=(answer1+answer2+answer3+answer4+answer5+answer6+answer7+answer8+answer9+answer10);
var percent =((total/100)*100);
  $("#results").text("You have scored:"+percent+"%");

});
});
