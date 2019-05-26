'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventsSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.string('title')
      table.datetime('date')
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = EventsSchema
