const numberGuesser = (guess, max, min) => {
    let generator = Math.floor(Math.random() * (max - min + 1)) + min;
    if (guess === generator) return `You've guessed the number ${guess}, which is correct.`;
    else return `Incorrect, the correct number is ${generator}, please try again.`;
}

console.log(numberGuesser(2, 5, 1));