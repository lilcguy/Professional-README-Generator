// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();


const inquirer = require('inquirer');
const fs = require('fs'); 


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
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are your guidelines for testing?',
        name: 'test',
    },
    {
      type: 'input',
      message: 'Do you want to name any additional contributors?',
      name: 'contributors',
  },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'guser',
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
    //console.log(response) //log response object
   
    //console.log(response.reach);

    const template = `# ${response.title}

## Description
${response.description}
## Installation
${response.installation}
## Usage
${response.usage}
## How to Contribute
${response.contribution}
## Tests
${response.test}
## Contributors
${response.contributors}
## Contact Information
Github: ${response.guser}
${response.email}
`
    
    fs.writeFile('generated-README.md', template, (err) =>
    err ? console.error(err) : console.log('README generated!')
  );


 } );
