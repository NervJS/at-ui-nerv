---
imports:
  import {Table,Button} from '@src';
---
# Table 表格

----

## 基本用法

简单的数据展示表格。
设置`columns`数组每一项属性 `width`，可改变表格列的宽度


:::demo
```jsx
<Table columns={[
      {
        title: '姓名',
        key: 'name',
        width: 300
      },
      {
        title: '年龄',
        key: 'age',
        width: 500
      },
      {
        title: '地址',
        key: 'address',
        width: 800
      }]} data={[
          {
            name: '库里',
            age: 18,
            address: '深圳市宝安区创业一路'
          },
          {
            name: '詹姆斯',
            age: 25,
            address: '深圳市宝安区创业一路'
          },
          {
            name: '科比',
            age: 24,
            address: '北京市朝阳区'
          },
          {
            name: '杜兰特',
            age: 22,
            address: '北京市朝阳区'
          },
          {
            name: '威斯布鲁克',
            age: 21,
            address: '上海市浦东新区'
          },
          {
            name: '邓肯',
            age: 26,
            address: '上海市浦东新区'
          },
          {
            name: '帕克',
            age: 25,
            address: '广州市番禺区大学城'
          },
          {
            name: '欧文',
            age: 20,
            address: '深圳市南山区深南大道'
          },
          {
            name: '托马斯',
            age: 19,
            address: '深圳市南山区深南大道'
          }
        ]} />
```
:::

## 斑马线风格

设置属性 `stripe`，可让表格间隔显示不同的颜色，用于区分不同的行

:::demo
```jsx
<Table stripe columns={[
      {
        title: '姓名',
        key: 'name',
        width: '300'
      },
      {
        title: '年龄',
        key: 'age',
        width: '300'
      },
      {
        title: '地址',
        key: 'address',
        width:'800'
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
          }
        ]} />
```
:::

## 带边框风格

默认不带列边框，设置属性 `border` 可添加列表框

:::demo
```jsx
<Table border columns={[
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
        width:'800'
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
          }
        ]} />

```
:::

## 固定高度

设置属性 `height`，可自定义表格的高度，此时表头会自动 `Fixed` 在顶部

:::demo
```jsx
<Table height={200} columns={[
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
        width:'800'
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
          }
        ]} />
```
:::

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
          }
        ]} />
```
:::

## 排序

如需对某一列数据进行排序，可给 `columns` 的数据项设置 `sortType` 属性，传入 `normal` 则表示该列不进行排序，但展示排序的操作按钮

`sortType` 支持的参数：`normal (不排序)`, `desc (降序)`, `asc (升序)`

:::demo
```jsx
<Table columns={[
      {
        title: '姓名',
        key: 'name',
        width:'300'
      },
      {
        title: '年龄',
        key: 'age',
        sortType:'asc',
        width:'300'
      },
      {
        title: '地址',
        key: 'address',
        width:'800'
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
          }
        ]} />
```
:::

## 自定义列模板

给 `columns` 的数据项设置`action`和`component`属性。`action`指定需要监听的事件，`component`指定自定义组件。

:::demo
```state
{
  data:[
          {
            name: '库里',
            age: 18,
            address: '深圳市宝安区创业一路'
          },
          {
            name: '詹姆斯',
            age: 25,
            address: '广州市天河区岗顶'
          }
        ]
}
```
```html
<Table  data={this.state.data} columns={[
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
        width:'300'
      },
      {
        title: '操作',
        width:'300',
        action: 'onClick',
        component: (item)=>{
          return (<div>
          <Button onClick={(event,index)=>{console.log('index1', index, event);alert(item.address)}}>查看地址</Button>
          <Button onClick={(event, index)=>{console.log('index2', index, event);alert(item.name)}}>
            {item.name}
          </Button>
        </div>)}
      },
      {
        title: '操作',
        width:'300',
        action: 'onClick',
        component:(item)=>{return (<Button onClick={(index,event)=>{alert(item.name)}}>查看名字</Button>)}
      }
      ]}
      />
```
:::

## 尺寸

设置属性 `size` 可调整表格的尺寸大小，提供三种尺寸：`small`, `normal`, `large`，默认为 `normal`

:::demo
```jsx
<Table size='small' columns={[
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
        width:'800'
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
          }
        ]} />
```
:::

## 分页

设置属性 `pagination` 可启用表格的分页功能

:::demo
```jsx
<Table pagination optional columns={[
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
        width:'800'
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