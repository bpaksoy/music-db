
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist', function(table){
    table.increments('id').primary();
    table.string('name').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('artist');
};
