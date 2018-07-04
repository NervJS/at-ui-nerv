import * as Nerv from 'nervjs'
import * as sinon from 'sinon'
import * as $ from 'webpack-zepto'
import {VNode} from 'nerv-shared'

import Rate from '../rate'

describe('InputNumber test', () => {
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
    const rate = <Rate />
    const component = Nerv.render(rate as VNode, scratch)
    expect($(component.vnode.dom).find('.at-rate__item').length).toBeTruthy()
  })
  it('should render text with showText props', () => {
    const rate = <Rate showText={true} />
    const component = Nerv.render(rate as VNode, scratch)
    expect($(component.vnode.dom).find('.at-rate__text').length).toBe(1)
  })
  it('rendered icon type should be equal to icon props ', () => {
    const rate = <Rate icon={'icon-heart-on'} />
    const component = Nerv.render(rate as VNode, scratch)
    expect(
      $(component.vnode.dom)
        .find('.icon')
        .hasClass('icon-heart-on')
    ).toBeTruthy()
  })
  it('half star', () => {
    const value = 3.5
    const rate = <Rate value={value} allowHalf={true} />
    const component = Nerv.render(rate as VNode, scratch)
    const idx = Math.floor(value)
    expect($(component.vnode.dom).find('.at-rate__item').eq(idx).hasClass('at-rate__item--half')).toBeTruthy()
  })
  it('disabled', () => {
    const onChangeHandle = sinon.spy()
    const rate = <Rate disabled={true} onChange={onChangeHandle}/>
    const component = Nerv.render(rate as VNode, scratch)
    $(component.vnode.dom).find('.at-rate__icon').trigger('click')
    expect(onChangeHandle.calledOnce).not.toBeTruthy()
  })
  it('allowClear', (done) => {
    const onChangeHandle = (val) => {
      expect(val).toBe(0)
      done()
    }
    const rate = <Rate value={3} onChange={onChangeHandle} allowClear={true}/>
    const component = Nerv.render(rate as VNode, scratch)
    $(component.vnode.dom).find('.at-rate__icon').eq(2).trigger('click')
  })
})
