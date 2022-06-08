// dependencies
const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "What is the title of your application?"
    },
    {
        type: "input",
        name: "Description",
        message: "Please write a description of your application."
    },
    {
        type: "input",
        name: "Installation",
        message: "Please explain how to install your application."
    },
    {
        type: "input",
        name: "Usage",
        message: "Please explain how to use your application."
    },
    {
        type: "input",
        name: "Contribution",
        message: "Please provide guidlines on how to contribute to your application."
    },
    {
        type: "input",
        name: "Test",
        message: "Please explain how to test your application."
    },
    {
        type: "list",
        name: "License",
        choices: ["Rutgers", "MIT", "GVL GPL License", "Appache License", "No License"]
    }
]).then((response) => {
    console.log(response);
});
