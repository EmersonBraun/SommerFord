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

export const fields = [
  'payment_status',
]