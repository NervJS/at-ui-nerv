---
imports:
    import {Button} from '@src';
---
# Button

----

Clicking a button will trigger an operation.

## Type

There are three basic buttons: `Primary` 、 `Default` 、 `Text`.

:::demo
```jsx
<Button type="primary">Primary Button</Button>
<Button>Default Button</Button>
<Button type="text">Text Button</Button>
```
:::

## Disabled

To make a button as disabled, add `disabled` property to the `Button`.

:::demo
```jsx
<Button type="primary" disabled>Primary Button</Button>
<Button hollow disabled>Default Button</Button>
<Button type="text" disabled>Text Button</Button>
```
:::

## With Color Tendency

Button with color tendency gives user an operating hint.

:::demo
```jsx
<div class="row">
  <Button hollow>Default</Button>
  <Button type="primary" hollow>Primary</Button>
  <Button type="success" hollow>Success</Button>
  <Button type="error" hollow>Error</Button>
  <Button type="warning" hollow>Warning</Button>
  <Button type="info" hollow>Info</Button>
</div>
<div class="row">
  <Button>Default</Button>
  <Button type="primary">Primary</Button>
  <Button type="success">Success</Button>
  <Button type="error">Error</Button>
  <Button type="warning">Warning</Button>
  <Button type="info">Info</Button>
</div>
```
:::

## With Icon

`Button` components can contain an `Icon`. This is done by setting the `Icon` property or placing an `Icon` within the `Button`. The `Icon` is fixed in front of the text that setted by `icon` property.

:::demo
```jsx
<div class="row">
  <Button icon="icon-download">Download</Button>
  <Button icon="icon-user-plus">Add User</Button>
  <Button icon="icon-edit"></Button>
  <Button type="primary" icon="icon-search"></Button>
</div>
<div class="row">
  <Button icon="icon-edit" circle></Button>
  <Button type="primary" icon="icon-search" circle></Button>
</div>
```
:::

## Loading

A loading indicator can be added to button by setting the `loading` property.

:::demo
```jsx
<Button loading>Loading</Button>
<Button loading></Button>
<Button loading circle></Button>
```
:::

## Button Group

Buttons can be grouped by placing multiple `Button` components into a `ButtonGroup` component.

:::demo
```jsx
<Button-group>
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</Button-group>
<br>
<Button-group>
  <Button icon="icon-edit" title="Edit"></Button>
  <Button icon="icon-copy" title="Copy"></Button>
  <Button icon="icon-download" title="Download"></Button>
</Button-group>
<br>
<Button-group>
  <Button><i class="icon icon-chevron-left"></i>Go back</Button>
  <Button>Go forward<i class="icon icon-chevron-right"></i></Button>
</Button-group>
```
:::

## Size

Size of Button: `large`, `normal`, `small`, `smaller`.<br>
Size of GroupButton: `large`, `normal`, `small`.<br>
Set the `size` property to use different size of button, it's `normal` size by default.

:::demo
```jsx
<div>
  <Button type="primary" size="large">Large Button</Button>
  <Button type="primary">Normal Button</Button>
  <Button type="primary" size="small">Small Button</Button>
  <Button type="primary" size="smaller">Smaller Button</Button>
</div>
<div style="margin-top: 8px;">
  <Button type="primary" size="large" icon="icon-search" circle></Button>
  <Button type="primary" icon="icon-search" circle></Button>
  <Button type="primary" size="small" icon="icon-search" circle></Button>
  <Button type="primary" size="smaller" icon="icon-search" circle></Button>
</div>
<div style="margin-top: 8px;">
  <Button-group size="large">
    <Button>Left</Button>
    <Button>Center</Button>
    <Button>Right</Button>
  </Button-group>
  <Button-group>
    <Button>Left</Button>
    <Button>Center</Button>
    <Button>Right</Button>
  </Button-group>
  <Button-group size="small">
    <Button>Left</Button>
    <Button>Center</Button>
    <Button>Right</Button>
  </Button-group>
</div>
```
:::

## Button Props

| Property      | Description          | Type      | Accepted values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | type of button | String | `default`, `primary`, `success`, `error`, `warning`, `info`, `text` | - |
| nativeType | same as native type | String | - | `button` |
| size | size of button | String | `large`, `small`, `smaller` | normal |
| hollow | whether a hollow button | Boolean | - | false |
| icon | set the icon of button, input the `classname` | String | see the document of `Icon` | - |
| loading | set the loading status of button | Boolean | - | false |
| circle | set the circle shape of button | Boolean | - | false |

## Button Group Props

| Property      | Description          | Type      | Accepted values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | size of button | String | `large`, `small` | normal |
| gap | gap of the buttons | Number | - | -1 |

