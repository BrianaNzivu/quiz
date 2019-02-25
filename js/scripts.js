$(document).ready(function(){
    $("form#Quiz").submit(function(event) {
    event.preventDefault();
  var one=parseInt($("input:radio[name=r1]:checked").val());
  var two=parseInt($("input:radio[name=r2]:checked").val());
  var three=parseInt($("input:radio[name=r3]:checked").val());
  var four=parseInt($("input:radio[name=r4]:checked").val());
  var five=parseInt($("input:radio[name=r5]:checked").val());
  var six=parseInt($("input:radio[name=r6]:checked").val());
  var seven=parseInt($("input:radio[name=r7]:checked").val());
  var eight=parseInt($("input:radio[name=r8]:checked").val());
  var nine=parseInt($("input:radio[name=r9]:checked").val());
  var ten=parseInt($("input:radio[name=r10]:checked").val());
  var total=(one+two+three+four+five+six+seven+eight+nine+ten)
  var percent=((total/100)*100);
   $("#results").text("Your score is:"+percent+"%");
});
});
