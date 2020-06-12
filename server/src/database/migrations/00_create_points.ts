import Knex from 'knex';

export async function up(knex: Knex) {
    // CRIAR A TABELA
    return knex.schema.createTable('points', table =>{ 
        table.increments('id').primary(); //function.type('nome do campo')
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();
    });
}

export async function down(knex: Knex) {
    // VOLTAR ATRAS (DELETAR A TABELA)
    return knex.schema.dropTable('points');
}