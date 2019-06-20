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

  afterEach(() => {
    scratch.parentNode.removeChild(scratch)
    scratch = null
  })
  it('basic render', (done) => {
    const toolTipJSX = (
      <Tooltip placement='top' content='提示信息'>

        <Button> 按钮</Button>
      </Tooltip>
    )
    const component = Nerv.render(toolTipJSX as VNode, scratch)
    $(Nerv.findDOMNode(component)).trigger('MouseEnter')
    Nerv.nextTick(() => {
      expect($(Nerv.findDOMNode(component)))
      done()
    })
  })
  it('different placement', async () => {
    const placements = [
      'top-left',
      'top-right',
      'left-top',
      'left',
      'left-bottom',
      'right-top',
      'right',
      'right-bottom',
      'bottom',
      'bottom-left',
      'bottom-right'
    ]
    for (let i = 0; i < placements.length; i++) {
      const placement = placements[i]
      const toolTipJSX = (
        <Tooltip
          class='item'
          content='Top Right 提示文字'
          placement={placement}
        >

          <div slot='content'>
            <p>文字1</p>
            <p>文字2</p>
          </div>
        </Tooltip>
      )
      Nerv.unmountComponentAtNode(scratch)
      const component = Nerv.render(toolTipJSX as VNode, scratch)
      $(Nerv.findDOMNode(component)).trigger('MouseEnter')
      await new Promise((resolve, reject) => {
        Nerv.nextTick(() => {
          expect(
            $(Nerv.findDOMNode(component))
              .find('.at-tooltip__popper')
              .hasClass(`at-tooltip--${placement}`)
          ).toBeTruthy()
          resolve()
        })
      })
    }
  })
})
