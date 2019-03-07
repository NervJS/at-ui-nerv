---
imports:
    import {Timeline} from '@src';
---
# Timeline

---

## Basic

Basic timeline.

:::demo
```jsx
<Timeline>
  <Timeline.Item><p>Brush teeth and wash face</p></Timeline.Item>
  <Timeline.Item><p>Have breakfast</p></Timeline.Item>
  <Timeline.Item><p>Work</p></Timeline.Item>
  <Timeline.Item><p>Sleep</p></Timeline.Item>
</Timeline>
```
:::

## Circle Colors

Set the color of circles. green means completed or success status, red means error, yellow means warning, and blue means ongoing or other default status.

:::demo
```jsx
<Timeline>
  <Timeline.Item><p>Brush teeth and wash face</p></Timeline.Item>
  <Timeline.Item><p>Have breakfast</p></Timeline.Item>
  <Timeline.Item><p>Work</p></Timeline.Item>
  <Timeline.Item><p>Sleep</p></Timeline.Item>
</Timeline>
```
:::

## Last Item

When the timeline is incomplete and ongoing, put a ghost item at last.

:::demo
```jsx
<Timeline pending>
   <Timeline.Item><p>Brush teeth and wash face</p></Timeline.Item>
  <Timeline.Item><p>Have breakfast</p></Timeline.Item>
  <Timeline.Item><p>Work</p></Timeline.Item>
  <Timeline.Item><p>Sleep</p></Timeline.Item>
</Timeline>
```
:::

## Custom Timeline Items

Accepts a `slot` to customize the timeline item's content, such as the icon.

:::demo
```jsx
<Timeline>
  <Timeline.Item color="blue">
    <i slot="dot" class="icon icon-github"></i>
    <p>Brush teeth and wash face</p>
  </Timeline.Item>
  <Timeline.Item color="green">
    <i slot="dot" class="icon icon-zap"></i>
   <p>Have breakfast</p>
  </Timeline.Item>
  <Timeline.Item color="red">
    <i slot="dot" class="icon icon-award"></i>
    <p>Work</p>
  </Timeline.Item>
  <Timeline.Item color="yellow">
    <i slot="dot" class="icon icon-watch"></i>
   <p>Sleep</p>
  </Timeline.Item>
</Timeline>
```
:::

## Timeline Props

| Property    | Description         | Type      | Accepted Values | Default  |
|-------- |------------ |---------- |-----------------  |-------- |
| pending | to specify whether the last node is a ghost node | Boolean | - | false |

## TimelineItem Props

| Property    | Description         | Type      | Accepted Values | Default  |
|-------- |------------ |---------- |-----------------  |-------- |
| color | circle color | String | `blue`、`red`、`green`、`yellow` | `blue` |

## TimelineItem Slot

| Name      | Description |
|----------|-------- |
| dot | custom defined timeline item content |
| - | main content |
