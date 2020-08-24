import { copyFile } from '../utils/file'

export function createServices () {
  const pathOrigin = '../../ModuleGenerate/stubs/'
  const pathDestiny = 'app/Services/'

  copyFile('CRUD.ts', `${pathOrigin}CRUD.hbs`, `${pathDestiny}CRUD.ts`)
  copyFile('ResponseUtils.ts', `${pathOrigin}ResponseUtils.hbs`, `${pathDestiny}ResponseUtils.ts`)
}
