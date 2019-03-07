---
imports:
    import {Card} from '@src';
---
# Card 卡片

---

## 典型卡片

包含标题、内容和额外操作。

:::demo
```jsx
<Card style={{width: "300px"}}>
  <h4 slot="title">Card Title</h4>
  <div slot="extra"><a>Extra</a></div>
  <div>
    Card Content
  </div>
</Card>
```
:::

## 无边框

通过设置属性 `bordered: false`，不添加边框。

:::demo
```jsx
<Card style={{width:"300px"}} bordered={false}>
  <h4 slot="title">Card Title</h4>
  <div slot="extra"><a>Extra</a></div>
  <div>
    Card Content
  </div>
</Card>
```
:::

## 无阴影
通过设置属性 `noHover: true` 来禁用鼠标悬停时显示的阴影效果。

:::demo
```jsx
<Card style={{width: '300px'}} noHover={true}>
  <h4 slot="title">Card Title</h4>
  <div slot="extra"><a>Extra</a></div>
  <div>
    Card Content
  </div>
</Card>
```
:::

## 只显示卡片内容区域

只显示卡片内容，而不显示标题和额外操作。

:::demo
```jsx
<Card style="width: 300px;" bodyStyle="{ padding: 0 }">
  <div>
    <img style="width: 100%" src="https://misc.aotu.io/koppthe/at-ui/cover.jpg"/>
    <div style="padding: 14px;">
      <p>AT-UI</p>
    </div>
  </div>
</Card>
```
:::


## 预加载的卡片（默认）

数据加载前的文本块 Loading。

:::demo
```jsx
<Card loading="loading" style={{ width: '300px' }}>
  <h4 slot="title">Card Title</h4>
  <div slot="extra"><a>Extra</a></div>
  <div>
    Card Content
  </div>
</Card>
```
:::

## 预加载的卡片（自定义）

自定义数据加载前的文本块 Loading。

:::demo
```jsx
<Card loading="loading" style="width: 300px">
  <h4 slot="title">Card Title</h4>
  <div slot="extra"><a>Extra</a></div>
  <div slot="loading">加载中...</div>
  <div>
    Card Content
  </div>
</Card>
```
:::

## Card 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| bordered | 是否有边框 | Boolean | - | true |
| noHover | 取消鼠标移过时所显示的阴影 | Boolean | - | false |
| bodyStyle | 自定义内容区域的样式 | Object | - | {} |
| loading | 当卡片内容还在加载中时，是否显示 loading | Boolean | - | false |

## Card slot

| 名称      | 说明 |
|----------|-------- |
| title | 自定义卡片标题 |
| extra | 自定义额外显示的内容，默认位置是在标题右侧 |
| loading | 自定义 loading 显示内容 |
| - | 卡片内容 |
