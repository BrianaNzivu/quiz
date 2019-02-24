$(document).ready(function(){
    $("form#Quiz").submit(function(event) {
      $("button#yes").click(function(){

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
    var Result = 0;
    if (one ==="A"){
      Result += 10;
    }
    else {
      Result +=0;
    }
    if (two ==="A"){
      Result += 10;
    }
    else {
      Result +=0;
    }
    if (three ==="A"){
      Result += 10;
    }
    else {
      Result +=0;
    }
    if (four ==="B"){
      Result += 10;
    }
    else {
      Result +=0;
    }
    if (five ==="B"){
      Result += 10;
    }
    else {
      Result +=0;
}
  if (six ==="C"){
    Result += 10;
  }
  else {
    Result +=0;
  }
  if (seven ==="C"){
    Result += 10;
  }
  else {
    Result +=0;
  }
  if (eight ==="A"){
    Result += 10;
  }
  else {
    Result +=0;
  }
  if (nine ==="A"){
    Result += 10;
  }
  else {
    Result +=0;
  }
  if(ten==="correct"){
    Result+=10
  }
  else {
    Result+=0

  }
$("#results").text("Your score is: "  +Result +"%");
$("#results").show();
event.preventDefault();
});
});
});
