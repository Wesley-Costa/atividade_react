
exports.up = function(knex) {
    return knex.schema.createTable('pets', function(table){
        table.string('id').primary();
        table.string('name');
        table.string('raca');
        table.float('tamanho');
        table.blob('imagem');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pets');
};