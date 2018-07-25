import * as Nerv from 'nervjs'
import * as $ from 'webpack-zepto'
import { VNode } from 'nerv-shared'
import Breadcrumb from '../'

describe('Breadcrumb test', () => {
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
  it('basic test', () => {
    const breadcrumb = (
      <Breadcrumb>
        {}
        <Breadcrumb.Item>{}首页</Breadcrumb.Item>
        <Breadcrumb.Item>{}活动管理</Breadcrumb.Item>
      </Breadcrumb>
    )
    const component = Nerv.render(breadcrumb as VNode, scratch)
    expect($(component.vnode.dom).hasClass('at-breadcrumb')).toBeTruthy()
    expect($(component.vnode.dom).find('.at-breadcrumb__item').length).toBe(2)
  })
  it('test separator', () => {
    const breadcrumb = (
      <Breadcrumb separator={`\\`}>
        {}
        <Breadcrumb.Item>{}首页</Breadcrumb.Item>
        <Breadcrumb.Item>{}活动管理</Breadcrumb.Item>
      </Breadcrumb>
    )
    const component = Nerv.render(breadcrumb as VNode, scratch)
    expect(
      $(Nerv.findDOMNode(component))
        .find('.at-breadcrumb__separator')
        .text()
    ).toBe('\\')
  })
})
