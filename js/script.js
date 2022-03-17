
// This is a simple function to take a given name to replace the "Traveler" in "Hello there, Traveler!"
function sayHello () {
	var name = document.getElementById("name").value;

	document.getElementById("greetingContent").innerHTML = name;
}


// Unobstrusive event binding example
// Here, we look for only the first button and make it run the
// above function onclick. This way, we don't make our HTML messy
document.querySelector("button")
	.addEventListener("click",sayHello);