import Nerv from 'nervjs'

import Modal from './modal'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'

Modal.Body = ModalBody
Modal.Footer = ModalFooter

// preset
Modal.alert = (config) => {
  return new Promise((resolve, reject) => {
    const { title, content, callback } = config
    const modal = (
      <Modal
        value
        title={title}
        type={'alert'}
        onConfirm={() => {
          resolve()
          callback && callback()
        }}
      >
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={false} />
      </Modal>
    )
    Nerv.render(modal, document.body)
  })
}
Modal.confirm = (config) => {
  return new Promise((resolve, reject) => {
    const { title, content, onConfirm, onCancel } = config
    const modal = (
      <Modal
        value
        title={title}
        type={'confirm'}
        onConfirm={() => {
          resolve()
          onConfirm && onConfirm()
        }}
        onCancel={() => {
          // reject()
          onCancel && onCancel()
        }}
      >
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel />
      </Modal>
    )
    Nerv.render(modal, document.body)
  })
}
Modal.prompt = (config) => {
  return new Promise((resolve, reject) => {
    const { title = '提示', content, onConfirm, onCancel } = config
    const modal = (
      <Modal
        value
        title={title}
        type={'info'}
        onConfirm={() => {
          resolve()
          if (onConfirm) {
            onConfirm && onConfirm()
          }
        }}
        onCancel={() => {
          reject()
          onCancel && onCancel()
        }}
      >
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel />
      </Modal>
    )
    Nerv.render(modal, document.body)
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
          value
          title={title}
          type={mode}
          onConfirm={() => {
            resolve()
            onConfirm && onConfirm()
          }}
          onCancel={() => {
            // reject()
            onCancel && onCancel()
          }}
        >
          <ModalBody>{content}</ModalBody>
          <ModalFooter showCancel={false} />
        </Modal>
      )
      Nerv.render(modal, document.body)
    })
  }
})

export default Modal
