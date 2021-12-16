const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mysql://root:Lohas199312!t@localhost:3306/employee_db')

module.exports = sequelize
