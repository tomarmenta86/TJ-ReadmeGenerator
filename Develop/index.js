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
            message:'How isthis project to be used?'
        },
        {
            type:'input',
            name:'installation',
            message:'What steps are required to install this project?'
        },
        {
            type:'input',
            name:'usage',
            message:'Provide instructions and examples for use.'
        },
        {
            type:'input',
            name:'credits',
            message:'List any collaborators, third-party attribution, creators, or tutorials, and where to find them.'
        },
        {
            type:'input',
            name:'license',
            message:'Add a license for your project'
        }
    ])
    .then((answers) => {
        const data =`
        #${answers.title}
        
        ## Description
        
        ${answers.description}
        
        - Motivation: 
        
        ${answers.motivation}
        
        ## Installation

        ${answers.installation}
        
        ## Usage

        ${answers.usage}
        
        ## Credits

        ${answers.credits}
        
        ## License
        
        ${answers.license}
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

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
