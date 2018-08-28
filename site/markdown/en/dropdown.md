---
imports:
    import {Dropdown,Button} from '@src';
---
# Dropdown

----

Show a folded-styled dropdown menu.

## Basic

The most basic dropdown combines with `Dropdown`，`Dropdown.Menu` and `Dropdown.Item`.

:::demo
```jsx
<Dropdown>
  <span>Dropdown <i class="icon icon-chevron-down"></i></span>
  <Dropdown.Menu slot="menu">
    <Dropdown.Item>Shenzhen</Dropdown.Item>
    <Dropdown.Item>Guangzhou</Dropdown.Item>
    <Dropdown.Item disabled>Shanghai</Dropdown.Item>
    <Dropdown.Item divided>Beijing</Dropdown.Item>
    <Dropdown.Item>hangzhou</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown>
  <Button size="small">Dropdown <i class="icon icon-chevron-down"></i></Button>
  <Dropdown.Menu >
    <Dropdown.Item>Shenzhen</Dropdown.Item>
    <Dropdown.Item>Guangzhou</Dropdown.Item>
    <Dropdown.Item disabled>Shanghai</Dropdown.Item>
    <Dropdown.Item divided>Beijing</Dropdown.Item>
    <Dropdown.Item>hangzhou</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```
:::

## Two Ways to Trigger

Use `trigger` property to change the way of trigger. Default is `hover`.

:::demo
```jsx
<Dropdown>
  <Button size="small">Hover Menu <i class="icon icon-chevron-down"></Button>
  <Dropdown.Menu slot="menu">
    <Dropdown.Item name="shenzhen">Shenzhen</Dropdown.Item>
    <Dropdown.Item name="guangzhou">Guangzhou</Dropdown.Item>
    <Dropdown.Item name="shanghai" disabled>Shanghai</Dropdown.Item>
    <Dropdown.Item name="beijin" divided>Beijing</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown trigger="click">
  <Button size="small">Click Menu <i class="icon icon-chevron-down"></Button>
  <Dropdown.Menu slot="menu">
    <Dropdown.Item name="shenzhen">Shenzhen</Dropdown.Item>
    <Dropdown.Item name="guangzhou">Guangzhou</Dropdown.Item>
    <Dropdown.Item name="shanghai" disabled>Shanghai</Dropdown.Item>
    <Dropdown.Item name="beijin" divided>Beijing</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```
:::

## Placement

To change the alignment of Dropdown, add `placement` property to the Dropdown.

:::demo
```jsx
<Dropdown placement="bottom-right">
  <Button size="small">Hover Menu <i class="icon icon-chevron-down"></Button>
  <Dropdown.Menu slot="menu">
    <Dropdown.Item name="shenzhen">Shenzhen</Dropdown.Item>
    <Dropdown.Item name="guangzhou">Guangzhou</Dropdown.Item>
    <Dropdown.Item name="shanghai" disabled>Shanghai</Dropdown.Item>
    <Dropdown.Item name="beijin" divided>Beijing</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```
:::

## Events

Event `dropdownChange` emitted when the dropdown item was clicked, return the name of `Dropdown.Item`.

:::demo
```jsx
<Dropdown
  dropdownChange={name => {
    console.log(name)
  }}>
  <Button size="small">
    Hover menu <i class="icon icon-chevron-down" />
  </Button>
  <Dropdown.Menu  >
    <Dropdown.Item name="shenzhen">shenzhen</Dropdown.Item>
    <Dropdown.Item name="guangzhou">guangzhou</Dropdown.Item>
    <Dropdown.Item name="shanghai" disabled>
      shanghai
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```
:::

## Dropdown Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| trigger | the way to trigger | String | `click`, `hover`, `focus` | `hover` |
| placement | placement of popup | String | `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right` | `bottom` |

## Dropdown Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| dropdownChange | Emitted when the dropdown item was clicked  | the name of item |

## DropdownItem Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | the value of dropdown item | String | - | - |
| disabled | whether the Dropdown Item is disabled | Boolean | - | false |
| divided | whether to show split line | Boolean | - | false |


