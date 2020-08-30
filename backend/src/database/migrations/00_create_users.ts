import Knex from 'knex'

export function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary().unique()
    table.string('email').notNullable().unique()
    table.string("password").notNullable()
    table.string('avatar').notNullable()
    table.string("name").notNullable()
    table.string("bio").notNullable()
  })
}

export function down(knex: Knex) {
  return knex.schema.dropTable('users')
}