import Modal from './modal'
import ModalBody from './modalBody'
import ModalFooter from './modalFooter'
import * as Nerv from 'nervjs'
import { VNode } from 'nerv-shared'
//
Modal.body  = ModalBody
Modal.footer = ModalFooter

// preset
Modal.alert = function (config) {
  return new Promise((resolve, reject) => {
    const $el = document.createElement('div')
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
        willUnmount={() => {
          document.removeChild($el)
        }}>
        {}
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={false} />
      </Modal>
    )

    Nerv.render(modal as VNode, $el)
    document.body.appendChild($el)
  })
}
Modal.confirm = function (config) {
  const $el = document.createElement('div')
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
        willUnmount={() => {
          document.removeChild($el)
        }}>
        {}
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={false} />
      </Modal>
    )
    Nerv.render(modal as VNode, $el)
    document.body.appendChild($el)
  })
}
Modal.prompt = function (config) {
  const $el = document.createElement('div')
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
          // reject()
          if (onCancel instanceof Function) {
            onCancel()
          }
        }}
        willUnmount={() => {
          document.removeChild($el)
        }}>
        {}
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={false} />
      </Modal>
    )
    Nerv.render(modal as VNode, $el)
    document.body.appendChild($el)
  })
}
Modal.info = function (config) {
  const $el = document.createElement('div')
  return new Promise((resolve, reject) => {
    const { title = '信息', content, onConfirm, onCancel } = config
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
          // reject()
          if (onCancel instanceof Function) {
            onCancel()
          }
        }}
        willUnmount={() => {
          document.removeChild($el)
        }}>
        {}
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={false} />
      </Modal>
    )
    Nerv.render(modal as VNode, $el)
    document.body.appendChild($el)
  })
}
Modal.success = function (config) {
  const $el = document.createElement('div')
  return new Promise((resolve, reject) => {
    const { title = '成功', content, onConfirm, onCancel } = config
    const modal = (
      <Modal
        value={true}
        title={title}
        type={'success'}
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
        willUnmount={() => {
          document.removeChild($el)
        }}>
        {}
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={false} />
      </Modal>
    )
    Nerv.render(modal as VNode, $el)
    document.body.appendChild($el)
  })
}
Modal.warning = function (config) {
  const $el = document.createElement('div')
  return new Promise((resolve, reject) => {
    const { title = '警告', content, onConfirm, onCancel } = config
    const modal = (
      <Modal
        value={true}
        title={title}
        type={'warning'}
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
        willUnmount={() => {
          document.removeChild($el)
        }}>
        {}
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={false} />
      </Modal>
    )
    Nerv.render(modal as VNode, $el)
    document.body.appendChild($el)
  })
}
Modal.error = function (config) {
  const $el = document.createElement('div')
  return new Promise((resolve, reject) => {
    const { title = '错误', content, onConfirm, onCancel } = config
    const modal = (
      <Modal
        value={true}
        title={title}
        type={'error'}
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
        willUnmount={() => {
          document.removeChild($el)
        }}>
        {}
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={false} />
      </Modal>
    )
    Nerv.render(modal as VNode, $el)
    document.body.appendChild($el)
  })
}

export default Modal
