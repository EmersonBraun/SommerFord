export const module = 'fields'
export const title = 'Fields'

export type Field = {
  id?: number
  name: string
  module_id: number
  field_type: string
  required: boolean
  relationed: boolean
  relationed_name: string
  relationed_model_name: string
  relationed_table_name: string
}

export const columns = [
  { name: 'name', label: 'Name', field: 'name', sortable: true },
  { name: 'field_type', label: 'field_type', field: 'field_type' },
  { name: 'required', label: 'required', field: 'required' },
  { name: 'relationed', label: 'relationed', field: 'relationed' },
  // { name: 'module_id', label: 'module_id', field: 'module_id' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export const fields = ['name', 'field_type']
