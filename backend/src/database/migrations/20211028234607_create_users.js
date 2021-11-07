
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table){
      //   table.increments();
        table.string('id').primary();
        table.string('nome').notNullable;
        table.string('email').notNullable;
        table.integer('idade');
        table.string('empresa');
        table.blob('imagem');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
  };
  