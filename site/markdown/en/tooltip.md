---
imports:
    import {Tooltip,Button} from '@src';
---
# Tooltips

----

Tooltips is similar to the `title` attribute of `HTML`. When the mouse is suspended above the element, a tooltip will appears.

## Basic

When the mouse hovers, the tooltip box defaults to the top position.

:::demo
```jsx
<Tooltip placement="top" content="information">
  <Button>Button</Button>
</Tooltip>
<Tooltip content="information"><span>Please hover me</span></Tooltip>
```
:::

## Customize Content

Customize the content of tooltip by `slot="content"` property.

:::demo
```jsx
<Tooltip>
  <span>Information</span>
  <template slot="content">
    <p>Text One</p>
    <p>Text Two</p>
  </template>
</Tooltip>
```
:::

## Placement

The ToolTip has 12 placements choice.

:::demo
```jsx
<div className="show-box">
  <div className="top row col-md-16 flex-center">
    <Tooltip className="item" content="Top Left Message" placement="top-left"><Button>Top Left</Button></Tooltip>
    <Tooltip className="item" content="Top Message" placement="top"><Button>Top</Button></Tooltip>
    <Tooltip className="item" content="Top Right Message" placement="top-right"><Button>Top Right</Button></Tooltip>
  </div>
  <div className="center row col-md-16 flex-between">
    <div className="left col-md-4">
      <Tooltip className="item" content="Left Top Message" placement="left-top"><Button>Left Top</Button></Tooltip>
      <Tooltip className="item" content="Left Message" placement="left"><Button>Left</Button></Tooltip>
      <Tooltip className="item" content="Left Bottom Message" placement="left-bottom"><Button>Left Bottom</Button></Tooltip>
    </div>
    <div className="right col-md-4">
      <Tooltip className="item" content="Right Top Message" placement="right-top"><Button>Right Top</Button></Tooltip>
      <Tooltip className="item" content="Right Message" placement="right"><Button>Right</Button></Tooltip>
      <Tooltip className="item" content="Right Bottom Message" placement="right-bottom"><Button>Right Bottom</Button></Tooltip>
    </div>
  </div>
  <div className="bottom row col-md-16 flex-center">
    <Tooltip className="item" content="Bottom Left Message" placement="bottom-left"><Button>Bottom Left</Button></Tooltip>
    <Tooltip className="item" content="Bottom Message" placement="bottom"><Button>Bottom</Button></Tooltip>
    <Tooltip className="item" content="Bottom Right Message" placement="bottom-right"><Button>Bottom Right</Button></Tooltip>
  </div>
</div>
```
:::

## Tooltip Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| content | the content of tooltip | String | - | - |
| placement | the position of tooltip | String | `top`, `top-left`, `top-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `bottom`, `bottom-left`, `bottom-right` | `top` |

