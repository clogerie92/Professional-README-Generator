// dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// function expression to create README
const createReadMe = ({Title, Description, Installation, Usage, Contribution, Test, License, Questions}) => {
    return `#Title
     #${Title}
     ##Description
     ${Description}
     ##Table of Contents
     * [Installation](#installation)
     * [Usage](#installation)
     * [License](#license)
     * [Contributing](#contributing)
     * [Tests](#installation)
     * [Questions](#questions)
     ##Installation
     ${Installation}

     ##Usage
     ${Usage}

     ##License
     ${License}

     ##Contributing
     ${Contribution}

     ##Tests
     ${Test}
     
     ##Questions
     ${Questions}     
    `;
}

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
    fs.writeFileSync("README.md", createReadMe(response), (error) => {
        error ? console.log(error) : console.log("Successfully created README file!");
    })

});
