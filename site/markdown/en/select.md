---
imports:
    import {Select} from '@src';
---
# Select

----

## Basic

To make a select as disabled, add `disabled` property to the Select.

:::demo
```html
<Select style="width:100px">
  <Select.Option value="1">Shenzhen</Select.Option>
  <Select.Option value="2">GuangzhouGuangzhouGuangzhouGuangzhouGuangzhouGuangzhouGuangzhouGuangzhouGuangzhouGuangzhou</Select.Option>
  <Select.Option value="3">Shanghai</Select.Option>
  <Select.Option value="4">Beijing</Select.Option>
  <Select.Option value="5">chengdu</Select.Option>
</Select>

<Select value="1"  style="width:100px">
  <Select.Option value="1">Shenzhen</Select.Option>
  <Select.Option value="2">Guangzhou</Select.Option>
</Select>

<Select disabled style="width:100px">
  <Select.Option value="1">Shenzhen</Select.Option>
  <Select.Option value="2">Guangzhou</Select.Option>
</Select>
```
:::


## Size

There are three sizes of a Select: `large`，`normal`，`small`.

:::demo
```html
<Select   size="small" style="width: 100px">
  <Select.Option value="1">Shenzhen</Select.Option>
  <Select.Option value="2">Guangzhou</Select.Option>
  <Select.Option value="3">Shanghai</Select.Option>
  <Select.Option value="4">Beijing</Select.Option>
  <Select.Option value="5">chengdu</Select.Option>
</Select>
<Select   size="normal" style="width: 100px">
  <Select.Option value="1">Shenzhen</Select.Option>
  <Select.Option value="2">Guangzhou</Select.Option>
  <Select.Option value="3">Shanghai</Select.Option>
  <Select.Option value="4">Beijing</Select.Option>
  <Select.Option value="5">chengdu</Select.Option>
</Select>
<Select   size="large" style="width: 100px">
  <Select.Option value="1">Shenzhen</Select.Option>
  <Select.Option value="2">Guangzhou</Select.Option>
  <Select.Option value="3">Shanghai</Select.Option>
  <Select.Option value="4">Beijing</Select.Option>
  <Select.Option value="5">chengdu</Select.Option>
</Select>
```
:::


## Clearable

Set `clearable` property to give Select Button the ability to empty options, only enable in Single Select Button.

:::demo
```html
<Select   clearable size="large" style="width: 100px">
  <Select.Option value="1">Shenzhen</Select.Option>
  <Select.Option value="2">Guangzhou</Select.Option>
  <Select.Option value="3">Shanghai</Select.Option>
  <Select.Option value="4">Beijing</Select.Option>
  <Select.Option value="5">chengdu</Select.Option>
</Select>

```
:::


## Option Grouop

Options can be grouped by `OptionGroup` component, and the name of the group can be set using the `label` property.

:::demo
```html
<Select style="width: 100px" option='1'>
  <Select.OptionGroup label="广东省">
    <Select.Option value="1">Shenzhen</Select.Option>
    <Select.Option value="2">Guangzhou</Select.Option>
    <Select.Option value="3">珠海</Select.Option>
  </Select.OptionGroup>
  <Select.OptionGroup label="其他">
    <Select.Option value="4">Shanghai</Select.Option>
    <Select.Option value="5">Beijing</Select.Option>
    <Select.Option value="6" disabled>chengdu</Select.Option>
    <Select.Option value="7">kunming</Select.Option>
    <Select.Option value="8">hangzhou</Select.Option>
  </Select.OptionGroup>
</Select>

```
:::


## Customize Template

Customize the option content. When using label property in Option, the option will show the label preferentially. Otherwise the selected content will be same with the customise content and that is not what we want.

:::demo
```html
<Select   style="width: 140px">
  <Select.Option value="1" label="Shenzhen"><span>Shenzhen</span><span style="float: right;opacity: .6;font-size: 0.8em;">Shenzhen</span></Select.Option>
  <Select.Option value="2" label="Guangzhou"><span>Guangzhou</span><span style="float: right;opacity: .6;font-size: 0.8em;">Guangzhou</span></Select.Option>
  <Select.Option value="3" label="Shanghai"><span>Shanghai</span><span style="float: right;opacity: .6;font-size: 0.8em;">Shanghai</span></Select.Option>
  <Select.Option value="4" label="Beijing"><span>Beijing</span><span style="float: right;opacity: .6;font-size: 0.8em;">Beijin</span></Select.Option>
  <Select.Option value="5" label="chengdu"><span>chengdu</span><span style="float: right;opacity: .6;font-size: 0.8em;">Chengdu</span></Select.Option>
</Select>

```
:::


## Multiple

Add `multiple` property can support multiple select. In the multiple mode, model will accept an array value.

:::demo
```html
<Select   multiple style="width: 240px">
  <Select.Option value="1">Shenzhen</Select.Option>
  <Select.Option value="2">Guangzhou</Select.Option>
  <Select.Option value="3">Shanghai</Select.Option>
  <Select.Option value="4">Beijing</Select.Option>
  <Select.Option value="5">chengdu</Select.Option>
</Select>

```
:::


## Searchable

To set search mode, add `filterable` property to the Select.

:::demo
```html
<Select   filterable size="large" style="width: 240px">
  <Select.Option value="1">Shenzhen</Select.Option>
  <Select.Option value="2">Guangzhou</Select.Option>
  <Select.Option value="3">Shanghai</Select.Option>
  <Select.Option value="4">Beijing</Select.Option>
  <Select.Option value="5">chengdu</Select.Option>
  <Select.Option value="6">xiameng</Select.Option>
  <Select.Option value="7">kunming</Select.Option>
  <Select.Option value="8">hangzhou</Select.Option>
</Select>
```
:::

## Select Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
| :---------- | :-------------- | :---------- | :-----------------------------  | :-------- |
| value | value of Select button，binding with `v-model` | String / Number / Array | - | - |
| multiple | whether support multiple | Boolean | - | false |
| disabled | whether Select is disabled | Boolean | - | false |
| clearable | whether can clear option | Boolean | - | false |
| filterable | whether support filter | Boolean | - | false |
| placeholder | text for placeholder | String | - | Select |
| size | size of Select | String | `large`, `normal`, `small` | normal |
| notFoundText | text to show when search no found | String | - | Nothing matched |
| placement | the direction of popup | String | `top`, `bottom` | bottom |
| valueWithLabel | set select return value what include label and value, which default return value | Boolean | - | false |

## Select Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| onChange | Emitted when selected Option change | values of selected items |


