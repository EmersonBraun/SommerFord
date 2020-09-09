export const module = 'payments'
export const title = 'Payments'

export type Payment = {
  id?: number
  value: number
  date: unknown
  payment_status: string
  client_id: number
}

export const columns = [
  { name: 'value', label: 'value', field: 'value', sortable: true },
  { name: 'date', label: 'date', field: 'date' },
  { name: 'status', label: 'status', field: 'payment_status' },
  // { name: 'client_id', label: 'client_id', field: 'client_id' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export const fields = [
  'value',
  'date',
  'payment_status',
  'client_id',
]
