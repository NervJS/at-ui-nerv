---
imports:
    import {Badge,Button} from '@src';
---
# Badge

----

## Independent Use

Do not wrap any elements, similar to the `Tag` component.

:::demo
```html
<Badge value="3"></Badge>
<Badge value="23"></Badge>
<Badge value="199"></Badge>
```
:::

## Content

Content can be either digital or text.

:::demo
```html
<Badge value="new"></Badge>
<Badge value="hot"></Badge>
```
:::

## Status

To specify different status of badge, add `status` property to the Badge.<br>
There are four status of Badge: `primary`, `success`, `warning`, `info`.

:::demo
```html
Primary <Badge value={123}></Badge><br>
Success <Badge value={123} status="success"></Badge><br>
Warning <Badge value={123} status="warning"></Badge><br>
Info <Badge value={123} status="info"></Badge>
```
:::

## Maximum

Use `maxNum` property to customize the maximum of Badge, exceed the maximum value will display as `+`.

:::demo
```html
<Badge value={123} maxNum="99"></Badge>
```
:::

## Combination Usage

Combine with other components to display the amount of messages.

:::demo
```html
<Badge value="3">
  <Button>Reply</Button>
</Badge>
<Badge value="111" maxNum="99">
  <Button>Reply</Button>
</Badge>
<Badge value="new">
  <Button>Reply</Button>
</Badge>
```
:::

## Red Badge

This will simply display a red badge without a specific count.

:::demo
```html
<Badge value="12" dot></Badge>
<Badge value="12" dot>
  <Button>Reply</Button>
</Badge>
<Badge value="12" dot>
  <i class="icon icon-inbox"></i>
</Badge>
<Badge value="12" dot>
  <span>Message</span>
</Badge>
```
:::

## Dynamic

The count will be animated as it changes.

:::demo
```html
<Badge value={ this.state.num || 1} maxNum="12">
  <span class="badge-example"></span>
</Badge>
<Badge value={ this.state.num || 1} show={this.state.show} dot>
  <span class="badge-example"></span>
</Badge>
<br>
<Button.Group size="small">
  <Button onClick={()=>{this.setState((prevState, props)=>{
    if(typeof prevState.num == 'undefined' ) {
      prevState.num = 0
    }
    prevState.num-= 1
    return prevState
  })}}>-</Button>
  <Button onClick={()=>{this.setState((prevState, props)=>{
    if(typeof prevState.num == 'undefined' ) {
      prevState.num = 0
    }
    prevState.num+= 1

    return prevState
  })}}>+</Button>
</Button.Group>
<Button size="small" onClick={()=>{
  this.setState((prevState)=>{
    prevState.show = !prevState.show
    return prevState
  })
}}>{this.state.show ? 'Hide' : 'Show'}小红点</Button>
```
:::

## Badge Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | the content of Badge | String / Number | - | - |
| maxNum | maximum value, exceed the maximum will display as `+` | Number | - | 99 |
| dot | whether show red badge | Boolean | - | false |
| status | type of Badge | String | `success`, `warning`, `info` | - |
| show | whether show Badge | Boolean | - | true |

