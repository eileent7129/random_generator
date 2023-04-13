// randon generator

let userInput = document.getElementById("myInput");
let userOutput = document.getElementById("myOutput");
let executeButton = document.getElementById("executeButton");

let energyOils = ["peppermint oil", "spearmint oil", "rosemary oil", "eucalyptus oil", 
	"lemon oil", "ginger root oil", "pine oil"];
let stressOils = ["lavender oil", "orange oil", "clary sage oil", "valerian oil",
	"jatamansi oil", "jasmine oil", "chamomile oil", "rose oil"];
let sadOils = ["lavender oil", "sweet orange oil", "sage oil", "bergamot oil", "ylang ylang oil",
	"frankincense oil"];
let sleepyOils = ["sandalwood oil", "cedarwood oil", "marjoram oil", "lavender oil",
	"mandarin oil", "bergamot oil", "clary sage"];


let tired = ["tired", "fatigued", "exhausted", "sleepy", "drowsy", "weary", "drained"];
let stressed = ["stressed", "anxious", "distressed", "upset", "worried", "pressured"];
let sad = ["sad", "unhappy", "depressed", "gloomy", "down", "heartbroken"]
let energized = ["energized", "restless", "awake", "tension", "fidgety", "alert", "nervous"]
let okay = ["fine", "meh", "okay", "happy", "good"]

// add an event listener to the button
executeButton.addEventListener("click", buttonClicked);


function buttonClicked(){
	let newInput = userInput.value;
	generate(newInput);
	restyle();
}

function generate(myInput) {

	let foundOil = false; 
	let tryOil;

	if (tired.includes(myInput)) {
		let tiredIdx = Math.floor(Math.random() * energyOils.length);
		tryOil = energyOils[tiredIdx];
		foundOil = true;
	}
	else if (stressed.includes(myInput)){
		let stressIdx = Math.floor(Math.random() * stressOils.length);
		tryOil = stressOils[stressIdx];
		foundOil = true;

	}
	else if (sad.includes(myInput)){
		let sadIdx = Math.floor(Math.random() * sadOils.length);
		tryOil = sadOils[sadIdx];
		foundOil = true;
	}
	else if (energized.includes(myInput)){
		let energyIdx = Math.floor(Math.random() * sleepyOils.length);
		tryOil = sleepyOils[energyIdx];
		foundOil = true;
	}
	else if (okay.includes(myInput)){
		let oilArr = [energyOils, stressOils, sadOils, sleepyOils];
		let oilIdx = Math.floor(Math.random() * oilArr.length);
		let oilList = oilArr[oilIdx];

		let anyIdx = Math.floor(Math.random() * oilList.length);
		tryOil = oilList[anyIdx];
		foundOil = true;
	}
	

	if (foundOil) {
		userOutput.innerText = "You should try " + tryOil;
	}
	else {
		userOutput.innerText = "Sorry, we don't have anything for that :/";
	}

}


function restyle() {
	let colorChange = ["37514D", "B6594C", "DD8E75", "90AEB2", "BE845E"];
	let newColor = colorChange[Math.floor(Math.random() * colorChange.length)];
	userOutput.style.color = '#' + newColor;
	let randSize = Math.floor(Math.random() * 50) + 10;

	userOutput.style.fontSize = randSize + "px";

	userOutput.addEventListener("mouseover", function() {
		userOutput.style.color = "#FFFFFF";
	});

	userOutput.addEventListener("mouseout", function() {
		userOutput.style.color = '#' + newColor;
	});




}