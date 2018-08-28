---
imports:
  import {Popover,Button} from '@src'

---
# Popover

----

## Basic

Display in the middle and activated in `click` event by default, similar to `Tooltip` component.

:::demo
```jsx
<Popover placement="top" title="Title" content="Top Placement">
  <Button size="small">Click</Button>
</Popover>
<Popover content="Top Placement" title="Title">
   Please click on me!
</Popover>
```
:::

## Two Ways to Trigger

Use `trigger` property to change the way of trigger. Default is `click`.

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

## Placement

Specify the position of Popover by `placement` property. Default is `top`.

:::demo
```jsx
<Popover trigger="hover" content="Top Placement">
  <Button size="small">Top</Button >
</Popover>
<Popover trigger="hover" content="Top Placement" placement="bottom">
  <Button size="small">Bottom</Button >
</Popover>
<Popover trigger="hover" content="Top Placement" placement="left">
  <Button size="small">Left</Button >
</Popover>
<Popover trigger="hover" content="Top Placement" placement="right">
  <Button size="small">Right</Button >
</Popover>
```
:::

## Nested Content

In addition to using the properties `title` and `content`, you can also use `slot="title"` and `slot="content"` to set the nested content of popover.

:::demo
```jsx
<Popover placement="top"   onToggle="toggleShow">
  <Button size="small">Delete</Button>
  <template slot="content">
    <p>This is part of the content, sure to delete it?</p>
    <div style={{textAlign: "right",marginTop: '8px'}}>
      <Button size="smaller" onClick="show = false">Cancel</Button>
      <Button type="primary" size="smaller" onClick="show = false">Sure</Button>
    </div>
  </template>
</Popover>
```
:::

## Popover Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | the title of popover | String | - | - |
| content | the content of popover | String | - | - |
| trigger | the way to trigger | String | `hover`, `focus`, `click` | `click` |
| placement | the position of popover | String | `top`, `top-left`, `top-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `bottom`, `bottom-left`, `bottom-right` | `top` |

