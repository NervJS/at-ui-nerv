import * as Nerv from 'nervjs'
import Component from '../../libs/component'
import { CSSTransition } from 'react-transition-group'
import { VNode } from 'nerv-shared'

export type notificationType = 'success' | 'error' | 'warning' | 'info'

interface NotificationElemProps {
  title?: string
  message?: string | VNode
  type: notificationType
  duration: number
  showClose: boolean
  icon?: string
  top?
  onClose: () => void
}

interface NotificationElemState {
  visible: boolean
}

const classArr = {
  success: 'icon-check-circle',
  error: 'icon-x-circle',
  warning: 'icon-alert-circle',
  info: 'icon-info',
  loading: 'icon-loader'
}

class NotificationElem extends Component<NotificationElemProps, NotificationElemState> {
  static defaultProps = {
    type: 'info',
    duration: 4000,
    showClose: true
  }
  timer: any
  constructor (...args) {
    super(...args)
    this.state = {
      visible: false
    }
  }
  componentDidMount () {
    this.setState({ visible: true })
    this.startTimer()
  }
  componentWillUnmount () {
    this.clearTimer()
  }
  onClickHandle = () => {}
  doDestroy = () => {
    const { onClose } = this.props
    if (onClose instanceof Function) {
      onClose()
    }
  }
  startTimer = () => {
    const { duration } = this.props
    if (duration) {
      this.timer = setTimeout(() => {
        this.onCloseHandle()
      }, duration)
    }
  }
  clearTimer = () => {
    clearTimeout(this.timer)
  }
  onCloseHandle = () => {

    this.setState({ visible: false })
  }
  render () {
    const { icon, type, message, showClose, top,  title } = this.props
    const { visible } = this.state

    const iconClass = icon || classArr[type]
    return (
      <CSSTransition in={visible} classNames={'notification-fade'} timeout={300} onExited={this.doDestroy}>
        <div
          className={this.className('at-notification', {
            [`at-notification--${type}`]: type as any,
            'at-notification--with-message': message,
            'at-notification--hover': !showClose
          })}
          style={{ top: top ? top + 'px' : 'auto' }}
          onClick={!showClose ? this.onCloseHandle : () => {}}
          onMouseLeave={this.startTimer}
          onMouseEnter={this.clearTimer}>
          <i className={this.classnames('icon', 'at-notification__icon', iconClass)}  />
          <div className='at-notification__content'>
             <p className='at-notification__title'>{title}</p>
             <p className='at-notification__message'>{message}</p>
          </div>

          {showClose ? <i className='icon icon-x at-notification__close' onClick={this.onCloseHandle} /> : null}
        </div>
      </CSSTransition>
    )
  }
}

export default NotificationElem
