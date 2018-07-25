---
imports:
  import {Progress,Button} from '@src'

---
# Progress 进度条

----

用于展示事件的进度和状态

## 基本进度条

标准的进度条，当进度达到 `100%` 的时候，会自动将状态设置为 `success`

:::demo
```html
<Progress percent="0"></Progress>
<Progress percent="60"></Progress>
<Progress percent="100"></Progress>
<Progress percent="50" status="error"></Progress>
```
:::

## 小型进度条

在一些狭小的区域，需要使用小型进度条。通过参数 `strokeWidth` 可配置进度条的线宽

:::demo
```html
<div class="row no-gutter">
  <div class="col-sm-24 col-md-12">
    <Progress percent="0" strokeWidth="4"></Progress>
    <Progress percent="60" strokeWidth="4"></Progress>
    <Progress percent="100" strokeWidth="4"></Progress>
    <Progress percent="50" status="error" strokeWidth="4"></Progress>
  </div>
</div>
```
:::

## 动态展示

点击操作按钮，查看进度条的状态变化

:::demo
```html
<Progress percent={this.state.percent}></Progress>
<Button.Group size="small">
  <Button onClick={()=>{
    let percent = this.state.percent || 0
    percent = percent -10 < 0 ? 0: percent-10
    this.setState({
      percent
    })
    }}><i class="icon icon-minus"></i></Button>
  <Button onClick={()=>{
    let percent = this.state.percent || 0
    percent = percent +10 > 100 ? 100: percent+10
    this.setState({
      percent
    })
    }}><i class="icon icon-plus"></i></Button>
</Button.Group>

```
:::

## Progress 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| percent | 百分比 | Number | - | 0 |
| status | 进度条状态 | String | `success`, `error` | - |
| strokeWidth | 进度条的线宽 | Number | - | 8 |

## Progress 事件

| 事件名称      | 说明          | 返回值  |
|------------- |-------------- |---------- |
| onStatusSuccess | 进度到 `100%` 时触发 | 触发时 `percent` 的值 |

```
```