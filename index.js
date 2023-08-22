import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "number one",
        messsage: "kindly enter the first number : "
    },
    {
        type: "number",
        name: "number two",
        message: "kindly enter the second number :"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "select operator :"
    },
]);
console.log(answers);
