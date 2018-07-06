import * as Nerv from 'nervjs'
import * as sinon from 'sinon'
import * as $ from 'webpack-zepto'
import {VNode} from 'nerv-shared'

import Input from '../input'

describe('Input test', () => {
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
    const input = <Input placeholder='请输入内容' />
    const component = Nerv.render(input as VNode, scratch)
    expect($(component.dom).find('input').hasClass('at-input__original')).toBeTruthy()
  })
  it('test disabled', () => {
    const input = <Input disabled placeholder='请输入内容' />
    const component = Nerv.render(input as VNode, scratch)
    expect(
      $(component.dom)
        .find('.at-input__original')
        .prop('disabled')
    ).toBe(true)
  })
  it('test status', () => {
    const statusList = ['success', 'error', 'warning', 'info']
    statusList.forEach((status) => {
      const input = <Input status={status} disabled placeholder='请输入内容' />
      const component = Nerv.render(input as VNode, scratch)
      expect($(component.dom).hasClass(`at-input--${status}`)).toBeTruthy()
    })
  })
  it('test icon', () => {
    const input = <Input icon='link' placeholder='请输入内容' />
    const component = Nerv.render(input as VNode, scratch)
    expect($(component.dom).find('i').hasClass('icon-link')).toBeTruthy()
  })
  it('test prepend', () => {
    const inputWithPrepend = <Input  prepend={<span>Https://</span>} placeholder='请输入内容' />
    const component = Nerv.render(inputWithPrepend as VNode, scratch)
    expect($(component.dom).find('.at-input-group__prepend span').text()).toBe('Https://')

  })
  it('test append', () => {
    const inputWithAppend = <Input append={<span>@aotu.io</span>} placeholder='请输入内容' />
    const component = Nerv.render(inputWithAppend as VNode, scratch)
    expect($(component.dom).find('.at-input-group__append span').text()).toBe('@aotu.io')

  })
  it('test size', () => {
    const sizeList = ['large', 'normal', 'small']
    sizeList.forEach((size) => {
      const input = <Input size={size} placeholder='请输入内容' />
      const component = Nerv.render(input as VNode, scratch)
      expect($(component.dom).hasClass(`at-input--${size}`)).toBeTruthy()
    })
  })
  it('test prependButton', () => {
    const onClickHandle = sinon.spy()
    const input = <Input prependButton prepend={<span onClick={onClickHandle}>test</span>} />
    const component = Nerv.render(input as VNode, scratch)
    expect($(component.dom).find('.at-input-group__prepend').hasClass('at-input-group--button')).toBeTruthy()
    $(component.dom).find('.at-input-group--button span').trigger('click')
    expect(onClickHandle.calledOnce).toBe(true)
  })
})
