import * as Nerv from 'nervjs'

import Timeline from '../../../src/timeline'
const TimelineItem = Timeline.Item
class SelectExample extends Nerv.Component<any, any> {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  onChange (e, value) {
    console.log('child', value)
  }
  render () {
    console.log(TimelineItem)
    return (
      <div className='timeline_example'>
        <Timeline>
          <TimelineItem value='1'>深圳</TimelineItem>
          <TimelineItem value='2'>广州</TimelineItem>
          <TimelineItem value='3'>上海</TimelineItem>
          <TimelineItem value='4'>北京</TimelineItem>
          <TimelineItem value='5'>成都</TimelineItem>
        </Timeline>
        <Timeline>
          <TimelineItem color="blue" value='1'>刷牙</TimelineItem>
          <TimelineItem color="green"　value='2'>吃早餐</TimelineItem>
          <TimelineItem color="red"　value='3'>上班</TimelineItem>
          <TimelineItem color="yellow" value='4'>睡觉</TimelineItem>
        </Timeline>
        <Timeline>
          <TimelineItem color="blue">
            <i slot="dot" class="icon icon-github"></i>
            <p>刷牙洗脸</p>
          </TimelineItem>
          <TimelineItem color="green">
            <i slot="dot" class="icon icon-zap"></i>
            <p>吃早餐</p>
          </TimelineItem>
          <TimelineItem color="red">
            <i slot="dot" class="icon icon-award"></i>
            <p>上班</p>
          </TimelineItem>
          <TimelineItem color="yellow">
            <i slot="dot" class="icon icon-watch"></i>
            <p>睡觉</p>
          </TimelineItem>
        </Timeline>
      </div>
    )
  }
}

export default SelectExample
