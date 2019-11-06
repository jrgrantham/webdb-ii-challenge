exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { VIN: '12345', Make: 'Audi', Model: 'A3', Mileage: 32144},
        { VIN: '23456', Make: 'Audi', Model: 'A4', Mileage: 45},
        { VIN: '34567', Make: 'Audi', Model: 'TT', Mileage: 24565},
        { VIN: '45678', Make: 'BMW', Model: 'X5', Mileage: 24354},
        { VIN: '56789', Make: 'BMW', Model: 'I8', Mileage: 234},
        { VIN: '67890', Make: 'BMW', Model: 'Z3', Mileage: 2345346},
      ])
    })
}