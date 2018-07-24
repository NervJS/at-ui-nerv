import * as Nerv from 'nervjs'
import $ from 'webpack-zepto'
import sinon from 'sinon'
import Switch from '../'
import { VNode } from 'nerv-shared'

describe('Switch test', () => {
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
    const onChange = sinon.spy()
    const switchJSX = (
      <Switch onChange={onChange}>
        {}
        <span slot='checkedText'>
          <i className='icon icon-left-arrow' />
        </span>
        <span slot='unCheckedText'>
          <i className='icon icon-right-arrow' />
        </span>
      </Switch>
    )
    const component = Nerv.render(switchJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.hasClass('at-switch')).toBeTruthy()
  })
  it('switch should work', (done) => {
    const onChange = sinon.spy()
    const switchJSX = <Switch onChange={onChange} />
    const component = Nerv.render(switchJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    dom.trigger('click')
    Nerv.nextTick(() => {
      expect(onChange.callCount).toBe(1)
      done()
    })
  })
  it('disabled should work', (done) => {
    const onChange = sinon.spy()
    const switchJSX = <Switch disabled onChange={onChange} />
    const component = Nerv.render(switchJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    dom.trigger('click')
    Nerv.nextTick(() => {
      expect(onChange.called).toBeFalsy()
      done()
    })
  })
  it('different size', async () => {
    const sizes = ['small', 'normal', 'large']
    for (let i = 0; i < sizes.length; i++) {
      Nerv.unmountComponentAtNode(scratch)
      const switchJSX = <Switch size={sizes[i]} />
      const component = Nerv.render(switchJSX as VNode, scratch)
      const dom = $(Nerv.findDOMNode(component))
      await new Promise((resolve, reject) => {
        Nerv.nextTick(() => {
          expect(dom.hasClass(`at-switch--${sizes[i]}`)).toBeTruthy()
          resolve()
        })
      })
    }
  })
  it('value change', () => {
    const defaultVal = false
    const switchJSX = (
      <Switch value={defaultVal}>
        {}
        <span slot='checkedText'>
          <i className='icon icon-left-arrow' />
        </span>
        <span slot='unCheckedText'>
          <i className='icon icon-right-arrow' />
        </span>
      </Switch>
    )
    const component = Nerv.render(switchJSX as VNode, scratch)
    component.componentWillReceiveProps({ children: component.props.children })
  })
})
