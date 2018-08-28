---
imports:
    import {Checkbox} from '@src';
---
# Checkbox

----

## Basic

Need to bind `model` separately for standalone use.

:::demo
```jsx
<Checkbox 
onChange={(checked,label)=>{this.setState({val1: checked ? true:false})}} checked={this.state.val1}
label="shenzhen">
shenzhen
</Checkbox>
<p class="demo-desc">{ this.state.val1 ? 'true':'false' }</p>
```
:::

## Disabled

To make a checkbox as disabled, add `disabled` property to the `Checkbox`.

:::demo
```jsx
<Checkbox 
onChange={(e)=>{//this.setState({val2: e ? true:false})
}}
label="shenzhen" disabled
>
shenzhen
</Checkbox>
<Checkbox 
onChange={(e)=>{
  //this.setState({val3: e ? true:false})
  }
  }
  label="O2Team" disabled checked
  >
  O2Team
</Checkbox>
```
:::

## Checkbox Group

Use `CheckboxGroup` combined with array to generate a combination.

:::demo
```jsx
<Checkbox.Group
value={this.state.val4 ||['shenzhen', 'beijing']}
onChange={(e)=>{this.setState({val4: e})
}
}
>
  <Checkbox label="shenzhen">shenzhen</Checkbox>
  <Checkbox label="beijing">beijing</Checkbox>
  <Checkbox label="shanghai">shanghai</Checkbox>
  <Checkbox label="guangzhou" disabled>guangzhou</Checkbox>
  <Checkbox label="o2team" disabled>o2team</Checkbox>
</Checkbox.Group>
<p class="demo-desc">{ `[${(this.state.val4 || ['shenzhen', 'beijing']).join(',')}]` }</p>
```
:::

## Checkbox Props

| Property      | Description          | Type      | Accepted values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | value of selection | String | - | - |
| disabled | disable selection or not | Boolean | - | false |
| checked | whether the checkbox is selected | Boolean | - | false |

## Checkbox Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| onChange | Emitted when the state of selection is changed | the `lavel` value of selected button |

## Checkbox Group Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| onChange | Emitted when the state of selection is changed | the `lavel` value of selected button |

