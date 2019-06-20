import * as Nerv from 'nervjs'
import classnames from 'classnames'
import { styleStr2Obj } from '../util/util'
import Component from '../../libs/component'
type StatusType = 'wait' | 'process' | 'finish' | 'error'
export interface StepProps {
  className?: string
  type?: string
  title?: string
  description?: string
  icon?: string
  status?: StatusType
  current?: number
  index?: number
  length?
  last?
  onDragLeave?
  onDragOver?
  onDrop?
  onMouseOver?
  onMouseEnter?
  onMouseOut?
  onMouseLeave?
  onClick?
}

class Step extends Component<StepProps, any> {
  constructor (props) {
    super(props)
  }
  renderStepClassNames (props: StepProps) {
    let statusClass: string = ''
    const current = props.current || 0
    const index = props.index || 0
    if (current === index) {
      statusClass = props.status
        ? `at-step--${props.status}`
        : 'at-step--process'
    } else if (current > index) {
      statusClass = 'at-step--finish'
    } else if (current < index) {
      statusClass = 'at-step--wait'
    }
    return classnames('at-step', [statusClass], props.className)
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
    const classNames = this.renderStepClassNames(props)
    const current = props.current || 0
    const index = props.index || 0
    let icon: any = null
    // console.log(props.index)
    if (current <= index) {
      let classname = ''
      if (props.icon) {
        classname = `icon ${props.icon}`
        icon = (
          <div className='at-step__label at-step__icon'>
            <div>
              <i className={classname} />
            </div>
          </div>
        )
      } else {
        icon = (
          <div className='at-step__label'>
            <div className='at-step__order'>{~index ? index + 1 : 0}</div>
          </div>
        )
        if (props.status && current === index) {
          if (props.status === 'error') {
            icon = (
              <div className='at-step__label'>
                <div>
                  <i className='icon icon-x' />
                </div>
              </div>
            )
          } else if (props.status === 'finish') {
            icon = (
              <div className='at-step__label'>
                <div>
                  <i className='icon icon-check' />
                </div>
              </div>
            )
          } else if (props.status === 'wait' || props.status === 'process') {
            icon = (
              <div className='at-step__label'>
                <div className='at-step__order'>{~index ? index + 1 : 0}</div>
              </div>
            )
          }
        }
      }
    } else if (current > index) {
      if (!props.icon) {
        icon = (
          <div className='at-step__label'>
            <div>
              <i className='icon icon-check' />
            </div>
          </div>
        )
      } else {
        const classname = `icon ${props.icon}`
        icon = (
          <div className='at-step__label at-step__icon'>
            <div>
              <i className={classname} />
            </div>
          </div>
        )
      }
    }
    let line: any = null
    if (!props.last) {
      line = <div className='at-step__line' />
    }
    const widthStyle = { width: `${(1 / props.length || 3) * 100}%` }
    let styleComputed: any = {}
    if (typeof style === 'string' || style instanceof String) {
      styleComputed = Object.assign(styleStr2Obj(style), widthStyle)
    } else {
      styleComputed = { ...style, ...widthStyle }
    }
    // console.log('here', style, styleComputed)
    return (
      <div className={classNames} {...needProps} style={styleComputed}>
        {line}
        <div className='at-step__head'>{icon}</div>
        <div className='at-step__main'>
          <div className='at-step__title'>{props.title}</div>
          <div className='at-step__description'>{props.description}</div>
        </div>
      </div>
    )
  }
  componentDidMount () {}
  componentWillReceiveProps (nextProps) {}
}

export default Step
