import * as Nerv from 'nervjs'
import classnames from 'classnames'
import {calculatePosition} from '../util/util'

type triggerType = 'hover' | 'focus' | 'click'
export interface PopoverProps {
  className?: string,
  type?: string,
  content?: string,
  placement?: string,
  title?: string,
  trigger?: triggerType,
}

class Popover extends Nerv.Component<PopoverProps, any> {
  private top: number
  private left: number
  private enter: boolean
  constructor (props) {
    super(props)
    this.state = {
        top: 0,
        left: 0,
        display: 'block'
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.clickCancelHandler = this.clickCancelHandler.bind(this)
    this.top = 0
    this.left = 0
    this.enter = false
  }
  clickHandler (e: MouseEvent) {
    e.stopPropagation()
    if (this.enter) {
      console.log(this.enter)
      this.setState({
        display: 'none'
      })
      this.enter = false
    } else {
      console.log(this.enter)
      this.setState({
        display: 'block',
        top: this.top,
        left: this.left
      })
      this.enter = true
      console.log(this.enter)
    }
  }
  clickCancelHandler (e: MouseEvent) {
    if (this.enter) {
      this.setState({
        display: 'none'
      })
      this.enter = false
    }
  }
  onMouseEnter (e: MouseEvent) {
    this.setState({
      display: 'block',
      top: this.top,
      left: this.left
    })
  }
  onMouseLeave (e: MouseEvent) {
    this.setState({
      display: 'none'
    })
  }
  render () {
    const props = this.props
    const {
      style,
      onDragLeave, onDragOver, onDrop, onMouseOver, onMouseEnter, onMouseOut, onMouseLeave, onClick,
      children
      } = props
    const needProps = {
      children,
      onDragLeave,
      onDragOver,
      onDrop,
      onMouseOver,
      onMouseOut,
      onMouseEnter,
      onMouseLeave,
      onClick
      }
    const tipstyle = {
      top: `${this.state.top}px`,
      left: `${this.state.left}px`,
      display: this.state.display
    }
    const classname = classnames('at-popover__popper',
                                [props.placement ? `at-popover--${this.props.placement}` : 'at-popover--top'],
                                this.props.className)
    let title: any = null
    let content: any = null
    Nerv.Children.map(props.children as any, (child) => {
      if (child.props && child.props.slot) {
        if (child.props.slot === 'content') {content = child.children}
        if (child.props.slot === 'title') {title = child.children}
      }
    }, null)
    if (!content && props.content) {
      content = props.content
    }
    if (!title && props.title) {
      title = props.title
    }
    if (props.title) {
      title = (<div className='at-popover__title'>
                <div>{props.title}</div>
              </div>)
    }
    if (props.content) {
      content = (<div className='at-popover__content'>
                  <div>{props.content}</div>
                </div>)
    }
    return (
      <div className='at-popover' ref='wrapper' style={style} {...needProps}>
        <span className='at-popover__trigger' style={props.style} ref='trigger'>
          {props.children}
        </span>
        <div className={classname} style={tipstyle} ref='popper'>
          <div className='at-popover__arrow'></div>
          {title}
          {content}
        </div>
      </div>
    )
  }
  componentDidMount () {
    const trigger = this.refs.trigger
    const popover = this.refs.popper
    const position = calculatePosition(this.props.placement, trigger, popover)
    this.top = position.top
    this.left = position.left
    this.setState({
      display: 'none'
    })
    switch (this.props.trigger) {
      case 'hover':
        this.refs.wrapper.addEventListener('mouseenter', this.onMouseEnter)
        this.refs.wrapper.addEventListener('mouseleave', this.onMouseLeave)
        break
      case 'click':
        window.addEventListener('click', this.clickCancelHandler)
        this.refs.wrapper.addEventListener('click', this.clickHandler)
        break
      case 'focus':
        this.refs.wrapper.addEventListener('focus', this.onMouseEnter)
        this.refs.wrapper.addEventListener('blur', this.onMouseLeave)
        break
      default :
        this.refs.wrapper.addEventListener('click', this.clickHandler)
        window.addEventListener('click', this.clickCancelHandler)
        break
    }
  }
  componentWillUnMount () {
    this.refs.wrapper.removeEventListener(this.props.trigger || 'click', this.onMouseEnter)
  }

}

export default Popover
