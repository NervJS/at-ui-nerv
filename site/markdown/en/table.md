---
imports:
  import {Table,Button} from '@src';
---
# Table

----

## Basic

Basic Usage

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

## Stripe

Set `stripe` property to apply stripe style. Used to distinguish between different rows.

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

## Border

Defaults to no column borders, set `border` property to add borders.

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

## Fixed Height

Set `height` property to fix the height of Table. It'll make the header fixed on the top of Table.

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

## Multiple Choices

Set `optional` property to apply multi-choices function. `on-selection-change` event will be emitted when a row is selected. `on-select-all` event will be emitted when click `select-all` checkbox.

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

## Sort

You can sort the data by seeting `sortType: normal` to a `columns` prop's item.

There are three type of `sortType`: `normal (No sort)`, `desc (Descending)`, `asc (Ascending)`

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

## Custom Column Template

You can render the column by setting `render` to certain columns prop's items. It is based on Vue's Render function.

`render` accepts two arguments: the first is `h`, the second is an object including `row`, `column` and `index` (current cell's data, current column's data, current index).

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
        action: 'onMouseOver',
        component:<div onMouseOver={(index,event)=>{console.log('xx');alert(this.state.data[index].address)}}>查看地址</div>
      },
      {
        title: '操作',
        width:'300',
        action: 'onClick',
        component:<Button onClick={(index,event)=>{alert(this.state.data[index].name)}}>查看名字</Button>
      }
      ]}
      />
```
:::

## Size

There are three type of size: `small`, `normal`, `large`. Default is `normal`.

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

## Pagination

Set `pagination` to apply pagination function.

:::demo
```jsx
<Table pagination columns={[
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

## Table Props

| Property      | Description          | Type      | Accepted values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | the size of table | String | `small`, `normal`, `large` | `normal` |
| stripe | determine whether to apply stripe style | Boolean | - | false |
| border | determine whether to show the border of column | Boolean | - | false |
| data | the data of table | Array | - | [] |
| columns | the title of table | Array | - | [] |
| optional | determine whether the rows are multi-choices | Boolean | - | false |
| pagination | determine whether the pagination is displayed | Boolean | - | false |
| pageSize | amount shown in each page | Number | - | 10 |
| showPageTotal | to display the total number and range | Boolean | - | true |
| showPageSizer | determine whether `page-size` can be changed | Boolean | - | false |
| showPageQuickjump | determine whether you can jump to a page directly | Boolean | - | false |
| height | the height of table | Number / String | - | - |

## Table Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| onSelectionChange | Emitted when the row was selected | rows of selected |
| onSelectAll | Emitted when all rows was selected | rows of selected |
| onPageChange | Emitted when the page was changed | page number |
| onPageSizeChange | Emitted when the page sizer was changed | page size |
