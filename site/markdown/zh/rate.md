---
imports:
    import {Rate} from '@src';
---
# Rate 评分

---

评分组件

## 基础用法

最简单的用法。

:::demo
```html
<Rate></Rate>
```
:::

## 文案展现

给评分组件加上文案展示。

:::demo
```html
<Rate 
  showText="true" 
  value={this.state.value2} 
  onChange={(n)=>{this.setState({value2:n})}}
  >
  <span>{ this.state.value2 } 星</span>
</Rate>
```
:::

## 其他图标

可以将星星替换为其他图标。

:::demo
```html
<Rate icon="icon-heart-on"></Rate>
```
:::

## 半星

支持选中半星。

:::demo
```html
<div >
  <Rate
    allowHalf="true"
    showText="true"
    value="0"
    onChange={this.changeHandle}>
  </Rate>
</div>
```
:::

## 只读

只读，无法进行鼠标交互。

:::demo
```html
<div >
  <Rate
    allowHalf="true"
    showText="true"
    value="0"
    disabled="true">
  </Rate>
</div>
```
:::


## Rate 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| count | star 总数 | Number | - | 5 |
| value | 当前值 | String | - | 0 |
| allowHalf | 是否允许选择半颗星 | Boolean | - | `false` |
| disabled | 只读，无法进行交互 | Boolean | - | `false` |
| icon | 指定图标 | String | - | `icon-star` |
| showText | 实现显示辅助文案 | Boolean | - | `false` |

## Rate 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| onChange | star 数目改变时触发 | 改变后的值 |
| onHoverChange | 鼠标在 star 上移动导致数值变化时触发 | 改变后的值 |


## Rate children

| 名称      | 说明 |
|----------|-------- |
| - | 自定义展示文案的内容 |

