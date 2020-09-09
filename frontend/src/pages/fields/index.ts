export const module = 'fields'
export const title = 'Fields'

export type Field = {
  id?: number
  name: string
  module_id: number
  field_type: string
  required: boolean
  relationed: boolean
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

export const fieldTypes = [
  { label: 'increments', description: 'Adds an auto incrementing column', value: 'increments' },
  { label: 'string', description: 'Adds a string column, defaulting to 255', value: 'string' },
  { label: 'integer', description: 'Adds an integer column', value: 'integer' },
  {
    label: 'bigInteger',
    description: 'for MySQL or PostgreSQL, otherwise is normal integer',
    value: 'bigInteger' },
  { label: 'text', description: 'Adds a text column', value: 'text'
  },
  {
    label: 'float',
    description: 'Adds a float column, precision 8 and scale to 2',
    value: 'float'
  },
  {
    label: 'decimal',
    description: 'Adds a decimal column, precision 8 and scale to 2',
    value: 'decimal'
  },
  { label: 'boolean', description: 'Adds a boolean column', value: 'boolean' },
  { label: 'date', description: 'Adds a date column', value: 'date' },
  { label: 'datetime', description: 'Adds a datetime column', value: 'datetime' },
  { label: 'time', description: 'Adds a time column', value: 'time' },
  { label: 'timestamp', description: 'Adds a timestamp column', value: 'timestamp' }
]
