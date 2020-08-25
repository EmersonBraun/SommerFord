import pluralize from 'pluralize'
import { camelCase, pascalCase, snakeCase } from 'change-case'

export const toKebabCase = str => {
  return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-')
}

export const toSnakeCase = str => snakeCase(str)
export const toCamelCase = str => camelCase(str)
export const toPascalCase = str => pascalCase(str)

export function nameOptions (name) {
  const plural = pluralize(name)
  return {
    camelCase: toCamelCase(name),
    camelCasePlural: toCamelCase(plural),
    kebabCase: toKebabCase(name),
    kebabCasePlural: toKebabCase(plural),
    pascalCase: toPascalCase(name),
    pascalCasePlural: toPascalCase(plural),
    snakeCase: toSnakeCase(name),
    snakeCasePlural: toSnakeCase(plural),
  }
}
