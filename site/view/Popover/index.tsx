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
        
      </div>
    )
  }
}

export default PopoverExample
