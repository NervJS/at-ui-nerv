import * as Nerv from 'nervjs'
// tslint:disable-next-line:no-implicit-dependencies
import * as $ from 'webpack-zepto'
// tslint:disable-next-line:no-implicit-dependencies
import {VNode} from 'nerv-shared'

import Alert from '../alert'

describe('Alert test', () => {
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
    const message = '这里是提示的文案~这里是提示的文案~这里是提示的文案~'
    const alert = <Alert message={message} type='success' />
    const component = Nerv.render(alert as VNode, scratch)
    expect(
      $(component.vnode.dom)
        .find('.at-alert__message')
        .text()
    ).toBe(message)
  })
  it('closable', (done) => {
    const alert = <Alert message={'123'} closable type='success' />
    const component = Nerv.render(alert as VNode, scratch)
    expect($(component.vnode.dom).find('.at-alert__close').length).toBe(1)
    $(component.vnode.dom)
      .find('.at-alert__close')
      .trigger('click')
    setTimeout(() => {
      expect($(component.vnode.dom).css('display')).toBe('none')
      done()
    }, 1000)
  })
  it('design closable text', () => {
    const text = '关闭'
    const alert = <Alert message={'123'} closeText={text} type='success' />
    const component = Nerv.render(alert as VNode, scratch)
    expect(
      $(component.vnode.dom)
        .find('.at-alert__close')
        .text()
    ).toBe(text)
  })
  it('show icon', () => {
    const alert = <Alert message={'123'} showIcon type='success' />
    const component = Nerv.render(alert as VNode, scratch)
    expect($(component.vnode.dom).find('.at-alert__icon').length).toBe(1)
  })
  it('description should render', () => {
    const description = '成功提示的详细说明成功提示的详细说明成功提示的详细说明'
    const alert = <Alert message={'123'} description={description} type='success' />
    const component = Nerv.render(alert as VNode, scratch)
    expect($(component.vnode.dom).find('.at-alert__description').length).toBe(1)
  })
})
