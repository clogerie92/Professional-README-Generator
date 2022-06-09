// dependencies
const inquirer = require("inquirer");
const fs = require("fs");
// global variable for license badge function
const licenses = ["Appache", "BSD", "Creative Commons", "MIT"];

// function expression to create README
const createReadMe = ({Title, Description, Installation, Usage, Contribution, Test, License, github, email}) => {
return ` # ${Title}

${licenseBadge(License)}

## Description
${Description}

## Table of Contents
* [Installation](#installation)
* [Usage](#installation)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#installation)
* [Questions](#questions)

## Installation
${Installation}

## Usage
${Usage}

## License
${License}
${licenseLink(License)}

## Contributing
${Contribution}

## Tests
${Test}

## Questions
${email}

${github}`;
}

function licenseBadge(license) {
    if(license === licenses[0]) {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    } else if (license === licenses[1]) {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
    } else if (license === licenses[2]) {
        return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
    } else if (license === licenses[3]) {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else {
        return "";
    }
}

function licenseLink(license) {
    if(license === licenses[0]) {
        return "(https://opensource.org/licenses/Apache-2.0)";
    } else if (license === licenses[1]) {
        return "(https://opensource.org/licenses/BSD-3-Clause)";
    } else if (license === licenses[2]) {
        return "(http://creativecommons.org/publicdomain/zero/1.0/)";
    } else if (license === licenses[3]) {
        return "(https://opensource.org/licenses/MIT)";
    } else {
        return "";
    }
}

function licenseSection(license) {
    if(license === licenses[0]) {
        return `Read more about ${licenses[0]} here:`;
    } else if (license === licenses[1]) {
        return `Read more about ${licenses[1]} here:`;
    } else if (license === licenses[2]) {
        return `Read more about ${licenses[2]} here:`;
    } else if (license === licenses[3]) {
        return `Read more about ${licenses[3]} here:`;
    } else {
        return "";
    }
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
        type: "input",
        name: "github",
        message: "Please share your github username."
    },
    {
        type: "email",
        name: "email",
        message: "Please share your email address."
    },
    {
        type: "list",
        name: "License",
        choices: ["MIT", "GVL GPL License", "Appache License", "No License"]
    },
]).then((response) => {
    console.log(response);
    fs.writeFileSync("README.md", createReadMe(response), (error) => {
        error ? console.log(error) : console.log("Successfully created README file!");
    })

});
