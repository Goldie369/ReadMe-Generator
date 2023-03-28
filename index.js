//-- Adding inquirer and fs modules to generate a README --//
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//-- Adding array of questions for user input --//
const questions = [
    {
        type: 'input', 
        name: 'title',
        message: 'What is the title?',

    },
    {
        type: 'input', 
        name: 'description',
        message: 'What is the description of your application?',

    },
    
    {
        type: 'input', 
        name: 'installation',
        message: 'What is your method of installation?',
       
    },
    {
        type: 'input', 
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using?',
        choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'None'],
       
    },
    
    {
        type: 'input', 
        name: 'test',
        message: 'What tests can the user run to the code?',
       
    },
    {
        type: 'input', 
        name: 'github',
        message: 'What is the name of your Github username?',

    },
    {
        type: 'input', 
        name: 'email',
        message: 'What is your email address?',
       
    },
    
];

//-- Adding a typo & generateMarkdown is defined as generate GenReadMe --//
//-- Adding a questions variable that contains an array of objects that define the questions to be asked--//
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)
    const fileName = 'GenREADME.md'
    const information = generateMarkdown(answers)
    console.log(information)

    fs.writeFile(fileName, information, (err) => 
      err ? console.log(err) : console.log('Success!')
    );
  })
}
//-- Adding a function called init() that prompts the user with questions using the inquirer--//
init();