
exports.up = function(knex) {
    return knex.schema.createTable('enquetes',function(table){
        table.increments();

        table.string('titulo').notNullable();
        table.string('descricao').notNullable();
        table.string('voto').notNullable();
        table.string('pessoa_id').notNullable();

        table.foreign('pessoa_id').references('id').inTable('pessoas');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('enquetes');
};
