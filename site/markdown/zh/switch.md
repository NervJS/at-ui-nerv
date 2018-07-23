---
imports:
    import {Switch} from '@src';
---
# Switch 开关

----

开关用于表示两种状态之间的切换，跟单独使用的 `checkbox` 有点类似，但 `switch` 开关更多的是触发即可改变状态，而 `checkbox` 更多的是用于表格，一般都需要配合表单的提交操作

## 基础用法

基础用法，状态切换会触发事件

:::demo
 ```jsx
<Switch    onChange={(val)=>{this.setState({
  check: val
})}}></Switch>
<span>{this.state.check}</span>
```
:::

## 内嵌文字或图标

开关内部内容可自定义，例如插入文字或图标，增强视觉效果。通过 `slot="checkedText"` 和 `slot="unCheckedText"` 完成

:::demo
 ```jsx
<Switch>
  <span slot="checkedText">开</span>
  <span slot="unCheckedText">关</span>
</Switch>
<Switch>
  <span slot="checkedText"><i class="icon icon-left-arrow"></i></span>
  <span slot="unCheckedText"><i class="icon icon-right-arrow"></i></span>
</Switch>
```
:::

## 不可用开关

添加属性 `disabled` 禁用开关按钮

:::demo
 ```jsx
<Switch disabled value="true">
  <span slot="checkedText">开</span>
  <span slot="unCheckedText">关</span>
</Switch>
<Switch disabled>
  <span slot="checkedText">开</span>
  <span slot="unCheckedText">关</span>
</Switch>
<Switch disabled></Switch>
```
:::

## 不同尺寸

添加属性 `size` 可设置按钮的尺寸大小，默认提供三种尺寸：`small`，`normal`，`large`

:::demo
 ```jsx
<div>
  <Switch size="small"></Switch>
  <Switch size="small">
    <span slot="checkedText">开</span>
    <span slot="unCheckedText">关</span>
  </Switch>
  <Switch size="small" disabled></Switch>
</div>
<div style="margin-top: 8px;">
  <Switch></Switch>
  <Switch>
    <span slot="checkedText">开</span>
    <span slot="unCheckedText">关</span>
  </Switch>
  <Switch disabled></Switch>
</div>
<div style="margin-top: 8px;">
  <Switch size="large"></Switch>
  <Switch size="large">
    <span slot="checkedText">开</span>
    <span slot="unCheckedText">关</span>
  </Switch >
  <Switch size="large" disabled></Switch>
</div>
```
:::

## Switch 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | Switch 状态值 | Boolean | - | false |
| size | 开关的尺寸大小 | String | `small`, `normal`, `large` | normal |
| disabled | 是否禁用按钮 | Boolean | — | false |

## Switch Slots

| 名称      | 说明          |
|---------- |-------------- |
| checkedText | 自定义打开时的内容 |
| unCheckedText | 自定义关闭时的内容 |

## Switch 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| onChange | 开关状态变化时触发 | 开关的状态 |
