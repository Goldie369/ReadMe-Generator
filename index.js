const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input', 
        name: 'title',
        message: 'What is the title?',

    },
    {
        type: 'input', 
        name: 'description',
        message: 'What is the description of your app?',

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
    {
        type: 'input', 
        name: 'installation',
        message: 'What is your method of installation?',
       
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using?',
        choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'None'],
       
    },
    {
        type: 'input', 
        name: 'installation',
        message: 'What command should be run to install dependencies?',
       
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
        
    },
    {
        type: 'input', 
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?',
        
    },
    {
        type: 'input', 
        name: 'test',
        message: 'What tests can the user run to debug code?',
       
    },
]