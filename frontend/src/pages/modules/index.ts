export const module = 'modules'
export const title = 'Modules'

export type Module = {
  id?: number
  name: string
  small_title: string
  model_name: string
  route_name: string 
  start_date: string
  end_date: string
  project_id: number
}

export const columns = [
  { name: 'name', label: 'Name', field: 'name', sortable: true },
  { name: 'project_id', label: 'project_id', field: 'project_id', sortable: true },
  { name: 'model_name', label: 'model_name', field: 'model_name', sortable: true },
  { name: 'route_name', label: 'route_name', field: 'route_name', sortable: true },
  { name: 'start_date', label: 'start_date', field: 'start_date', sortable: true },
  { name: 'end_date', label: 'end_date', field: 'end_date', sortable: true },
  // { name: 'project_id', label: 'project_id', field: 'project_id' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export const fields = [
  'name',
  'model_name',
  'route_name',
  'project_id',
]
