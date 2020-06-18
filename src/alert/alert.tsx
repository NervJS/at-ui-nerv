import * as Nerv from 'nervjs'
import { CSSTransition } from 'react-transition-group'
import Component from '../../libs/component'

export interface AlertProps {
  type?: string
  message?: string
  description?: string
  closable?: boolean
  showIcon?: boolean
  icon?: string
  closeText?: string
  onClose?: Function
}

export interface AlertState {
  isShow: boolean
  isExited: boolean
}

class Alert extends Component<AlertProps, AlertState> {
  static defaultProps = {
    type: 'info',
    message: '',
    closable: false,
    showIcon: false,
    icon: 'info'
  }
  constructor (...args) {
    super(...args)
    this.state = {
      isShow: true,
      isExited: false
    }
  }
  onCloseHandle = () => {
    const { onClose } = this.props
    this.setState({
      isShow: false
    })
    if (onClose) {
      onClose()
    }
  }
  render () {
    const {
      closable,
      icon,
      type,
      description,
      showIcon,
      message,
      closeText
    } = this.props
    const { isShow, isExited } = this.state
    const classArr = {
      success: 'icon-check-circle',
      error: 'icon-x-circle',
      warning: 'icon-alert-circle',
      info: 'icon-info'
    }
    const iconClass = classArr[type as string] || (icon as string)
    return (
      <CSSTransition
        classNames={{
          enter: 'fade-enter',
          enterActive: 'fade-enter-active',
          exit: 'fade-leave',
          exitActive: 'fade-leave-active'
        }}
        in={isShow}
        timeout={300}
        onExited={() => {
          this.setState({
            isExited: true
          })
        }}
      >
        <div
          className={this.className('at-alert', {
            [`at-alert--${type}`]: !!type as any,
            'at-alert--with-description': description
          })}
          style={this.style({ display: isExited ? 'none' : '' })}
        >
          {showIcon ? (
            <i className={this.classnames('icon at-alert__icon', iconClass)} />
          ) : (
            ''
          )}

          <div className='at-alert__content'>
            {message ? <p className='at-alert__message'>{message}</p> : ''}
            {description ? (
              <p className='at-alert__description'>{description}</p>
            ) : (
              ''
            )}
          </div>
          <i
            className={this.classnames('icon at-alert__close', {
              'at-alert__close--custom': !!closeText,
              'icon-x': !closeText
            })}
            style={{ display: closable || closeText ? '' : 'none' }}
            onClick={this.onCloseHandle}
          >
            {closeText}
          </i>
        </div>
      </CSSTransition>
    )
  }
}

export default Alert
