import * as Nerv from 'nervjs'
import * as $ from 'webpack-zepto'
import Dropdown from '../index'
import { VNode } from 'nerv-shared'

describe('dropdown test', () => {
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
  it('basic', (done) => {
    const DropdownElem = (
      <Dropdown dropdownChange={(name) => {}} trigger='click'>
        {}
        <a href='#'>Hover</a>
        <Dropdown.Menu>
          {}
          <Dropdown.Item>{}黄金糕</Dropdown.Item>
          <Dropdown.Item>{}狮子头</Dropdown.Item>
          <Dropdown.Item>{}螺蛳粉</Dropdown.Item>
          <Dropdown.Item disabled>{}双皮奶</Dropdown.Item>
          <Dropdown.Item divided>{}蚵仔煎</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
    const component = Nerv.render(DropdownElem as VNode, scratch)
    const trigger = $(component.dom).find('.at-dropdown__trigger')
    trigger.trigger('click')
    setTimeout(() => {
      expect(
        $(component.dom)
          .find('.at-dropdown__popover')
          .css('display')
      ).toBe('block')
      done()
    })
  })
})
