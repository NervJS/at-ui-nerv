import Modal from './modal'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import * as Nerv from 'nervjs'
import { VNode } from 'nerv-shared'
//
Modal.body = ModalBody
Modal.footer = ModalFooter

// preset
Modal.alert = (config) => {
  return new Promise((resolve, reject) => {
    const { title, content, callback } = config
    const modal = (
      <Modal
        value={true}
        title={title}
        type={'alert'}
        onConfirm={() => {
          resolve()
          if (callback instanceof Function) {
            callback()
          }
        }}
      >
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={false} />
      </Modal>
    )
    Nerv.render(modal as VNode, document.body)
  })
}
Modal.confirm = (config) => {
  return new Promise((resolve, reject) => {
    const { title, content, onConfirm, onCancel } = config
    const modal = (
      <Modal
        value={true}
        title={title}
        type={'confirm'}
        onConfirm={() => {
          resolve()
          if (onConfirm instanceof Function) {
            onConfirm()
          }
        }}
        onCancel={() => {
          // reject()
          if (onCancel instanceof Function) {
            onCancel()
          }
        }}
      >
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={true} />
      </Modal>
    )
    Nerv.render(modal as VNode, document.body)
  })
}
Modal.prompt = (config) => {
  return new Promise((resolve, reject) => {
    const { title = '提示', content, onConfirm, onCancel } = config
    const modal = (
      <Modal
        value={true}
        title={title}
        type={'info'}
        onConfirm={() => {
          resolve()
          if (onConfirm instanceof Function) {
            onConfirm()
          }
        }}
        onCancel={() => {
          reject()
          if (onCancel instanceof Function) {
            onCancel()
          }
        }}
      >
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={true} />
      </Modal>
    )
    Nerv.render(modal as VNode, document.body)
  })
}
const modes = {
  info: '信息',
  success: '成功',
  warning: '警告',
  error: '错误'
}
Object.keys(modes).forEach((mode) => {
  const presetTitle = modes[mode]
  Modal[mode] = (config) => {
    return new Promise((resolve, reject) => {
      const { title = presetTitle, content, onConfirm, onCancel } = config
      const modal = (
        <Modal
          value={true}
          title={title}
          type={mode}
          onConfirm={() => {
            resolve()
            if (onConfirm instanceof Function) {
              onConfirm()
            }
          }}
          onCancel={() => {
            // reject()
            if (onCancel instanceof Function) {
              onCancel()
            }
          }}
        >
          <ModalBody>{content}</ModalBody>
          <ModalFooter showCancel={false} />
        </Modal>
      )
      Nerv.render(modal as VNode, document.body)
    })
  }
})

export default Modal
