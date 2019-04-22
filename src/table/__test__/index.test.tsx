import * as Nerv from 'nervjs'
// import * as sinon from 'sinon'
import * as $ from 'webpack-zepto'
import {VNode} from 'nerv-shared'
import Table from '../index'
// import sinon from 'sinon'

describe('table test', () => {
  function toDataPage (item, event) {
    // @TODO 这里会调用两次，进行阻止
    // event.stopImmediatePropagation()
    // event.stopPropagation()
    console.log('123123123', item, event.target)
    // const { history, match } = this.props
    // const formId = item._id
    // const { appName } = match.params
    // history.push(`/content/${appName}/${formId}`, item)
  }

  const columns = [
        {
          title: '姓名',
          key: 'name',
          component: (item) => (
            <h1 onClick={toDataPage.bind(this, new Date().getTime())}>{item.name}</h1>
          )
        }
      ]
  const data = [
        {
          name: '库里',
          age: 18,
          address: '深圳市宝安区创业一路'
        }
      ]
  let scratch
  beforeEach(() => {
    scratch = document.createElement('div')
    document.body.appendChild(scratch)
  })

  it('basic render', () => {
    const table = <Table columns={columns} data={data} />
    Nerv.render(table as VNode, scratch)
  })

  //   it('should update when props change', () => {
  //   class Test extends Nerv.Component<any, any> {
  //     constructor (props) {
  //       super(props)
  //       this.state = {
  //         columns: [],
  //         data: []
  //       }
  //     }
  //     render () {
  //       return <Table columns={this.state.columns} data={this.state.data} />
  //     }
  //     componentDidMount () {
  //       this.setState({
  //         columns,
  //         data
  //       })
  //     }
  //   }
  //   const table = <Test/>
  //   const component = Nerv.render(table as VNode, scratch)
  //   const dom = $(Nerv.findDOMNode(component))
  //   expect(dom.find('tr').length).toBe(1)
  // })

  //   it('onSelectionChange', (done) => {
  //   const onChange = sinon.spy()
  //   const select = <Table columns={columns} onSelectionChange={onChange} data={data} optional />
  //   const component = Nerv.render(select as VNode, scratch)
  //   const dom = $(Nerv.findDOMNode(component))
  //   const trigger = dom.find('input').eq(2)
  //   console.log(trigger)
  //   trigger.trigger('change')
  //   trigger.trigger('click')
  //   trigger.trigger('check')
  //   setTimeout(() => {
  //       console.log(onChange.called)
  //       expect(onChange.called).toBeTruthy()
  //       done()
  //   })
  // })

})
