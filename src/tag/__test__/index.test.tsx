import * as Nerv from 'nervjs'
import * as $ from 'webpack-zepto'
import {renderIntoDocument, Simulate} from 'nerv-test-utils'
import * as sinon from 'sinon'
import Tag from '../'

describe('Tag', () => {
  const handleClose = (evt, name) => {
    return {evt, name}
  }
  it('render tag', () => {
    const tag = <Tag closable onClose={handleClose}>Tag</Tag>
    const component = renderIntoDocument(tag)
    const dom = Nerv.findDOMNode(component)
    expect(component.props.closable).toBeTruthy()
    expect(component.props.onClose).toBe(handleClose)
    expect(dom.textContent).toBe('Tag')
  })
  it('closable', () => {
    const tag = <Tag closable={true}>TEST</Tag>
    const component = renderIntoDocument(tag)
    const dom = Nerv.findDOMNode(component)
    expect($(dom).find('.at-tag__close').get(0)).toBeDefined()
  })
  it('onClose', () => {
    const onClose = sinon.spy()
    const tag = <Tag closable onClose={handleClose}>Tag</Tag>
    const component = renderIntoDocument(tag)
    const dom = Nerv.findDOMNode(component)
    Simulate.click(dom.querySelector('i'))
    expect(onClose.calledOnce).toBe(true)
  })
})
