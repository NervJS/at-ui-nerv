import * as Nerv from 'nervjs'
import { renderIntoDocument } from 'nerv-test-utils'
import Button from '../'

describe('Button', () => {
  it('render button', () => {
    const button = <Button type='primary'>Button</Button>
    const component = renderIntoDocument(button)
    const dom = Nerv.findDOMNode(component)
    expect(dom.textContent).toEqual('Button')
  })
})
