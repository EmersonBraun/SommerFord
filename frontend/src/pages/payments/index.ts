import { get, post, put, deleteData } from 'src/libs/api'
export const module = 'payments'
export const title = 'Payments'

export type Payment = {
  id?: number
  value: number
  date: unknown
  payment_status: number
}

export const columns = [
  { name: 'value', label: 'value', field: 'value', sortable: true },
  { name: 'date', label: 'date', field: 'date' },
  { name: 'status', label: 'status', field: 'status' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export async function getData () {
  const URL = `${module}`
  return await get(URL, true)
}

export async function create (register: Payment) {
  const URL = `${module}`
  return await post(URL, register)
}

export function edit (id: number) {
  window.location.replace(`/${module}/edit/${id}`)
  return true
}

export async function update (id: number, register: Payment) {
  const URL = `${module}/${id}`
  return await put(URL, register)
}

export async function remove (id: number) {
  const URL = `${module}/${id}`
  return await deleteData(URL)
}

