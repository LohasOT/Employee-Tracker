const inquirer = require('inquirer');
const { prompt } = require("inquirer");
const cTable = require('console.table');
const mysql = require('mysql2')
const db = mysql.createConnection('mysql://root:Lohas199312!@localhost:3306/employee_db')

const start = () => {
  inquirer.prompt([
    {
  type: 'list',
  message: "What would you like to do?",
  choices: ['View All Employee', 'View All Department', 'View All Employee By Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager', 'View All Roles'],
  name: 'todo'
    }
  ])
  .then(({ todo }) => {

    switch (todo)  {

      case 'View All Employee': 
        seeEmployees()
      
      break;

      case 'View All Department': 

        seeDepartments()
      
      break;

      case 'View All Employee By Manager': 

      
      break;

      case 'Add Employee': 
        addEmployees()
      
      break;

      case 'Remove Employee': 

      
      break;

      case 'Update Employee Role': 

      
      break;

      case 'Update Employee Manager': 

      
      break;

      case 'View All Roles': 
        seeRoles()
      
      break;
      }
    })
  }

start()


function seeDepartments() {
      db.query('SELECT * FROM department', (err, departments) => {
        if (err) { console.log(err) }
        console.table(departments)
      })
    }

function seeRoles() {
      db.query('SELECT * FROM role', (err, roles) => {
        if (err) { console.log(err) }
        console.table(roles)
      })
    }

function seeEmployees() {
  db.query('SELECT * FROM employee', (err, employees) => {
    if (err) { console.log(err) }
    console.table(employees)
  })
}

function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name the new department'
    }
  ])
  .then (newDepartment => {
    console.log(newDepartment)
    db.query('INSERT INTO employee SET ?', newDepartment, err => {
      if (err) { console.log(err) }
      console.log('New Department Added')
      start()
    })
  })
}

function addEmployees() {
      inquirer.prompt([
      {
        type: 'input',
        message: "What is the employee first name?",
        name: 'first_Name'
      },
      {
        type: 'input',
        message: "What is the employee last name?",
        name: 'last_Name'
      },
      {
        type: 'input',
        message: "What is the employee's role ID?",
        name: 'role_id'
      },
      {
        type: 'input',
        message: "What is the employees' manager ID",
        name: 'manager_id'
      }
    ])
    .then(newEmployee => {
      console.log(newEmployee)
      db.query('INSERT INTO employee SET ?', newEmployee, err => {
        if (err) { console.log(err) }
        console.log('New Employee Added')
        start()
      })
    })
}



  //   } else if (answer.todo === 'Remove Employee') {
  //     inquirer.prompt([
  //     {
  //       type: 'list',
  //       message: "Which employee would you like to remove?",
  //       choices: [],
  //       name: 'remove'
  //     }
  //   ])
  // }