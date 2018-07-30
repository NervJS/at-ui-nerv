---
imports:
    import {Timeline} from '@src';
---
# Timeline 时间轴

---

## 基础用法

基本的时间轴。

:::demo
```jsx
<Timeline>
  <Timeline.Item><p>刷牙洗脸</p></Timeline.Item>
  <Timeline.Item><p>吃早餐</p></Timeline.Item>
  <Timeline.Item><p>上班</p></Timeline.Item>
  <Timeline.Item><p>睡觉</p></Timeline.Item>
</Timeline>
```
:::

## 圆圈颜色

圆圈颜色，绿色用于已完成、成功状态，红色表示错误状态，黄色表示警告状态，蓝色可表示正在进行或其他默认状态。

:::demo
```jsx
<Timeline>
  <Timeline.Item color="blue"><p>刷牙洗脸</p></Timeline.Item>
  <Timeline.Item color="green"><p>吃早餐</p></Timeline.Item>
  <Timeline.Item color="red"><p>上班</p></Timeline.Item>
  <Timeline.Item color="yellow"><p>睡觉</p></Timeline.Item>
</Timeline>
```
:::

## 标记最后一个为幽灵节点

在最后位置添加一个幽灵节点，表示时间轴未完成，还在记录过程中。

:::demo
```jsx
<Timeline pending>
  <Timeline.Item><p>刷牙洗脸</p></Timeline.Item>
  <Timeline.Item><p>吃早餐</p></Timeline.Item>
  <Timeline.Item><p>上班</p></Timeline.Item>
  <Timeline.Item><p>睡觉</p></Timeline.Item>
</Timeline>
```
:::

## 自定义时间轴点

接受一个 `slot` 来自定义轴点的内容，比如一个图标。

:::demo
```jsx
<Timeline>
  <Timeline.Item color="blue">
    <i slot="dot" className="icon icon-github"></i>
    <p>刷牙洗脸</p>
  </Timeline.Item>
  <Timeline.Item color="green">
    <i slot="dot" className="icon icon-zap"></i>
    <p>吃早餐</p>
  </Timeline.Item>
  <Timeline.Item color="red">
    <i slot="dot" className="icon icon-award"></i>
    <p>上班</p>
  </Timeline.Item>
  <Timeline.Item color="yellow">
    <i slot="dot" className="icon icon-watch"></i>
    <p>睡觉</p>
  </Timeline.Item>
</Timeline>
```
:::

## Timeline 参数

| 参数    | 说明         | 类型      | 可选值              | 默认值   |
|-------- |------------ |---------- |-----------------  |-------- |
| pending | 指定最后一个节点是否为幽灵节点 | Boolean | - | false |

## TimelineItem 参数

| 参数    | 说明         | 类型      | 可选值              | 默认值   |
|-------- |------------ |---------- |-----------------  |-------- |
| color | 圆圈颜色 | String | `blue`、`red`、`green`、`yellow` | `blue` |

## TimelineItem Slot

| 名称      | 说明 |
|----------|-------- |
| dot | 替换圈圈 |
| - | 主要内容 |
