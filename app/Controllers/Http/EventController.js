'use strict'

class EventController {
  index({ view }) {
    return view.render('event.index')
  }
}

module.exports = EventController