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
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What liscenese did you use for this project?',
        choices: ['None', 'MIT', 'GNU General Public Liscense v3.0', 'Apache 2.0'],
        alidate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose a liscense for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installation steps does your project require?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation steps for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use for your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide a use for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What guidelines must others follow in order to contribute?',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please explain how to test this project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitHib',
        message: 'What is your Github username?',
        validate: gitHiubInput => {
            if (gitHiubInput) {
                return true;
            } else {
                console.log('Please provide your github username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide an email');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markDownContent = generateMarkdown(answers);
            fs.writeFile('README.md', markDownContent, (err) =>
                err ? console.log(err) : console.log('The README.md file has been updated.')
            )
        });
}

// Function call to initialize app
init();
