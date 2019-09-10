
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('name', 128)
            .notNullable()
            .unique();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cars');
};
