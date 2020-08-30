import Knex from 'knex'

export function up(knex: Knex) {
  return knex.schema.createTable('publications', table => {
    table.increments('id').primary().unique()
    table.string('name').notNullable()
    table.string("price").notNullable()
    table.string('priceSelected').notNullable()
    table.string("description").notNullable()

    table.integer('user_id')
      .notNullable()
      .references('id').inTable('users')
  })
}

export function down(knex: Knex) {
  return knex.schema.dropTable('publications')
}