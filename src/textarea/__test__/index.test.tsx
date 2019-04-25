import * as Nerv from 'nervjs'
import $ from 'webpack-zepto'
import sinon from 'sinon'
import Textarea from '../'
import { VNode } from 'nerv-shared'

describe('textarea test', () => {
  let scratch
  beforeAll(() => {
    scratch = document.createElement('div')
    document.body.appendChild(scratch)
  })

  beforeEach(() => {
    scratch = document.createElement('div')
    document.body.appendChild(scratch)
  })

  // afterEach(() => {
  //   scratch.parentNode.removeChild(scratch)
  //   scratch = null
  // })
  it('basic render', () => {
    class Test extends Nerv.Component<any, any> {
      constructor (props) {
        super(props)
        this.state = {value: '1' }
      }
      render () {
        return <Textarea value={this.state.value} />
      }
      componentDidMount () {
        window.setTimeout(() => {
          this.setState({
            value: '2'
          })
        }, 3000)
      }
    }
    const textareaJSX = <Test />
    const component = Nerv.render(textareaJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.hasClass('at-textarea')).toBeTruthy()
  })
  it('placeholder property ', () => {
    const placeholderContent = 'placeholder'
    const textareaJSX = <Textarea placeholder={placeholderContent} />
    const component = Nerv.render(textareaJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.find('textarea').attr('placeholder')).toBe(placeholderContent)
  })
  it('disabled should work', () => {
    const textareaJSX = <Textarea disabled />
    const component = Nerv.render(textareaJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.hasClass('at-textarea--disabled')).toBeTruthy()
  })
  it('onInput should work', (done) => {
    const onInput = sinon.spy()
    const textareaJSX = <Textarea onInput={onInput} disabled />
    const component = Nerv.render(textareaJSX as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    dom.find('textarea').trigger('input')
    Nerv.nextTick(() => {
      expect(onInput.called).toBeTruthy()
      done()
    })
  })
})
