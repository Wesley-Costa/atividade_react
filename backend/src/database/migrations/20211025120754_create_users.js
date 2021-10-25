
exports.up = function(knex) {
  return knex.schema.dropTable('users');

};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
