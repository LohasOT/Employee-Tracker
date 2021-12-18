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
      choices: ['View All Employee', 'View All Department', 'View All Roles', 'Add Employee', 'Add A Role', 'Add A Department', 'Update Employee Role', 'Leave'],
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

      case 'Add Employee': 
        addEmployees()
      
      break;

      case 'Update Employee Role': 

        updateEmployeeRoles()
      
      break;

      case 'View All Roles': 
        seeRoles()
      
      break;

      case 'Add A Role':
        addRole()

      break;

      case 'Add A Department':
        addDepartment()

      break;

      case 'Leave':
        end()
      break;
      }
    })
  }

start()


function seeDepartments() {
      db.query('SELECT * FROM department', (err, departments) => {
        if (err) { console.log(err) }
        console.table(departments)
        start()
      })
    }

function seeRoles() {
      db.query('SELECT * FROM role', (err, roles) => {
        if (err) { console.log(err) }
        console.table(roles)
        start()
      })
    }

function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      message: "What is title of the role?",
      name: 'title'
    },
    {
      type: 'input',
      message: "What is the salary of the role?",
      name: 'salary'
    },
    {
      type: 'input',
      message: "What is the department ID?",
      name: 'department_id'
    }
  ])
    .then(newRole => {
      console.log(newRole)
      db.query('INSERT INTO role SET ?', newRole, err => {
        if (err) { console.log(err) }
        console.log('New Role Added')
        start()
      })
    })
}  

function seeEmployees() {
  db.query('SELECT * FROM employee', (err, employees) => {
    if (err) { console.log(err) }
    console.table(employees)
    start()
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
    db.query('INSERT INTO department SET ?', newDepartment, err => {
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
        message: "What is the employees's manager ID",
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

function updateEmployeeRoles() {
  db.query('SELECT * FROM employee', (err, employees) => {
    if (err) { console.log(err) }
    console.table(employees)
  inquirer.prompt([
    {
      type: 'input',
      message: "Which employee would you like to update? (Type in first name)",
      name: 'first_name'
    },
    {
      type: 'input',
      message: "What is the employee new role id?",
      name: 'role_id'
    }
  ])
    .then (updateEmployee => {
      db.query('UPDATE employee SET ? WHERE ?', [{role_id: updateEmployee.role_id}, { first_name: updateEmployee.first_name }], () => {
      if(err) { console.log(err) }
      console.log('Employee Role Updated')
      start()
      })
    })
  })
}

function end() {
  console.log('Good Bye')
  setTimeout((function () {
    return process.exit(22);
  }), 0);
}

