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
      expect($(component.dom).hasClass(`at-input-number--${size}`)).toBeTruthy()
    })
  })
  it('test step', (done) => {
    const onChangeHandle = (val) => {
      expect(val).toBe(5.1)
      done()
    }
    const input = <InputNumber step={5.1} onChange={onChangeHandle} placeholder='请输入内容' />
    const component = Nerv.render(input as  VNode, scratch)
    $(component.dom)
      .find('.at-input-number__up')
      .trigger('click')
  })
  it('test disabled', () => {
    const input = <InputNumber disabled placeholder='请输入内容' />
    const component = Nerv.render(input as  VNode, scratch)
    expect(
      $(component.dom)
        .find('.at-input-number__original')
        .prop('disabled')
    ).toBe(true)
  })
})
