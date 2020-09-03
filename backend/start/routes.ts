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
  Route.resource('users','UsersController').apiOnly()
  Route.resource('services','ServicesController').apiOnly()
  Route.resource('groups','GroupsController').apiOnly()
  Route.resource('project-types','ProjectTypesController').apiOnly()
  Route.resource('projects','ProjectsController').apiOnly()
  Route.resource('dev-types','DevTypesController').apiOnly()
  Route.resource('clients','ClientsController').apiOnly()
  Route.resource('phones','PhonesController').apiOnly()
  Route.resource('payments','PaymentsController').apiOnly()
  Route.resource('payment-statuses','PaymentStatusesController').apiOnly()
  Route.resource('modules','ModulesController').apiOnly()
}).prefix('api')
