import { get, post, put, deleteData } from 'src/libs/api'
export const module = 'workspaces'
export const title = 'Workspaces'

export type Workspace = {
  id?: number
  workspace: string
  small_title: string
}

export const columns = [
  { name: 'workspace', label: 'workspace', field: 'workspace', sortable: true },
  { name: 'small_title', label: 'small_title', field: 'small_title' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export async function getData () {
  const URL = `${module}`
  return await get(URL, true)
}

export async function create (register: Workspace) {
  const URL = `${module}`
  return await post(URL, register)
}

export function edit (id: number) {
  window.location.replace(`/${module}/edit/${id}`)
  return true
}

export async function update (id: number, register: Workspace) {
  const URL = `${module}/${id}`
  return await post(URL, register)
}

export async function remove (id: number) {
  const URL = `${module}/${id}`
  return await deleteData(URL)
}


