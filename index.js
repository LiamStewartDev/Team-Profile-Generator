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

function init() {
    let allData = []
    inquirer.prompt(managerQuestions)
        .then(async (data) => {
            let roleQuestions = []
            while (true){
                allData.push(data);
                switch (data.addrole) {
                    case "Engineer":
                        roleQuestions = engineerQuestions;
                        break;
                    case "Intern":
                        roleQuestions = internQuestions;
                        break;
                    default:
                        let cardHtml = ''
                                cardHtml += `<div class="card" style="width: 18rem;">
                                <h3 class="card-title">${allData[0].managername}</h3>
                                <h6 class="card-subtitle">Manager</h6>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ID: ${allData[0].managerid}</li>
                                    <li class="list-group-item">Email: <a href="mailto:${allData[0].manageremail}">${allData[0].manageremail}</a></li>
                                    <li class="list-group-item">Office number: ${allData[0].managerofficenumber}</li>
                                </ul>`
                        for (let i = 1; i < allData.length; i++) {
                            if (allData[i-1].addrole === 'Engineer'){
                                cardHtml += `<div class="card" style="width: 18rem;">
                                    <h3 class="card-title">${allData[i].engineername}</h3>
                                    <h6 class="card-subtitle">Engineer</h6>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">ID: ${allData[i].engineerid}</li>
                                        <li class="list-group-item">Email: <a href="mailto:${allData[i].engineeremail}">${allData[i].engineeremail}</a></li>
                                        <li class="list-group-item">GitHub: <a href="https://github.com/${allData[i].engineergithub}">${allData[i].engineergithub}</a></li>
                                    </ul>
                                </div> `
                            }
                            else if (allData[i-1].addrole === 'Intern') {
                                cardHtml += `<div class="card" style="width: 18rem;">
                                    <h3 class="card-title">${allData[i].internname}</h3>
                                    <h6 class="card-subtitle">Intern</h6>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">ID: ${allData[i].internid}</li>
                                        <li class="list-group-item">Email: <a href="mailto:${allData[i].internemail}">${allData[i].internemail}</a></li>
                                        <li class="list-group-item">School: ${allData[i].internschool}</li>
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
                const response = await inquirer
                    .prompt(roleQuestions)
                    .then((newData) => {
                        data = newData;
                    })
            }
        })
}

// Function call to initialize app
init();