// Turns this big list of words into an array:
var list = "aatrox ahri akali alistar amumu anivia annie ashe azir blitzcrank brand braum caitlyn cassiopeia chogath corki darius diana drmundo draven elise evelynn ezreal fiddlesticks fiora fizz galio gangplank garen gnar gragas hecarim heimerdinger irelia janna jarvan jax jayce jinx kalista karma karthus kassadin katarina kayle kennen khazix kogmaw leblanc leesin leona lissandra lucian lulu lux malphite malzahar maokai masteryi missfortune mordekaiser morgana nami nasus nautilus nidalee nocturne nunu olaf orianna pantheon poppy quinn rammus reksai renekton rengar riven rumble ryze sejuani shaco shen shyvana singed sion sivir skarner sona soraka swain syndra talon taric teemo thresh tristana trundle tryndamere twistedfate twitch udyr urgot varus vayne veigar vi viktor vladimir velkoz volibear warwick wukong xerath xinzhao yasuo yorick zac zed ziggs zilean zyra"
var res = list.split(" ");
var possibleWords = res;

// The reset function that we will use after the game is won / lost.
function reset(){
	lives = 10;
	targetWord = [];
	failedGuesses = [];
	chosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
	for (var i = 0; i < chosenWord.length; i++) {
	targetWord.push("_");
	}
}


// Setting all the variables for the game:
var lives = 10;
var wins = 0;
var losses = 0;
var targetWord = [];
var failedGuesses = [];
var chosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];

console.log ("Starting Lives: " + lives);
console.log("Chosen Word: " + chosenWord);

// Loop that pushes correct amount of underscores into empty target word array:
for (var i = 0; i < chosenWord.length; i++) {
	targetWord.push("_");
	}

console.log("Target Word: " + targetWord);


// When user presses a key:
document.onkeyup = function(event) {
	var userInput = event.key;

console.log("User Input: " + userInput);

// Alphabet array:
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// If the key pressed is part of the alphabet:
if (alphabet.indexOf(userInput) > -1) {
	// If user input is NOT part of chosen word:
	if (chosenWord.indexOf(userInput) === -1) {
		// If user input is already part of failed guesses:
		if (failedGuesses.indexOf(userInput) > -1) {
			console.log("Nothing Happens");
		// If user input is NOT part of failed guesses:
		} else {
			lives--;
			console.log("Lives left: " + lives);
			failedGuesses.push(userInput);
			console.log("Failed Guesses: " + failedGuesses);
		}
	// If user input IS part of chosen word:
	}	else {
		// For loop to replace underscores with user input:
		 for (var j = 0; j < chosenWord.length; j++) {
		 	// If user input is the same as index of: 
			 if (chosenWord[j] === userInput) {
				targetWord[j] = userInput;
				console.log("Target Word: " + targetWord);

			 }
		}

	 	}

	}

var html = 
	 // "<h1> League of Hangman </h1>" +
	 // "<h1> Word: " + targetWord.join(" ") + "</h1>" + 
	 // "<h1> Wrong Letters: " + failedGuesses + "</h1>" +
	 // "<h1> Lives: " + lives + "</h1>" + 
	 // "<h1> Wins: " + wins + "</h1>" +
	 // "<h1> Losses: " + losses + "</h1>"

	 '<div class="row">' + 
			'<div class="col-md-4"></div>' + 
			'<div class="col-md-4">' + 
			'<img src="assets/images/blacksquare.jpg" id="box">' + 
				'<h1>League of Hangman <h1/>' + 
		 		"<p>Word: " + targetWord.join(" ") + "</p>" + 
	 	 		"<p>Wrong Letters: " + failedGuesses + "</p>" + 
	 	 		"<p>Lives: " + lives + "</p>" + 
	 	 		"<p>Wins: " + wins + "</p>" + 
	 			"<p>Losses: " + losses + "</p>" + 
	 		'</div>' + 
	 		'<div class="col-md-4"></div>' + 
	 	'</div>'

    document.querySelector("#middle").innerHTML = html;

// If target word becomes chosen word (AKA you won):
if(chosenWord === targetWord.join("")) {
	console.log("You Won!");
	reset();
	console.log("Lives: " + lives);
	wins++;
	alert("You Won! Press Space to play again.")
	console.log(wins);
	console.log("Chosen word: " + chosenWord);
	// var youwon =
	// "<h1> You won! Press space to play again! </h1>"
	//  document.querySelector(".container").innerHTML = youwon;

// If lives = 0:
} else if (lives === 0) {
	console.log("You Lost!");
	reset();
	alert("You Lost! Press Space to play again.")
	console.log("Lives: " + lives);
	losses++;
	// var youlost = 
	// "<h1> You lost! The correct word was: " + chosenWord + ". Press space to play again! </h1>"
	// '<div class="row">' + 
	// 		'<div class="col-md-4"></div>' + 
	// 		'<div class="col-md-4">' + 
	// 			'<h1> You lost! <h1/>' + 
	// 	 		"<p>Word: " + targetWord.join(" ") + "</p>" + 
	//  	 		"<p>Lives: " + lives + "</p>" + 
	//  	 		"<p>Wins: " + wins + "</p>" + 
	//  			"<p>Losses: " + losses + "</p>" + 
	//  		'</div>' + 
	//  		'<div class="col-md-4"></div>' + 
	//  	'</div>'
	// document.querySelector(".container").innerHTML = youlost;
}

}

var runonce = true;