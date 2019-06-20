import * as Nerv from 'nervjs'
import $ from 'webpack-zepto'
import Steps from '../'
import { VNode } from 'nerv-shared'

describe('step test', () => {
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
    const stepJSX = (
      <Steps current={0}>

        <Steps.Step title='Step1' description='This is a description.' />
        <Steps.Step title='Step2' description='This is a description.' />
        <Steps.Step title='Step3' />
      </Steps>
    )

    const component = Nerv.render(stepJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.hasClass('at-steps')).toBeTruthy()
    expect(dom.find('.at-step').length).toBe(3)
  })
  it('small size mode', () => {
    const stepJSX = (
      <Steps size='small' current={0}>

        <Steps.Step title='Step1' description='This is a description.' />
        <Steps.Step title='Step2' description='This is a description.' />
        <Steps.Step title='Step3' />
      </Steps>
    )
    const component = Nerv.render(stepJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.hasClass('at-steps--small')).toBeTruthy()
  })
  it('with icon', () => {
    const stepJSX = (
      <Steps size='small' current={0}>

        <Steps.Step title='Step1' description='This is a description.' />
        <Steps.Step title='Step2' description='This is a description.' />
        <Steps.Step title='Step3' icon='icon-pocket' />
      </Steps>
    )
    const component = Nerv.render(stepJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(
      dom
        .find('.at-step')
        .eq(-1)
        .find('.icon-pocket').length
    ).toBe(1)
  })
  it('vertical mode', () => {
    const stepJSX = (
      <Steps size='small' direction='vertical'>

        <Steps.Step title='Step1' description='This is a description.' />
        <Steps.Step title='Step2' description='This is a description.' />
        <Steps.Step title='Step3' icon='icon-pocket' />
      </Steps>
    )
    const component = Nerv.render(stepJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.hasClass('at-steps--vertical')).toBeTruthy()
  })
  it('error mode', () => {
    const stepJSX = (
        <Steps size='small' direction='vertical' status='error' current={1}>

        <Steps.Step title='Step1' description='This is a description.' />
        <Steps.Step title='Step2' description='This is a description.' />
        <Steps.Step title='Step3' icon='icon-pocket' />
      </Steps>
    )
    const component = Nerv.render(stepJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.find('.at-step').eq(1).hasClass('at-step--error')).toBeTruthy()
  })
})
