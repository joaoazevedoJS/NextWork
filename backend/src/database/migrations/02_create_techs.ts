import Knex from 'knex'

export function up(knex: Knex) {
  return knex.schema.createTable('techs', table => {
    table.increments('id').primary().unique()
    table.string('name').notNullable().unique()
  })
}

export function down(knex: Knex) {
  return knex.schema.dropTable('techs')
}