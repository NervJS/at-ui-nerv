---
imports:
    import {Slider} from '@src';
---
# Slider

----

Slider is used to control the value within specified numerical range.

## Basic

Basic slider, use `v-model` to binding value, the range is `0~100` default.

:::demo
```jsx
< Slider  value={this.state.val1} onChange={(val)=>{this.setState({
  val1:val
})}} ></ Slider>
```
```state
{
  val1:1
}
```
:::

## Disabled

To make a slider as disabled, add `disabled` property to the Slider.

:::demo
```jsx
< Slider   disabled></ Slider>
```
:::

## Customize Range

The minimum and maximum values are set by `min` and `max` properties.

:::demo
```jsx
< Slider   min={20} max={80}></ Slider>
```
:::

## Discrete Value

Control the interval of slider through the `step` property, the value of interval is `1` by default.

:::demo
```jsx
< Slider step="10"></ Slider>
```
:::

## Slider Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | the value of slider | Number | - | - |
| step | the granularity that slider can step through values | Number | - | 1 |
| min | minimum | Number | - | 0 |
| max | maximum | Number | - | 100 |
| disabled | whether slider is disabled | Boolean | - | false |

## Slider Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| onChange | Emitted when the value of slider changed | value |

