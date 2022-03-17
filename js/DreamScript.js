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

	// add up the positive stats
	var posStatTotal = 
		document.getElementById("ambition").valueAsNumber
		+ document.getElementById("creativity").valueAsNumber
		+ document.getElementById("ire").valueAsNumber
		+ document.getElementById("curiosity").valueAsNumber

	// add up the negation stats
	var negStatTotal = 
		document.getElementById("defiance").valueAsNumber
		+ document.getElementById("severity").valueAsNumber
		+ document.getElementById("perseverance").valueAsNumber
		+ document.getElementById("reservation").valueAsNumber

	// calculate the offset toward positive or negation
	var statTotal = negStatTotal+posStatTotal;
	var multiplier = document.getElementById("actValue").valueAsNumber * 0.05;
	var offset = statTotal * multiplier;
	console.log("offset: "+offset);

	// update the stat totals so they are the final max pool values
	posStatTotal += offset;
	negStatTotal -= offset;


	// put the final max pool values into the greyed out boxes
	document.getElementById("dreamPoolMax").innerHTML = posStatTotal;
	document.getElementById("sleepPoolMax").innerHTML = negStatTotal;

	 // Set the Current Pool values to equal the max values
	document.getElementById("dreamPool").setAttribute('value',0+posStatTotal);
	document.getElementById("sleepPool").setAttribute('value',0+negStatTotal);
}

function loseDreamPoint() {

	var dreamPool = document.getElementById("dreamPool").valueAsNumber;

	console.log("We ran the lose Dream Point function...");

	document.getElementById("dreamPool").setAttribute('value',-1+dreamPool);
}

function loseSleepPoint() {

	var sleepPool = document.getElementById("sleepPool").valueAsNumber;

	console.log("We ran the lose Sleep Point function...");

	document.getElementById("sleepPool").setAttribute('value',-1+sleepPool);
}
