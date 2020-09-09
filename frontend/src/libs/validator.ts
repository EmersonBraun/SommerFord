/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export function validate (refs: any, fields: string[]) {
  const valid = fields.reduce((prevVal, field: string | number) => {
    const validated = refs[field] ? refs[field].validate() : true
    return prevVal && validated
  }, true)
  return valid
}

export function resetValidation (refs: any, fields: string[]) {
  fields.map(f => { 
    if (refs[f]) refs[f].resetValidation()
  })
  return true
}
