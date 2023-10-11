const readline = require('readline');

const correctNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askUser = () => {
  rl.question(`Guess the number between ${minRange} and ${maxRange}: `, (userGuess) => {
    
  });
};

askUser();
