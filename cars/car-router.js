const express = require('express')
const carsdb = require('../data/carsdb-config')
const carsRouter = express.Router()

console.log(process.env.NODE_ENV)

carsRouter.get('/', (req, res) => {
  carsdb('cars')
    .then(cars => {
      res.json(cars)
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to load cars' })
    })
})

module.exports = carsRouter