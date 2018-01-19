import * as Nerv from 'nervjs'
import { renderIntoDocument } from 'nerv-test-utils'
import Tag from '../'

describe('Tag', () => {
  it('render button', () => {
    const button = <Button type='primary'>Button</Button>
    const component = renderIntoDocument(button)
    const dom = Nerv.findDOMNode(component)
    expect(component.props).toHaveProperty('type', 'primary')
    expect(dom.textContent).toEqual('Button')
  })
})
