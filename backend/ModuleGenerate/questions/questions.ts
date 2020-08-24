import { toSnakeCase } from '../utils/name'
// import { fakerOptions } from './fakerOptions'
import { fieldOptions } from './fieldOptions'

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
    type: 'confirm',
    name: 'isPrimary',
    message: 'Is primary key?',
    initial: false,
  },
  {
    type: 'text',
    name: 'name',
    message: 'Name of field',
    validate: value => !!value || 'Name is required',
    initial: prev => prev ? 'id' : '',
  },
  {
    type: 'select',
    name: 'fieldType',
    message: 'Type of field',
    choices: [...fieldOptions],
    initial: prev => prev === 'id' ? 0 : 1,
  },
  // {
  //   type: 'autocomplete',
  //   name: 'specificType',
  //   message: 'Who is specific type (to fakers)',
  //   choices: [...fakerOptions],
  //   validate: value => !!value || 'Specif type is required',
  // },
  {
    type: 'confirm',
    name: 'isRequired',
    message: 'Is required?',
    initial: true,
  },
  {
    type: 'confirm',
    name: 'isRelationed',
    message: 'Is Relationed?',
    initial: false,
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

export const manyToMany = name => [
  {
    type: 'text',
    name: 'moduleField',
    message: 'field in the module that makes the relation',
    initial: 'id',
    validate: value => !!value || 'Name of model is required',
  },
  {
    type: 'text',
    name: 'modelName',
    message: 'Name of model relationed',
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
    name: 'pivotTable',
    message: 'Name of pivot table that makes the relation',
    initial: prev => name + '_has_' + toSnakeCase(prev),
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

export const proceed = msg => [
  {
    type: 'confirm',
    name: 'continue',
    message: msg,
    initial: true,
  },
]
