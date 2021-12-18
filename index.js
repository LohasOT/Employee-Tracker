const mysql = require('mysql2')
const table = require('console.table')
const inquirer = require('inquirer')
const { prompt } = require("inquirer");

const start = () => {
  inquirer.prompt([
    {
  type: 'list',
  message: "What would you like to do?",
  choices: ['View All Employee', 'View All Employee By Department', 'View All Employee By Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager', 'View All Roles'],
  name: 'todo'
    }
  .then(({ todo }) => {

    switch (todo)  {

      case 'View All Employee': {
        seeRoles()
      
      break;

      case 'View All Employee By Department': 
        seeDepartments()
      
      break;

      case 'View All Employee By Manager': 

      
        break

      case 'Add Employee': 
        
      
        break

      case 'Remove Employee': 

      
        break

      case 'Update Employee Role': 

      
        break

      case 'Update Employee Manager': 

      
        break

      case 'View All Roles': 

      
        break
      }
    }
  }

start()







// }
//   .then(answer => {
//     if (answer.todo === 'Add Employee') {
//     inquirer.prompt([
//       {
//         type: 'input',
//         message: "What is the employee first name?",
//         name: 'firstName'
//       },
//       {
//         type: 'input',
//         message: "What is the employee last name?",
//         name: 'lastName'
//       },
//       {
//         type: 'input',
//         message: "What is the employee's role ID?",
//         name: 'role'
//       },
//       {
//         type: 'confirm',
//         message: "Who is the employee's manager?",
//         choices: [],
//         name: 'manager'
//       }
//     ])
//     } else if (answer.todo === 'Remove Employee') {
//       inquirer.prompt([
//       {
//         type: 'list',
//         message: "Which employee would you like to remove?",
//         choices: [],
//         name: 'remove'
//       }
//     ])
//   }
// }


function seeDepartments() {
      db.query('SELECT * FROM departments', (err, departments) => {
        if (err) { console.log(err) }
        console.table(departments)
      })
    }

function seeRoles() {
      db.query('SELECT * FROM roles', (err, roles) => {
        if (err) { console.log(err) }
        console.table(roles)
      })
    }