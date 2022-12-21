import inquirer from "inquirer";
import { type } from "os";

const systemGeneratedNumber = Math.floor(Math.random() * 10);

// console.log ("computer guess was:", systemGeneratedNumber);

type answerType = {
    userGuess: number
}

const answers: answerType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your guess number between 1 to 10???"
    }


])

const { userGuess } = answers;

if (userGuess == systemGeneratedNumber) {
    console.log("userGuess", userGuess);
    console.log("computer guess was:", systemGeneratedNumber);
    console.log("you guess correct number with computer \n you win");
} else {
    console.log("userGuess", userGuess);
    console.log("computer guess was:", systemGeneratedNumber);
    console.log("please try again \n better luck next time")
}




//console.log(answers.userGuess);
