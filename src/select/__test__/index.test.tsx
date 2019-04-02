import * as Nerv from 'nervjs'
// import * as sinon from 'sinon'
import * as $ from 'webpack-zepto'
import {VNode} from 'nerv-shared'
import Select from '../index'
import Modal from '../../modal'
import sinon from 'sinon'
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

  // afterEach(() => {
  //   scratch.parentNode.removeChild(scratch)
  //   scratch = null
  // })

  it('basic render', () => {
    class Test extends Nerv.Component<any, any> {
      constructor (props) {
        super(props)
        this.state = {
          value: '1',
          list: [
            {
              id: '1',
              name: '广州'
            },
            {
              id: '2',
              name: '深圳'
            }
          ]
        }
      }
      handleOnChange = (value) => {
        this.setState({
          value
        })
      }
      render () {
        const select = this.renderSelectItem()
        return  <Modal value={true}
                  title={'xxxx'}
                  width={1000}>
          {}      <Modal.body>
            {}
                  <Select onChange={this.handleOnChange} value={this.state.value}>
                      {}
                      {select}
                  </Select>
                  </Modal.body>
                </Modal>
      }
      renderSelectItem () {
        return this.state.list.map((item) => (
              <Select.Option value={item.id}>{}{item.name}</Select.Option>
          ))
      }
      componentDidMount () {
        this.setState({
          list: [
            {
              id: '1',
              name: '广州'
            },
            {
              id: '2',
              name: '深圳'
            }
          ]
        })
      }
    }
    const component = Nerv.render(<Test /> as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    // expect(dom.find('.at-select__option').length).toBe(2)
  })

  it('test class', () => {
    const select = <Select style='width:100px;' size='large'>
                      {}
                      <Select.Option>{}'深圳'</Select.Option>
                      <Select.Option>{}'广州'</Select.Option>
                  </Select>
    const component = Nerv.render(select as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.hasClass('at-select--large'))
  })

  it('test disabled class', () => {
    const select = <Select style='width:100px;' disabled>
                      {}
                      <Select.Option>{}'深圳'</Select.Option>
                      <Select.Option>{}'广州'</Select.Option>
                  </Select>
    const component = Nerv.render(select as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.hasClass('at-select--disabled'))
  })

  it('test onChange', (done) => {
    const onChange = sinon.spy()
    const select = <Select style='width:100px;' onChange={onChange}>
                      {}
                      <Select.Option>{}'深圳'</Select.Option>
                      <Select.Option>{}'广州'</Select.Option>
                  </Select>
    const component = Nerv.render(select as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    const trigger = dom.find('.at-select__option').eq(0)
    trigger.trigger('click')
    setTimeout(() => {
      expect(onChange.called).toBeTruthy()
      done()
    })
  })

})
