---
imports:
  import {Popover,Button} from '@src'

---
# Popover 弹出框

----

## 基本用法

默认显示在正中间，并且以 `click` 方式激活，使用方法跟 `Tooltip` 基本一样

:::demo
 ```jsx
<Popover placement="top" title="Title" content="Top Placement">
  <Button size="small">点击</Button>
</Popover>
<Popover content="Top Placement" title="Title">
  一段文字
</Popover>
```
:::

## 更改激活的方式

默认使用 `click` 方式激活，可设置 `trigger` 更换激活方式

:::demo
 ```jsx
<Popover trigger="click" content="Top Placement">
  <Button size="small">Click</Button>
</Popover>
<Popover trigger="hover" title="Title" content="Top Placement">
  <Button size="small">Hover</Button>
</Popover>
```
:::

## 弹出框的位置

设置属性 `placement` 可更改弹出框的位置，默认显示在顶部 `top`

:::demo
 ```jsx
<Popover trigger="hover" content="Top Placement">
  <Button size="small">Top</Button>
</Popover>
<Popover trigger="hover" content="Top Placement" placement="bottom">
  <Button size="small">Bottom</Button>
</Popover>
<Popover trigger="hover" content="Top Placement" placement="left">
  <Button size="small">Left</Button>
</Popover>
<Popover trigger="hover" content="Top Placement" placement="right">
  <Button size="small">Right</Button>
</Popover>
```
:::

## 嵌套内容

除了可以使用属性 `title` 和 `content` 设置弹出框的内容，还可以使用 `slot="title"` 和 `slot="content"` 的方式设置弹出框的嵌套内容

:::demo
 ```jsx
<Popover placement="top"   onToggle="toggleShow">
  <Button size="small">删除</Button>
  <template slot="content">
    <p>这是一段内容，确定删除吗？</p>
    <div style={{textAlign: "right",marginTop: '8px'}}>
      <Button size="smaller" onClick={()=>{console.log('cancel')}} >取消</Button>
      <Button type="primary" size="smaller" >确定</Button>
    </div>
  </template>
</Popover>
```
:::

## Popover 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题文字 | String | - | - |
| content | 提示文字 | String | - | - |
| trigger | 触发的事件类型 | String | `hover`, `focus`, `click` | `click` |
| placement | 弹出框的位置 | String | `top`, `top-left`, `top-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `bottom`, `bottom-left`, `bottom-right` | `top` |
