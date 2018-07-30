---
imports:
  import {Table,Button} from '@src';
---
# Table 表格

----

## 多选

设置属性 `optional` 可开启多选功能；选中某一项会触发 `onSelectionChange` 事件，点击「全选按钮」会触发 `onSelectAll` 事件

:::demo
```jsx
<Table optional onSelectAll={(data)=>{console.log(data)}} onSelectionChange={(isSelect,data)=>{
  console.log('selectionChange',isSelect,data)
}} columns={[
      {
        width:'200',
        checkbox: true
      },
      {
        title: '姓名',
        key: 'name',
        width:'300'
      },
      {
        title: '年龄',
        key: 'age',
        width:'300'
      },
      {
        title: '地址',
        key: 'address',
        width:'500'
      }]} data={[
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
          },
          {
            name: '托马斯',
            age: 19,
            address: '北京市朝阳区'
          },
          {
            name: '托马斯',
            age: 19,
            address: '北京市朝阳区'
          },
          {
            name: '托马斯',
            age: 19,
            address: '北京市朝阳区'
          },
          {
            name: '托马斯',
            age: 19,
            address: '北京市朝阳区'
          },
          {
            name: '托马斯',
            age: 19,
            address: '北京市朝阳区'
          },
          {
            name: '托马斯',
            age: 19,
            address: '北京市朝阳区'
          },
          {
            name: '托马斯',
            age: 19,
            address: '北京市朝阳区'
          }

        ]} />
```
:::

## Table 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | 表格的尺寸 | String | `small`, `normal`, `large` | `normal` |
| stripe | 是否启用斑马线风格 | Boolean | - | false |
| border | 是否显示列边框 | Boolean | - | false |
| data | 表单的内容数据 | Array | - | [] |
| columns | 表单的标题数据 | Array | - | [] |
| optional | 是否支持选择 | Boolean | - | false |
| pagination | 是否显示分页 | Boolean | - | false |
| pageSize | 每页的数据量 | Number | - | 10 |
| showPageTotal | 是否显示数据总数 | Boolean | - | true |
| showPageSizer | 是否显示更改每页展示数的选择框 | Boolean | - | false |
| showPageQuickjump | 是否显示快速跳转 | Boolean | - | false |
| height | 指定表格的高度 | Number / String | - | - |

## Table 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| onSelectionChange | 选中值有变化时触发 | 选中的行的对象数组 |
| onSelectAll | 只有全选时才会触发 | 所有行组成的对象数组 |
| onPageChange | 页码改变时触发的回调 | 页码 |
| onPageSizeChange | 切换每页显示的条数时触发的回调 | 每页的条目数 |

```
```