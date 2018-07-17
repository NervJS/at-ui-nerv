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
    return classnames('at-timeline', props.className)
  }
  render () {
    let classNames= this.renderTimelineClassNames(this.props)
    let {children} = this.props
    let count = Nerv.Children.count(children as any)
    Nerv.Children.forEach(children as any,(child,index)=>{
      if(count - 1 == index) {
        child.props.classFromParent = ' at-timeline__item--last '
      }
    },null)
    return (
      <div className={classNames}>
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
