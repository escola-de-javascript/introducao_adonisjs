'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'HomeController.index').as('home.index')

Route.get('/events', 'EventController.index').as('events.index')
Route.get('/events/create', 'EventController.create').as('events.create')
Route.post('/events', 'EventController.store').as('events.store')
Route.get('/events/:id/edit', 'EventController.edit').as('events.edit')
Route.patch('/events/:id', 'EventController.update').as('events.update')
Route.delete('/events/:id', 'EventController.destroy').as('events.destroy')

Route.patch('/events/:eventId/presence', 'PresenceController.update').as('presences.update')