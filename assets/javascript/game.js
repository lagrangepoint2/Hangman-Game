//Var List
var pokeList = ['bulbasaur', 
				'caterpie', 
				'charmander', 
				'ekans', 
				'pidgey', 
				'pikachu', 
				'rattata', 
				'spearow', 
				'squirtle', 
				'weedle'];

var randomIndex = 0;

var whosThatPoke = '';

var wrongGuesses = [];

var correctIndex = [];

var guessesRemain = 10;

var wins = 0;

var keyGuess = '';

var winCounter = 0;

var condImg;

var tempString = '';

var winboolean = false;


//Pre Game
var imgArray = ["assets/images/bulbasaur.jpg", 
					"assets/images/caterpie.jpg",
					"assets/images/charmander.jpg",
					"assets/images/ekans.jpg",
					"assets/images/pidgey.jpg", 
					"assets/images/pikachu.jpg", 
					"assets/images/rattata.jpg", 
					"assets/images/spearow.jpg", 
					"assets/images/squirtle.jpg", 
					"assets/images/weedle.jpg"];

//Start Button
$('.start-button').on('click', function() {
	preGame();
});

//Game
document.onkeyup = function (event) {
//Takes user input
var keyGuess = event.key;



//Checks for letter matching
for (var i = 0; i < whosThatPoke.length; i++) {
	//Checks for right guesses
	if (keyGuess === whosThatPoke[i]){
		correctIndex[i] = keyGuess;
		document.getElementById('pokemon-guess').textContent = correctIndex[i];
		tempString = correctIndex.join('');
	}
}//end main for loop

	//***************Checks for wrong guesses
	if (!wrongGuesses.includes(keyGuess) && !correctIndex.includes(keyGuess)){
			guessesRemain--;
			wrongGuesses.push(keyGuess);
	}		
	//LOSE CONDIION
			if (guessesRemain < 1){
				condImg = "assets/images/lose.png";
				document.getElementById('poke-picture').src = condImg;
				resetVars();
			}
	


	//win condition
	console.log('win condition: tempString: ', tempString);
  	if (tempString === whosThatPoke && tempString.length === whosThatPoke.length){
		wins++;
		document.getElementById('w-i-n-s').textContent = wins;
		condImg = "assets/images/win.jpg";
		document.getElementById('poke-picture').src = condImg;
		resetVars();
		// keyGuess = '';
		// wrongGuesses = [];
		// guessesRemain = 10;
		display();
	}




//Display
display();



  
}//End of onkeyUp










//FUNCTIONS************************************************
function preGame(){
		wrongGuesses = [];
		guessesRemain = 10;
	//Selects Random Pokemon
	randomIndex = Math.floor((Math.random() * pokeList.length));
	// console.log('randomIndex: ',randomIndex);

		whosThatPoke = pokeList[randomIndex];
		// console.log('Pokemon Chosen: ', whosThatPoke);

	//Setting the Canvas
	document.getElementById('poke-picture').src = imgArray[randomIndex];
    var img = document.getElementById('imgArray[randomIndex]');

    //Underscores correctIndex
	for (var i = 0; i < whosThatPoke.length; i++) {
		correctIndex[i] = '_';
	}
		// console.log('tempString: ', tempString);
		
	display();

}

function winChecker(){

	
}

function playAgain(){
    if (confirm("Would you like to play again?") == true) {
        resetWinVars();
        preGame();
    } else {
        resetVars();
    }
}

function display(){
	document.getElementById('pokemon-guess').textContent = correctIndex.join(' ');
	document.getElementById('bad-guess').textContent = wrongGuesses.join(' ');
	document.getElementById('guesses-remaining').textContent = guessesRemain;
	document.getElementById('w-i-n-s').textContent = wins;
	
}


function resetVars(){
	whosThatPoke = '';

	wrongGuesses = [];

	correctIndex = [];

	guessesRemain = 10;

	keyGuess = '';

	condImg;

	tempString;

	display ();
}




















