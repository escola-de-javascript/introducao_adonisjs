'use strict'

const Event = use('App/Models/Event');

class EventController {
  async index({ view }) {
    const events = await Event.all()
    return view.render('event.index', { events: events.toJSON() })
  }

  create({ view }) {
    return view.render('event.create')
  }

  async store({ request, response }) {
    const eventParams = request.only(['title', 'date', 'description'])
    await Event.create({ ...eventParams })
    return response.route('events.index')
  }
}

module.exports = EventController