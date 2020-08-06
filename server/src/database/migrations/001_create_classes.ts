import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            // Se alterar o id do usuario, altera em todas as suas aulas também
            .onUpdate('CASCADE')
            // Se remover o usuário da plataforma, remove automaticamente todas as suas aulas;
            .onDelete('CASCADE');
    })
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('classes');
}