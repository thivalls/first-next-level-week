import Knex from 'knex';

export async function up(knex: Knex) {
  knex.schema.createTable('points', table => {

  })
}

export async function down() { }