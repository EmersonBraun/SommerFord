import { get, post, put, deleteData } from 'src/libs/api'
export const module = 'payment_statuses'
export const title = 'PaymentStatuss'

export type PaymentStatus = {
  id?: number
  payment_status: string
}

export const columns = [
  { name: 'payment_status', label: 'payment_status', field: 'payment_status', sortable: true },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export async function getData () {
  const URL = `${module}`
  return await get(URL, true)
}

export async function create (register: PaymentStatus) {
  const URL = `${module}`
  return await post(URL, register)
}

export function edit (id: number) {
  window.location.replace(`/${module}/edit/${id}`)
  return true
}

export async function update (id: number, register: PaymentStatus) {
  const URL = `${module}/${id}`
  return await post(URL, register)
}

export async function remove (id: number) {
  const URL = `${module}/${id}`
  return await deleteData(URL)
}


