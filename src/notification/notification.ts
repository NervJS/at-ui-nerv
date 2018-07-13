import * as Nerv from 'nervjs'
import NotificationElem from './notificationElem'
import { VNode } from 'nerv-shared'

interface OptionsContent {
  type?: string
  title?: string
  message?: string
  duration?: number
  icon?: string
  onClose?: () => void
}

interface NotificationInterface {
  (options: OptionsContent): void
  close?: (id: string, customCloseFunc: (a: VNode) => void) => void
  closeAll?: () => void
}

const noticeType = ['success', 'error', 'warning', 'info']
const instances: VNode[] = []
let seed = 1
let zindexSeed = 1010

const Notification: NotificationInterface = (options) => {
  const onClose = options.onClose
  const id = `notification_${seed++}`
  const container = document.createElement('div')
  document.body.appendChild(container)
  options.onClose = function () {
    (Notification as any).close(id, onClose)
    Nerv.unmountComponentAtNode(container)
    document.body.removeChild(container)
  }

  const instance = Nerv.createElement(NotificationElem, {
    ...options
  })

  instance['id'] = id

  Nerv.render(instance as any, container)
  instance.dom.style.zIndex = zindexSeed++

  const offset = 0
  let topDist = offset

  for (let i = 0, len = instances.length; i < len; i++) {
    topDist += (instances[i] as any).dom.offsetHeight + 8
  }

  topDist += 16
  instance.dom.style.top = `${topDist}px`
  instances.push(instance as VNode)

  return instance
}

Notification.close = function (id, onClose) {
  const len = instances.length
  let index
  let removedHeight
  let i = 0
  for (i = 0; i < len; i++) {
    if (id === (instances[i] as any).id) {
      if (typeof onClose === 'function') {
        onClose(instances[i])
      }
      index = i

      removedHeight = (instances[i] as any).dom.offsetHeight
      instances.splice(i, 1)
      break
    }
  }
  if (len > 1) {
    for (i = index; i < len - 1; i++) {
      (instances[i].dom as HTMLElement).style.top = `${parseInt((instances[i].dom as HTMLElement).style.top as never) -
        removedHeight -
        16}px`
    }
  }
}

noticeType.forEach((type) => {
  Notification[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }

    options.type = type
    return Notification(options)
  }
})

export default Notification
