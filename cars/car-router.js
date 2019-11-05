const express = require('express')
const carsdb = require('../data/carsdb-config')
const carsRouter = express.Router()

console.log(process.env.NODE_ENV)

module.exports = carsRouter