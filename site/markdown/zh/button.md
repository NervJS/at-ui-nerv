---
imports:
    import {Button} from '@src';
---

# Button 按钮

---

按钮用于传递用户触摸时会触发的操作

## 基础按钮

基础按钮分三种：`主按钮（实心）` 、 `次按钮（空心）` 、 `文字按钮`

:::demo

```jsx
<Button type="primary">主要按钮</Button>
<Button>次要按钮</Button>
<Button type="text">文字按钮</Button>
```


:::

## 不可用状态按钮

添加属性 `disabled` 禁用按钮

:::demo

```jsx
<Button type="primary" disabled>主要按钮</Button>
<Button hollow disabled>次要按钮</Button>
<Button type="text" disabled>文字按钮</Button>
```

:::

## 带颜色倾向的按钮

带有色彩倾向的按钮能给用户带来操作提示

:::demo

```jsx
<div className="row">
  <Button hollow>默认按钮</Button>
  <Button type="primary" hollow>主要按钮</Button>
  <Button type="success" hollow>成功按钮</Button>
  <Button type="error" hollow>危险按钮</Button>
  <Button type="warning" hollow>警告按钮</Button>
  <Button type="info" hollow>信息按钮</Button>
</div>
<div className="row">
  <Button>默认按钮</Button>
  <Button type="primary">主要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="error">危险按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="info">信息按钮</Button>
</div>
```

:::

## 图标文字按钮

如需要在在按钮中添加图标，可设置 `icon` 属性，或者自行在 `Button` 中内联 `icon`。通过 `icon` 属性设置的图标，位置固定在文本的前面。

:::demo

```jsx
<div className="row">
  <Button icon="icon-download">下载资源</Button>
  <Button icon="icon-user-plus">添加用户</Button>
  <Button icon="icon-edit"></Button>
  <Button type="primary" icon="icon-search"></Button>
</div>
<div className="row">
  <Button icon="icon-edit" circle></Button>
  <Button type="primary" icon="icon-search" circle></Button>
</div>
```

:::

## 加载中按钮

可通过添加 `loading` 属性，使按钮处于加载中状态

:::demo

```jsx
<Button loading>加载中</Button>
<Button loading></Button>
<Button loading circle></Button>
```

:::

## 组合按钮

可以将多个按钮放进 `AtButtonGroup` 中形成一个组合按钮

:::demo

```jsx
<Button.Group>
  <Button>左</Button>
  <Button>中</Button>
  <Button>右</Button>
</Button.Group>
<br>
<Button.Group>
  <Button icon="icon-edit" title="编辑"></Button>
  <Button icon="icon-copy" title="复制"></Button>
  <Button icon="icon-download" title="下载"></Button>
</Button.Group>
<br>
<Button.Group>
  <Button><i className="icon icon-chevron-left"></i>后退</Button>
  <Button>往前<i className="icon icon-chevron-right"></i></Button>
</Button.Group>
```

:::

## 按钮尺寸

按钮提供四种尺寸：大、中、小、超小，可通过 `size` 属性配置；<br>
组合按钮提供三种尺寸：大、中、小<br>
若不设置 `size` 属性，则默认为中等大小

:::demo

```jsx
<div>
  <Button type="primary" size="large">变大按钮</Button>
  <Button type="primary">正常按钮</Button>
  <Button type="primary" size="small">变小按钮</Button>
  <Button type="primary" size="smaller">超小按钮</Button>
</div>
<div style="margin-top: 8px;">
  <Button type="primary" size="large" icon="icon-search" circle></Button>
  <Button type="primary" icon="icon-search" circle></Button>
  <Button type="primary" size="small" icon="icon-search" circle></Button>
  <Button type="primary" size="smaller" icon="icon-search" circle></Button>
</div>
<div style="margin-top: 8px;">
  <Button-group size="large">
    <Button>左</Button>
    <Button>中</Button>
    <Button>右</Button>
  </Button-group>
  <Button-group>
    <Button>左</Button>
    <Button>中</Button>
    <Button>右</Button>
  </Button-group>
  <Button-group size="small">
    <Button>左</Button>
    <Button>中</Button>
    <Button>右</Button>
  </Button-group>
</div>
```

:::

## Button 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| type       | 按钮的类型                             | String  | `default`, `primary`, `success`, `error`, `warning`, `info`, `text` | -        |
| nativeType | 原生按钮的类型                         | String  | -                                                                   | `button` |
| size       | 按钮的大小                             | String  | `large`, `small`, `smaller`                                         | -        |
| hollow     | 是否为空心按钮                         | Boolean | -                                                                   | false    |
| icon       | 按钮的图标类名，填入图标的 `className` | String  | 见文档 `Icon 图标`                                                  | -        |
| loading    | 设置按钮的载入状态                     | Boolean | -                                                                   | false    |
| circle     | 设置圆形图标按钮                       | Boolean | -                                                                   | false    |

## Button Group 参数

| 参数 | 说明       | 类型   | 可选值           | 默认值   |
| ---- | ---------- | ------ | ---------------- | -------- |
| size | 按钮的大小 | String | `large`, `small` | 正常大小 |
| gap  | 按钮间隔   | Number | -                | -1       |
