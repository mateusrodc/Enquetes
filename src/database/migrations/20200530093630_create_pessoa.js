
exports.up = function(knex) {
    return knex.schema.createTable('pessoas',function(table){
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('apelido').notNullable();
        table.string('senha').notNullable();
    });
        
    
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('pessoas');
};
