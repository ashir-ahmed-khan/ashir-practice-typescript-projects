import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "kindly enter your first number??"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "kindly enter your second number??"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "select operator:"
    },
]);
const { numberone, numbertwo, operator } = answer;
if (numberone && numbertwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberone + numbertwo;
    }
    else if (operator === "-") {
        result = numberone - numbertwo;
    }
    else if (operator === "*") {
        result = numberone * numbertwo;
    }
    else if (operator === "/") {
        result = numberone / numbertwo;
    }
    console.log(chalk.red(`your result is: ${result} `));
    console.log("Thankyou for using calculator");
}
else {
    console.log("kindly enter valid number.");
    console.log("Thankyou for using calculator");
}
