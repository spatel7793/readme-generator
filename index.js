// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    //Title
    {
        type: 'input',
        name: 'title',
        message: 'Insert Project Title',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Title Required');
                return false;
            }
        }
    },
    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Insert Project Description',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Description Required');
                return false;
            }
        }
    },
    //Licensing
    {
        type:'list',
        name:'license',
        message:'Choose the appropriate license associated with this project',
        choices:['Apache','Boost'],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Choose a license to continue');
                return false;
            }
        }
    },
    //Installation
    {
        type:'input',
        name:'installation',
        message:'Describe Installation Procedure',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Installation Procedure Required');
                return false;
            }
        }
    },
    //Usage
    {
        type:'input',
        name:'usage',
        message:'Explain how to use the app',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Usage explanation required');
                return false;
            }
        }
    },
    //Contribution
    {
        type:'input',
        name:'contribution',
        message:'How can other contribute to this project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Contribution information required');
                return false;
            }
        }
    },
    //Test
    {
        type:'input',
        name:'testing',
        message:'Explain how to test this project',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Testing explanation required');
                return false;
            }
        }
    },
    //Github Username
    {
        type:'input',
        name:'github',
        message:'Enter Github username',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Username required');
                return false;
            }
        }
    },
    //Email Address
    {
        type:'input',
        name:'email',
        message:'Enter email',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('email required');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
        throw err;
        console.log('Finished! Your information has been successfully transferred to the ReadMe.')
    })
 };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("./utils/README.md", generateMarkdown(userInput));
    })
 };

// Function call to initialize app
init();
