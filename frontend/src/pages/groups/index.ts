import { get, post, put, deleteData } from 'src/libs/api'
export const module = 'groups'
export const title = 'Groups'

export type Group = {
  id?: number
  group: string
}

export const columns = [
  { name: 'group', label: 'group', field: 'group', sortable: true },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export async function getData () {
  const URL = `${module}`
  return await get(URL, true)
}

export async function create (register: Group) {
  const URL = `${module}`
  return await post(URL, register)
}

export function edit (id: number) {
  window.location.replace(`/${module}/edit/${id}`)
  return true
}

export async function update (id: number, register: Group) {
  const URL = `${module}/${id}`
  return await post(URL, register)
}

export async function remove (id: number) {
  const URL = `${module}/${id}`
  return await deleteData(URL)
}


