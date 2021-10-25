
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table){
        table.string('id').primary();
        table.string('name');
        table.string('email');
        table.integer('idade');
        table.string('empresa');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};