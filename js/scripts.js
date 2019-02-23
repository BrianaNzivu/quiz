$(document).ready(function(){
  $("button#submit").click(function(){
  $("input#submit").click(function(event){
    event.preventDefault();
  var answer1=$("input:radio[name=r1]:checked").val();
  var answer2=$("input:radio[name=r2]:checked").val();
  var answer3=$("input:radio[name=r3]:checked").val();
  var answer4=$("input:radio[name=r4]:checked").val();
  var answer5=$("input:radio[name=r5]:checked").val();
  var answer6=$("input:radio[name=r6]:checked").val();
  var answer7=$("input:radio[name=r7]:checked").val();
  var answer8=$("input:radio[name=r8]:checked").val();
  var answer9=$("input:radio[name=r9]:checked").val();
  var answer10=$("input:radio[name=r10]:checked").val();
  var marks=0

  if (answer1=="B") {
          marks+=10;
  }
  if (answer2=="A") {
          marks+=10;
  }
  if (answer3=="A") {
          marks+=10;
  }
  if (answer4=="B") {
          marks+=10;
  }
  if (answer5=="B") {
          marks+=10;
  }
  if (answer6=="C") {
          marks+=10;
  }
  if (answer7=="C") {
          marks+=10;
  }
  if (answer8=="A") {
          marks+=10;
  }
  if (answer9=="B") {
          marks+=10;
  }
  if (answer10=="A") {
          marks+=10;
  }
  alert('you have'+marks)
  });
  var total=100
  var max=100
  var percentage=(marks/max)*total

  $("#output").text(percentage);
});
});
