var div = document.createElement("div");
div.className = "main";
var input = document.createElement("input");
input.setAttribute("type","date");
input.id = "dob";
var button = document.createElement("button");
button.setAttribute("type","button");
button.className = "btn btn-primary";
button.innerHTML = "Display Data";
div.append(input,button);
document.body.append(div);

button.addEventListener("click",date_generator);

function create_ptag(content, val){
  var p = document.createElement("p");
  p.innerHTML = content + ":" + val;
  document.body.append(p);
}

function date_generator(){
  var res = document.getElementById("dob").value;
  var inputdate = new Date(res);
  var currentdate = new Date();

  var millisecdiff = parseInt(currentdate.getTime() - inputdate.getTime());
  
  var secdiff = Math.floor(millisecdiff / 1000);
  
  var mindiff = Math.floor(secdiff / 60);
  
  var hourdiff = Math.floor(mindiff / 60);
  
  var daydiff = Math.floor(hourdiff / 24);
  
  var yeardiff = currentdate.getFullYear() - inputdate.getFullYear();
  
  var monthdiff = yeardiff * 12 + (currentdate.getMonth() - inputdate.getMonth());

  create_ptag("Years : ", yeardiff);
  create_ptag("Months : ", monthdiff);
  create_ptag("Days : ", daydiff);
  create_ptag("Hours : ", hourdiff);
  create_ptag("Minutes : ", mindiff);
  create_ptag("Seconds : ", secdiff);
  create_ptag("Milliseconds : ", millisecdiff);
}