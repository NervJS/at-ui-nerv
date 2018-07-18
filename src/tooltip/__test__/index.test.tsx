import * as Nerv from 'nervjs'
import $ from 'webpack-zepto'
import Tooltip from '../'
import { Button } from '../../'
import { VNode } from 'nerv-shared'

describe('toolTip test', () => {
  let scratch
  beforeAll(() => {
    scratch = document.createElement('div')
    document.body.appendChild(scratch)
  })

  beforeEach(() => {
    scratch = document.createElement('div')
    document.body.appendChild(scratch)
  })

  afterAll(() => {
    scratch.parentNode.removeChild(scratch)
    scratch = null
  })
  it('basic render', () => {
    const toolTipJSX = (
      <Tooltip placement='top' content='提示信息'>
        {}
        <Button>{}按钮</Button>
      </Tooltip>
    )
    const component = Nerv.render(toolTipJSX as VNode, scratch)
    $(Nerv.findDOMNode(component)).trigger('MouseEnter')
    console.log($(Nerv.findDOMNode(component)))
  })
})
