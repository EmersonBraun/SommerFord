import { get, post, put, deleteData } from 'src/libs/api'
export const module = 'clients'
export const title = 'Clients'

export type Client = {
  id?: number
  name: string
  email: string
  role: string
}

export const columns = [
  { name: 'name', label: 'Name', field: 'name', sortable: true },
  { name: 'email', label: 'email', field: 'email' },
  { name: 'role', label: 'role', field: 'role' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export async function getData () {
  const URL = `${module}`
  return await get(URL, true)
}

export async function create (register: Client) {
  const URL = `${module}`
  return await post(URL, register)
}

export function edit (id: number) {
  window.location.replace(`/${module}/edit/${id}`)
  return true
}

export async function update (id: number, register: Client) {
  const URL = `${module}/${id}`
  return await post(URL, register)
}

export async function remove (id: number) {
  const URL = `${module}/${id}`
  return await deleteData(URL)
}


