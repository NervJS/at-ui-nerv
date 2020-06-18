import * as Nerv from 'nervjs'
import classnames from 'classnames'
import Component from '../../libs/component'
export interface ProgressProps {
  className?: string,
  pending?: boolean,
  percent?: string | number,
  status?: string,
  onDragLeave?,
  onDragOver?,
  onDrop?,
  onMouseOver?,
  onMouseEnter?,
  onMouseOut?,
  onMouseLeave?,
  onClick?,
  strokeWidth?
  onStatusSuccess?
}

class Progress extends Component<ProgressProps, any> {
  renderProgressClassNames (props: ProgressProps) {
    return classnames('at-progress at-progress--bar', [
      props.percent === 100 ? 'at-progress--success' : '',
      props.status && props.status === 'error' ? 'at-progress--error' : ''
    ]
    , props.className)
  }
  renderText (props) {
    const {percent, status} = props
    if (percent === 100) {
      return <i className='icon icon-check-circle' />
    }
    if (status && status === 'error') {
      return <i className='icon icon-x-circle' />
    }
    return <span>{percent}%</span>
  }
  render () {

    const props = this.props
    const {percent= 0} = props
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
    if (percent >= 100) {
      props.onStatusSuccess && props.onStatusSuccess(percent)
    }
    const barInnerStyle = {
      width: `${percent}%`
    }
    const classnames = this.renderProgressClassNames(props)
    const renderSpecialText = this.renderText(props)
    const barWrapperStyle = {
      height: `${props.strokeWidth || 8}px`
    }
    return (
      <div className={classnames} {...needProps} style={style}>
        <div className='at-progress-bar'>
          <div className='at-progress-bar__wraper' style={barWrapperStyle}>
            <div className='at-progress-bar__inner' style={barInnerStyle} />
          </div>
        </div>
        <div className='at-progress__text'>
          {renderSpecialText}
        </div>
      </div>
    )
  }
}

export default Progress
