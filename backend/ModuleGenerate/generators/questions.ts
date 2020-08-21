import { toSnakeCase } from './nameUtils'
import { fakerOptions } from './fakerOptions'

export const moduleQuestion = [
  {
    type: 'text',
    name: 'moduleName',
    message: 'Name of module',
    validate: value => !!value || 'Name is required',
  },
  // {
  //   type: 'select',
  //   name: 'isSubmodule',
  //   message: 'Is submodule?',
  //   choices: [
  //     { title: 'No', description: 'Pattern folders', value: false },
  //     { title: 'Yes', description: 'ex: foo/bar', value: true },
  //   ],
  //   initial: 0,
  // },
  // {
  //   type: prev => prev ? 'text' : null,
  //   name: 'submodule',
  //   message: 'Put path (ex: /foo or /foo/bar)',
  //   validate: value => !!value || 'Submodule is required',
  // },
]

export const field = [
  {
    type: 'text',
    name: 'name',
    message: 'Name of field',
    validate: value => !!value || 'Name is required',
  },
  {
    type: 'confirm',
    name: 'isPrimary',
    message: 'Is primary key?',
    initial: false,
  },
  {
    type: 'select',
    name: 'fieldType',
    message: 'Type of field',
    choices: [
      { title: 'increments', description: 'Adds an auto incrementing column', value: 'increments' },
      { title: 'string', description: 'Adds a string column, defaulting to 255', value: 'string' },
      { title: 'integer', description: 'Adds an integer column', value: 'integer' },
      { title: 'bigInteger', description: 'for MySQL or PostgreSQL, otherwise is normal integer', value: 'bigInteger' },
      { title: 'text', description: 'Adds a text column', value: 'text' },
      { title: 'float', description: 'Adds a float column, precision 8 and scale to 2', value: 'float' },
      { title: 'decimal', description: 'Adds a decimal column, precision 8 and scale to 2', value: 'decimal' },
      { title: 'boolean', description: 'Adds a boolean column', value: 'boolean' },
      { title: 'date', description: 'Adds a date column', value: 'date' },
      { title: 'datetime', description: 'Adds a datetime column', value: 'datetime' },
      { title: 'time', description: 'Adds a time column', value: 'time' },
      { title: 'timestamp', description: 'Adds a timestamp column', value: 'timestamp' },
    ],
    initial: prev => prev === true ? 0 : 1,
  },
  {
    type: 'autocomplete',
    name: 'specificType',
    message: 'Who is specific type (to fakers)',
    choices: [...fakerOptions],
    validate: value => !!value || 'Specif type is required',
  },
  {
    type: 'confirm',
    name: 'isRequired',
    message: 'Is required?',
    initial: true,
  },
  {
    type: 'select',
    name: 'isRelationed',
    message: 'Is Relationed?',
    choices: [
      { title: 'No', description: 'Only a regular collumn', value: false },
      { title: 'Yes', description: 'Related to other table', value: true },
    ],
    initial: 0,
  },
]

export const relation = [
  {
    type: 'text',
    name: 'modelName',
    message: 'Name of model',
    validate: value => !!value || 'Name of model is required',
  },
  {
    type: 'text',
    name: 'tableName',
    message: 'Name of table',
    validate: value => !!value || 'Name is required',
  },
  {
    type: 'text',
    name: 'relationedField',
    message: 'Name of field that makes the relation',
    initial: 'id',
    validate: value => !!value || 'Name is required',
  },
]

export const manyToMany = module => [
  {
    type: 'text',
    name: 'modelName',
    message: 'Name of model',
    validate: value => !!value || 'Name of model is required',
  },
  {
    type: 'text',
    name: 'relationedField',
    message: 'Name of field that makes the relation',
    initial: 'id',
    validate: value => !!value || 'Name is required',
  },
  {
    type: 'text',
    name: 'tableName',
    message: 'Name of table',
    validate: value => !!value || 'Name is required',
  },
  {
    type: 'text',
    name: 'pivotTable',
    message: 'Name of pivot table that makes the relation',
    initial: prev => toSnakeCase(module) + '_has_' + toSnakeCase(prev),
    validate: value => !!value || 'Name is required',
  },
]

export const proceed = msg => [
  {
    type: 'confirm',
    name: 'continue',
    message: msg,
    initial: true,
  },
]
