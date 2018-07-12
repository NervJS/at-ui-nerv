import * as Nerv from 'nervjs'
// import * as sinon from 'sinon'
import { VNode } from 'nerv-shared'
import * as $ from 'webpack-zepto'

import InputNumber from '../InputNumber'

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
  it('test size', () => {
    const sizeList = ['large', 'normal', 'small']
    sizeList.forEach((size) => {
      const input = <InputNumber size={size as 'small' | 'large' | 'normal'} placeholder='请输入内容' />
      const component = Nerv.render(input as  VNode, scratch)
      expect($(component.vnode.dom).hasClass(`at-input-number--${size}`)).toBeTruthy()
    })
  })
  it('test step', (done) => {
    const onChangeHandle = (val) => {
      expect(val).toBe(5.1)
      done()
    }
    const input = <InputNumber step={5.1} onChange={onChangeHandle} placeholder='请输入内容' />
    const component = Nerv.render(input as  VNode, scratch)
    $(component.vnode.dom)
      .find('.at-input-number__up')
      .trigger('click')
  })
  it('test disabled', () => {
    const input = <InputNumber disabled placeholder='请输入内容' />
    const component = Nerv.render(input as  VNode, scratch)
    expect(
      $(component.vnode.dom)
        .find('.at-input-number__original')
        .prop('disabled')
    ).toBe(true)
  })
  it('test increase', (done) => {
    const onChange = (val) => {
      expect(val).toBe(3)
      done()
    }
    const input = <InputNumber value={2} onChange={onChange} placeholder='请输入内容' />
    const component = Nerv.render(input as  VNode, scratch)
    $(Nerv.findDOMNode(component)).find('.at-input-number__up').trigger('click')
  })
  it('test decrese', (done) => {
    const onChange = (val) => {
      expect(val).toBe(1)
      done()
    }
    const input = <InputNumber value={2} onChange={onChange} placeholder='请输入内容' />
    const component = Nerv.render(input as  VNode, scratch)
    $(Nerv.findDOMNode(component)).find('.at-input-number__down').trigger('click')

  })
  it('blur test', (done) => {
    const input = <InputNumber value={20} max={5} placeholder='请输入内容' />
    const component = Nerv.render(input as  VNode, scratch)
    $(Nerv.findDOMNode(component)).find('input').val(20)
    $(Nerv.findDOMNode(component)).find('input').trigger('blur')
    Nerv.nextTick(() => {
      expect($(Nerv.findDOMNode(component)).find('input').val()).toBe('20')
      done()

    })
  })
})
