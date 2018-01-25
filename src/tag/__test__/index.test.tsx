import * as Nerv from 'nervjs'
import * as $ from 'webpack-zepto'
import {renderIntoDocument} from 'nerv-test-utils'
import * as sinon from 'sinon'
import Tag from '../'

function fireEvent (on, type) {
  const e = document.createEvent('Event')
  e.initEvent(type, true, true)
  on.dispatchEvent(e)
}

describe('Tag', () => {
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
    const c = Nerv.render(<Tag closable onClose={onClose}>Tag</Tag>, scratch)
    fireEvent(c.dom.querySelector('i'), 'click')
    expect(onClose.calledOnce).toBe(true)
  })
})
