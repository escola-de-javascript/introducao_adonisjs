'use strict'

const Event = use('App/Models/Event')

class HomeController {
  async index({ view }) {
    const events = await Event.all()
    return view.render('home.index', { events: events.toJSON() })
  }
}

module.exports = HomeController
