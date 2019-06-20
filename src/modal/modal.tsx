import * as Nerv from 'nervjs'
import Component from '../../libs/component'
import { CSSTransition } from 'react-transition-group'

import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'

export type ModalFunc<T> = (config: T) => Promise<any>

type ModalAlertConfig = Pick<ModalProps, 'title' | 'content' | 'callback'>
type ModalConfirmConfig = Pick<ModalProps, 'title' | 'content' | 'onConfirm' | 'onCancel'>
type ModalPromptConfig = Pick<ModalProps, 'title' | 'content' | 'onConfirm' | 'onCancel'>
type ModalInfoConfig = Pick<ModalProps, 'title' | 'content' | 'onConfirm' | 'onCancel'>
type ModalSuccessConfig = Pick<ModalProps, 'title' | 'content' | 'onConfirm' | 'onCancel'>
type ModalWarningConfig = Pick<ModalProps, 'title' | 'content' | 'onConfirm' | 'onCancel'>
type ModalErrorConfig = Pick<ModalProps, 'title' | 'content' | 'onConfirm' | 'onCancel'>

export type ModalAlert = ModalFunc<ModalAlertConfig>
export type ModalInfo = ModalFunc<ModalInfoConfig>
export type ModalSuccess = ModalFunc<ModalSuccessConfig>
export type ModalError = ModalFunc<ModalErrorConfig>
export type ModalWarning = ModalFunc<ModalWarningConfig>
export type ModalConfirm = ModalFunc<ModalConfirmConfig>
export type ModalPrompt = ModalFunc<ModalPromptConfig>

export interface ModalProps {
  title?: string
  content?: string
  value?: boolean
  cancelText?: string
  okText?: string
  maskClosable?: string
  showHead?: boolean
  showClose?: boolean
  showFooter?: boolean
  showInput?: boolean
  width?: number | string
  closeOnPressEsc?: boolean
  type?: string
  modalClass?
  modalStyle?
  willUnmount?: () => void
  onConfirm?: () => void
  callback?: () => void
  onCancel?: () => void
}

export interface ModalState {
  wrapShow: boolean
  showCancelButton: boolean
  showConfirmButton: boolean
  action: string
  inputValue: any
  inputPlaceholder: string
  callback: null
  visible: boolean
}

class Modal extends Component<ModalProps, ModalState> {
  static body: typeof ModalBody
  static footer: typeof ModalFooter
  static alert: ModalAlert
  static info: ModalInfo
  static success: ModalSuccess
  static error: ModalError
  static warning: ModalWarning
  static confirm: ModalConfirm
  static prompt: ModalPrompt

  static defaultProps = {
    value: false,
    maskClosable: true,
    showHead: true,
    showClose: true,
    showFooter: true,
    showInput: true,
    width: 520,
    closeOnPressEsc: true,
    type: 'info'
  }
  displayName: 'AtModal'
  constructor (...args) {
    super(...args)
    this.state = {
      wrapShow: false,
      showCancelButton: true,
      showConfirmButton: true,
      action: '',
      inputValue: null,
      inputPlaceholder: '',
      callback: null,
      visible: false
    }
  }
  componentDidMount () {
    const { value } = this.props
    if (value) {
      this.setState({
        visible: true
      })
    }
  }
  componentWillReceiveProps (nextProps) {
    const { value } = nextProps
    const { visible } = this.state
    if (value !== visible) {
      this.setState({
        visible: value
      })
    }
  }

  handleMaskClick = (evt) => {
    const { maskClosable } = this.props
    const target = evt.target
    if (maskClosable && target.className === 'at-modal__wrapper') {
      this.closeBtnHandle()
    }
  }
  closeBtnHandle = () => {
    const { onCancel } = this.props
    this.close()
    if (onCancel instanceof Function) {
      onCancel()
    }
  }

  close = () => {
    this.setState({
      visible: false
    })
  }
  // afterclose = () => {
  //   this.setState({
  //     wrapShow: false
  //   })
  //   Nerv.unmountComponentAtNode(document.body)
  // }
  componentWillUnmount () {
    const { willUnmount } = this.props
    if (willUnmount instanceof Function) {
      willUnmount()
    }
  }

  enhanceChildren = () => {
    const { children, onConfirm, onCancel, cancelText, okText } = this.props
    return Nerv.Children.map(
      children,
      (child, index) => {
        if (!child) { return }
        if (typeof child === 'object' && 'props' in child) {
          const { props: oProps = {} } = child
          const {
            onCancel: oonCancel = () => {},
            onConfirm: oonConfirm = () => {}
          } = oProps
          const name = child['name']
          const newProps = {}
          switch (name) {
            case 'ModalBody':
              Object.assign(newProps)
              break
            case 'ModalFooter':
              Object.assign(newProps, {
                cancelText,
                okText
              })
              break
            default:
              return child
          }
          return Nerv.cloneElement(child, {
            ...oProps,
            ...newProps,
            onCancel: () => {
              this.close()
              if (onCancel instanceof Function) {
                onCancel()
              }
              if (oonCancel instanceof Function) {
                oonCancel()
              }
            },
            onConfirm: () => {
              this.close()
              if (onConfirm instanceof Function) {
                onConfirm()
              }
              if (oonConfirm instanceof Function) {
                oonConfirm()
              }
            }
          })
        }
      }
    )
  }

  render () {
    const { modalClass, type, modalStyle, title, showClose, width } = this.props
    const { visible } = this.state
    const classArr = {
      success: 'icon-check-circle',
      error: 'icon-x-circle',
      warning: 'icon-alert-circle',
      info: 'icon-info'
    }
    const iconClass = classArr[type as never] || ''
    const isIconType = (() => {
      return ['success', 'error', 'warning', 'info'].indexOf(type as never) > -1
    })()
    return Nerv.createPortal(
      (
        <div>
          <CSSTransition
            classNames={{
              enter: 'fade-enter',
              enterActive: 'fade-enter-active',
              exit: 'fade-leave',
              exitActive: 'fade-leave-active'
            }}
            in={visible}
            timeout={300}
            // onEntered={this.enter}
            // onExited={this.afterclose}
            mountOnEnter
            unmountOnExit
          >
            <div className={this.className('at-modal__container')}>
              <div className={'at-modal__mask'} onClick={this.close} />
              <div
                className={this.classnames('at-modal__wrapper', {
                  'at-modal--hidden': false,
                  'at-modal--confirm': isIconType,
                  [`at-modal--confirm-${type}`]: isIconType
                })}
                onClick={this.handleMaskClick}
              >
                <div
                  className={this.classnames('at-modal', modalClass)}
                  style={{ width: `${width}px`, ...modalStyle }}
                >
                  {title ? (
                    <div className={'at-modal__header'}>
                      <div className='at-modal__title'>{title}</div>
                    </div>
                  ) : null}
                  {this.enhanceChildren()}
                  <i
                    className={this.classnames(
                      'icon at-modal__icon',
                      iconClass
                    )}
                  />
                  {showClose ? (
                    <span
                      className='at-modal__close'
                      onClick={this.closeBtnHandle}
                    >
                      <i className='icon icon-x' />
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      ) as any,
      document.body
    )
  }
}

export default Modal
