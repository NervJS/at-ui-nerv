---
imports:
    import {Tag} from '@src';
---
# Tag

----

## Basic Tag

To make a tag get close button, add `closable` property to `Tag`. Trigger `onClose` event when the button clicked.

:::demo
```html
<Tag>Tag One</Tag>
<Tag>Tag Two</Tag>
<Tag>Tag Three</Tag>
<Tag name="Tag Four" closable onClose={()=>{
  alert('close')
}}>Tag Four</Tag>
```
:::

## With Color Tendency

Tag with color tendency gives different types. Set property `color`. It also provide Hex value, such as `color="#6190E8"`.

:::demo
```html
<Tag color="default">Tag One</Tag>
<Tag color="primary">Tag Two</Tag>
<Tag color="success">Tag Three</Tag>
<Tag color="error">Tag Four</Tag>
<Tag color="warning">Tag Five</Tag>
<Tag color="info">Tag Six</Tag>
<Tag color="#ecefce">#ecefce</Tag>
```
:::

## Tag Props

| Property      | Description          | Type      | Accepted values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | the name of tag used for close event | Boolean | — | false |
| color | type | String / Hex | Hex value or `default`, `primary`, `success`, `error`, `warning`, `info` | default |
| closable | can be closed | Boolean | — | false |

## Tag Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| onClose | Emitted when closed | event |

