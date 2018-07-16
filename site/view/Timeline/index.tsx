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
    return (
      <div className='select_example'>
        <div style='display:inline-block;margin:20px;min-height:200px;border:1px solid grey;'>
          基础状态
          <TimelineItem value='1'>深圳</TimelineItem>
          {/* <Timeline style='width:100px'>
            <TimelineItem value='1'>深圳</TimelineItem>
            <TimelineItem value='2'>广州</TimelineItem>
            <TimelineItem value='3'>上海</TimelineItem>
            <TimelineItem value='4'>北京</TimelineItem>
            <TimelineItem value='5'>成都</TimelineItem>
          </Timeline> */}
        </div>
      </div>
    )
  }
}

export default SelectExample
