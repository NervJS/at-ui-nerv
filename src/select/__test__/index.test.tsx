import * as Nerv from 'nervjs'
// import * as sinon from 'sinon'
import * as $ from 'webpack-zepto'
import {VNode,VText} from 'nerv-shared'
import {renderIntoDocument} from 'nerv-test-utils'
import Select from '../select'
const Option = Select.Option

describe('select test', () => {
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
    const select = <Select>
                      {}
                      <Option>{}'深圳'</Option>
                      <Option>{}'广州'</Option>
                  </Select>
                  
    const component = renderIntoDocument(select)
    const dom = Nerv.findDOMNode(component)
    expect(dom.find('.at-select__option').length).toBeTruthy()
  })
})
