import * as Nerv from 'nervjs'
// import * as sinon from 'sinon'
import * as $ from 'webpack-zepto'
import { VNode } from 'nerv-shared'
import Popover from '../index'
import Button from '../../button/index'

describe('popover test', () => {
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
    const popover = (
      <Popover
        trigger='click'
        placement='bottom'
        title='Title'
        content='Bottom Placement'
      >
        <Button size='small'>点击</Button>
      </Popover>
    )
    const component = Nerv.render(popover as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    const trigger = dom.find('.at-btn').eq(0)
    trigger.trigger('click')
    setTimeout(() => {
      expect(dom.find('.at-popover--bottom')).toBeTruthy()
      done()
    })
  })
})
