import Modal from './modal'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import * as Nerv from 'nervjs'
import { VNode } from 'nerv-shared'
//
Modal.body  = ModalBody
Modal.footer = ModalFooter

// preset
Modal.alert = function (config) {
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
        willUnmount={() => {
        }}>
        {}
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={false} />
      </Modal>
    )
    Nerv.render(modal as VNode, document.body)
  })
}
Modal.confirm = function (config) {
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
        }}>
        {}
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={true} />
      </Modal>
    )
    Nerv.render(modal as VNode, document.body)

  })
}
Modal.prompt = function (config) {
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
        willUnmount={() => {

        }}>
        {}
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={true} />
      </Modal>
    )
    Nerv.render(modal as VNode, document.body)

  })
}
Modal.info = function (config) {

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

        }}>
        {}
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={false} />
      </Modal>
    )
    Nerv.render(modal as VNode, document.body)

  })
}
Modal.success = function (config) {
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

        }}>
        {}
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={false} />
      </Modal>
    )
    Nerv.render(modal as VNode, document.body)
  })
}
Modal.warning = function (config) {
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

        }}>
        {}
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={false} />
      </Modal>
    )
    Nerv.render(modal as VNode, document.body)

  })
}
Modal.error = function (config) {

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

        }}>
        {}
        <ModalBody>{content}</ModalBody>
        <ModalFooter showCancel={false} />
      </Modal>
    )
    Nerv.render(modal as VNode, document.body)

  })
}

export default Modal
