import * as Nerv from 'nervjs'
import * as $ from 'webpack-zepto'
import * as sinon from 'sinon'
import {Checkbox, CheckboxGroup} from '../'

describe('Checkbox', () => {
  let scratch
  beforeAll(() => {
    scratch = document.createElement('div')
    document
      .body
      .appendChild(scratch)
  })

  beforeEach(() => {
    scratch = document.createElement('div')
    document
      .body
      .appendChild(scratch)
  })

  afterAll(() => {
    scratch
      .parentNode
      .removeChild(scratch)
    scratch = null
  })

  it('basic render', (done) => {
    const onChange = sinon.spy()
    const checkbox = <Checkbox onChange={onChange}>test</Checkbox>
    const component = Nerv.render(checkbox, scratch)
    expect($(component.dom).find('.at-checkbox')).toBeDefined()
    $(component.dom).trigger('click')
    Nerv.nextTick(() => {
      expect(onChange.callCount).toBe(1)
      done()
    })
  })
  it('checked should work', () => {
    const checkbox = <Checkbox checked>Test
    </Checkbox>
    const component = Nerv.render(checkbox, scratch)
    expect($(component.dom).find('input').prop('checked')).toBeTruthy()
  })
  it('disabled should work', (done) => {
    const onChange = sinon.spy()
    const checkbox = <Checkbox disabled onChange={onChange}>Test
    </Checkbox>
    const component = Nerv.render(checkbox, scratch)
    expect($(component.dom).find('input').prop('disabled')).toBeTruthy()
    $(component.dom).trigger('click')
    Nerv.nextTick(() => {
      expect(onChange.callCount).toBe(0)
      done()
    })
  })
  it('should render checked checkbox if checkboxGroup value contain ths same label', () => {
    const valueList: string[] = ['复选框 A', '选中且禁用']
    const checkboxGroup = <CheckboxGroup value={valueList}>
      <Checkbox label='复选框 A'></Checkbox>
      <Checkbox label='复选框 B'></Checkbox>
      <Checkbox label='复选框 C'></Checkbox>
      <Checkbox label='禁用' disabled></Checkbox>
      <Checkbox label='选中且禁用' disabled></Checkbox>
    </CheckboxGroup>
    const component = Nerv.render(checkboxGroup, scratch)
    $(component.dom).find('.at-checkbox').forEach((e) => {
      if (valueList.indexOf($(e).find('.at-checkbox__label').text()) !== -1) {
        expect($(e).find('input').prop('checked')).toBeTruthy()
       }
    })
  })

})
