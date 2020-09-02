import { Notify } from 'quasar'

export default {
  patternNotify (val) {
    var message = val.returnContent
    var icon = ''
    var color = ''
    var ret = false
    if (val.returnType === 'error') {
      ret = false
      icon = 'error'
      color = 'negative'
    } else if (val.returnType === 'warning') {
      ret = false
      icon = 'warning'
      color = 'warning'
    } else if (val.returnType === 'success') {
      ret = true
      icon = 'done'
      color = 'positive'
    }
    Notify.create({
      message: message,
      icon: icon,
      color: color
    })
    return ret
  },
  error (val) {
    Notify.create({
      message: val,
      icon: 'error',
      color: 'negative'
    })
    return false
  },
  success (val) {
    Notify.create({
      message: val,
      icon: 'done',
      color: 'positive'
    })
    return false
  }
}
