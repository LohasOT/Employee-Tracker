let questions = [
{
  type: 'list',
  message: "What would you like to do?",
  choices: ['View All Employee', 'View All Employee By Department', 'View All Employee By Manager', 'Add Employee', 'Remove Emplyee', 'Update Employee Role', 'Update Employee Manager', 'View All Roles', ''],
  name: 'todo'
}
]
{
  type: 'list',
  message: "Which employee would you like to remove?",
  choices: ['View All Employee', 'View All Employee By Department', 'View All Employee By Manager', 'Add Employee', 'Remove Emplyee', 'Update Employee Role', 'Update Employee Manager', 'View All Roles'],
  name: 'remove'
}
{
  type: 'list',
  message: "What would you like to do?",
  choices: ['View All Employee', 'View All Employee By Department', 'View All Employee By Manager', 'Add Employee', 'Remove Emplyee', 'Update Employee Role', 'Update Employee Manager', 'View All Roles'],
  name: 'add'
}
{
  type: 'input',
  message: "What is the employee first name?",
  name: 'firstName'
},
{
  type: 'input',
  message: "What is the employee last name?",
  name: 'lastName'
},
{
  type: 'list',
  message: "What is the employee's role?",
  choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountaint', 'Legal Team Lead'],
  name: 'role'
},
{
  type: 'list',
  message: "Who is the employee's manager?",
  choices: [],
  name: 'manager'
},