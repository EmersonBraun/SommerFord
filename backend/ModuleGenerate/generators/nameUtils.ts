export const toSnakeCase = str => {
  return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_')
}

export const toKebabCase = str => {
  return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-')
}

export const toCamelCase = str => {
  return str.toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
}

export const toPascalCase = str => {
  return str.replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase())
}
