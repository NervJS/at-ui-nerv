import * as Nerv from 'nervjs'
import $ from 'webpack-zepto'
import sinon from 'sinon'
import Slider from '../'
import { VNode } from 'nerv-shared'

describe('slider test', () => {
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
    const sliderJSX = <Slider />
    const component = Nerv.render(sliderJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.find('.at-slider__track').length).toBe(1)
  })
  it('onChange test', (done) => {
    const onChange = sinon.spy()
    const sliderJSX = <Slider onChange={onChange} />
    const component = Nerv.render(sliderJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    const mouseMoveEvt = $.Event('mousemove', {
      clientX: 20,
      clientY: 20
    })
    dom.find('.at-slider__dot-wrapper').trigger('mousedown')
    dom.find('.at-slider__dot-wrapper').trigger(mouseMoveEvt)
    dom.find('.at-slider__dot-wrapper').trigger('mouseup')
    Nerv.nextTick(() => {
      expect(onChange.called).toBeTruthy()
      done()
    })
  })
  it('disabled should work', (done) => {
    const onChange = sinon.spy()
    const sliderJSX = <Slider onChange={onChange} disabled />
    const component = Nerv.render(sliderJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    const mouseMoveEvt = $.Event('mousemove', {
      clientX: 20,
      clientY: 20
    })
    dom.find('.at-slider__dot-wrapper').trigger('mousedown')
    dom.find('.at-slider__dot-wrapper').trigger(mouseMoveEvt)
    dom.find('.at-slider__dot-wrapper').trigger('mouseup')
    Nerv.nextTick(() => {
        expect(onChange.called).toBeFalsy()
        done()
    })
  })
})
