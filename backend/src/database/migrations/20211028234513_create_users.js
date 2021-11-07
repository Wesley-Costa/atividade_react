
exports.up = function(knex) {
    return knex.schema.dropTable('usuarios');
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};
  