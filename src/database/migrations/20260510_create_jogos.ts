import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('jogos', (table) => {
    table.increments('id').primary();
    table.string('nome', 255).notNullable();
    table.string('tipo', 100).notNullable();
    table.integer('nota').notNullable();
    table.text('review').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('jogos');
}
