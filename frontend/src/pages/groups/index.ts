export const module = 'groups'
export const title = 'Groups'

export type Group = {
  id?: number
  group: string
}

export const columns = [
  { name: 'group', label: 'group', field: 'group', sortable: true },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export const fields = ['group']


