---
imports:
    import {Alert} from '@src';
---
# Alert

----

Alert component used to display information that needs to be noticed in the page. Unlike `AtMessage` component, alert component is presented in a non floating layer that will always display on the page and not disappear automatically.


## Basic

Only used for display information, without close button by default.<br>
There are four `type` of Alert: `success`，`error`，`warning`，`info`<br>
The contents of Alert are passed through `message` property.

:::demo
```html
<Alert message="Here is the information~Here is the information~Here is the information~" type="success"></Alert>
<Alert message="Here is the information~" type="error"></Alert>
<Alert message="Here is the information~" type="warning"></Alert>
<Alert message="Here is the information~" type="info"></Alert>
```
:::


## Closable

To make a alert component closable, add `closable` property to the Alert.

:::demo
```html
<Alert message="Here is the alert that can be closed." closable></Alert>
```
:::


## Customize Close Text

Customize the text or icon of close button by `close-text` property.

:::demo
```html
<Alert message="Here is the information~" closeText="Close"></Alert>
```
:::


## With Icon

Append Icon before text by `showIcon` property, that can improve readability.

:::demo
```html
<Alert message="Here is the information with ICON" showIcon></Alert>
```
:::


## Auxiliary Content

The text of alert component can contain title and content, which are configured by `message` and `description` properties.

:::demo
```jsx
<Alert message="Title of Success" description="Here is the information" type="success" closable></Alert>
<Alert message="Title of Error" description="Here is the information" type="error" closable></Alert>
<Alert message="Title of Warning" description="Here is the information" type="warning" closable></Alert>
<Alert message="Title of Info" description="Here is the information" type="info" closable></Alert>
```
:::


## With Icon and Auxiliary Content

Multiple properties are used in combination.

:::demo
```jsx
<Alert message="Title of Success" description="Here is the information~Here is the information~Here is the information~Here is the information~Here is the information~Here is the information~Here is the information~" type="success" showIcon closable></Alert>
<Alert message="Title of Error" description="Here is the information" type="error" showIcon closable></Alert>
<Alert message="Title of Warning" description="Here is the information" type="warning" showIcon closable></Alert>
<Alert message="Title of Info" description="Here is the information" type="info" showIcon closable></Alert>
```
:::


## Alert Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | the type of Alert | String | `success`, `error`, `warning`, `info` | `info` |
| message | required, main content of Alert | String | - | - |
| description | auxiliary content of Alert | String | - | - |
| closable | whether display the close button | Boolean | - | false |
| showIcon | whether display the type of icon | Boolean | - | false |
| closeText | customize close text | String | - | - |
| icon | customize the icon of alert | String | - | `info` |


## Alert Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| onClose | Emitted when close button clicked | - |


