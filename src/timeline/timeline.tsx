import * as Nerv from 'nervjs'
import classnames from 'classnames'
import TimelineItem from './timeline-item'
export interface TimelineProps {
  className?: string,
  pending?: boolean,
}

class Timeline extends Nerv.Component<TimelineProps, any> {
  static Item: typeof TimelineItem
  renderTimelineClassNames (props: TimelineProps) {
    return classnames('at-timeline', [], props.className)
  }
  render () {
    // const props = this.props
    // const {
    //   style,
    //   onDragLeave, onDragOver, onDrop, onMouseOver, onMouseEnter, onMouseOut, onMouseLeave, onClick,
    //   children
    //   } = props
    // const needProps = {
    //   children,
    //   onDragLeave,
    //   onDragOver,
    //   onDrop,
    //   onMouseOver,
    //   onMouseOut,
    //   onMouseEnter,
    //   onMouseLeave,
    //   onClick
    //   }
    // const classNames = this.renderTimelineClassNames(props)
    // return (
    //   <div className={classNames}  {...needProps} style={style}>
    //     {props.children}
    //   </div>
    // )
    console.log(this.props.children)
    return (
      <div className='at-timeline'>
        {this.props.children}
      </div>
    )
  }
  componentDidMount () {
  }
  componentWillReceiveProps (nextProps) {
  }
}

export default Timeline
