// create the constructor function for the hangman game
// set up the word to be an array of lowercase letters 
// set up another instance property to store guessed letters
// set up a method to give you the puzzle back
const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses;
    this.guessLetters = [];
}
Hangman.prototype.getPuzzle = function () {
    let puzzle = '';
    this.word.forEach(letter => {
        if (this.guessLetters.includes(letter) || letter === ' ') puzzle += letter;
        else puzzle += '*'
    })
    return puzzle;
}
const game1 = new Hangman('Cat', 2);
const game2 = new Hangman('New Jersey', 4)
// set up two attritubes, one for the word, and one for the amount of guesses
// create two instances of the constructor and print them  