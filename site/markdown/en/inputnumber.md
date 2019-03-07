---
imports:
    import {InputNumber} from '@src';
---
# InputNumber

----

## Basic

Supports specifies precision by property `step`, and specifies the range by `max` and `min`. The default `step` takes integer 1.

:::demo
```jsx
<p class="demo-desc">Basic InputNumber</p>
<div class="row no-gutter">
  <div class="col-md-4">
    <InputNumber onChange={(n)=>{console.log(n)}></InputNumber><br>
  </div>
</div>
<p class="demo-desc">With range，min=0, max=5</p>
<div class="row no-gutter">
  <div class="col-md-4">
    <InputNumber min="0" max="5"></InputNumber>
  </div>
</div>
```
:::

## Disabled

To make a inputnumber box as disabled, add `disabled` property to the `InputNumber`

:::demo
```jsx
<div class="row no-gutter">
  <div class="col-md-4">
    <InputNumber disabled></InputNumber>
  </div>
</div>
```
:::

## Decimals

A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the `step` prop.

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

## Size

There are three sizes of an InputNumber box: `large`，`normal`，`small`.

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

## InputNumber Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | value of inputnumber | Number | - | - |
| size | size of inputnumber | String | `small`, `normal`, `large` | normal |
| step | The number to which the current value is increased or decreased. It can be an integer or decimal | Number | - | 1 |
| min | min value | Number | - | -Infinity |
| max | max value | Number | - | Infinity |
| disabled | whether inputnumber is disabled | Boolean | - | false |
| readonly | same as native input | Boolean | - | false |
| autofocus | same as native input | Boolean | - | false |

## InputNumber Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| onFocus | Emitted when focus | event |
| onBlur | Emitted when blur | event |
| onChange | Emitted when the value of input is changed | the value of input |

