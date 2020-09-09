export const module = 'relations'
export const title = 'Relations'

export type Relation = {
  id?: number
  name: string
  model_name: string
  table_name: string
  field_id: number
  field_type: string
}

export const columns = [
  { name: 'name', label: 'name', field: 'name', sortable: true },
  { name: 'model_name', label: 'model_name', field: 'model_name', sortable: true },
  { name: 'table_name', label: 'table_name', field: 'table_name', sortable: true },
  { name: 'field_type', label: 'field_type', field: 'field_type', sortable: true },
  // { name: 'field_id', label: 'field_id', field: 'field_id', sortable: true },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export const fields = [
  'name',
  'model_name',
  'table_name',
  'field_id',
  'field_type',
]
