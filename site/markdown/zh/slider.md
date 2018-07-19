---
imports:
    import {Slider} from '@src';
---
# Slider 滑动输入条

----

滑动输入条，用于控制用户在规定的数值区间内进行选择

## 基础用法

基本滑动条，通过 onChange 绑定数据，默认取值范围为 `0~100`

:::demo
```jsx
< Slider  value={this.state.val1} onChange={(val)=>{this.setState({
  val1:val
})}} ></ Slider>
```
:::

## 不可用状态

设置属性 `disabled` 禁用滑动条

:::demo
```jsx
< Slider   disabled></ Slider>
```
:::

## 自定义取值范围

通过属性 `min`， `max` 分别设置最小和最大可取值

:::demo
```jsx
< Slider   min={20} max={80}></ Slider>
```
:::

## 离散值

可通过属性 `step` 控制每次滑动的间隔，默认间隔为 `1`

:::demo
```jsx
< Slider step="10"></ Slider>
```
:::

## Slider 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 当前的值 | Number | - | - |
| step | 步长 | Number | - | 1 |
| min | 最小值 | Number | - | 0 |
| max | 最大值 | Number | - | 100 |
| disabled | 是否禁用 | Boolean | - | false |

## Slider 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| onChange | 绑定的值有变化时触发 | 改变后的值 |

