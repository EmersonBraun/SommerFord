/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.group(() => {
  Route.get('clients/count','ClientsController.count')
  Route.resource('clients','ClientsController').apiOnly()
  Route.resource('dev-types','DevTypesController').apiOnly()
  Route.get('fields/:id/modules','FieldsController.moduleList')
  Route.resource('fields','FieldsController').apiOnly()
  Route.post('groups/:id/services','GroupsController.servicesSync')
  Route.get('groups/:id/services','GroupsController.servicesGet')
  Route.resource('groups','GroupsController').apiOnly()
  Route.get('manies/:id/modules','ManiesController.moduleList')
  Route.resource('manies','ManiesController').apiOnly()
  Route.get('modules/count','ModulesController.count')
  Route.post('modules/:id/services','ModulesController.servicesSync')
  Route.get('modules/:id/services','ModulesController.servicesGet')
  Route.get('modules/project/:id','ModulesController.project')
  Route.resource('modules','ModulesController').apiOnly()
  Route.get('payments/:id/clients','PaymentsController.clientList')
  Route.resource('payments','PaymentsController').apiOnly()
  Route.resource('payment-statuses','PaymentStatusesController').apiOnly()
  Route.resource('phones','PhonesController').apiOnly()
  Route.get('projects/:id/complete','ProjectsController.complete')
  Route.get('projects/count','ProjectsController.count')
  Route.resource('projects','ProjectsController').apiOnly()
  Route.resource('project-types','ProjectTypesController').apiOnly()
  Route.get('services/count','ServicesController.count')
  Route.resource('services','ServicesController').apiOnly()
  Route.resource('users','UsersController').apiOnly()
}).prefix('api')
