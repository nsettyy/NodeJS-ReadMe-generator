// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What liscenese did you use for this project?',
        choices: ['None', 'MIT', 'GPL v3.0', 'Apache 2.0'],
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installation steps does your project require?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use for your project?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What guidelines must others follow in order to contribute?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this project?',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            throw error;
        }
        console.log('Your README file has been successfully created: ' + fileName);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const markdownContent = generateMarkdown(data);
            const fileName = 'GeneratedReadME.md';
            writeToFile(fileName, markdownContent);
        })
        .catch((error) => {
            console.error('An error occurred during the initialization:', error);
        });
}

// Function call to initialize app
init();
