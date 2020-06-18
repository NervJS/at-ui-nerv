import { VNode } from 'nerv-shared'
import * as Nerv from 'nervjs'
import { CSSTransition } from 'react-transition-group'

import Component from '../../libs/component'

interface MessageProps {
  message: string | VNode
  duration: number
  type: string
  onClose: (...args: any[]) => any
  icon
}

interface MessageState {
  visible: boolean
}

class Message extends Component<MessageProps, MessageState> {
  static defaultProps = {
    message: '',
    duration: 3000,
    type: 'info'
  }
  timer: any
  constructor (props, ctx) {
    super(props, ctx)
    this.state = {
      visible: false
    }
  }
  componentDidMount () {
    this.startTimer()
    this.setState({
      visible: true
    })
  }
  componentWillUnmount () {
    this.stopTimer()
  }
  startTimer = () => {
    const { duration } = this.props
    if (duration && duration > 0) {
      this.timer = setTimeout(() => {
        this.close()
      }, duration)
    }
  }
  stopTimer = () => {
    clearTimeout(this.timer)
  }
  close = () => {
    const { onClose } = this.props
    this.setState({
      visible: false
    })

    if (onClose instanceof Function) {
      onClose()
    }
  }
  destroy () {/* TODO  */}
  render () {
    const { message, type, icon } = this.props
    const { visible } = this.state
    const iconClass = (msgtype) => {
      const classArr = {
        success: 'icon-check-circle',
        error: 'icon-x-circle',
        warning: 'icon-alert-circle',
        info: 'icon-info',
        loading: 'icon-loader'
      }
      return classArr[msgtype]
    }
    return (
      <div className='at-message__wrapper'>
        <CSSTransition classNames='move-up' in={visible} onExit={this.destroy} timeout={300}>
          <div className={this.className('at-message', { [`at-message--${type}`]: type as any })}>
            <i className={this.classnames('icon', 'at-message__icon', icon ? icon : iconClass(type))} />
            <span className='at-message__content'>{message}</span>
          </div>
        </CSSTransition>
      </div>
    )
  }
}
export default Message
