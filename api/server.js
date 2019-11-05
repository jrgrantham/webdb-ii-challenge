const express = require('express')
const helmet = require('helmet')
require('dotenv').config()

const carsRouter = require('../cars/car-router')

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/cars', carsRouter)

server.get('/', (req, res) => {
  res.send('<h3>Home Page</h3>')
})

module.exports = server