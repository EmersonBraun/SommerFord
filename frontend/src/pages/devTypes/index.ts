export const module = 'dev-types'
export const title = 'Dev Types'

export type DevType = {
  id?: number
  dev_type: string
}

export const columns = [
  { name: 'Dev Types', label: 'Dev Types', field: 'dev_type' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export const fields = ['dev_type']
