---
imports:
    import {InputNumber} from '@src';
---
# InputNumber 数字输入框

----

## 基础用法

支持传入 `step` 精度，以及指定取值范围 `max` , `min`。默认 `step` 取整数 1

:::demo
```jsx
<p class="demo-desc">基本输入框</p>
<div class="row no-gutter">
  <div class="col-md-4">
    <InputNumber onChange={(n)=>{console.log(n)}}></InputNumber><br>
  </div>
</div>
<p class="demo-desc">有取值范围的输入框，min=0, max=5</p>
<div class="row no-gutter">
  <div class="col-md-4">
    <InputNumber min="0" max="5"></InputNumber>
  </div>
</div>
```
:::

## 不可用状态

设置属性 `disabled` 禁用输入框

:::demo
```jsx
<div class="row no-gutter">
  <div class="col-md-4">
    <InputNumber disabled></InputNumber>
  </div>
</div>
```
:::

## 小数输入

参数 `step` 可以配置成小数

:::demo
```jsx
<p class="demo-desc">step=0.3, min=1</p>
<div class="row no-gutter">
  <div class="col-md-4">
    <InputNumber onChange={(n)=>{console.log(n)}} step="0.3" min="1"></InputNumber>
  </div>
</div>
```
:::

## 不同尺寸

配置属性 `size`，可控制输入框的尺寸，默认支持三种尺寸：`large`，`normal`，`small`

:::demo
```jsx
<div class="row">
  <div class="col-sm-12 col-md-4">
    <InputNumber size="small"></InputNumber>
  </div>
  <div class="col-sm-12 col-md-4">
    <InputNumber></InputNumber>
  </div>
  <div class="col-sm-12 col-md-4">
    <InputNumber size="large"></InputNumber>
  </div>
</div>
```
:::

## InputNumber 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 输入框的值 | Number | - | - |
| size | 输入框尺寸 | String | `small`, `normal`, `large` | normal |
| step | 每次递增或递减的数目 | Number | - | 1 |
| min | 最小值 | Number | - | -Infinity |
| max | 最大值 | Number | - | Infinity |
| disabled | 是否禁用输入框 | Boolean | - | false |
| readonly | 是否设置成只读 | Boolean | - | false |
| autofocus | 是否自动聚焦到输入框 | Boolean | - | false |

## InputNumber 事件
| 事件名称  | 说明               | 返回参数 |
| --------- | ------------------ | -------- |
| onFocus | 获得焦点时触发 |  - |
| onBlur | 失去焦点时触发 |  - |
| onChange | 绑定的值有变化时触发 | - |
