// Write a JavaScript program that prompts the user for their name and displays a personalized greeting message on the console.
var myName = prompt("Enter your name: ");
if (myName == null) {
    alert("Please put in a name");
}
else {
    "Hello ".concat(myName.toString(), ", how are you doing?");
}
