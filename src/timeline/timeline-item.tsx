import * as Nerv from 'nervjs'
import classnames from 'classnames'

export interface TimelineItemProps {
  className?: string,
  pending?: boolean,
  classFromParent?: string,
  color?: string,
  value?
}

class TimelineItem extends Nerv.Component<TimelineItemProps, any> {
  renderTimelineItemClassNames (props: TimelineItemProps, withSlot) {
    let colorClass = ''
    switch (props.color) {
      case 'blue':
            colorClass = 'at-timeline__item--default'
            break
      case 'green':
            colorClass = 'at-timeline__item--success'
            break
      case 'red':
            colorClass = 'at-timeline__item--error'
            break
      case 'yellow':
            colorClass = 'at-timeline__item--warning'
            break
      default:
          colorClass = 'at-timeline__item--default'
    }
    return classnames('at-timeline__item', [
      props.classFromParent,
      colorClass,
      withSlot ? 'at-timeline__item--custom' : ''
    ], props.className)
  }
  renderContentAndSlot (props) {
    const children = props.children
    let slot: any
    let content: any
    Nerv.Children.forEach(children, (child) => {
      if (child.props && child.props.slot) {
        slot = child
      } else {
        content = child
      }
    })
    return {
      slot,
      content
    }
  }
  render () {
    const props = this.props
    const {slot, content} = this.renderContentAndSlot(props)
    const classname = this.renderTimelineItemClassNames(props, slot)
    return (
      <div className={classname}>
        <div className='at-timeline__tail' />
        <div className='at-timeline__dot'>
          {slot}
        </div>
        <div className='at-timeline__content'>{content}</div>
      </div>
    )
  }
}

export default TimelineItem
