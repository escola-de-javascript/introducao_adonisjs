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

  async edit({ params, view }) {
    const event = await Event.find(params.id)
    return view.render('event.edit', { event: event })
  }

  async update({ params, request, response }) {
    const event = await Event.find(params.id)
    const eventParams = request.only(['title', 'date', 'description'])
    event.merge({ ...eventParams })
    await event.save()
    return response.route('events.index')
  }

  async destroy({ params, response }) {
    const event = await Event.find(params.id)
    await event.delete()
    return response.route('events.index')
  }
}

module.exports = EventController