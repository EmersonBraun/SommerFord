import { get, post, put, deleteData } from 'src/libs/api'
export const module = 'project_types'
export const title = 'ProjectTypes'

export type ProjectType = {
  id?: number
  project_type: string
}

export const columns = [
  { name: 'project_type', label: 'project_type', field: 'project_type', sortable: true },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

export async function getData () {
  const URL = `${module}`
  return await get(URL, true)
}

export async function create (register: ProjectType) {
  const URL = `${module}`
  return await post(URL, register)
}

export function edit (id: number) {
  window.location.replace(`/${module}/edit/${id}`)
  return true
}

export async function update (id: number, register: ProjectType) {
  const URL = `${module}/${id}`
  return await post(URL, register)
}

export async function remove (id: number) {
  const URL = `${module}/${id}`
  return await deleteData(URL)
}


