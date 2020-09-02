import { Loading, LocalStorage } from 'quasar'
import axios, { AxiosResponse } from 'axios'
import ntf from './notify.js'

const baseURL = 'localhost:3333/api'

declare type Headers = {
  Accept: string,
  'Content-Type': 'application/json' | 'multipart/form-data',
  Authorization: string | null
}
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: null
} as Headers

function getToken () {
  const token = LocalStorage.getItem('token')
  return token ? `Bearer ${token}` : null
}

function setHeaders (file = false) {
  headers['Content-Type'] = file ? 'multipart/form-data' : 'application/json'
  headers.Authorization = getToken()
  return headers
}

function showNotify (response: { headers: { message: any }; status: number }) {
  if (typeof response.headers.message !== 'undefined') {
    if (response.status < 200 || response.status > 299) {
      ntf.patternNotify(response.headers.message)
    } else {
      ntf.error(response.headers.message)
    }
  }
}
function setResponse (response: AxiosResponse<any>, silent = false) {
  if (response.status === 403) window.location.replace('/')
  if (!silent) showNotify(response)
  return response.data
}

export async function get (URL: string, silent = false, debug = false) {
  Loading.show()
  const headers = setHeaders()
  try {
    const response = await axios.get(`${baseURL}/${URL}`, { headers })
    if (debug) console.log('response: ', response)
    return setResponse(response, silent)
  } catch (e) {
    console.error(e)
  }
  Loading.hide()
}

export async function post (URL: string, data: object ,silent = false, debug = false) {
  Loading.show()
  const headers = setHeaders()
  try {
    const response = await axios.post(`${baseURL}/${URL}`, data,{ headers })
    if (debug) console.log('response: ', response)
    return setResponse(response, silent)
  } catch (e) {
    console.error(e)
  }
  Loading.hide()
}

export async function put (URL: string, data: object ,silent = false, debug = false) {
  Loading.show()
  const headers = setHeaders()
  try {
    const response = await axios.put(`${baseURL}/${URL}`, data, { headers })
    if (debug) console.log('response: ', response)
    return setResponse(response, silent)
  } catch (e) {
    console.error(e)
  }
  Loading.hide()
}

export async function deleteData (URL: string, silent = false, debug = false) {
  Loading.show()
  const headers = setHeaders()
  try {
    const response = await axios.delete(`${baseURL}/${URL}`, { headers })
    if (debug) console.log('response: ', response)
    return setResponse(response, silent)
  } catch (e) {
    console.error(e)
  }
  Loading.hide()
}
