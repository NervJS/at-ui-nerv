import * as Nerv from 'nervjs'
import * as sinon from 'sinon'
import * as $ from 'webpack-zepto'
import {VNode} from 'nerv-shared'

import Rate from '../rate'

describe('rate test', () => {
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
  it('move Star', (done) => {
    const onChangeHandle = sinon.spy()
    const rate = <Rate allowHalf={true} onChange={onChangeHandle}/>
    const component = Nerv.render(rate as VNode, scratch)
    $(component.vnode.dom).find('.at-rate__left').eq(2).trigger('mousemove')
    $(component.vnode.dom).find('.at-rate__left').eq(4).trigger('click')
    Nerv.nextTick(() => {
      expect(onChangeHandle.callCount).toBe(1)
      done()
    })
  })
  it('over Star', (done) => {
    const rate = <Rate allowHalf={true}  />
    const component = Nerv.render(rate as VNode, scratch)
    $(component.vnode.dom).find('.at-rate__left').eq(2).trigger('mouseover')
    Nerv.nextTick(() => {
      expect(component.state.isHoverRate).toBeTruthy()
      done()
    })
  })
  it('leave Star', (done) => {
    const rate = <Rate allowHalf={true}  />
    const component = Nerv.render(rate as VNode, scratch)
    $(component.vnode.dom).find('.at-rate__left').eq(2).trigger('mouseleave')
    Nerv.nextTick(() => {
      expect(component.state.isHoverRate).toBeFalsy()
      done()
    })
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
