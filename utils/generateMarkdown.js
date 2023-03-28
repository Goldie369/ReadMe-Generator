//--Adding a function called renderLicenseBadge() that takes a license parameter as input and returns a string--//

function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

//-- Adding a function called renderLicenseSection() that takes a license parameter as input and returns a string --//
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

- [Dependencies](#Dependencies)
${renderLicenseLink(data.license)}

- [Tests](#Tests)
  
- [Questions](#Questions)
  
## Installation

This is the following method of installation:
${data.installation}
  
## Dependencies
  
This applcation should be install with the following dependencies:
${data.dependencies}

${renderLicenseSection(data.license)}



  
## Tests
  
In order to test the the application, type this into the command line - ${data.test}
  
## Questions

If you have any questions or comments please feel free to contact me 
[${data.email}](${data.email}). If you're interested in checking out any of my other projects, visit [My github](http://github.com/${data.github}).

`

}
 

//-- Adding a function --//
module.exports = generateReadMe;