import * as Nerv from 'nervjs'

// import Tooltip from '../../../src/tooltip'
import Button from '../../../src/button'
import Popover from '../../../src/popover'
class PopoverExample extends Nerv.Component {
  render () {
    return (
      <div style='margin:160px;'>
        <Popover style='margin-left:200px;color:red;' placement='top' title='Title' content='Top Placement'>
          <Button size='small'>点击</Button>
        </Popover>
        <Popover content='Top Placement' placement='left' title='Title' trigger='click'>
          一段文字
        </Popover>
        <Popover content='Top Placement' title='Title' trigger='hover'>
          一段文字
        </Popover>
        <Popover content='Top Placement' title='Title' trigger='focus'>
          一段文字
        </Popover>
        <Popover trigger="hover" content="Top Placement">
          <Button size="small">Top</Button>
        </Popover>
        <Popover trigger="hover" content="Top Placement" placement="bottom">
          <Button size="small">Bottom</Button>
        </Popover>
        <Popover trigger="hover" content="Top Placement" placement="left">
          <Button size="small">Left</Button>
        </Popover>
        <Popover trigger="hover" content="Top Placement" placement="right">
          <Button size="small">Right</Button>
      </Popover>
      <Popover placement="top" v-model="show">
        <Button size="small">删除</Button>
          <template slot="content">
            <p>这是一段内容，确定删除吗？</p>
            <div style="text-align: right; margin-top: 8px;">
              <Button size="smaller">取消</Button>
              <Button type="primary" size="smaller">确定</Button>
            </div>
          </template>
      </Popover>
      </div>
    )
  }
}

export default PopoverExample
