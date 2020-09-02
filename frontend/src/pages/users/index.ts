import { get, post, put, deleteData } from 'src/libs/api'
export const module = 'users'
export const title = 'Users'

export type User = {
  id?: number
  name: string
  email: string
  password: string
  is_admin: boolean
}

export const columns = [
  { name: 'name', label: 'Name', field: 'name', sortable: true },
  { name: 'email', label: 'email', field: 'email' },
  { name: 'is_admin', label: 'is_admin', field: 'is_admin' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export async function getData () {
  const URL = `${module}`
  return await get(URL, true)
}

export async function create (register: User) {
  const URL = `${module}`
  return await post(URL, register)
}

export function edit (id: number) {
  window.location.replace(`/${module}/edit/${id}`)
  return true
}

export async function update (id: number, register: User) {
  const URL = `${module}/${id}`
  return await post(URL, register)
}

export async function remove (id: number) {
  const URL = `${module}/${id}`
  return await deleteData(URL)
}


