---
imports:
    import {Textarea} from '@src';
---
# Textarea

----

Textarea Input for multiline text, not for rich text entry.

## Basic

The textarea is fixed as two lines default, similear to the `AtInput` component.

:::demo
```html
<Textarea   placeholder="Please input..."></Textarea>
```
:::

## Disabled

To make textarea as disabled, add `disabled` property to the Textarea.

:::demo
```html
<Textarea   placeholder="Please input..." disabled></Textarea>
```
:::

## Adaptive Text Height (Limited)

Automatically adjusted the height of textarea according to the number of lines. The minimum and maximum number of rows can be set by `minRows` and `maxRows` properties.

:::demo
```html
<p class="demo-desc">minRows=2, maxRows=4</p>
<Textarea minRows="2" maxRows="4" placeholder="Please input multiline text..."></Textarea>

```
:::

## Adaptive Text Height (Without Limited)

Automatically adjusted the height of textarea according to the number of lines without limited. Use `autosize` property.

:::demo
```html
<Textarea autosize minRows="2" maxRows="4" placeholder="Please input multiline text..."></Textarea>
```
:::

## Textarea Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | same as native textarea | String | - | - |
| value | the value of textarea, use `v-model` to enable a two-way binding | String | - | - |
| autosize | adaptive text height | Boolean | - | false |
| placeholder | the text of placeholder | String | - | - |
| disabled | whether the textarea is disabled | Boolean | - | false |
| autofocus | same as native textarea | Boolean | - | false |
| resize | whether to be resize by the user | String | `none`, `both`, `horizontal`, `vertical`  | `vertical` |
