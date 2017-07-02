//Var List
var pokeList = ['bulbasaur', 'caterpie', 'charmander', 'ekans', 'pidgey', 'pikachu', 'rattata', 'spearow', 'squirtle', 'weedle'];

var randomIndex; //random index value from pokeList

var whosThatPoke;

var underScoreString; //set to equal underscores of length of randomized pokemon from pokeList

var gameStart = false;

var indexPokeChecker;

var guessesRemain = 10;

var wrongGuesses = [];

var wins = 0;

var keyGuess; //User key guess


console.log('currentcorrectindexes', currentcorrectindexes);

randomIndex = randomize from the length of pokeList

underScoreString = underscores for loop to the length of pokeList[randomIndex]

 whosThatPoke = pokeList[randomIndex]

indexPokeChecker = length of whosThatPoke

first onkeypress set gameStart to true
while gameStart is true:

for loop for until i === guessesRemain {
	event for each onkeypress
	check keyGuess is === to whosThatPoke[indexPokeChecker]
		if true display 

}











//********************************************************************
//********************************************************************
create a string variable for underscores that is equal to the chosen word
MDN stringTYPEof
correctGuesses are stored in an array
create an array of wrongGuesses

var currentword = 'finish';
var currentguess= 'i';
var currentcorrectindexes = [];
var allwrongGuesses = [];

for (var i = 0; i < currentword.length i++) {
	if (currentguess === currentword[i]){
		currentcorrectindexes.push(i);
		console.log('current correct index', i);

	}
}
