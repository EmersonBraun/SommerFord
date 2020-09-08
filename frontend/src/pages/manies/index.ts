export const module = 'manies'
export const title = 'Manies'

export type Many = {
  id?: number
  model_name: string
  table_name: string
  pivot_table_name: string
  origin: string
  foreign: string
  module_id: number
}

export const columns = [
  { name: 'model_name', label: 'model_name', field: 'model_name', sortable: true },
  { name: 'table_name', label: 'table_name', field: 'table_name', sortable: true },
  { name: 'pivot_table_name', label: 'pivot_table_name', field: 'pivot_table_name', sortable: true },
  { name: 'origin', label: 'origin', field: 'origin', sortable: true },
  { name: 'foreign', label: 'foreign', field: 'foreign', sortable: true },
  { name: 'module_id', label: 'module_id', field: 'module_id', sortable: true },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export const fields = ['model_name', 'table_name', 'pivot_table_name', 'origin', 'foreign', 'module_id']
