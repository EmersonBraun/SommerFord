import pluralize from 'pluralize'
import { camelCase, pascalCase, snakeCase } from 'change-case'

export function toKebabCase (str= ''): string {
  const cleaned = snakeCase(str)
  return cleaned.replace('_','-')
}

export function toKebabCasePlural (str= ''): string {
  const cleaned = snakeCase(pluralize(str))
  return cleaned.replace('_','-')
}

export function toSnakeCase (str = '') {
  return snakeCase(str)
}

export function toSnakeCasePlural (str = '') {
  return snakeCase(pluralize(str))
}

export function toCamelCase (str = '') {
  return camelCase(str)
}

export function toCamelCasePlural (str = '') {
  return camelCase(pluralize(str));
}

export function toPascalCase (str = '') {
  return pascalCase(str)
}

export function toPascalCasePlural (str = '') {
  return pascalCase(pluralize(str));
}
