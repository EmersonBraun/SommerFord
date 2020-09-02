import { get, post, put, deleteData } from 'src/libs/api'
export const module = 'Services'
export const title = 'Services'

export type Service = {
  id?: number
  service: string
  hour_needed: number
}

export const columns = [
  { name: 'service', label: 'service', field: 'service', sortable: true },
  { name: 'hour_needed', label: 'hour_needed', field: 'hour_needed' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export async function getData () {
  const URL = `${module}`
  return await get(URL, true)
}

export async function create (register: Service) {
  const URL = `${module}`
  return await post(URL, register)
}

export function edit (id: number) {
  window.location.replace(`/${module}/edit/${id}`)
  return true
}

export async function update (id: number, register: Service) {
  const URL = `${module}/${id}`
  return await post(URL, register)
}

export async function remove (id: number) {
  const URL = `${module}/${id}`
  return await deleteData(URL)
}


