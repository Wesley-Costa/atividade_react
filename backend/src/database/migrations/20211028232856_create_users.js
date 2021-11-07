
exports.up = function(knex, Promise) {
    knex.schema.table('usuarios', function(table){
        table.blob('imagem');
    })
  };
  
  exports.down = function(knex, Promise) {
    knex.schema.table('usuarios', function(table){
        table.dropColumn('imagem')
    })
  };
  
