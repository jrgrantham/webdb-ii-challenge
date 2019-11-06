
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments('Reference')
    table.decimal('VIN').unique().notNullable()
    table.text('Make').notNullable()
    table.text('Model').notNullable()
    table.decimal('Mileage').notNullable()
    table.boolean('Clean')
    table.boolean('Scrap')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
