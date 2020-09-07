import { Notify } from 'quasar'

export function errorNotify (msg: string) {
  Notify.create({
    position: 'top-right',
    message: msg,
    icon: 'error',
    color: 'negative'
  })
}

export function successNotify (msg: string) {
  Notify.create({
    position: 'top-right',
    message: msg,
    icon: 'done',
    color: 'positive'
  })
  return false
}
