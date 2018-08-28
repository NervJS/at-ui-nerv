---
imports:
    import {Switch} from '@src';
---
# Switch

----

Switch is used for switching between two states, it's similar with the singleton `Checkbox`. But the `Switch` button is triggered to change state, while `Checkbox` is used more in form.

## Basic

Basic usage, trigger events when status changed.

:::demo
```jsx
<Switch    onChange={(val)=>{this.setState({
  check: val
})}}></Switch>
<span>{this.state.check}</span>
```
:::

## Inline Text or Icon

The contents of switch button can be customized, such as inserting text or icons to enhance visual effects. Complete by `slot="checkedText"` and `slot="unCheckedText"`

:::demo
```jsx
<Switch>
  <span slot="checkedText">开</span>
  <span slot="unCheckedText">关</span>
</Switch>
<Switch>
  <span slot="checkedText"><i class="icon icon-left-arrow"></i></span>
  <span slot="unCheckedText"><i class="icon icon-right-arrow"></i></span>
</Switch>
```
:::

## Disabled

To make a switch button as disabled, add `disabled` property to the Switch Button.

:::demo
```jsx
<Switch disabled value="true">
  <span slot="checkedText">开</span>
  <span slot="unCheckedText">关</span>
</Switch>
<Switch disabled>
  <span slot="checkedText">开</span>
  <span slot="unCheckedText">关</span>
</Switch>
<Switch disabled></Switch>
```
:::

## Size

There are three sizes of a Switch Button: `large`，`normal`，`small`.

:::demo
```jsx
<div>
  <Switch size="small"></Switch>
  <Switch size="small">
    <span slot="checkedText">开</span>
    <span slot="unCheckedText">关</span>
  </Switch>
  <Switch size="small" disabled></Switch>
</div>
<div style="margin-top: 8px;">
  <Switch></Switch>
  <Switch>
    <span slot="checkedText">开</span>
    <span slot="unCheckedText">关</span>
  </Switch>
  <Switch disabled></Switch>
</div>
<div style="margin-top: 8px;">
  <Switch size="large"></Switch>
  <Switch size="large">
    <span slot="checkedText">开</span>
    <span slot="unCheckedText">关</span>
  </Switch >
  <Switch size="large" disabled></Switch>
</div>
```
:::

## Switch Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | whether the Switch is checked | Boolean | - | false |
| size | size of Switch | String | `small`, `normal`, `large` | normal |
| disabled | whether the Switch is disabled | Boolean | — | false |

## Switch Slots

| Name      | Description          |
|---------- |-------------- |
| checkedText | customize content when state is opening |
| unCheckedText | customize content when state is closed |

## Switch Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| onChange | Emitted when the state of the switch changed | true or false |

