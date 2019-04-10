import * as Nerv from 'nervjs'
// import * as sinon from 'sinon'
import * as $ from 'webpack-zepto'
import {VNode} from 'nerv-shared'
import Table from '../index'
import sinon from 'sinon'

describe('table test', () => {
    const columns = [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ]
    const data = [
        {
          name: '库里',
          age: 18,
          address: '深圳市宝安区创业一路'
        },
        {
          name: '詹姆斯',
          age: 25,
          address: '广州市天河区岗顶'
        },
        {
          name: '科比',
          age: 24,
          address: '上海市浦东新区'
        },
        {
          name: '杜兰特',
          age: 22,
          address: '深圳市南山区深南大道'
        },
        {
          name: '威斯布鲁克',
          age: 21,
          address: '北京市朝阳区'
        },
        {
          name: '邓肯',
          age: 26,
          address: '深圳市罗湖区万象城'
        },
        {
          name: '帕克',
          age: 25,
          address: '深圳市福田区中心书城'
        },
        {
          name: '欧文',
          age: 20,
          address: '广州市番禺区大学城'
        },
        {
          name: '托马斯',
          age: 19,
          address: '北京市朝阳区'
        }
      ]
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
    const select = <Table columns={columns} data={data} />
    const component = Nerv.render(select as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.find('tr').length).toBe(10)
  })
    it('should update when props change', () => {
    class Test extends Nerv.Component<any, any> {
      constructor (props) {
        super(props)
        this.state = {
          columns: [],
          data: []
        }
      }
      render () {
        return <Table columns={this.state.columns} data={this.state.data} />
      }
      componentDidMount () {
        this.setState({
          columns,
          data
        })
      }
    }
    const table = <Test/>
    const component = Nerv.render(table as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    expect(dom.find('tr').length).toBe(1)
  })

    it('onSelectionChange', (done) => {
    const onChange = sinon.spy()
    const select = <Table columns={columns} onSelectionChange={onChange} data={data} optional />
    const component = Nerv.render(select as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    const trigger = dom.find('input').eq(2)
    console.log(trigger)
    trigger.trigger('change')
    trigger.trigger('click')
    trigger.trigger('check')
    setTimeout(() => {
        console.log(onChange.called)
        expect(onChange.called).toBeTruthy()
        done()
    })
  })

    it('select all', (done) => {
    const onChange = sinon.spy()
    const select = <Table columns={columns} onSelectAll={onChange} data={data} optional />
    const component = Nerv.render(select as VNode, scratch)
    const dom = $(Nerv.findDOMNode(component))
    const trigger = dom.find('input').eq(0)
    console.log(trigger)
    trigger.trigger('change')
    trigger.trigger('click')
    trigger.trigger('check')
    setTimeout(() => {
        console.log(onChange.called)
        expect(onChange.called).toBeTruthy()
        done()
    })
  })
})
