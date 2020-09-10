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
  Route.resource('fields','FieldsController').apiOnly()
  Route.resource('groups','GroupsController').apiOnly()
  Route.resource('manies','ManiesController').apiOnly()
  Route.get('modules/count','ModulesController.count')
  Route.get('modules/project/:id','ModulesController.project')
  Route.resource('modules','ModulesController').apiOnly()
  Route.resource('payments','PaymentsController').apiOnly()
  Route.resource('payment-statuses','PaymentStatusesController').apiOnly()
  Route.resource('phones','PhonesController').apiOnly()
  Route.get('projects/count','ProjectsController.count')
  Route.resource('projects','ProjectsController').apiOnly()
  Route.resource('project-types','ProjectTypesController').apiOnly()
  Route.resource('relations','RelationsController').apiOnly()
  Route.get('services/count','ServicesController.count')
  Route.resource('services','ServicesController').apiOnly()
  Route.resource('users','UsersController').apiOnly()
}).prefix('api')
