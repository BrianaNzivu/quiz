$(document).ready(function(){
  object.onclick=function(){Submit}
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

  var marks=0

  if (one==="B") {
          marks+=10;
  }
  if (two==="A") {
          marks+=10;
  }
  if (three==="A") {
          marks+=10;
  }
  if (four==="B") {
          marks+=10;
  }
  if (five==="B") {
          marks+=10;
  }
  if (six==="C") {
          marks+=10;
  }
  if (seven==="C") {
          marks+=10;
  }
  if (eight==="A") {
          marks+=10;
  }
  if (nine==="B") {
          marks+=10;
  }
  if (ten==="A") {
          marks+=10;
  }
  var results=[one+two+three+four+five+six+seven+eight+nine+ten]
  alert('you have'+results)
  });
});
