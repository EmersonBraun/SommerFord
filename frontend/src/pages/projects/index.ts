export const module = 'projects'
export const title = 'Projects'

export type Project = {
  id?: number
  name: string
  visual_identity: boolean
  competitor: string
  project_type: string
  dev_type: string
  client_id: number
  start_date: unknown
  end_date: unknown
}

export const columns = [
  { name: 'name', label: 'Name', field: 'name', sortable: true },
  { name: 'visual_identity', label: 'visual_identity', field: 'visual_identity', sortable: true, format: val => val ? 'Yes' : 'No', },
  { name: 'competitor', label: 'competitor', field: 'competitor', sortable: true },
  { name: 'project_type', label: 'project_type', field: 'project_type', sortable: true },
  { name: 'dev_type', label: 'dev_type', field: 'dev_type', sortable: true },
  // { name: 'client_id', label: 'client_id', field: 'client_id', sortable: true },
  { name: 'start_date', label: 'start_date', field: 'start_date', sortable: true },
  { name: 'end_date', label: 'end_date', field: 'end_date', sortable: true },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export const fields = [
  'name',
  'competitor',
  'project_type',
  'dev_type',
  'client_id',
  'start_date',
]
