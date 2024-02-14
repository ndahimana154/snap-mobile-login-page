var usernameField = document.getElementById("unField");
var passwordField = document.getElementById("pwField");

usernameField.value = "";
passwordField.textContent = "";
var passSpace = document.getElementById("passSpan");
var unSpace = document.getElementById("unSpan");

usernameField.addEventListener("focus", function () {
  unSpace.style = "top: 0";
});
passwordField.addEventListener("focus", function () {
  passSpace.style = "top: 0";
});
