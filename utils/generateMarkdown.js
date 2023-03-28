//--Adding a function called renderLicenseBadge() that takes a license parameter as input and returns a string--//
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
  }
//-- function called renderLicenseSection() that takes a license parameter as input and returns a string --//
  function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License
  
  This project is licensed under the ${license} license.`;
    }
    return '';
  }
//-- Adding a function called renderLicenseLink() that takes a license parameter as input and returns a string --//
  function renderLicenseLink(license) {
    if (license !== 'None') {
      return `\n* [License](#license)\n`;
    }
    return '';
  }
//-- This code exports a function generateReadMe that takes in an object data as an argument and returns a string --//
//-- The generateReadMe function uses template literals to interpolate the values of data into the README string --//
  function generateReadMe (data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}
    
## Description
    
${data.description}
    
## Table of Contents
 
- [Installation](#Installation) 
    
- [Usage](#Usage)
${renderLicenseLink(data.license)}
    
- [Contributing](#Contributing)
    
- [Tests](#Tests)
    
- [Questions](#Questions)
    
## Installation
    
To install this application run the folllowing command:
    
${data.installation}
    
## Usage
This applcation was the following usage limitations:
${data.usage}
## License
${renderLicenseSection(data.license)}

## Contibutions
    
These individuals were involved in the development of this project:
${data.contribution}
    
## Tests
    
In order to test the the application, type this into the command line - ${data.test}
    
## Questions
  
If you have any questions or comments please contact me at [${data.email}](${data.email}). If you're interested in checking out any of my other projects, visit [My github](http://github.com/${data.Goldie369}).

`
 
 }
   

//-- Adding a function --//
module.exports = generateReadMe;

    