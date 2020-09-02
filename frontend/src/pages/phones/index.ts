import { get, post, put, deleteData } from 'src/libs/api'
export const module = 'phones'
export const title = 'Phones'

export type Phone = {
  id: number
  phone: string
  whatsapp: boolean
}

export const columns = [
  { name: 'phone', label: 'phone', field: 'phone', sortable: true },
  { name: 'whatsapp', label: 'whatsapp', field: 'whatsapp' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export async function getData () {
  const URL = `${module}`
  return await get(URL, true)
}

export async function create (register: Phone) {
  const URL = `${module}`
  return await post(URL, register)
}

export function edit (id: number) {
  window.location.replace(`/${module}/edit/${id}`)
  return true
}

export async function update (id: number, register: Phone) {
  const URL = `${module}/${id}`
  return await post(URL, register)
}

export async function remove (id: number) {
  const URL = `${module}/${id}`
  return await deleteData(URL)
}


