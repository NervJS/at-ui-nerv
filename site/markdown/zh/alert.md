---
imports:
    import {Alert} from '@src';
---
# Alert 警告提示

----

警告提示用于展示页面中需要提示用户关注的信息，跟 `AtMessage` 组件不同，警告提示采用非浮层的方式呈现，会始终显示在页面中，不会自动消失


## 基本用法

仅用来做信息的展示，默认不带关闭按钮，警告提示一直展示。通过属性 `type` 设置提示类型，默认提供四种类型：`success`，`error`，`warning`，`info`。警告提示的内容通过参数 `message` 传递

:::demo
```jsx
<Alert message="这里是提示的文案~这里是提示的文案~这里是提示的文案~" type="success"></Alert>
<Alert message="这里是提示的文案~" type="error"></Alert>
<Alert message="这里是提示的文案~" type="warning"></Alert>
<Alert message="这里是提示的文案~" type="info"></Alert>
```
:::


## 不可关闭的警告提示

添加属性 `closable` 展示关闭按钮，点击可隐藏提示

:::demo
```jsx
<Alert message="这里是不可关闭的警告提示" closable></Alert>
```
:::


## 自定义关闭按钮

设置属性 `closeText`，可自定义关闭按钮为文字或者其他字符，自定义的文字会替换原先的关闭 `Icon`

:::demo
```jsx
<Alert message="这里是自定义关闭按钮的警告提示" closeText="关闭"></Alert>
```
:::


## 显示警告类别的 Icon

设置属性 `showIcon`，可在警告提示前添加图标标识，以提高信息的可读性

:::demo
```jsx
<Alert message="显示 ICON 的警告提示" showIcon></Alert>
```
:::


## 显示辅助内容

警告提示可包含标题和内容，分别通过属性 `message` 和 `description` 配置

:::demo
```jsx
<Alert message="成功提示的标题" description="成功提示的详细说明成功提示的详细说明成功提示的详细说明" type="success" closable></Alert>
<Alert message="错误提示的标题" description="错误提示的详细说明错误提示的详细说明错误提示的详细说明" type="error" closable></Alert>
<Alert message="警告提示的标题" description="警告提示的详细说明警告提示的详细说明警告提示的详细说明" type="warning" closable></Alert>
<Alert message="信息提示的标题" description="信息提示的详细说明信息提示的详细说明信息提示的详细说明" type="info" closable></Alert>
```
:::


## 显示类别 ICON 和辅助内容

多种属性组合使用

:::demo
```jsx
<Alert message="成功提示的标题" description="成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明" type="success" showIcon closable></Alert>
<Alert message="错误提示的标题" description="错误提示的详细说明错误提示的详细说明错误提示的详细说明" type="error" showIcon closable></Alert>
<Alert message="警告提示的标题" description="警告提示的详细说明警告提示的详细说明警告提示的详细说明" type="warning" showIcon closable></Alert>
<Alert message="信息提示的标题" description="信息提示的详细说明信息提示的详细说明信息提示的详细说明" type="info" showIcon closable></Alert>
```
:::


## Alert 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 警告提示的类别 | String | `success`, `error`, `warning`, `info` | `info` |
| message | 必填，警告的主要内容，也可作为标题 | String | - | - |
| description | 警告的辅助内容 | String | - | - |
| closable | 是否显示关闭按钮 | Boolean | - | false |
| showIcon | 是否显示警告类别的 ICON | Boolean | - | false |
| closeText | 自定义关闭样式 | String | - | - |
| icon | 自定义类别 ICON | String | - | `info` |


## Alert 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| onClose | 点击关闭按钮时触发 | - |


