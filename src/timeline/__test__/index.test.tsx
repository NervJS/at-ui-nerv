import * as Nerv from 'nervjs'
import $ from 'webpack-zepto'
import Timeline from '../'
import { VNode } from 'nerv-shared'

describe('timeline test', () => {
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
    const timelineJSX = (
      <Timeline>
        {}
        <Timeline.Item>
          {}
          <p>刷牙洗脸</p>
        </Timeline.Item>
        <Timeline.Item>
          {}
          <p>吃早餐</p>
        </Timeline.Item>
        <Timeline.Item>
          {}
          <p>上班</p>
        </Timeline.Item>
        <Timeline.Item>
          {}
          <p>睡觉</p>
        </Timeline.Item>
      </Timeline>
    )
    const component = Nerv.render(timelineJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.hasClass('at-timeline')).toBeTruthy()
    expect(dom.find('.at-timeline__item').length).toBe(4)
  })
  it('color property should show status', () => {
    const colors = {
      blue: 'at-timeline__item--default',
      green: 'at-timeline__item--success',
      red: 'at-timeline__item--error',
      yellow: 'at-timeline__item--warning'
    }
    Object.keys(colors).forEach((color) => {
      const timelineJSX = (
        <Timeline>
          {}
          <Timeline.Item color={color}>
            {}
            <p>刷牙洗脸</p>
          </Timeline.Item>
        </Timeline>
      )
      const component = Nerv.render(timelineJSX as VNode, scratch)
      const dom = $(Nerv.findDOMNode(component))
      expect(dom.find(`.${colors[color]}`).length).toBe(1)
    })
  })
  it('pending property should render ghost point', () => {
    const timelineJSX = (
      <Timeline pending>
        {}
        <Timeline.Item>
          {}
          <p>刷牙洗脸</p>
        </Timeline.Item>
        <Timeline.Item>
          {}
          <p>吃早餐</p>
        </Timeline.Item>
        <Timeline.Item>
          {}
          <p>上班</p>
        </Timeline.Item>
        <Timeline.Item>
          {}
          <p>睡觉</p>
        </Timeline.Item>
      </Timeline>
    )
    const component = Nerv.render(timelineJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(
      dom
        .find('.at-timeline__item ')
        .eq(-1)
        .hasClass('at-timeline__item--pending')
    ).toBeTruthy()
  })
  it('custom slot', () => {
    const timelineJSX = (
      <Timeline>
        {}
        <Timeline.Item color='blue'>
          {}
          <i slot='dot' className='icon icon-github' />
          <p>刷牙洗脸</p>
        </Timeline.Item>
      </Timeline>
    )
    const component = Nerv.render(timelineJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.find('.at-timeline__dot').html()).toEqual('<i slot="dot" class="icon icon-github"></i>')
    expect(dom.find('.at-timeline__content').html()).toEqual('<p>刷牙洗脸</p>')
  })
})
