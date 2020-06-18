import * as Nerv from 'nervjs'
import { renderIntoDocument } from 'nerv-test-utils'
import * as $ from 'webpack-zepto'
import * as sinon from 'sinon'
import Button from '../'

describe('Button', () => {
  it('render button', () => {
    const button = <Button type='primary'>Button</Button>
    const component = renderIntoDocument(button)
    const dom = Nerv.findDOMNode(component)
    expect(component.props.type).toBe('primary')
    expect(dom.textContent).toEqual('Button')
  })
  it('button click', (done) => {
    const onClick = sinon.spy()
    const button = (
      <Button type='primary' onClick={onClick}>
        onClick
      </Button>
    )
    const component = renderIntoDocument(button)
    $(component.vnode.dom).trigger('click')
    Nerv.nextTick(() => {
      expect(onClick.called).toBeTruthy()
      done()
    })
  })
  it('loading&icon style', () => {
    const button = (
      <Button icon='icon-download' loading>
        loading
      </Button>
    )
    const component = renderIntoDocument(button)
    const dom = Nerv.findDOMNode(component)
    expect($(dom).find('.at-btn__loading').length).toBeTruthy()
    expect($(dom).find('.icon-download').length).toBeTruthy()
  })
  it('group render', () => {
    const buttonGroup = (
      <Button.Group>
        <Button>左</Button>
        <Button>中</Button>
        <Button>右</Button>
      </Button.Group>
    )
    const component = renderIntoDocument(buttonGroup)
    const dom = Nerv.findDOMNode(component)
    expect($(dom).hasClass('at-btn-group')).toBe(true)
  })
  it('group size', () => {
    const buttonGroup = (
      <Button.Group size='large'>
        <Button>左</Button>
        <Button>中</Button>
        <Button>右</Button>
      </Button.Group>
    )
    const component = renderIntoDocument(buttonGroup)
    const dom = Nerv.findDOMNode(component)
    expect($(dom).hasClass('at-btn-group--large')).toBe(true)
  })
})
