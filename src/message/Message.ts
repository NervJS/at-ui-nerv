import * as Nerv from 'nervjs'
import MessageElem from './MessageElem'
import { VNode } from 'nerv-shared'

const messageType = ['info', 'success', 'warning', 'error', 'loading']
const defaultType = 'info'
const instances: VNode[] = []
let seed = 1
let zindexSeed = 1010
export type MessageContent = OptionsContent | string
export interface OptionsContent {
  type?: string
  message?: string
  duration: number
  icon?: string
  onClose?: () => void
}
interface MessageInterface {
  (options?: OptionsContent | string): void
  close?: (id: string, customCloseFunc: (a: VNode) => void) => void
  closeAll?: () => void
  info?: (e: any) => void
  success?: (e: any) => void
  warning?: (e: any) => void
  error?: (e: any) => void
}

const Message: MessageInterface = (
  options = { type: 'info', duration: 3000, icon: 'info' }
) => {
  const container = document.createElement('div')
  document.body.appendChild(container)
  if (typeof options === 'string' || Nerv.isValidElement(options)) {
    options = {
      message: options as string,
      type: defaultType,
      duration: 3000,
      icon: 'info'
    }
  }
  const customCloseFunc = options.onClose
  const id = `message_${seed++}`

  options.onClose = () => {
    (Message as any).close(id, customCloseFunc)
    Nerv.unmountComponentAtNode(container)
    document.body.removeChild(container)
  }
  const instance = Nerv.createElement(MessageElem, {
    ...options
  })
  instance['id'] = id

  Nerv.render(instance as any, container)
  instance.dom.style.zIndex = zindexSeed++
  const offset = 0
  const len = instances.length
  let topDist = offset
  for (let i = 0; i < len; i++) {
    topDist += (instances[i] as any).dom.offsetHeight + 8
  }
  topDist += 8
  instance.dom.style.top = `${topDist}px`
  instances.push(instance as VNode)
  return {
    close: () => {
      instance['component'].close()
    }
  }
}

Message.close = (id, customCloseFunc) => {
  const len = instances.length
  let index, removedHeight
  for (let i = 0; i < len; i++) {
    if (id === (instances[i] as any).id) {
      if (typeof customCloseFunc === 'function') {
        customCloseFunc(instances[i])
      }
      index = i
      removedHeight = (instances[i].dom as any).offsetHeight
      instances.splice(i, 1)
      break
    }
  }

  if (len > 1) {
    for (let i = index; i < len - 1; i++) {
      (instances[i].dom as HTMLElement).style.top = `${parseInt(
        (instances[i].dom as any).style.top
      ) -
        removedHeight -
        8}px`
    }
  }
}

Message.closeAll = () => {
  instances.forEach((instance) => {
    instance['close']()
  })
}

messageType.forEach((type) => {
  Message[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    options.icon = options.icon
    return Message(options)
  }
})

export default Message
