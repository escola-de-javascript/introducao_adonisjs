'use strict'

const Event = use('App/Models/Event')

class PresenceController {
  async update({ params, response }) {
    const event = await Event.find(params.eventId)
    event.people_count += 1
    event.save()
    response.route('home.index')
  }
}

module.exports = PresenceController
