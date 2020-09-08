export const module = 'services'
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

export const fields = [
  'service',
  'hour_needed',
]

