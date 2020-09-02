import { Loading, LocalStorage } from 'quasar'
import axios, { AxiosResponse } from 'axios'
import PrettyLog from '@emersonbraun/pretty-log/src'
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
  const token = LocalStorage.getItem('token')?.toString
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
function setResponse (response: AxiosResponse<any>, silent: boolean = false) {
  if (response.status === 403) window.location.replace('/')
  if (!silent) showNotify(response)
  return response.data
}

export async function get (URL: string, silent: boolean = true, debug: boolean = false) {
  Loading.show()
  const headers = setHeaders()
  const completeURL = `${baseURL}/${URL}`
  try {
    const response = await axios.get(completeURL, { headers })
    if (debug) PrettyLog.success(`Response: ${completeURL}`, response)
    Loading.hide()
    return setResponse(response, silent)
  } catch (e) {
    PrettyLog.error(`Error to get ${completeURL}`, e)
    Loading.hide()
  }
}

export async function post (URL: string, data: object ,silent: boolean = false, debug: boolean = false) {
  Loading.show()
  const headers = setHeaders()
  const completeURL = `${baseURL}/${URL}`
  try {
    const response = await axios.post(completeURL, data, { headers })
    if (debug) PrettyLog.success(`Response: ${completeURL}`, response)
    Loading.hide()
    return setResponse(response, silent)
  } catch (e) {
    PrettyLog.error(`Error to post ${completeURL}`, e)
    Loading.hide()
  }
}

export async function put (URL: string, data: object ,silent: boolean = false, debug: boolean = false) {
  Loading.show()
  const headers = setHeaders()
  const completeURL = `${baseURL}/${URL}`
  try {
    const response = await axios.put(completeURL, data, { headers })
    if (debug) PrettyLog.success(`Response: ${completeURL}`, response)
    Loading.hide()
    return setResponse(response, silent)
  } catch (e) {
    PrettyLog.error(`Error to put ${completeURL}`, e)
    Loading.hide()
  }
}

export async function deleteData (URL: string, silent: boolean = false, debug: boolean = false) {
  Loading.show()
  const headers = setHeaders()
  const completeURL = `${baseURL}/${URL}`
  try {
    const response = await axios.delete(completeURL, { headers })
    if (debug) PrettyLog.success(`Response: ${completeURL}`, response)
    Loading.hide()
    return setResponse(response, silent)
  } catch (e) {
    PrettyLog.error(`Error to delete ${completeURL}`, e)
    Loading.hide()
  }
}
