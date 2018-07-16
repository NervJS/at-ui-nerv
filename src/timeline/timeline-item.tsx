import * as Nerv from 'nervjs'
import classnames from 'classnames'

export interface TimelineItemProps {
  className?: string,
  pending?: boolean,
}

class TimelineItem extends Nerv.Component<TimelineItemProps, any> {
  renderTimelineItemClassNames (props: TimelineItemProps) {
    return classnames('icon', [
     
    ], props.className)
  }
  render () {
    const props = this.props
    // const {
    //   // style,
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
    // const classNames = this.renderIconClassNames(props)
    return (
      <div className="at-timeline__item at-timeline__item--default">
        <div className="at-timeline__tail"></div> 
        <div className="at-timeline__dot"></div>
        <div className="at-timeline__content"><p>{props.children}</p></div>
      </div>
    )
  }
  componentDidMount () {
  }
  componentWillReceiveProps (nextProps) {
  }
}

export default TimelineItem
