#! /usr/bin/env node

import inquirer from "inquirer";

let randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt(
    [
        {
            name: "userGuessedNumber",
            type: "number",
            message: "Please enter a random number between 1-6"
        },
    ]
);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulation!!! You guessed the right number.");
}else{
    console.log("You guessed the wrong number");
}
