---
imports:
    import {Radio} from '@src';
---
# Radio

----

## Basic

Each button required a single `model` binding.

:::demo
```jsx
<Radio
  onChange={(label)=>{ this.setState({radio1:label})}}
  value={ this.state.radio1} label="1" >
  选项一
</Radio>
<Radio 
  onChange={(label)=>{this.setState({radio1:label})}} 
  value={this.state.radio1} label="2" >
  选项二
</Radio>
```
:::

## Disabled

To make a radio button as disabled, add `disabled` property to the `Radio`.

:::demo
```jsx
<Radio onChange={(label)=>{this.setState({radio2:label})}} value={this.state.radio1} label="3" disabled>Disabled and not selected</Radio>
<Radio onChange={(label)=>{this.setState({radio2:label})}} value={this.state.radio1} label="4" disabled>Disabled and selected</Radio>
```
:::

## Radio Group

A group of radio components. Combined `AtRadioGroup` with `AtRadio`

::: demo
```jsx
<Radio.Group 
  value={this.state.groupVal} 
  onRadioGroupChange={(label)=>{this.setState({
    groupVal: label
  })}}>
  <Radio label="1">Option One</Radio>
  <Radio label="2">Option Two</Radio>
  <Radio label="3">Option Three</Radio>
</Radio.Group>
```
:::


## Radio Button Group

Button style of Radio Group. Combined `AtRadioGroup` with `AtRadioButton`

:::demo
```jsx
<Radio.Group  value={this.state.groupVal2} 
  onRadioGroupChange={(label)=>{this.setState({
    groupVal2:label
  })}}>
  <Radio.Button label="Beijing">Beijing</Radio.Button>
  <Radio.Button label="Shanghai" disabled>Shanghai</Radio.Button>
  <Radio.Button label="Shenzhen">Shenzhen</Radio.Button>
  <Radio.Button label="O2Team">O2Team</Radio.Button>
</Radio.Group>
```
:::

## Customize

Use `fill` property to change the background color of button. Use `text-color` property to change the text color of button.

:::demo
```jsx
<p class="demo-desc">Customize Background Color</p>
<div class="row">
  <Radio.Group  
  value={this.state.groupVal3} 
  onRadioGroupChange={(label)=>{this.setState({
    groupVal3:label
  })}} 
  fill="#FF6464">
    <Radio.Button label="Beijing">Beijing</Radio.Button>
    <Radio.Button label="ShangHai" disabled>ShangHai</Radio.Button>
    <Radio.Button label="Shenzhen">Shenzhen</Radio.Button>
    <Radio.Button label="O2Team">O2Team</Radio.Button>
  </Radio.Group>
</div>
<p class="demo-desc">Customize Text Color</p>
<div class="row">
  <Radio.Group  
  value={this.state.groupVal4} 
  onRadioGroupChange={(label)=>{this.setState({
    groupVal4:label
  })}} 
  textColor="#4C5D73">
   <Radio.Button label="Beijing">Beijing</Radio.Button>
    <Radio.Button label="Shanghai" disabled>Shanghai</Radio.Button>
    <Radio.Button label="Shenzhen">Shenzhen</Radio.Button>
    <Radio.Button label="O2Team">O2Team</Radio.Button>
  </Radio.Group>
</div>
```
:::

## Size

There are three sizes of a radio grouop: `large`，`normal`，`small`.

:::demo
```jsx
<div class="row">
  <Radio.Group 
  value={this.state.groupVal5} 
  onRadioGroupChange={(label)=>{this.setState({
    groupVal5:label
  })}}  
  size="large">
    <Radio.Button label="Beijing">Beijing</Radio.Button>
    <Radio.Button label="Shanghai" disabled>Shanghai</Radio.Button>
    <Radio.Button label="Shenzhen">Shenzhen</Radio.Button>
    <Radio.Button label="O2Team">O2Team</Radio.Button>
  </Radio.Group>
</div>
<div class="row">
  <Radio.Group
  value={this.state.groupVal6} 
  onRadioGroupChange={(label)=>{this.setState({
    groupVal6:label
  })}} 
   size="normal">
    <Radio.Button label="Beijing">Beijing</Radio.Button>
    <Radio.Button label="Shanghai" disabled>Shanghai</Radio.Button>
    <Radio.Button label="Shenzhen">Shenzhen</Radio.Button>
    <Radio.Button label="O2Team">O2Team</Radio.Button>
  </Radio.Group>
</div>
<div class="row">
  <Radio.Group 
  value={this.state.groupVal7} 
  onRadioGroupChange={(label)=>{this.setState({
    groupVal7:label
  })}}  size="small">
    <Radio.Button label="Beijing">Beijing</Radio.Button>
    <Radio.Button label="Shanghai" disabled>Shanghai</Radio.Button>
    <Radio.Button label="Shenzhen">Shenzhen</Radio.Button>
    <Radio.Button label="O2Team">O2Team</Radio.Button>
  </Radio.Group>
</div>
```
:::

## Radio Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
| :---------- | :-------------- | :---------- | :-----------------------------  | :-------- |
| label | value of Radio | String / Number | - | - |
| value | compare with label to determine whether it is selected (only valid when use alone) | String / Number | - | - |
| disabled | whether Radio is disabled |Boolean | - | false |

## Radio Button Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
| :---------- | :-------------- | :---------- | :-----------------------------  | :-------- |
| label | value of Radio Button | String / Number | - | - |
| disabled | whether Radio Button is disabled | Boolean | - | false |

## Radio Group Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | size of Radio Group | String | `small`, `normal`, `large` | normal |
| value | value of Radio Button, binding with `v-model` | String / Number | - | - |
| fill | background color of selected button | String (Hex) | - | - |
| textColor | text color of selected button | String (Hex) | - | - |

## Radio Group Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| radioGroupChange | Emitted when the value of Radio is changed | the value of radio |
