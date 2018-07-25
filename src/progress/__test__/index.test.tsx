import * as Nerv from 'nervjs'
import $ from 'webpack-zepto'
import Progress from '../'
import { VNode } from 'nerv-shared'

describe('Progress', () => {
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
    const progressJSX = <Progress percent='0' />
    const component = Nerv.render(progressJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.hasClass('at-progress')).toBeTruthy()
    expect(dom.find('.at-progress-bar__inner').css('width')).toBe('0%')
  })
  it('change by percent property', () => {
    const percent = 80
    const progressJSX = <Progress percent={percent} />
    const component = Nerv.render(progressJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.find('.at-progress-bar__inner').css('width')).toBe(`${percent}%`)
  })
  it('regard over 100% as succeed ', () => {
    const percent = 100
    const progressJSX = <Progress percent={percent} />
    const component = Nerv.render(progressJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.find('.at-progress-bar__inner').css('width')).toBe(`${percent}%`)
    expect(dom.hasClass('at-progress--success')).toBeTruthy()
  })
})
