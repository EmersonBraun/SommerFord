export const module = 'project_types'
export const title = 'ProjectTypes'

export type ProjectType = {
  id?: number
  project_type: string
}

export const columns = [
  { name: 'Project Types', label: 'Project Types', field: 'project_type', sortable: true },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export const fields = [
  'project_type',
]