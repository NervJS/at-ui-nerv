---
imports:
    import {Tooltip,Button} from '@src';
---
# Tooltips 文字提示

----

文字提示框类似于 `HTML` 的 `title` 属性，当鼠标悬浮在元素上方时，会出现一个文字提示框

## 基本用法

鼠标悬停时，文字提示框默认显示在顶上的位置

:::demo
```jsx
<Tooltip placement="top" content="提示信息">
  <Button>按钮</Button>
</Tooltip>
<Tooltip content="提示信息"><span>一段文字</span></Tooltip>
```
:::

## 自定义文字提示的内容

可通过 `slot="content"` 的方式设置文字提示的内容

:::demo
```jsx
<Tooltip>
  <span>文字提示</span>
  <template slot="content">
    <p>文字1</p>
    <p>文字2</p>
  </template>
</Tooltip>
```
:::

## 不同的展示方向

`placement` 属性可设置文字提示框出现的位置，默认提供9种不同的方向

:::demo
```jsx
<div className="show-box">
  <div className="top row col-md-16 flex-center">
    <Tooltip className="item" content="Top Left 提示文字" placement="top-left"><Button>上左</Button></Tooltip>
    <Tooltip className="item" content="Top 提示文字" placement="top"><Button>上边</Button></Tooltip>
    <Tooltip className="item" content="Top Right 提示文字" placement="top-right"><Button>上右</Button></Tooltip>
  </div>
  <div className="center row col-md-16 flex-between">
    <div className="left col-md-4">
      <Tooltip className="item" content="Left Top 提示文字" placement="left-top"><Button>左上</Button></Tooltip>
      <Tooltip className="item" content="Left 提示文字" placement="left"><Button>左边</Button></Tooltip>
      <Tooltip className="item" content="Left Bottom 提示文字" placement="left-bottom"><Button>左下</Button></Tooltip>
    </div>
    <div className="right col-md-4">
      <Tooltip className="item" content="Right Top 提示文字" placement="right-top"><Button>右上</Button></Tooltip>
      <Tooltip className="item" content="Right 提示文字" placement="right"><Button>右边</Button></Tooltip>
      <Tooltip className="item" content="Right Bottom 提示文字" placement="right-bottom"><Button>右下</Button></Tooltip>
    </div>
  </div>
  <div className="bottom row col-md-16 flex-center">
    <Tooltip className="item" content="Bottom Left 提示文字" placement="bottom-left"><Button>下左</Button></Tooltip>
    <Tooltip className="item" content="Bottom 提示文字" placement="bottom"><Button>下边</Button></Tooltip>
    <Tooltip className="item" content="Bottom Right 提示文字" placement="bottom-right"><Button>下右</Button></Tooltip>
  </div>
</div>
```
:::

## Tooltip 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| content | 提示文字 | String | - | - |
| placement | 气泡框位置 | String | `top`, `top-left`, `top-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `bottom`, `bottom-left`, `bottom-right` | `top` |

