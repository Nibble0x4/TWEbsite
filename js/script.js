
// This is a simple function to take a given name to replace the "Traveler" in "Hello there, Traveler!"
function sayHello () {
	var name = document.getElementById("name").value;


	if(name == 'JERM' || name == 'jerm') {
		document.getElementById("greetingContent").innerHTML = "zvar  ...  Bifid";
		document.getElementById("Secret-Link").innerHTML = "Welcome, brother";
	}
	else if(name == 'GOOB' || name == 'goob') {
		document.getElementById("greetingContent").innerHTML = "abbab baaaa aaaaa aaaba ababa aabaa ...   Bacon";
		document.getElementById("Secret-Link").innerHTML = "Welcome, friend";
	}
	else if(name == 'CMRN' || name == 'cmrn') {
		document.getElementById("greetingContent").innerHTML = "lsfksfpmr ...  Caesar";
		document.getElementById("Secret-Link").innerHTML = "Welcome, friend";
	}
	else{
			document.getElementById("greetingContent").innerHTML = name + "!";
			document.getElementById("Secret-Link").innerHTML = "";
	}

}




// Unobstrusive event binding example
// Here, we look for only the first button and make it run the
// above function onclick. This way, we don't make our HTML messy
document.querySelector("button")
	.addEventListener("click",sayHello);