function Show(id)
{
  if (document.getElementById(id).style.display == 'none') {
       document.getElementById(id).style.display = 'block';
  }
  else {
       document.getElementById(id).style.display = 'none';
  }
};


function done() {
  var userRef = "Surajit";
  var passRef = "Surajit123";
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == userRef && pass == passRef) {
  alert("Congratulations! you're login Successfully")
  } else {
  alert("It's seen you make a mistake...")
  }
};