import * as Nerv from 'nervjs'

import Tooltip from '../../../src/tooltip'
import Button from '../../../src/button'
class TooltipExample extends Nerv.Component {
  render () {
    return (
      <div style=''>
        <div style=''>
          <div className='tooltip_example' style='top:100px;'>

            <div style='padding-left:100px;'>
              <div>
                <Tooltip style='margin:30px;'content='Top Left 提示文字' placement='top-left'><Button>上左</Button></Tooltip>
                <Tooltip style='margin:30px;' content='Top 提示文字' placement='top'><Button>上边</Button></Tooltip>
                <Tooltip style='margin:30px;' content='Top Right 提示文字' placement='top-right'><Button>上右</Button></Tooltip>
              </div>
            <div style='width:390px;height:100px;'>
              <div style='float:left;width: 150px;'>
                <Tooltip style='margin:30px;' content='Left Top 提示文字' placement='left-top'><Button>左上</Button></Tooltip>
                <Tooltip style='margin:30px;' content='Left 提示文字' placement='left'><Button>左边</Button></Tooltip>
                <Tooltip style='margin:30px;' content='Left Bottom 提示文字' placement='left-bottom'><Button>左下</Button></Tooltip>
              </div>
              <div style='float:right;width:150px;'>
                <Tooltip style='margin:30px;' content='Right Top 提示文字' placement='right-top'><Button>右上</Button></Tooltip>
                <Tooltip style='margin:30px;' content='Right 提示文字' placement='right'><Button>右边</Button></Tooltip>
                <Tooltip style='margin:30px;' content='Right Bottom 提示文字' placement='right-bottom'><Button>右下</Button></Tooltip>
              </div>
            </div>
            <div>
              <Tooltip style='margin:30px;' content='Bottom Left 提示文字' placement='bottom-left'><Button>下左</Button></Tooltip>
              <Tooltip style='margin:30px;' content='Bottom 提示文字' placement='bottom'><Button>下边</Button></Tooltip>
              <Tooltip style='margin:30px;' content='Bottom Right 提示文字' placement='bottom-right'><Button>下右</Button></Tooltip>
            </div>
          </div>
          </div>
        </div>
        <Tooltip placement='top' content='提示信息'>
              <Button>按钮</Button>
            </Tooltip>
            <Tooltip content='提示信息'><span>一段文字</span></Tooltip>
                <Tooltip placement='top'>
                  <span>一段文字</span>
                  <template slot='content'>
                    <p style='color:white;'>文字1</p>
                    <p style='color:white'>文字2</p>
                  </template>
                </Tooltip>
      </div>
    )
  }
}

export default TooltipExample
