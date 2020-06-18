import classnames from 'classnames'
import * as Nerv from 'nervjs'

import Component from '../../libs/component'
import TimelineItem from './timeline-item'

export interface TimelineProps {
  className?: string,
  pending?: boolean,
  onDragLeave?
  onDragOver?
  onDrop?
  onMouseOver?
  onMouseEnter?
  onMouseOut?
  onMouseLeave?
  onClick?
}

class Timeline extends Component<TimelineProps, any> {
  static Item: typeof TimelineItem
  renderTimelineClassNames (props: TimelineProps) {
    return classnames('at-timeline', [
      props.pending ?  'at-timeline--pending' : ''
    ], props.className)
  }
  render () {
    const classNames = this.renderTimelineClassNames(this.props)
    const {children} = this.props
    const {
      style,
      onDragLeave, onDragOver, onDrop, onMouseOver, onMouseEnter, onMouseOut, onMouseLeave, onClick
      } = this.props
    const needProps = {
      onDragLeave,
      onDragOver,
      onDrop,
      onMouseOver,
      onMouseOut,
      onMouseEnter,
      onMouseLeave,
      onClick
      }
    const count = Nerv.Children.count(children as any)
    Nerv.Children.forEach(children as any, (child, index) => {
      if (this.props.pending) {
        if (count - 2 === index) {
          child.props.classFromParent = ' at-timeline__item--last '
        }
        if (count - 1 === index) {
          child.props.classFromParent = ' at-timeline__item--pending '
        }
      } else {
        if (count - 1 === index) {
          child.props.classFromParent = ' at-timeline__item--last '
        }
      }
    })
    return (
      <div className={classNames} style={style} {...needProps}>
        {this.props.children}
      </div>
    )
  }
}

export default Timeline
