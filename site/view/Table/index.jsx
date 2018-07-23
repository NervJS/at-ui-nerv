import * as Nerv from 'nervjs'

import Table from '@md/table.md'
class TableExample extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      columns: [ {
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
      },
      {
        title: '操作',
        render: 'Button'
      }],
      data1: [
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
    }
  }
  render () {
    return (
      <div className='table-example'>
        <Table />
      </div>
    )
  }
}

export default TableExample
