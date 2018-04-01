import Modal from './modal'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import * as Nerv from 'nervjs'
import { VNode } from 'nerv-shared'
//
Modal.body = ModalBody
Modal.footer = ModalFooter

// preset
Modal.alert = function (config) {
  return new Promise((resolve, reject) => {
    const { title, content, callback } = config
    const modalBody = Nerv.createElement(ModalBody, {}, content)
    const modalFooter = Nerv.createElement(ModalFooter, { showCancel: false })
    const modal = Nerv.createElement(
      Modal,
      {
        value: true,
        title,
        type: 'alert',
        onConfirm: () => {
          resolve()
          if (callback instanceof Function) { callback() }
        }
      },
      modalBody as VNode,
      modalFooter as VNode
    )
    Nerv.render(modal as VNode, document.body)
  })
}
Modal.confirm = function (config) {
  return new Promise((resolve, reject) => {
    const { title, content, onConfirm, onCancel } = config
    const modalBody = Nerv.createElement(ModalBody, {}, content)
    const modalFooter = Nerv.createElement(ModalFooter, { showCancel: false })
    const modal = Nerv.createElement(
      Modal,
      {
        value: true,
        title,
        type: 'confirm',
        onConfirm: () => {
          resolve()
          if (onConfirm instanceof Function) { onConfirm() }
        },
        onCancel: () => {
          reject()
          if (onCancel instanceof Function) { onCancel() }
        }
      },
      modalBody as VNode,
      modalFooter as VNode
    )
    Nerv.render(modal as VNode, document.body)
  })
}
Modal.prompt = function (config) {}
Modal.info = function (config) {
  return new Promise((resolve, reject) => {
    const { title= '信息', content, onConfirm, onCancel } = config
    const modalBody = Nerv.createElement(ModalBody, {}, content)
    const modalFooter = Nerv.createElement(ModalFooter, { showCancel: false })
    const modal = Nerv.createElement(
      Modal,
      {
        value: true,
        title,
        type: 'info',
        onConfirm: () => {
          resolve()
          if (onConfirm instanceof Function) { onConfirm() }
        },
        onCancel: () => {
          reject()
          if (onCancel instanceof Function) { onCancel() }
        }
      },
      modalBody as VNode,
      modalFooter as VNode
    )
    Nerv.render(modal as VNode, document.body)
  })
}
Modal.success = function (config) {
    return new Promise((resolve, reject) => {
        const { title = '成功', content, onConfirm, onCancel } = config
        const modalBody = Nerv.createElement(ModalBody, {}, content)
        const modalFooter = Nerv.createElement(ModalFooter, { showCancel: false })
        const modal = Nerv.createElement(
          Modal,
          {
            value: true,
            title,
            type: 'success',
            onConfirm: () => {
              resolve()
              if (onConfirm instanceof Function) { onConfirm() }
            },
            onCancel: () => {
              reject()
              if (onCancel instanceof Function) { onCancel() }
            }
          },
          modalBody as VNode,
          modalFooter as VNode
        )
        Nerv.render(modal as VNode, document.body)
      })
}
Modal.warning = function (config) {
    return new Promise((resolve, reject) => {
        const { title = '警告', content, onConfirm, onCancel } = config
        const modalBody = Nerv.createElement(ModalBody, {}, content)
        const modalFooter = Nerv.createElement(ModalFooter, { showCancel: false })
        const modal = Nerv.createElement(
          Modal,
          {
            value: true,
            title,
            type: 'warning',
            onConfirm: () => {
              resolve()
              if (onConfirm instanceof Function) { onConfirm() }
            },
            onCancel: () => {
              reject()
              if (onCancel instanceof Function) { onCancel() }
            }
          },
          modalBody as VNode,
          modalFooter as VNode
        )
        Nerv.render(modal as VNode, document.body)
      })
}
Modal.error = function (config) {
    return new Promise((resolve, reject) => {
        const { title = '错误', content, onConfirm, onCancel } = config
        const modalBody = Nerv.createElement(ModalBody, {}, content)
        const modalFooter = Nerv.createElement(ModalFooter, { showCancel: false })
        const modal = Nerv.createElement(
          Modal,
          {
            value: true,
            title,
            type: 'error',
            onConfirm: () => {
              resolve()
              if (onConfirm instanceof Function) { onConfirm() }
            },
            onCancel: () => {
              reject()
              if (onCancel instanceof Function) { onCancel() }
            }
          },
          modalBody as VNode,
          modalFooter as VNode
        )
        Nerv.render(modal as VNode, document.body)
      })
}

export default Modal
