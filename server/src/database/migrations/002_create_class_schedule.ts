import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();
        
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            // Se alterar o id do usuario, altera em todas as suas aulas também
            .onUpdate('CASCADE')
            // Se remover o usuário da plataforma, remove automaticamente todas as suas aulas;
            .onDelete('CASCADE');
    })
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('class_schedule');
}