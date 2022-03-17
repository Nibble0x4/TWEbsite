//Event Handling
document.querySelector("body")
	.addEventListener("mousemove",
		function (event) {
			if (event.shiftKey) 
				calculatePools();
		})


// the function responsible for calculating the max Pool sizes based on 
// Quality values and proper percentages
// WIP
function calculatePools() {

	var posStatTotal = 
		document.getElementById("ambition").valueAsNumber
		+ document.getElementById("creativity").valueAsNumber
		+ document.getElementById("ire").valueAsNumber
		+ document.getElementById("curiosity").valueAsNumber

	var negStatTotal = 
		document.getElementById("defiance").valueAsNumber
		+ document.getElementById("severity").valueAsNumber
		+ document.getElementById("perseverance").valueAsNumber
		+ document.getElementById("reservation").valueAsNumber

	var statTotal = negStatTotal+posStatTotal;
	var multiplier = document.getElementById("actValue").valueAsNumber * 0.05;
	var offset = statTotal * multiplier;
	console.log("offset: "+offset);
	posStatTotal += offset;
	negStatTotal -= offset;


	document.getElementById("dreamPoolMax").innerHTML = posStatTotal;
	document.getElementById("sleepPoolMax").innerHTML = negStatTotal;
}

