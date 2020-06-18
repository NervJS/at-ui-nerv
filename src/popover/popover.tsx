import * as Nerv from 'nervjs'
import classnames from 'classnames'
import Component from '../../libs/component'
import { calculatePosition } from '../utils/util'

type triggerType = 'hover' | 'focus' | 'click'
export interface PopoverProps {
  className?: string
  type?: string
  content?: string
  placement?: string
  title?: string
  trigger?: triggerType
  onDragLeave?
  onDragOver?
  onDrop?
  onMouseOver?
  onMouseEnter?
  onMouseOut?
  onMouseLeave?
  onClick?
}

class Popover extends Component<PopoverProps, any> {
  private top: number
  private left: number
  private enter: boolean
  private $wrapper: any
  private $trigger: any
  private $popper: any
  constructor (props, context) {
    super(props, context)
    this.state = {
      top: 0,
      left: 0,
      display: 'block'
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.clickCancelHandler = this.clickCancelHandler.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)
    this.top = 0
    this.left = 0
    this.enter = false
  }
  renderPopoverClassNames (props: PopoverProps) {
    return classnames('at-popover', [], props.className)
  }
  clickHandler (e: MouseEvent) {
    // e.stopPropagation()
    if (this.enter) {
      this.setState({
        display: 'none'
      })
      this.enter = false
    } else {
      this.setState(
        {
          display: 'block'
        },
        () => {
          const trigger = this.$trigger
          const popover = this.$popper
          const position = calculatePosition(
            this.props.placement,
            trigger,
            popover
          ) || { top: 0, left: 0 }
          this.top = position.top
          this.left = position.left
          this.setState({
            top: this.top,
            left: this.left
          })
        }
      )
      this.enter = true
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
    if (this.state.display === 'block') {
      return
    }

    this.setState(
      {
        display: 'block'
      },
      () => {
        const trigger = this.$trigger
        const popover = this.$popper
        const position = calculatePosition(
          this.props.placement,
          trigger,
          popover
        ) || { top: 0, left: 0 }
        this.top = position.top
        this.left = position.left
        this.setState({
          top: this.top,
          left: this.left
        })
      }
    )
  }
  onMouseLeave (e: MouseEvent) {
    this.setState({
      display: 'none'
    })
  }

  onWindowResize () {
    const trigger = this.$trigger
    const popover = this.$popper
    const position = calculatePosition(
      this.props.placement,
      trigger,
      popover
    ) || { top: 0, left: 0 }
    this.top = position.top
    this.left = position.left
    this.setState({
      top: this.top,
      left: this.left
    })
  }

  render () {
    const props = this.props
    const {
      style,
      onDragLeave,
      onDragOver,
      onDrop,
      onMouseOver,
      onMouseEnter,
      onMouseOut,
      onMouseLeave,
      onClick,
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
    const classname = classnames(
      'at-popover__popper',
      [
        props.placement
          ? `at-popover--${this.props.placement}`
          : 'at-popover--top'
      ],
      'fade-enter-active fade-enter-to',
      this.props.className
    )
    let title: any = null
    let content: any = null
    Nerv.Children.map(
      props.children,
      (child) => {
        if (!child) { return }
        if (typeof child === 'object' && 'props' in child) {
          if (child.props.slot) {
            if (child.props.slot === 'content') {
              content = Nerv.cloneElement(child['children'])
            }
            if (child.props.slot === 'title') {
              title = Nerv.cloneElement(child['children'])
            }
          }
        }
      }
    )
    if (!content && props.content) {
      content = props.content
    }
    if (!title && props.title) {
      title = props.title
    }
    if (title) {
      title = (
        <div className='at-popover__title'>
          <div>{title}</div>
        </div>
      )
    }
    if (content) {
      content = (
        <div className='at-popover__content'>
          <div>{content}</div>
        </div>
      )
    }
    return (
      <div
        // className={this.renderPopoverClassNames(this.props)}
        className={this.className('at-popover')}
        ref={(wrapper) => {
          this.$wrapper = wrapper
        }}
        style={style}
        {...needProps}
      >
        <span
          className='at-popover__trigger'
          style={props.style}
          ref={(trigger) => {
            this.$trigger = trigger
          }}
        >
          {props.children}
        </span>
        <div
          className={classname}
          style={tipstyle}
          ref={(popper) => {
            this.$popper = popper
          }}
        >
          <div className='at-popover__arrow' />
          {title}
          {content}
        </div>
      </div>
    )
  }
  componentDidMount () {
    const trigger = this.$trigger
    const popover = this.$popper
    const position = calculatePosition(
      this.props.placement,
      trigger,
      popover
    ) || { top: 0, left: 0 }
    this.top = position.top
    this.left = position.left

    this.setState({
      display: 'none'
    })
    switch (this.props.trigger) {
      case 'hover':
        this.$wrapper.addEventListener('mouseenter', this.onMouseEnter)
        this.$wrapper.addEventListener('mouseleave', this.onMouseLeave)
        break
      case 'click':
        // window.addEventListener('click', this.clickCancelHandler)
        this.$wrapper.addEventListener('click', this.clickHandler)
        break
      case 'focus':
        this.$wrapper.addEventListener('focus', this.onMouseEnter)
        this.$wrapper.addEventListener('blur', this.onMouseLeave)
        break
      default:
        this.$wrapper.addEventListener('click', this.clickHandler)
        // window.addEventListener('click', this.clickCancelHandler)
        break
    }

    // 增加resize监听
    window.addEventListener('resize', this.onWindowResize)
  }
  componentWillUnmount () {
    switch (this.props.trigger) {
      case 'hover':
        this.$wrapper.removeEventListener('mouseenter', this.onMouseEnter)
        this.$wrapper.removeEventListener('mouseleave', this.onMouseLeave)
        break
      case 'click':
        window.removeEventListener('click', this.clickCancelHandler)
        this.$wrapper.removeEventListener('click', this.clickHandler)
        break
      case 'focus':
        this.$wrapper.removeEventListener('focus', this.onMouseEnter)
        this.$wrapper.removeEventListener('blur', this.onMouseLeave)
        break
      default:
        this.$wrapper.removeEventListener('click', this.clickHandler)
        window.removeEventListener('click', this.clickCancelHandler)
        break
    }
    // 增加resize监听
    window.removeEventListener('resize', this.onWindowResize)
  }
}

export default Popover
