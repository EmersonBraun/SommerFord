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