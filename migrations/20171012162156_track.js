
exports.up = function(knex, Promise) {
  return knex.schema.createTable('track', function(table){
    table.increments('id').primary();
    table.string('name').notNull();
    table.integer("artist_id");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('track');
};
