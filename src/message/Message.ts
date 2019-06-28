import * as Nerv from 'nervjs'
import MessageElem from './MessageElem'

type MessageTypes = 'info' | 'success' | 'warning' | 'error' | 'loading'

const messageType: MessageTypes[] = [
  'info',
  'success',
  'warning',
  'error',
  'loading'
]
const defaultType = 'info'
type Instance = React.ComponentElement<any, MessageElem>
const instances: Instance[] = []
let seed = 1
let zindexSeed = 1010

interface OptionsContent {
  type?: string
  message?: string
  duration: number
  icon?: string
  onClose?: () => void
}
export type MessageContent = OptionsContent | string

interface MessageInterface {
  (options?: OptionsContent | string): void
  close: (id: string, customCloseFunc: (a: Instance) => void) => void
  closeAll: () => void
}

const Message = (
  options: OptionsContent | string = { type: 'info', duration: 3000, icon: 'info' }
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

  Nerv.render(instance as any, container);
  (instance as any).dom.style.zIndex = zindexSeed++
  const offset = 0
  const len = instances.length
  let topDist = offset
  for (let i = 0; i < len; i++) {
    topDist += (instances[i] as any).dom.offsetHeight + 8
  }
  topDist += 8;
  (instance as any).dom.style.top = `${topDist}px`
  instances.push(instance)
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
      removedHeight = ((instances[i] as any).dom as any).offsetHeight
      instances.splice(i, 1)
      break
    }
  }

  if (len > 1) {
    for (let i = index; i < len - 1; i++) {
      (instances[i] as any).dom.style.top = `${parseInt(
        ((instances[i] as any).dom as any).style.top,
        10
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

type MessageStaticFuncs = Record<
  MessageTypes,
  (options: Pick<OptionsContent, Exclude<keyof OptionsContent, 'type'>> | string) => ReturnType<Message>
>

export default Message as any as MessageInterface & MessageStaticFuncs
