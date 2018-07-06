import * as Nerv from 'nervjs'
import * as $ from 'webpack-zepto'
import Badge from '../'
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
  it('basic render', () => {
    for (let value = -20; value < 20; value++) {
      const badge = <Badge value={value} />
      const component = Nerv.render(badge as VNode, scratch)
      expect(
        Number(
          $(component.dom)
            .find('.at-badge__content')
            .text()
        )
      ).toBe(value)
    }
  })
  it('textContent render', () => {
    const value = 'test'
    const badge = <Badge value={value} />
    const component = Nerv.render(badge as VNode, scratch)
    expect(
      $(component.dom)
        .find('.at-badge__content')
        .text()
    ).toBe(value)
  })
  it('different type should have different Color', () => {
    const statusList = ['error', 'success', 'warning', 'info']
    statusList.forEach((status) => {
      const badge = <Badge status={status} value={123} />
      const component = Nerv.render(badge as VNode, scratch)
      expect($(component.dom).hasClass(`at-badge--${status}`)).toBeTruthy()
    })
  })
  it('over max num limited should render with + ', () => {
    const badge = <Badge value={100} maxNum={99} />
    const component = Nerv.render(badge as VNode, scratch)
    expect($(component.dom).text()).toBe('99+')
  })
  it('dot render', () => {
    const badge = <Badge value={100} maxNum={99} dot/>
    const component = Nerv.render(badge as VNode, scratch)
    expect($(component.dom).find('.at-badge--dot').length).toBe(1)
  })

})
