import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "kindly enter your id..???",
    },
    {
        type: "number",
        name: "userPin",
        message: "kindly enter your pin..???",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving"],
        message: "choose your account type..??",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["fast cash", "with drawl"],
        message: "select your transaction",
        when(answers) {
            return answers.accountType === "current";
        }
    },
    {
        type: "list",
        name: "amount",
        choices: ["1000", "20000", "40000", "80000"],
        message: "select your amount",
        // when(answers: ansType) {
        //     return answers.transactionType === "fast cash";
        // },
    },
    {
        type: "number",
        name: "amount",
        message: "enter your amount",
        // when(answers: ansType) {
        //     return answers.transactionType === "withdrawl";
        // },
    },
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 100000);
    console.log("balance", balance);
    const enteredamount = answers.amount;
    if (balance >= enteredamount) {
        const remainingamount = balance - enteredamount;
        console.log("your remaining balance is:", remainingamount);
    }
    else {
        console.log("insufficient balance");
    }
}
