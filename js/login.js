function accessGranted() {
  
let usernameVal = document.getElementById("username").value;
let passwordVal = document.getElementById("password").value;
let username="admin";
let password="admin";

if (usernameVal===username && passwordVal===password) {
  alert("Access Granted!")
  window.location.replace("resume.html");
}
else{
  alert("Access Denied! Invalid Credentials.")
}
}
let form = document.getElementById("login");
form.addEventListener("login", accessGranted);

