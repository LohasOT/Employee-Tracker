const { Employee } = require('../models')

async function seedData() {
  console.log('----Seeding Data----')

  await Employee.bulkCreate(require('./employeeSeed.js'))

  console.log('----Data Seeded----')

  process.exit()
}

seedData()
