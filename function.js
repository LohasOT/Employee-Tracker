const mysql = require('mysql2')
const db = mysql.createConnection('mysql://root:Lohas199312!@localhost:3306/users_db')


//VIEW Functions for ALL employees
function seeEmployees () {
  db.query('SELECT * FROM employees', (err, employees) => {
    if (err) { console.log(err) }
    console.table(employees)
  })
}


//VIEW Functions for ALL roles 
function seeRoles  () {
  db.query('SELECT * FROM roles', (err, roles) => {
    if (err) { console.log(err) }
    console.table(roles)
  })
}


//VIEW Functions for ALL departments

function seeDepartments () {
  db.query('SELECT * FROM departments', (err, departments) => {
    if (err) { console.log(err) }
    console.table(departments)
  })
}


//ADD Functions for Employees 

function addEmployees (newEmployee) {
  db.query('INSERT INTO employees SET ?', newEmployee, err => {
    if (err) { console.log(err) }
    console.table(newEmployee)
  })
}


//ADD Functions for Role

function addRole (newRole) {
  db.query('INSERT INTO employees SET ?', newRole, err => {
    if (err) { console.log(err) }
    console.table(newRole)
  })
}

//ADD Functions for Department

function addDepartment (newDepartment)  {
  db.query('INSERT INTO employees SET ?', newDepartment, err => {
    if (err) { console.log(err) }
    console.table(newDepartment)
  })
}
