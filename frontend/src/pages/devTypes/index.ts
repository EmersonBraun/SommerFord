export const module = 'dev-types'
export const title = 'Dev Types'

export type DevType = {
  id?: number
  dev_type: string
}

export const columns = [
  { name: 'name', label: 'Name', field: 'name', sortable: true },
  { name: 'dev_type', label: 'dev_type', field: 'dev_type' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export const fields = ['dev_type']
