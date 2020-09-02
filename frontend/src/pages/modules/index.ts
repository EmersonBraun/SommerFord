import { get, post, put, deleteData } from 'src/libs/api'
export const module = 'modules'
export const title = 'Modules'

export type Module = {
  id?: number
  name: string
  group_id: number
}

export const columns = [
  { name: 'name', label: 'Name', field: 'name', sortable: true },
  { name: 'group', label: 'group', field: 'group' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export async function getData () {
  const URL = `${module}`
  return await get(URL, true)
}

export async function create (register: Module) {
  const URL = `${module}`
  return await post(URL, register)
}

export function edit (id: number) {
  window.location.replace(`/${module}/edit/${id}`)
  return true
}

export async function update (id: number, register: Module) {
  const URL = `${module}/${id}`
  return await put(URL, register)
}

export async function remove (id: number) {
  const URL = `${module}/${id}`
  return await deleteData(URL)
}


