import * as Nerv from 'nervjs'
import $ from 'webpack-zepto'
import sinon from 'sinon'
import Tabs from '../'
import { VNode } from 'nerv-shared'

describe('Tab test', () => {
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
  it('basic render', () => {
    const tabJSX = (
      <Tabs>
        {}
        <Tabs.Pane label='Tab1' name='name1'>
          {}
          <p>Content of Tab Pane 1</p>
        </Tabs.Pane>
        <Tabs.Pane label='Tab2' name='name2'>
          {}
          <p>Content of Tab Pane 2</p>
        </Tabs.Pane>
        <Tabs.Pane label='Tab3' name='name3'>
          {}
          <p>Content of Tab Pane 3</p>
        </Tabs.Pane>
      </Tabs>
    )
    const component = Nerv.render(tabJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.hasClass('at-tabs')).toBeTruthy()
  })
  it('disabled should be work', (done) => {
    const onChange = sinon.spy()
    const tabsJSX = (
      <Tabs onChange={onChange}>
        {}
        <Tabs.Pane label='Tab1' name='name1'>
          {}
          <p>Content of Tab Pane 1</p>
        </Tabs.Pane>
        <Tabs.Pane label='Tab2' name='name2'>
          {}
          <p>Content of Tab Pane 2</p>
        </Tabs.Pane>
        <Tabs.Pane label='Tab3' name='name3' disabled='true'>
          {}
          <p>Content of Tab Pane 3</p>
        </Tabs.Pane>
      </Tabs>
    )
    const component = Nerv.render(tabsJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    dom.find('.at-tabs-nav__item--disabled').trigger('click')
    Nerv.nextTick(() => {
      expect(onChange.called).toBeFalsy()
      done()
    })
  })
  it('icon property', () => {
    const tabsJSX = (
      <Tabs>
        {}
        <Tabs.Pane label='Tab1' name='name1' icon='icon-github'>
          {}
          <p>Content of Tab Pane 1</p>
        </Tabs.Pane>
        <Tabs.Pane label='Tab2' name='name2' icon='icon-twitter'>
          {}
          <p>Content of Tab Pane 2</p>
        </Tabs.Pane>
        <Tabs.Pane label='Tab3' name='name3' icon='icon-pocket'>
          {}
          <p>Content of Tab Pane 3</p>
        </Tabs.Pane>
      </Tabs>
    )
    const component = Nerv.render(tabsJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.find('.icon-twitter').length).toBeTruthy()
  })
  it('extra slot test', () => {
      const extraContent = '额外内容'
      const tabsJSX = (
      <Tabs>
        {}
        <Tabs.Pane label='Tab1' name='name1'>
          {}
          <p>Content of Tab Pane 1</p>
        </Tabs.Pane>
        <Tabs.Pane label='Tab2' name='name2'>
          {}
          <p>Content of Tab Pane 2</p>
        </Tabs.Pane>
        <Tabs.Pane label='Tab3' name='name3'>
          {}
          <p>Content of Tab Pane 3</p>
        </Tabs.Pane>
        <div slot='extra'>
            {extraContent}
        </div>
      </Tabs>
    )
      const component = Nerv.render(tabsJSX as VNode, scratch)
      const dom = $(Nerv.findDOMNode(component))
      expect(dom.find('.at-tabs__extra').text()).toBe(extraContent)
  })
})
