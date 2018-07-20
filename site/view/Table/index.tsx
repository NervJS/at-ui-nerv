import * as Nerv from 'nervjs'

import Table from '../../../src/table'
// import Icon from '../../../src/icon'
class TableExample extends Nerv.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    console.log('23333')
  }
  render () {
    const columns = [
      {
        title: '姓名',
        key: 'name'
      },
      {
        title: '年龄',
        key: 'age',
        sortType: 'desc'
      },
      {
        title: '地址',
        key: 'address'
      },
      {
        title: '操作',
        render: {
          type: 'button',
          props: {
            onClick: this.handleClick
          },
          children: '测试按钮'
        }
      },
      {
        title: '操作',
        render: {
          type: 'button',
          props: {
            onClick: this.handleClick
          },
          children: '测试按钮'
        }
      }
    ]
    const data = [
      {
        name: '詹姆斯4',
        age: 15,
        address: '广州市天河区岗顶'
      },
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
        name: '韦德',
        age: 26,
        address: '广州市天河区岗顶'
      },
      {
        name: '杜兰特',
        age: 35,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯4',
        age: 15,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯5',
        age: 15,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯6',
        age: 15,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯7',
        age: 15,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯8',
        age: 45,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯9',
        age: 45,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯10',
        age: 45,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯11',
        age: 45,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯12',
        age: 45,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯12',
        age: 45,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯12',
        age: 45,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯12',
        age: 45,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯12',
        age: 45,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯12',
        age: 45,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯12',
        age: 45,
        address: '广州市天河区岗顶'
      },
      {
        name: '詹姆斯12',
        age: 45,
        address: '广州市天河区岗顶'
      }]
    return (
      <div className='table_example'>
        <Table size='large' columns={columns} data={data}>
        </Table>
        <Table size='small' columns={columns} data={data}>
        </Table>
        <Table columns={columns} data={data}>
        </Table>
        <Table columns={columns} data={data} optional onSelectionChange={this.onSelectChange} onSelectAll={this.onSelectAll}>
        </Table>
        <Table stripe columns={columns} data={data}>
        </Table>
        <Table border columns={columns} data={data}>
        </Table>
        <Table height='120' columns={columns} data={data}>
        </Table>
        <Table pagination columns={columns} data={data}>
        </Table>
      </div>
    )
  }
  onSelectChange (value, item) {
    console.log(value, item)
  }
  onSelectAll (value, item) {
    console.log(value, item)
  }
}

export default TableExample
