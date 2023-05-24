const YourName = prompt("What is your name?");
if (!isNaN(YourName)) {
  alert("Hello, noname! How are you?");
} else {
  alert("Hello, " + YourName + "! How are you?");
}
