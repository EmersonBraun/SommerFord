export const module = 'users'
export const title = 'Users'

export type User = {
  id?: number
  name: string
  email: string
  password: string
  is_admin: boolean
}

export const columns = [
  { name: 'name', label: 'Name', field: 'name', sortable: true },
  { name: 'email', label: 'email', field: 'email' },
  { name: 'is_admin', label: 'is_admin', field: 'is_admin' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export const fields = [
  'name',
  'email',
  'password',
]