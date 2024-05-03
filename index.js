#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number 
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result
// 4) Repeat the process until user guesses the right number
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please Guess a Number between 1 to 6",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulation you Guessed Right Number");
}
else {
    console.log("You Guessed Wrong Number");
}
