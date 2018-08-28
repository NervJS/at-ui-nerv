---
imports:
    import {Rate} from '@src';
---
# Rate

---

Rate component

## Basic

The simplest usage.

:::demo
```html
<Rate></Rate>
```
:::

## Show copywriting

Add copywriting in rate component.

:::demo
```html
<Rate 
  showText="true" 
  value={this.state.value2} 
  onChange={(n)=>{this.setState({value2:n})}}
  >
  <span>{ this.state.value2 } stars</span>
</Rate>
```
:::

## Other icon

Replace the default star to other icon.

:::demo
```html
<Rate icon="icon-heart-on"></Rate>
```
:::

## Half star

Support select half star.

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

## Read only

Read only，can't use mouse to interact.

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


## Rate Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| count | star count | Number | - | 5 |
| value | current value | String | - | 0 |
| allowHalf | whether to allow semi selection | Boolean | - | `false` |
| disabled | read only, unable to interact | Boolean | - | `false` |
| icon | to specify the icon | String | - | `icon-star` |
| showText | whether to display a copywriting | Boolean | - | `false` |

## Rate Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| onChange | callback when select value | value |
| onHoverChange | callback when hover item | value |

## Rate slot

| Name      | Description |
|----------|-------- |
| - | customize the contents of the copywriting |

