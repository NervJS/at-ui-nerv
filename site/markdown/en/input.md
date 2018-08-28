---
imports:
    import {Input} from '@src';
---
# Input

----

## Basic

Basic Input Box, default width is `100%`.

:::demo
```html
<Input onInput={(n)=>{console.log(n)}} placeholder="Please input"></Input>
<Input onInput={()=>{}} placeholder="Disabled" disabled></Input>
<Input onInput={()=>{}} type="password" placeholder="Password"></Input>
```
:::

## With Status

Add the property `status`, which represents the input box with different meanings. It does not affect the button logic. Provide four status by default: `success`，`error`，`warning`，`info`

:::demo
```html
<Input onInput={()=>{}} placeholder="success" status="success" icon="check-circle"></Input>
<Input onInput={()=>{}} placeholder="error" status="error" icon="x-circle"></Input>
<Input onInput={()=>{}} placeholder="warning" status="warning" icon="alert-circle"></Input>
<Input onInput={()=>{}} placeholder="info" status="info" icon="info"></Input>
```
:::

## Wich Icon

To display the tooltip icon after the input box, add `icon` property to Input. Its value is the class name of Icon. Please refer to the section of `Brand/Icon` for details.

:::demo
```html
<Input onInput={()=>{}} placeholder="Please input url" icon="link"></Input>
```
:::

## Pre / Post Label

Set `slot="prepend"` or `slot="append"` to customize the input box.

:::demo
```html
<Input onInput={()=>{}} placeholder="please input" prepend={<span>Https://</span>}>
</Input>
<Input onInput={()=>{}} placeholder="please input" size="small" append={<span>@aotu.io</span>}>
</Input>
<Input onInput={()=>{}} placeholder="please input"  prepend={<i className='icon icon-search'/>}>
</Input>
<Input onInput={()=>{}} placeholder="please input" prependButton prepend={<span>search</span>}>
</Input>
<Input onInput={()=>{}} placeholder="please input" appendButton append={<span>search</span>}>
</Input>
<Input onInput={()=>{}} placeholder="please input" prependButton prepend={<i className='icon icon-search'/>}>
</Input>
<Input onInput={()=>{}} placeholder="please input" appendButton append={<i className='icon icon-search'/>}>
</Input>
```
:::

## Size

There are three sizes of an Input box: `large`，`normal`，`small`.

:::demo
```html
<Input onInput={()=>{}} size="large" placeholder="Large Size"></Input>
<Input onInput={()=>{}} placeholder="Normal Size"></Input>
<Input onInput={()=>{}} size="small" placeholder="Small Size"></Input>
```
:::

## Input Props

| Property      | Description          | Type      | Accepted values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | input type | String | `text`, `passowrd`, `textarea` | - |
| name | same as `name` in native input | String | - | - |
| value | binding value | String / Number | - | - |
| placeholder | placeholder of input | String | - | - |
| disabled | whether input is disabled | Boolean | - | false |
| readonly | same as native input | Boolean | - | false |
| maxlength | maximum input text length | Number | - | - |
| minlength | minimum input text length | Number | - | - |
| max | same as native input | Number | - | - |
| min | same as native input | Number | - | - |
| autofocus | same as native input | Boolean | - | false |
| size | size of input, works when type is not 'textarea' | String | `small`, `normal`, `large` | normal |
| status | status of input | String | `success`, `error`, `warning`, `info` | - |
| prependButton | whether has prepend button or not | Boolean | - | false |
| appendButton | whether has append button or not | Boolean | - | false |

## Input Events

| Event Name | Description          | Return Value  |
|---------- |-------------- |---------- |
| onFocus  | Emitted when focus | event |
| onBlur | Emitted when blur | event |
| onInput | Emitted when input | value,event  |

