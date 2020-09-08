export const module = 'clients'
export const title = 'Clients'

export type Client = {
  id?: number
  name: string
  email: string
  role: string
}

export const columns = [
  { name: 'name', label: 'Name', field: 'name', sortable: true },
  { name: 'email', label: 'email', field: 'email' },
  { name: 'role', label: 'role', field: 'role' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export const fields = ['name', 'email', 'role']
