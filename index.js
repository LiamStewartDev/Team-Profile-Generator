const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');


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

let allData = []
let roleQuestions = managerQuestions;
let cardHtml = ''

function init(employee) {
    inquirer.prompt(roleQuestions)
        .then((data) => { 
            let emp;
            if (!employee) {
                emp = new Manager (
                    data.managername,
                    data.managerid,
                    data.manageremail,
                    data.managerofficenumber
                    )
            } else if (employee === 'Engineer'){
                emp = new Engineer (
                    data.engineername,
                    data.engineerid,
                    data.engineeremail,
                    data.engineergithub
                    )
            } else if (employee === 'Intern'){
                emp = new Intern (
                    data.internname,
                    data.internid,
                    data.internemail,
                    data.internschool
                    )
            }
                allData.push(emp);
                switch (data.addrole) {
                    case "Engineer":
                        roleQuestions = engineerQuestions;
                        init(data.addrole);
                        break;
                    case "Intern":
                        roleQuestions = internQuestions;
                        init(data.addrole);
                        break;
                    case "I don't want to add any more team members":
                        makeHtml();
                        break;
                    default:
                        console.log('something went wrong');                        
                }
        })
}

function makeHtml() {
    cardHtml += `<div class="card col-4" style="width: 18rem;">
    <h3 class="card-title">${allData[0].getName()}</h3>
    <h6 class="card-subtitle">Manager</h6>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${allData[0].getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${allData[0].getEmail()}">${allData[0].getEmail()}</a></li>
        <li class="list-group-item">Office number: ${allData[0].getOfficeNumber()}</li>
    </ul>`
for (let i = 1; i < allData.length; i++) {
if (allData[i].getRole() === 'Engineer'){
    cardHtml += `<div class="card col-4" style="width: 18rem;">
        <h3 class="card-title">${allData[i].getName()}</h3>
        <h6 class="card-subtitle">Engineer</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${allData[i].getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${allData[i].getEmail()}">${allData[i].getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${allData[i].getGithub()}">${allData[i].getGithub()}</a></li>
        </ul>
    </div> `
}
else if (allData[i].getRole() === 'Intern') {
    cardHtml += `<div class="card col-4" style="width: 18rem;">
        <h3 class="card-title">${allData[i].getName()}</h3>
        <h6 class="card-subtitle">Intern</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${allData[i].getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${allData[i].getEmail()}">${allData[i].getEmail()}</a></li>
            <li class="list-group-item">School: ${allData[i].getSchool()}</li>
        </ul>
    </div> `
}
}
    const filename = 'main.html';
    const fileData =
                `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
            <link rel="stylesheet" href="./dist/style.css">
            <title>Document</title>
        </head>
        <body>
        <div class="header text-center">
        <h1>My Team</h1>
        </div>
        <div class="container">
        `
        + cardHtml + 
        `
        </div>
        </body>
        </html>`
    fs.writeFile(filename, fileData, (err) =>
        err ? console.log(err) : console.log('Success!'))
    return;
}
// Function call to initialize app
init();