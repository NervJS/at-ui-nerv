import * as Nerv from 'nervjs'

import Table from '../../../src/table'

class TableExample extends Nerv.Component {
  render () {
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
      </div>
    )
  }
  onSelectChange (value,item) {
    console.log(value,item)
  }
  onSelectAll (value,item) {
    console.log(value,item)
  }
}

export default TableExample
