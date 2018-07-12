import * as Nerv from 'nervjs'
import * as $ from 'webpack-zepto'
import * as sinon from 'sinon'
import Checkbox from '../'
import { VNode } from 'nerv-shared'

describe('Checkbox', () => {
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

  it('basic render', (done) => {
    const onChange = sinon.spy()
    const checkbox = <Checkbox onChange={onChange}>{}test</Checkbox>
    const component = Nerv.render(checkbox as VNode, scratch)
    expect($(component.vnode.dom).find('.at-checkbox')).toBeDefined()
    $(component.vnode.dom).trigger('click')
    Nerv.nextTick(() => {
      expect(onChange.callCount).toBe(1)
      done()
    })
  })
  it('checked should work', () => {
    const checkbox = <Checkbox checked>{}Test</Checkbox>
    const component = Nerv.render(checkbox as VNode, scratch)
    expect(
      $(component.vnode.dom)
        .find('input')
        .prop('checked')
    ).toBeTruthy()
  })
  it('disabled should work', (done) => {
    const onChange = sinon.spy()
    const checkbox = (
      <Checkbox disabled onChange={onChange}>
      {}
        Test
      </Checkbox>
    )
    const component = Nerv.render(checkbox as VNode, scratch)
    expect(
      $(component.vnode.dom)
        .find('input')
        .prop('disabled')
    ).toBeTruthy()
    $(component.vnode.dom).trigger('click')
    Nerv.nextTick(() => {
      expect(onChange.callCount).toBe(0)
      done()
    })
  })
  it('should render checked checkbox if Checkbox.Group value contain ths same label', () => {
    const valueList: string[] = ['复选框 A', '选中且禁用']
    const CheckboxV = (
      <Checkbox.Group value={valueList}>
        {}
        <Checkbox label='复选框 A' />
        <Checkbox label='复选框 B' />
        <Checkbox label='复选框 C' />
        <Checkbox label='禁用' disabled />
        <Checkbox label='选中且禁用' disabled />
      </Checkbox.Group>
    )
    const component = Nerv.render(CheckboxV as VNode, scratch)
    $(component.vnode.dom)
      .find('.at-checkbox')
      .forEach((e) => {
        if (
          valueList.indexOf(
            $(e)
              .find('.at-checkbox__label')
              .text()
          ) !== -1
        ) {
          expect(
            $(e)
              .find('input')
              .prop('checked')
          ).toBeTruthy()
        }
      })
  })
  it('checkboxGroup onChange test', (done) => {
    const onChange = sinon.spy()
    const valueList: string[] = ['复选框 A', '选中且禁用']
    const checkbox = (
      <Checkbox.Group value={valueList} onChange={onChange}>
      {}
      <Checkbox label='复选框 A' />
      <Checkbox label='复选框 B' />
      <Checkbox label='复选框 C' checked />
      <Checkbox label='禁用' disabled />
      <Checkbox label='选中且禁用' disabled />
    </Checkbox.Group>
    )
    const component = Nerv.render(checkbox as VNode, scratch)
    $(component.vnode.dom).find('.at-checkbox').eq(0).trigger('click')
    Nerv.nextTick(() => {
      expect(onChange.callCount).toBe(1)
      done()
    })
  })
})
