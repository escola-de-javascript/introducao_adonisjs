'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventsSchema extends Schema {
  up() {
    this.table('events', (table) => {
      table.integer('people_count').defaultTo(0)
    })
  }

  down() {
    this.table('events', (table) => {
      table.dropColumn('people_count')
    })
  }
}

module.exports = EventsSchema