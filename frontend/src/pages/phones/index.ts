export const module = 'phones'
export const title = 'Phones'

export type Phone = {
  id: number
  phone: string
  whatsapp: boolean
  client_id: number
}

export const columns = [
  { name: 'phone', label: 'phone', field: 'phone', sortable: true },
  { name: 'whatsapp', label: 'whatsapp', field: 'whatsapp' },
  // { name: 'client_id', label: 'client_id', field: 'client_id' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export const fields = [
  'phone',
  'whatsapp',
  'client_id',
]