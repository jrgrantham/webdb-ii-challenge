const express = require("express");
const carsdb = require("../data/carsdb-config")
const carsRouter = express.Router()

console.log(process.env.NODE_ENV)

carsRouter.get("/", (req, res) => {
  carsdb("cars")
    .then(cars => {
      res.json(cars)
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to load cars " + error })
    })
})

// used 'Reference' instead of 'ID'
carsRouter.get("/:id", (req, res) => {
  carsdb("cars")
    .where({ Reference: req.params.id })
    .first()
    .then(car => {
      res.json(car);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to load cars " + error });
    });
});

carsRouter.post("/", (req, res) => {
  const carData = req.body;
  carsdb("cars")
    .insert(carData)
    .then(ids => {
      carsdb("cars")
        .where({ Reference: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry)
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" })
    })
})

module.exports = carsRouter;
