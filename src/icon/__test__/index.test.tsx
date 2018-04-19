import * as Nerv from 'nervjs'
import { renderIntoDocument } from 'nerv-test-utils'
import Icon from '../'

describe('Icon', () => {
  it('render Icon', () => {
    const icon = <Icon type='icon-cloud'>{}Icon</Icon>
    const component = renderIntoDocument(icon)
    const dom = Nerv.findDOMNode(component)
    // expect(component.props).toHaveProperty('type', 'icon-cloud')
    expect(dom.textContent).toEqual('Icon')
  })
})
