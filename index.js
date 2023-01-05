// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const inquirer = require('inquirer');
//const chalk = require('chalk');

inquirer //.prompt is a method with question objects
  .prompt([
    { //question object
      type: 'input', //type of 
      message: 'What is your project title?', //question
      name: 'title', //whatever the user types will be saved as username
    },
    {
      type: 'input',
      message: 'What is your description of the project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are your installation instructions for the project?',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'What are your usage instructions?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are your contribution guidelines?',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'What are your guidelines for testing?',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Do you have any additional instructions on how to reach you?',
        name: 'reach',
    },
  ])
  .then((response) => {

    //response.confirm === response.password
    console.log(response) //log response object
    //console.log('response', response)
      //? console.log('Success!')
      //: console.log('You forgot your password already?!')
 } );
