// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type:'input',
            name:'title',
            message:'What is you project title?'
        },
        {
            type:'input',
            name:'description',
            message:'Describe your project'
        },
        {
            type:'input',
            name:'installation',
            message:'What steps are required to install this project?'
        },
        {
            type:'input',
            name:'instructions',
            message:'How is this project to be used?'
        },
        {
            type:'input',
            name:'usage',
            message:'Provide instructions and examples for use.'
        },
        {
            type:'input',
            name:'tests',
            message:'Provide examples on how to run tests.'
        },
        {
            type:'input',
            name:'credits',
            message:'List any collaborators, third-party attribution, creators, or tutorials, and where to find them.'
        },
        {
            type:'list',
            name:'license',
            message:'Add a license for your project',
            choices:['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License']
        },
        {
            type:'input',
            name:'username',
            message:'What is your GitHub username?'
        },
        {
            type:'input',
            name:'email',
            message:'What is your email address?'
        },
    ])
    .then((answers) => {
const licenseUrl = getBadge(answers.license);
const data =`
![shields.io](${licenseUrl})

# ${answers.title}

## Description

${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Tests

${answers. tests}

## Credits

${answers.credits}

## License

This project is licensed under the ${answers.license}

## Questions

Reach out with any questions and inquiries at ${answers.email}. You can also find similar work at ${answers.username}
`;

        writeToFile('README.md', data);
    })
    .catch((error)=> {
        console.log(error);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, data, (err) => {
        if (err)
        console.log(err);
        else {
            console.log('README successfully created!')
        }
    });
}

function getBadge(license) {
    var badgeURL
    switch (license) {
        case 'MIT License':
            badgeURL = 'https://img.shields.io/badge/license-MIT-yellow';
            break; 
        case 'Apache License 2.0':
            badgeURL = 'https://img.shields.io/badge/license-Apache%202.0-yellowgreen';
            break;
        case 'GNU General Public License v3.0':
            badgeURL = 'https://img.shields.io/badge/license-GPLv3-blue';
            break;
        default: 
            badgeURL = 'License not found';
    }

    return badgeURL;
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
