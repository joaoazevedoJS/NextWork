import Knex from 'knex'

export function up(knex: Knex) {
  return knex.schema.createTable('techs_Publications', table => {
    table.increments('id').primary().unique()
    
    table.integer('publication_id')
      .notNullable()
      .references('id').inTable('publications')
    
    table.integer('techs_id')
      .notNullable()
      .references('id').inTable('techs')
  })
}

export function down(knex: Knex) {
  return knex.schema.dropTable('techs_Publications')
}