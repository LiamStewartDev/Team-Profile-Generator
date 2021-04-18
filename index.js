const inquirer = require('inquirer');
const fs = require('fs');

const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managername',
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'managerid',
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'manageremail',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerofficenumber',
    },
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'addrole',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
    },

]
const engineerQuestions = [
    {
        type: 'input',
        message: "What is your Engineer's name?",
        name: 'engineername',
    },
    {
        type: 'input',
        message: "What is your Engineer's id?",
        name: 'engineerid',
    },
    {
        type: 'input',
        message: "What is your Engineer's email?",
        name: 'engineeremail',
    },
    {
        type: 'input',
        message: "What is your Engineer's GitHub username",
        name: 'engineergithub',
    },
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'addrole',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
    }
]
const internQuestions = [
    {
        type: 'input',
        message: "what is your intern's name?",
        name: 'internname',
    },
    {
        type: 'input',
        message: "What is your intern's id?",
        name: 'internid',
    },
    {
        type: 'input',
        message: "What is your intern's email?",
        name: 'internemail',
    },
    {
        type: 'input',
        message: "What is your intern's school?",
        name: 'internschool',
    },
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'addrole',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
    }
]
function writeToFile(fileName, data) { }


function init() {
    inquirer
        .prompt(managerQuestions)
        .then((data) => {
            let roleQuestions = []
            switch (data.choices) {
                case "Engineer":
                    roleQuestions = engineerQuestions;
                    break;
                case "Intern":
                    roleQuestions = internQuestions;
                    break;
                default:
                    const filename = 'main.html';
                    const fileData =
                                `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>
                        </head>
                        <body>
                        
                        </body>
                        </html>`
                            fs.writeFile(filename, fileData, (err) =>
                                err ? console.log(err) : console.log('Success!'))
            }
        })
}

// Function call to initialize app
init();