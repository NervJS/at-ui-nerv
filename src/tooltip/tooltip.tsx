import { calculatePosition } from '../utils/util'
import classnames from 'classnames'
import * as Nerv from 'nervjs'

import Component from '../../libs/component'

export interface ToolProps {
  className?: string
  type?: string
  content?: string
  placement?: string
  tipstyle?
  onDragLeave?
  onDragOver?
  onDrop?
  onMouseOver?
  onMouseEnter?
  onMouseOut?
  onMouseLeave?
  onClick?
}

class Tooltip extends Component<ToolProps, any> {
  private top: number
  private left: number
  private $trigger: any
  private $tip: any
  constructor (props, context) {
    super(props, context)
    this.state = {
      top: 0,
      left: 0,
      display: 'block'
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.top = 0
    this.left = 0
    this.$trigger = null
    this.$tip = null
  }
  renderTooltipClassNames (props: ToolProps) {
    return classnames('at-tooltip', [], props.className)
  }
  onMouseEnter (e: React.MouseEvent<HTMLDivElement>) {
    this.setState({
      display: 'block',
      top: this.top,
      left: this.left
    })
  }
  onMouseLeave (e: React.MouseEvent<HTMLDivElement>) {
    this.setState({
      display: 'none'
    })
  }
  render () {
    const props = this.props
    let contentSlot: any = null
    Nerv.Children.map(props.children as any, (child) => {
      if (child.props.slot) {
        contentSlot = child.children
      }
    })
    if (!contentSlot) {
      contentSlot = props.content
    }
    let tipstyle = {
      top: `${this.state.top}px`,
      left: `${this.state.left}px`,
      display: this.state.display
    }
    const {
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
    const classname = classnames(
      'at-tooltip__popper',
      [
        props.placement
          ? `at-tooltip--${this.props.placement}`
          : 'at-tooltip--top'
      ],
      'fade-enter-active fade-enter-to',
      this.props.className
    )

    if (props.tipstyle) {
      tipstyle = { ...tipstyle, ...props.tipstyle }
    }
    return (
      <div
        className={this.renderTooltipClassNames(props)}
        {...needProps}
        style={props.style}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <span
          className='at-tooltip__trigger'
          ref={(trigger) => {
            this.$trigger = trigger
          }}
        >
          {this.props.children}
        </span>
        <div
          className={classname}
          ref={(tip) => {
            this.$tip = tip
          }}
          style={tipstyle}
        >
          <div className='at-tooltip__arrow' />
          <div className='at-tooltip__content'>
            <div>{contentSlot}</div>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount () {
    const trigger = this.$trigger
    const popover = this.$tip
    const position = calculatePosition(
      this.props.placement,
      trigger,
      popover
    )
    this.top = position.top
    this.left = position.left
    this.setState({
      display: 'none'
    })
  }
}

export default Tooltip
